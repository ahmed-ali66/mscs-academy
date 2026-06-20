/**
 * POST /api/teacher/live-classes
 * Create a new live class (distance, in-class, or hybrid)
 *
 * GET  /api/teacher/live-classes
 * List live classes for the authenticated teacher
 *
 * Implements: distance + in-class learning infrastructure.
 * Per ADEK Irtiq'aa innovation domain: "Distance + in-class learning is integrated seamlessly".
 */
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";
import { randomBytes } from "crypto";

// Generate a short, human-readable room code: MSCS-LC-XXXX
function generateRoomCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no I,O,0,1 (confusable)
  const code = Array.from(randomBytes(4))
    .map((b) => chars[b % chars.length])
    .join("");
  return `MSCS-LC-${code}`;
}

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

// ─── POST: Create live class ──────────────────────────────────────
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
        { success: false, error: "Subscription expired. Please renew to create live classes." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      studentGroupId,
      grade,
      term,
      unit,
      lessonId,
      scheduledStart,
      scheduledEnd,
      deliveryMode = "distance",
      chatEnabled = true,
      handRaiseEnabled = true,
      pollsEnabled = true,
      whiteboardEnabled = true,
      recordingEnabled = false,
      skillTags,
    } = body as {
      title?: string;
      description?: string;
      studentGroupId?: string;
      grade?: number;
      term?: number;
      unit?: string;
      lessonId?: string;
      scheduledStart?: string;
      scheduledEnd?: string;
      deliveryMode?: string;
      chatEnabled?: boolean;
      handRaiseEnabled?: boolean;
      pollsEnabled?: boolean;
      whiteboardEnabled?: boolean;
      recordingEnabled?: boolean;
      skillTags?: string[];
    };

    // ─── Validation ──────────────────────────────────────────────
    if (!title || title.length < 3) {
      return NextResponse.json(
        { success: false, error: "title is required (min 3 chars)" },
        { status: 400 }
      );
    }
    if (!scheduledStart || !scheduledEnd) {
      return NextResponse.json(
        { success: false, error: "scheduledStart and scheduledEnd are required" },
        { status: 400 }
      );
    }
    const start = new Date(scheduledStart);
    const end = new Date(scheduledEnd);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json(
        { success: false, error: "Invalid date format for scheduledStart/scheduledEnd" },
        { status: 400 }
      );
    }
    if (end <= start) {
      return NextResponse.json(
        { success: false, error: "scheduledEnd must be after scheduledStart" },
        { status: 400 }
      );
    }
    if (grade && ![6, 7, 8, 9].includes(grade)) {
      return NextResponse.json(
        { success: false, error: "grade must be 6, 7, 8, or 9" },
        { status: 400 }
      );
    }
    if (term && ![1, 2, 3].includes(term)) {
      return NextResponse.json(
        { success: false, error: "term must be 1, 2, or 3" },
        { status: 400 }
      );
    }
    if (!["in_class", "distance", "hybrid"].includes(deliveryMode)) {
      return NextResponse.json(
        { success: false, error: "deliveryMode must be 'in_class', 'distance', or 'hybrid'" },
        { status: 400 }
      );
    }

    // PDPL: recording requires explicit parental consent
    // (Implementation: front-end must verify all student participants have
    //  media consent before enabling recording; backend just records the flag.)
    if (recordingEnabled) {
      // TODO: verify all students in studentGroup have media consent
      // For now, log a warning
      console.warn(
        `[LiveClass] Recording enabled by teacher ${teacher.id} — must verify media consent for all participants`
      );
    }

    // ─── Create the live class ──────────────────────────────────
    const liveClass = await db.liveClass.create({
      data: {
        teacherId: teacher.id,
        studentGroupId: studentGroupId || null,
        grade: grade || 0,
        term: term || 0,
        unit: unit || null,
        lessonId: lessonId || null,
        title,
        description: description || null,
        scheduledStart: start,
        scheduledEnd: end,
        deliveryMode,
        roomCode: generateRoomCode(),
        chatEnabled,
        handRaiseEnabled,
        pollsEnabled,
        whiteboardEnabled,
        recordingEnabled,
        skillTags: skillTags ? JSON.stringify(skillTags) : null,
        status: "scheduled",
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        id: liveClass.id,
        title: liveClass.title,
        roomCode: liveClass.roomCode,
        scheduledStart: liveClass.scheduledStart,
        scheduledEnd: liveClass.scheduledEnd,
        deliveryMode: liveClass.deliveryMode,
        status: liveClass.status,
        joinUrl: `/?live=${liveClass.roomCode}`,
      },
    });
  } catch (error) {
    console.error("[LiveClass POST] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create live class" },
      { status: 500 }
    );
  }
}

// ─── GET: List teacher's live classes ─────────────────────────────
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
    const statusFilter = searchParams.get("status"); // "scheduled" | "live" | "ended" | "cancelled"
    const gradeFilter = searchParams.get("grade");

    const whereClause: Record<string, unknown> = { teacherId: teacher.id };
    if (statusFilter) whereClause.status = statusFilter;
    if (gradeFilter) whereClause.grade = parseInt(gradeFilter, 10);

    const liveClasses = await db.liveClass.findMany({
      where: whereClause,
      orderBy: { scheduledStart: "desc" },
      take: 100,
      include: {
        studentGroup: { select: { name: true, grade: true, section: true } },
        _count: {
          select: { attendance: true, messages: true },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: liveClasses.map((lc) => ({
        id: lc.id,
        title: lc.title,
        description: lc.description,
        roomCode: lc.roomCode,
        scheduledStart: lc.scheduledStart,
        scheduledEnd: lc.scheduledEnd,
        actualStart: lc.actualStart,
        actualEnd: lc.actualEnd,
        status: lc.status,
        deliveryMode: lc.deliveryMode,
        grade: lc.grade,
        term: lc.term,
        unit: lc.unit,
        studentGroup: lc.studentGroup,
        attendanceCount: lc._count.attendance,
        messageCount: lc._count.messages,
      })),
    });
  } catch (error) {
    console.error("[LiveClass GET] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch live classes" },
      { status: 500 }
    );
  }
}
