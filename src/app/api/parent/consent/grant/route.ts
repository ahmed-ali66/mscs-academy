/**
 * POST /api/parent/consent/grant
 *
 * Records explicit parental consent for a student.
 * Implements:
 *   - PDPL Article 7 (consent must be freely given, specific, informed, demonstrable)
 *   - Child Digital Safety Law 26/2025 (parental consent for under-13)
 *
 * Required payload:
 *   - parentId (verified parent ID from JWT)
 *   - studentId
 *   - consentType: "platform_use" | "data_processing" | "assessment" | "media" | "research"
 *   - termsTextSnapshot: the actual terms text shown to the parent
 *   - verificationMethod: "email_otp" | "phone_otp" | "digital_signature"
 *   - verificationRef: ID of the OTP/signature verification record
 *
 * Returns the created ConsentRecord.
 */
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  CONSENT_VERSIONS,
  hashTermsText,
  type ConsentType,
} from "@/lib/compliance/pdpl";

const VALID_CONSENT_TYPES = Object.keys(CONSENT_VERSIONS) as ConsentType[];

export async function POST(request: NextRequest) {
  try {
    // Auth — must be a verified parent
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }
    const payload = verifyToken(authHeader.slice(7));
    if (!payload || payload.userType !== "parent") {
      return NextResponse.json(
        { success: false, error: "Parent access required" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      studentId,
      consentType,
      termsTextSnapshot,
      verificationMethod,
      verificationRef,
    } = body as {
      studentId?: string;
      consentType?: string;
      termsTextSnapshot?: string;
      verificationMethod?: string;
      verificationRef?: string;
    };

    // ─── Validation ──────────────────────────────────────────────
    if (!studentId || typeof studentId !== "string") {
      return NextResponse.json(
        { success: false, error: "studentId is required" },
        { status: 400 }
      );
    }
    if (!consentType || !VALID_CONSENT_TYPES.includes(consentType as ConsentType)) {
      return NextResponse.json(
        {
          success: false,
          error: `consentType must be one of: ${VALID_CONSENT_TYPES.join(", ")}`,
        },
        { status: 400 }
      );
    }
    if (!termsTextSnapshot || termsTextSnapshot.length < 50) {
      return NextResponse.json(
        {
          success: false,
          error:
            "termsTextSnapshot is required and must be at least 50 characters (the actual terms shown to the parent)",
        },
        { status: 400 }
      );
    }
    if (!verificationMethod || !["email_otp", "phone_otp", "digital_signature"].includes(verificationMethod)) {
      return NextResponse.json(
        { success: false, error: "verificationMethod must be one of: email_otp, phone_otp, digital_signature" },
        { status: 400 }
      );
    }
    if (!verificationRef) {
      return NextResponse.json(
        { success: false, error: "verificationRef is required (ID of the OTP/signature record)" },
        { status: 400 }
      );
    }

    // ─── Verify parent is linked to this student ─────────────────
    const link = await db.studentParentLink.findUnique({
      where: {
        studentId_parentId: {
          studentId,
          parentId: payload.id,
        },
      },
    });
    if (!link) {
      return NextResponse.json(
        { success: false, error: "Parent is not linked to this student" },
        { status: 403 }
      );
    }

    // ─── Verify parent's age verification (must be 18+) ──────────
    const parent = await db.parent.findUnique({ where: { id: payload.id } });
    if (!parent || !parent.ageVerifiedAt) {
      return NextResponse.json(
        { success: false, error: "Parent's 18+ age verification must be completed before granting consent" },
        { status: 403 }
      );
    }

    // ─── Check for existing consent (revoke old, grant new) ──────
    const existing = await db.consentRecord.findFirst({
      where: {
        parentId: payload.id,
        studentId,
        consentType,
        granted: true,
        revokedAt: null,
      },
    });
    if (existing) {
      await db.consentRecord.update({
        where: { id: existing.id },
        data: {
          granted: false,
          revokedAt: new Date(),
        },
      });
    }

    // ─── Create the consent record ───────────────────────────────
    const consent = await db.consentRecord.create({
      data: {
        parentId: payload.id,
        studentId,
        consentType,
        consentVersion: CONSENT_VERSIONS[consentType as ConsentType],
        termsHash: hashTermsText(termsTextSnapshot),
        termsTextSnapshot,
        granted: true,
        grantedAt: new Date(),
        verificationMethod,
        verificationRef,
        ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
        userAgent: request.headers.get("user-agent") || null,
      },
    });

    // ─── Audit trail ─────────────────────────────────────────────
    await db.consentAudit.create({
      data: {
        parentId: payload.id,
        studentId,
        action: "consent_granted",
        details: {
          consentType,
          consentVersion: CONSENT_VERSIONS[consentType as ConsentType],
          verificationMethod,
          verificationRef,
        },
        ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
        userAgent: request.headers.get("user-agent") || null,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        id: consent.id,
        consentType: consent.consentType,
        consentVersion: consent.consentVersion,
        granted: consent.granted,
        grantedAt: consent.grantedAt,
        termsHash: consent.termsHash,
      },
    });
  } catch (error) {
    console.error("[Consent Grant] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to record consent" },
      { status: 500 }
    );
  }
}
