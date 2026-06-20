/**
 * GET /api/parent/data-access?studentId=...
 *
 * PDPL Article 14(1) — Right of access.
 * Returns the complete data export for the parent's child.
 *
 * The parent must be linked to the student via StudentParentLink.
 */
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { generateStudentDataReport } from "@/lib/compliance/pdpl";

export async function GET(request: NextRequest) {
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

    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get("studentId");
    if (!studentId) {
      return NextResponse.json(
        { success: false, error: "studentId query parameter is required" },
        { status: 400 }
      );
    }

    // The generateStudentDataReport function verifies the parent link internally
    // via the student.parentLinks relation. But we add an explicit check here
    // for defense-in-depth.
    const { db } = await import("@/lib/db");
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

    const report = await generateStudentDataReport(studentId);

    return NextResponse.json({
      success: true,
      data: report,
      // PDPL: inform data subject of their rights
      rights: {
        access: "PDPL Article 14(1) — Right of access (exercised now)",
        correction: "PDPL Article 14(2) — Right to correct inaccurate data",
        deletion: "PDPL Article 14(2) — Right to erasure (POST /api/parent/data-delete)",
        portability: "PDPL Article 14(3) — Right to data portability (this JSON export)",
        objection: "PDPL Article 14(4) — Right to object to processing",
      },
    });
  } catch (error) {
    console.error("[Data Access] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate data access report" },
      { status: 500 }
    );
  }
}
