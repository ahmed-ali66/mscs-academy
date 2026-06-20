/**
 * POST /api/teacher/assignments
 * Create a new assignment with rubric linkage + 21st-century skill tags
 *
 * GET  /api/teacher/assignments
 * List assignments for the authenticated teacher
 *
 * Implements: authentic assessment (Irtiq'aa assessment domain),
 * 21st-century skill tagging, distance + in-class delivery.
 */
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";
import { SKILLS } from "@/lib/pedagogy/skills";

const VALID_SKILL_CODES = new Set(SKILLS.map((s) => s.code));
const VALID_BLOOMS = new Set(["remember", "understand", "apply", "analyze", "evaluate", "create"]);
const VALID_ASSIGNMENT_TYPES = new Set(["essay", "presentation", "project", "quiz_ext", "portfolio", "debate", "research"]);
const VALID_SUBMISSION_FORMATS = new Set(["text", "file", "url", "audio", "video", "multimedia"]);
const VALID_DELIVERY_MODES = new Set(["in_class", "distance", "either"]);

async function verifyTeacher(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;
  const payload = verifyToken(authHeader.slice(7));
  if (!payload || payload.userType !== "teacher") return null;
  const teacher = await db.teacher.findUnique({
    where: { id: payload.id },
    include: { subscription: true },
  });
  if (!teacher || !teacher.isActive) return null;
  if (!teacher.subscription || teacher.subscription.status !== "active") {
    return { teacher, subscriptionExpired: true };
  }
  return { teacher, subscriptionExpired: false };
}

export async function POST(request: NextRequest) {
  try {
    const result = await verifyTeacher(request);
    if (!result) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Teacher access required." },
        { status: 401 }
      );
    }
    const { teacher, subscriptionExpired } = result;
    if (subscriptionExpired) {
      return NextResponse.json(
        { success: false, error: "Subscription expired." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      instructions,
      studentGroupId,
      grade,
      term,
      unit,
      lessonId,
      assignmentType,
      submissionFormat,
      skillTags = [],
      dokLevel,
      bloomsLevel,
      rubricId,
      dueAt,
      maxMarks = 100,
      allowLateSubmission = true,
      latePenaltyPercent = 0,
      allowResubmission = false,
      deliveryMode = "either",
    } = body as Record<string, unknown>;

    // ─── Validation ──────────────────────────────────────────────
    if (!title || typeof title !== "string" || title.length < 3) {
      return NextResponse.json({ success: false, error: "title is required (min 3 chars)" }, { status: 400 });
    }
    if (!description || typeof description !== "string") {
      return NextResponse.json({ success: false, error: "description is required" }, { status: 400 });
    }
    if (!instructions || typeof instructions !== "string") {
      return NextResponse.json({ success: false, error: "instructions is required" }, { status: 400 });
    }
    if (typeof grade !== "number" || ![6, 7, 8, 9].includes(grade)) {
      return NextResponse.json({ success: false, error: "grade must be 6, 7, 8, or 9" }, { status: 400 });
    }
    if (typeof term !== "number" || ![1, 2, 3].includes(term)) {
      return NextResponse.json({ success: false, error: "term must be 1, 2, or 3" }, { status: 400 });
    }
    if (typeof unit !== "string" || !unit) {
      return NextResponse.json({ success: false, error: "unit is required" }, { status: 400 });
    }
    if (typeof assignmentType !== "string" || !VALID_ASSIGNMENT_TYPES.has(assignmentType)) {
      return NextResponse.json({
        success: false,
        error: `assignmentType must be one of: ${Array.from(VALID_ASSIGNMENT_TYPES).join(", ")}`,
      }, { status: 400 });
    }
    if (typeof submissionFormat !== "string" || !VALID_SUBMISSION_FORMATS.has(submissionFormat)) {
      return NextResponse.json({
        success: false,
        error: `submissionFormat must be one of: ${Array.from(VALID_SUBMISSION_FORMATS).join(", ")}`,
      }, { status: 400 });
    }
    if (!Array.isArray(skillTags)) {
      return NextResponse.json({ success: false, error: "skillTags must be an array of skill codes" }, { status: 400 });
    }
    for (const code of skillTags) {
      if (typeof code !== "string" || !VALID_SKILL_CODES.has(code)) {
        return NextResponse.json({
          success: false,
          error: `Invalid skillTag code: ${code}. Valid codes: ${Array.from(VALID_SKILL_CODES).join(", ")}`,
        }, { status: 400 });
      }
    }
    if (typeof dokLevel !== "number" || ![1, 2, 3, 4].includes(dokLevel)) {
      return NextResponse.json({ success: false, error: "dokLevel must be 1, 2, 3, or 4" }, { status: 400 });
    }
    if (typeof bloomsLevel !== "string" || !VALID_BLOOMS.has(bloomsLevel)) {
      return NextResponse.json({
        success: false,
        error: `bloomsLevel must be one of: ${Array.from(VALID_BLOOMS).join(", ")}`,
      }, { status: 400 });
    }
    if (typeof deliveryMode !== "string" || !VALID_DELIVERY_MODES.has(deliveryMode)) {
      return NextResponse.json({
        success: false,
        error: `deliveryMode must be one of: ${Array.from(VALID_DELIVERY_MODES).join(", ")}`,
      }, { status: 400 });
    }
    if (dueAt) {
      const due = new Date(dueAt as string);
      if (isNaN(due.getTime())) {
        return NextResponse.json({ success: false, error: "dueAt must be a valid ISO date string" }, { status: 400 });
      }
    }

    // ─── Create assignment ──────────────────────────────────────
    const assignment = await db.assignment.create({
      data: {
        teacherId: teacher.id,
        studentGroupId: (studentGroupId as string) || null,
        grade,
        term,
        unit,
        lessonId: (lessonId as string) || null,
        title,
        description,
        instructions,
        assignmentType,
        submissionFormat,
        skillTags: JSON.stringify(skillTags),
        dokLevel,
        bloomsLevel,
        rubricId: (rubricId as string) || null,
        dueAt: dueAt ? new Date(dueAt as string) : null,
        maxMarks: maxMarks as number,
        allowLateSubmission: allowLateSubmission as boolean,
        latePenaltyPercent: latePenaltyPercent as number,
        allowResubmission: allowResubmission as boolean,
        deliveryMode,
        isPublished: false, // drafts by default
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        id: assignment.id,
        title: assignment.title,
        assignmentType: assignment.assignmentType,
        dokLevel: assignment.dokLevel,
        bloomsLevel: assignment.bloomsLevel,
        skillTags,
        isPublished: assignment.isPublished,
        createdAt: assignment.createdAt,
      },
    });
  } catch (error) {
    console.error("[Assignment POST] Error:", error);
    return NextResponse.json({ success: false, error: "Failed to create assignment" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const result = await verifyTeacher(request);
    if (!result) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Teacher access required." },
        { status: 401 }
      );
    }
    const { teacher, subscriptionExpired } = result;
    if (subscriptionExpired) {
      return NextResponse.json(
        { success: false, error: "Subscription expired." },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const grade = searchParams.get("grade");
    const term = searchParams.get("term");
    const isPublished = searchParams.get("published");

    const whereClause: Record<string, unknown> = { teacherId: teacher.id };
    if (grade) whereClause.grade = parseInt(grade, 10);
    if (term) whereClause.term = parseInt(term, 10);
    if (isPublished === "true") whereClause.isPublished = true;
    if (isPublished === "false") whereClause.isPublished = false;

    const assignments = await db.assignment.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      take: 100,
      include: {
        studentGroup: { select: { name: true, grade: true, section: true } },
        rubric: { select: { title: true, totalMarks: true } },
        _count: { select: { submissions: true } },
      },
    });

    return NextResponse.json({
      success: true,
      data: assignments.map((a) => ({
        id: a.id,
        title: a.title,
        description: a.description,
        assignmentType: a.assignmentType,
        submissionFormat: a.submissionFormat,
        skillTags: a.skillTags ? JSON.parse(a.skillTags) : [],
        dokLevel: a.dokLevel,
        bloomsLevel: a.bloomsLevel,
        grade: a.grade,
        term: a.term,
        unit: a.unit,
        deliveryMode: a.deliveryMode,
        dueAt: a.dueAt,
        maxMarks: a.maxMarks,
        isPublished: a.isPublished,
        createdAt: a.createdAt,
        studentGroup: a.studentGroup,
        rubric: a.rubric,
        submissionCount: a._count.submissions,
      })),
    });
  } catch (error) {
    console.error("[Assignment GET] Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch assignments" }, { status: 500 });
  }
}
