import { verifyToken } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// ─── Auth: Verify teacher with subscription check ────────────────────
async function verifyTeacher(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) return null;
  const payload = verifyToken(authHeader.split(' ')[1]);
  if (!payload || payload.userType !== 'teacher') return null;
  const teacher = await db.teacher.findUnique({
    where: { id: payload.id },
    include: {
      subscription: true,
      studentGroups: { include: { students: true } },
    },
  });
  if (!teacher || !teacher.isActive) return null;
  // Check subscription
  if (!teacher.subscription || teacher.subscription.status !== 'active') {
    return { teacher, subscriptionExpired: true };
  }
  return { teacher, subscriptionExpired: false };
}

// ─── GET: List students in teacher's assigned groups ─────────────────
export async function GET(request: Request) {
  try {
    const result = await verifyTeacher(request);
    if (!result) {
      return NextResponse.json(
        { error: 'Unauthorized. Teacher access required.' },
        { status: 401 }
      );
    }

    const { teacher, subscriptionExpired } = result;

    if (subscriptionExpired) {
      return NextResponse.json(
        { error: 'Subscription expired. Please renew to access student data.', subscriptionExpired: true },
        { status: 403 }
      );
    }

    // Parse query params
    const { searchParams } = new URL(request.url);
    const gradeFilter = searchParams.get('grade');

    // Validate grade param if provided
    if (gradeFilter && !['6', '7', '8', '9'].includes(gradeFilter)) {
      return NextResponse.json(
        { error: 'Invalid grade. Must be one of: 6, 7, 8, 9' },
        { status: 400 }
      );
    }

    // Collect all student IDs from teacher's groups
    const groupIds = teacher.studentGroups.map((g) => g.id);

    // Build where clause
    const whereClause: Record<string, unknown> = {
      studentGroupId: { in: groupIds },
      isActive: true,
    };

    if (gradeFilter) {
      whereClause.grade = parseInt(gradeFilter, 10);
    }

    // Fetch students with their quiz results and lesson progress
    const students = await db.student.findMany({
      where: whereClause,
      include: {
        studentGroup: {
          select: { id: true, name: true, grade: true, section: true },
        },
        quizResults: {
          orderBy: { completedAt: 'desc' },
          select: {
            id: true,
            lessonId: true,
            grade: true,
            term: true,
            unit: true,
            lessonTitle: true,
            score: true,
            total: true,
            percentage: true,
            dokLevel: true,
            domains: true,
            assessmentType: true,
            completedAt: true,
          },
        },
        lessonProgress: {
          orderBy: { completedAt: 'desc' },
          select: {
            id: true,
            lessonId: true,
            grade: true,
            term: true,
            unit: true,
            isCompleted: true,
            completedAt: true,
            timeSpent: true,
          },
        },
        diagnosticResults: {
          orderBy: { completedAt: 'desc' },
          select: {
            id: true,
            grade: true,
            term: true,
            score: true,
            total: true,
            percentage: true,
            completedAt: true,
          },
        },
      },
      orderBy: [{ grade: 'asc' }, { section: 'asc' }, { name: 'asc' }],
    });

    // Compute summary stats for each student
    const studentsWithStats = students.map((student) => {
      const completedLessons = student.lessonProgress.filter((lp) => lp.isCompleted).length;
      const totalLessonEntries = student.lessonProgress.length;

      const totalQuizzes = student.quizResults.length;
      const avgQuizPercentage =
        totalQuizzes > 0
          ? Math.round(
              (student.quizResults.reduce((sum, q) => sum + q.percentage, 0) / totalQuizzes) *
                100
            ) / 100
          : 0;

      const diagnosticsCount = student.diagnosticResults.length;
      const avgDiagnosticPercentage =
        diagnosticsCount > 0
          ? Math.round(
              (student.diagnosticResults.reduce((sum, d) => sum + d.percentage, 0) /
                diagnosticsCount) *
                100
            ) / 100
          : 0;

      return {
        id: student.id,
        studentCode: student.studentCode,
        name: student.name,
        grade: student.grade,
        section: student.section,
        academicYear: student.academicYear,
        isActive: student.isActive,
        group: student.studentGroup,
        stats: {
          completedLessons,
          totalLessonEntries,
          totalQuizzes,
          avgQuizPercentage,
          diagnosticsCount,
          avgDiagnosticPercentage,
        },
        quizResults: student.quizResults,
        lessonProgress: student.lessonProgress,
        diagnosticResults: student.diagnosticResults,
      };
    });

    // Group summary by grade
    const gradeSummary: Record<number, { count: number; avgQuizScore: number; avgCompletionRate: number }> = {};
    for (const student of studentsWithStats) {
      const g = student.grade;
      if (!gradeSummary[g]) {
        gradeSummary[g] = { count: 0, avgQuizScore: 0, avgCompletionRate: 0 };
      }
      gradeSummary[g].count += 1;
      gradeSummary[g].avgQuizScore += student.stats.avgQuizPercentage;
      gradeSummary[g].avgCompletionRate +=
        student.stats.totalLessonEntries > 0
          ? (student.stats.completedLessons / student.stats.totalLessonEntries) * 100
          : 0;
    }

    // Compute averages
    for (const g of Object.keys(gradeSummary)) {
      const entry = gradeSummary[Number(g)];
      if (entry.count > 0) {
        entry.avgQuizScore = Math.round((entry.avgQuizScore / entry.count) * 100) / 100;
        entry.avgCompletionRate = Math.round((entry.avgCompletionRate / entry.count) * 100) / 100;
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        students: studentsWithStats,
        totalStudents: studentsWithStats.length,
        gradeSummary,
        groups: teacher.studentGroups.map((g) => ({
          id: g.id,
          name: g.name,
          grade: g.grade,
          section: g.section,
          studentCount: g.students.length,
        })),
      },
    });
  } catch (error) {
    console.error('[Teacher Students GET] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}
