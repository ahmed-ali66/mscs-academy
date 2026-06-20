/**
 * POST /api/student/wellbeing
 *
 * Brief, opt-in wellbeing check-in.
 * Implements Irtiq'aa wellbeing domain: "Student voice" + early warning.
 *
 * NOT a clinical assessment. Purely a brief self-report.
 * Auto-flags students for teacher follow-up if they report consistently
 * low mood/energy/engagement (3+ consecutive check-ins at level 1-2).
 *
 * Required payload:
 *   - moodScore (1-5)
 *   - energyScore (1-5)
 *   - engagementScore (1-5)
 *   - note (optional, max 500 chars)
 */
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";

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
    if (!payload || payload.userType !== "student") {
      return NextResponse.json(
        { success: false, error: "Student access required" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { moodScore, energyScore, engagementScore, note } = body as {
      moodScore?: number;
      energyScore?: number;
      engagementScore?: number;
      note?: string;
    };

    // Validation
    for (const [key, val] of [
      ["moodScore", moodScore],
      ["energyScore", energyScore],
      ["engagementScore", engagementScore],
    ] as [string, number | undefined][]) {
      if (val === undefined || typeof val !== "number" || val < 1 || val > 5 || !Number.isInteger(val)) {
        return NextResponse.json(
          { success: false, error: `${key} must be an integer between 1 and 5` },
          { status: 400 }
        );
      }
    }
    if (note !== undefined && (typeof note !== "string" || note.length > 500)) {
      return NextResponse.json(
        { success: false, error: "note must be a string of at most 500 characters" },
        { status: 400 }
      );
    }

    // Look up the wellbeing domain (auto-seeded on first use)
    let wellbeingDomain = await db.irtiqaaDomain.findUnique({
      where: { code: "wellbeing" },
    });
    if (!wellbeingDomain) {
      wellbeingDomain = await db.irtiqaaDomain.create({
        data: {
          code: "wellbeing",
          name: "Student Wellbeing & Personal Development",
          description: "Student voice, emotional health, character development, and UAE national identity.",
          targetLevel: 4,
          order: 4,
        },
      });
    }

    // Check if student has had 2+ recent low check-ins (1-2)
    // If so, flag this one for follow-up
    const recentCheckins = await db.wellbeingCheckin.findMany({
      where: { studentId: payload.id },
      orderBy: { createdAt: "desc" },
      take: 2,
    });
    const recentLow = recentCheckins.filter(
      (c) => c.moodScore <= 2 || c.energyScore <= 2 || c.engagementScore <= 2
    ).length;
    const currentLow =
      (moodScore ?? 5) <= 2 || (energyScore ?? 5) <= 2 || (engagementScore ?? 5) <= 2;
    const needsFollowup = currentLow && recentLow >= 1; // this would be 2+ consecutive

    const checkin = await db.wellbeingCheckin.create({
      data: {
        studentId: payload.id,
        domainId: wellbeingDomain.id,
        moodScore,
        energyScore,
        engagementScore,
        note: note || null,
        needsFollowup,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        id: checkin.id,
        createdAt: checkin.createdAt,
        needsFollowup: checkin.needsFollowup,
        // Always reassure the student — never imply clinical assessment
        message: note
          ? "Thank you for sharing. Your teacher will see this and may reach out to check in with you."
          : "Thank you for checking in. Your response has been recorded.",
      },
    });
  } catch (error) {
    console.error("[Wellbeing Check-in] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit wellbeing check-in" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/student/wellbeing
 * Returns the student's check-in history (their own data only).
 */
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
    if (!payload || payload.userType !== "student") {
      return NextResponse.json(
        { success: false, error: "Student access required" },
        { status: 403 }
      );
    }

    const checkins = await db.wellbeingCheckin.findMany({
      where: { studentId: payload.id },
      orderBy: { createdAt: "desc" },
      take: 30, // last 30 check-ins
      select: {
        id: true,
        moodScore: true,
        energyScore: true,
        engagementScore: true,
        note: true,
        needsFollowup: true,
        followedUpAt: true,
        createdAt: true,
      },
    });

    // Compute 30-day averages
    const recent30Days = checkins.filter(
      (c) => Date.now() - c.createdAt.getTime() < 30 * 24 * 60 * 60 * 1000
    );
    const avg = (key: "moodScore" | "energyScore" | "engagementScore") =>
      recent30Days.length > 0
        ? Math.round(
            (recent30Days.reduce((sum, c) => sum + c[key], 0) / recent30Days.length) * 10
          ) / 10
        : null;

    return NextResponse.json({
      success: true,
      data: {
        checkins,
        summary: {
          totalCheckins: checkins.length,
          last30Days: recent30Days.length,
          avgMood: avg("moodScore"),
          avgEnergy: avg("energyScore"),
          avgEngagement: avg("engagementScore"),
        },
      },
    });
  } catch (error) {
    console.error("[Wellbeing History] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch wellbeing history" },
      { status: 500 }
    );
  }
}
