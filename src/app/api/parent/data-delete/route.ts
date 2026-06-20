/**
 * POST /api/parent/data-delete
 *
 * PDPL Article 14(2) — Right to erasure.
 *
 * Anonymizes all PII tied to the student immediately, and schedules
 * hard-deletion of remaining anonymized records after the retention period.
 *
 * Required payload:
 *   - studentId
 *   - reason (free text — must be at least 10 chars to be meaningful)
 *   - confirmation: "DELETE" (typed by user to confirm)
 */
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";
import { deleteStudentData } from "@/lib/compliance/pdpl";

export async function POST(request: NextRequest) {
  try {
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
    const { studentId, reason, confirmation } = body as {
      studentId?: string;
      reason?: string;
      confirmation?: string;
    };

    if (!studentId) {
      return NextResponse.json(
        { success: false, error: "studentId is required" },
        { status: 400 }
      );
    }
    if (!reason || reason.length < 10) {
      return NextResponse.json(
        { success: false, error: "reason is required (minimum 10 characters)" },
        { status: 400 }
      );
    }
    if (confirmation !== "DELETE") {
      return NextResponse.json(
        { success: false, error: "confirmation must be the string 'DELETE' (case-sensitive)" },
        { status: 400 }
      );
    }

    // Verify parent is linked to this student
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
        { success: false, error: "You are not linked to this student" },
        { status: 403 }
      );
    }

    const result = await deleteStudentData(studentId, reason);

    return NextResponse.json({
      success: true,
      message:
        "Student data deletion initiated. PII has been removed immediately. " +
        "Anonymized aggregate records will be hard-deleted after the retention period.",
      data: result,
      // Inform data subject of post-deletion rights
      followUp:
        "You will receive a confirmation email within 30 days. " +
        "If you wish to revoke this deletion request, contact the DPO at " +
        (process.env.DPO_EMAIL || "dpo@yourdomain.com") + " within 7 days.",
    });
  } catch (error) {
    console.error("[Data Delete] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to initiate data deletion" },
      { status: 500 }
    );
  }
}
