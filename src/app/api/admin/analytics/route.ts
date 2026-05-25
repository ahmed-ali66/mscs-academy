import { verifyToken, logAudit } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

async function verifyAdmin(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) return null;
  const payload = verifyToken(authHeader.split(' ')[1]);
  if (!payload || payload.userType !== 'admin') return null;
  const admin = await db.admin.findUnique({ where: { id: payload.id } });
  if (!admin || !admin.isActive) return null;
  return admin;
}

// ─── GET: Aggregated analytics ──────────────────────────────────────
export async function GET(request: Request) {
  try {
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
    }

    // ── 1. Total counts ──────────────────────────────────────────────
    const [
      totalTeachers,
      totalActiveTeachers,
      totalStudents,
      totalActiveStudents,
      totalStudentGroups,
      totalActiveSubscriptions,
      totalExpiredSubscriptions,
      totalSubscriptions,
    ] = await Promise.all([
      db.teacher.count(),
      db.teacher.count({ where: { isActive: true } }),
      db.student.count(),
      db.student.count({ where: { isActive: true } }),
      db.studentGroup.count(),
      db.subscription.count({ where: { status: 'active' } }),
      db.subscription.count({ where: { status: 'expired' } }),
      db.subscription.count(),
    ]);

    // Also count suspended subscriptions
    const totalSuspendedSubscriptions = await db.subscription.count({
      where: { status: 'suspended' },
    });

    // ── 2. Quiz completion rates by grade ────────────────────────────
    const grades = [6, 7, 8, 9];
    const quizCompletionByGrade: Record<number, { total: number; completed: number; rate: number }> = {};

    for (const grade of grades) {
      const totalStudentsInGrade = await db.student.count({
        where: { grade, isActive: true },
      });

      const quizResults = await db.quizResultDB.findMany({
        where: { grade },
        select: { studentId: true, percentage: true },
      });

      // Unique students who completed at least one quiz in this grade
      const uniqueStudentsWithQuiz = new Set(quizResults.map((r) => r.studentId)).size;

      quizCompletionByGrade[grade] = {
        total: totalStudentsInGrade,
        completed: uniqueStudentsWithQuiz,
        rate: totalStudentsInGrade > 0 ? Math.round((uniqueStudentsWithQuiz / totalStudentsInGrade) * 100 * 100) / 100 : 0,
      };
    }

    // ── 3. Average scores by grade ───────────────────────────────────
    const averageScoresByGrade: Record<number, { averageScore: number; averagePercentage: number; totalQuizzes: number }> = {};

    for (const grade of grades) {
      const quizResults = await db.quizResultDB.findMany({
        where: { grade },
        select: { score: true, total: true, percentage: true },
      });

      const totalQuizzes = quizResults.length;
      const avgPercentage =
        totalQuizzes > 0
          ? Math.round((quizResults.reduce((sum, r) => sum + r.percentage, 0) / totalQuizzes) * 100) / 100
          : 0;
      const avgScore =
        totalQuizzes > 0
          ? Math.round((quizResults.reduce((sum, r) => sum + r.score, 0) / totalQuizzes) * 100) / 100
          : 0;

      averageScoresByGrade[grade] = {
        averageScore: avgScore,
        averagePercentage: avgPercentage,
        totalQuizzes,
      };
    }

    // ── 4. Lesson completion percentages by grade ────────────────────
    const lessonCompletionByGrade: Record<number, { totalLessons: number; completedLessons: number; rate: number }> = {};

    for (const grade of grades) {
      const totalProgress = await db.lessonProgress.count({
        where: { grade },
      });

      const completedProgress = await db.lessonProgress.count({
        where: { grade, isCompleted: true },
      });

      lessonCompletionByGrade[grade] = {
        totalLessons: totalProgress,
        completedLessons: completedProgress,
        rate: totalProgress > 0 ? Math.round((completedProgress / totalProgress) * 100 * 100) / 100 : 0,
      };
    }

    // ── 5. Recent activity (last 10 audit logs) ──────────────────────
    const recentActivity = await db.auditLog.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        action: true,
        actorType: true,
        actorName: true,
        targetType: true,
        targetId: true,
        details: true,
        createdAt: true,
      },
    });

    // Parse details JSON strings
    const parsedRecentActivity = recentActivity.map((log) => ({
      ...log,
      details: log.details ? JSON.parse(log.details) : null,
    }));

    // ── 6. Teacher effectiveness (avg student scores per teacher) ────
    const teachers = await db.teacher.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        email: true,
        studentGroups: {
          select: {
            students: {
              where: { isActive: true },
              select: {
                id: true,
                quizResults: {
                  select: { percentage: true },
                },
              },
            },
          },
        },
      },
    });

    const teacherEffectiveness = teachers.map((teacher) => {
      const allStudentResults = teacher.studentGroups.flatMap((group) =>
        group.students.flatMap((student) => student.quizResults.map((qr) => qr.percentage))
      );

      const avgScore =
        allStudentResults.length > 0
          ? Math.round(
              (allStudentResults.reduce((sum, p) => sum + p, 0) / allStudentResults.length) * 100
            ) / 100
          : 0;

      const totalStudents = teacher.studentGroups.reduce((sum, g) => sum + g.students.length, 0);

      return {
        teacherId: teacher.id,
        teacherName: teacher.name,
        teacherEmail: teacher.email,
        totalStudents,
        averageStudentScore: avgScore,
        totalQuizResults: allStudentResults.length,
      };
    });

    // Sort by effectiveness descending
    teacherEffectiveness.sort((a, b) => b.averageStudentScore - a.averageStudentScore);

    // ── Compose final analytics object ───────────────────────────────
    const analytics = {
      overview: {
        totalTeachers,
        totalActiveTeachers,
        totalStudents,
        totalActiveStudents,
        totalStudentGroups,
      },
      subscriptions: {
        total: totalSubscriptions,
        active: totalActiveSubscriptions,
        expired: totalExpiredSubscriptions,
        suspended: totalSuspendedSubscriptions,
      },
      quizCompletionByGrade,
      averageScoresByGrade,
      lessonCompletionByGrade,
      recentActivity: parsedRecentActivity,
      teacherEffectiveness,
    };

    await logAudit('view_analytics', 'admin', admin.id, admin.name);

    return NextResponse.json({ success: true, data: analytics });
  } catch (error) {
    console.error('[Admin Analytics GET] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
