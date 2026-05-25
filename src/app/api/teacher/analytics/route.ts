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
  if (!teacher.subscription || teacher.subscription.status !== 'active') {
    return { teacher, subscriptionExpired: true };
  }
  return { teacher, subscriptionExpired: false };
}

// ─── GET: Teacher analytics ──────────────────────────────────────────
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
        { error: 'Subscription expired. Please renew to access analytics.', subscriptionExpired: true },
        { status: 403 }
      );
    }

    // Collect all student IDs from teacher's groups
    const studentIds = teacher.studentGroups.flatMap((g) =>
      g.students.filter((s) => s.isActive).map((s) => s.id)
    );

    if (studentIds.length === 0) {
      return NextResponse.json({
        success: true,
        data: {
          studentProgressByGrade: {},
          assessmentCompletionRates: {},
          averageQuizScores: { byGrade: {}, byTerm: {}, byUnit: {} },
          diagnosticResults: {},
          performanceTrends: [],
          studentsNeedingAttention: [],
        },
      });
    }

    const grades = [6, 7, 8, 9];

    // ── 1. Student progress tracking (lesson completions by grade) ──
    const studentProgressByGrade: Record<number, {
      totalStudents: number;
      totalLessonEntries: number;
      completedLessons: number;
      completionRate: number;
      byStudent: Array<{
        studentId: string;
        studentName: string;
        completed: number;
        total: number;
        rate: number;
      }>;
    }> = {};

    for (const grade of grades) {
      const gradeStudents = teacher.studentGroups
        .filter((g) => g.grade === grade)
        .flatMap((g) => g.students.filter((s) => s.isActive));

      if (gradeStudents.length === 0) continue;

      const gradeStudentIds = gradeStudents.map((s) => s.id);

      const lessonProgress = await db.lessonProgress.findMany({
        where: { studentId: { in: gradeStudentIds }, grade },
      });

      const totalEntries = lessonProgress.length;
      const completedEntries = lessonProgress.filter((lp) => lp.isCompleted).length;

      // Per-student breakdown
      const byStudent = gradeStudents.map((student) => {
        const studentProgress = lessonProgress.filter((lp) => lp.studentId === student.id);
        const completed = studentProgress.filter((lp) => lp.isCompleted).length;
        const total = studentProgress.length;
        return {
          studentId: student.id,
          studentName: student.name,
          completed,
          total,
          rate: total > 0 ? Math.round((completed / total) * 10000) / 100 : 0,
        };
      });

      studentProgressByGrade[grade] = {
        totalStudents: gradeStudents.length,
        totalLessonEntries: totalEntries,
        completedLessons: completedEntries,
        completionRate:
          totalEntries > 0
            ? Math.round((completedEntries / totalEntries) * 10000) / 100
            : 0,
        byStudent,
      };
    }

    // ── 2. Assessment completion rates ──────────────────────────────
    const allQuizResults = await db.quizResultDB.findMany({
      where: { studentId: { in: studentIds } },
      select: { studentId: true, grade: true, term: true, assessmentType: true },
    });

    const assessmentCompletionRates: Record<number, {
      formative: number;
      diagnostic: number;
      summative: number;
      total: number;
    }> = {};

    for (const grade of grades) {
      const gradeStudentIds = teacher.studentGroups
        .filter((g) => g.grade === grade)
        .flatMap((g) => g.students.filter((s) => s.isActive).map((s) => s.id));

      const gradeQuizzes = allQuizResults.filter((q) => gradeStudentIds.includes(q.studentId));

      const uniqueStudentsFormative = new Set(
        gradeQuizzes.filter((q) => q.assessmentType === 'formative').map((q) => q.studentId)
      ).size;
      const uniqueStudentsDiagnostic = new Set(
        gradeQuizzes.filter((q) => q.assessmentType === 'diagnostic').map((q) => q.studentId)
      ).size;
      const uniqueStudentsSummative = new Set(
        gradeQuizzes.filter((q) => q.assessmentType === 'summative').map((q) => q.studentId)
      ).size;

      const totalGradeStudents = gradeStudentIds.length;

      assessmentCompletionRates[grade] = {
        formative: totalGradeStudents > 0
          ? Math.round((uniqueStudentsFormative / totalGradeStudents) * 10000) / 100 : 0,
        diagnostic: totalGradeStudents > 0
          ? Math.round((uniqueStudentsDiagnostic / totalGradeStudents) * 10000) / 100 : 0,
        summative: totalGradeStudents > 0
          ? Math.round((uniqueStudentsSummative / totalGradeStudents) * 10000) / 100 : 0,
        total: gradeQuizzes.length,
      };
    }

    // ── 3. Average quiz scores by grade, term, unit ────────────────
    const quizResultsWithDetails = await db.quizResultDB.findMany({
      where: { studentId: { in: studentIds } },
      select: {
        grade: true,
        term: true,
        unit: true,
        percentage: true,
        score: true,
        total: true,
      },
    });

    // By grade
    const averageQuizScoresByGrade: Record<number, { avgPercentage: number; count: number }> = {};
    for (const grade of grades) {
      const gradeResults = quizResultsWithDetails.filter((q) => q.grade === grade);
      const count = gradeResults.length;
      const avgPercentage = count > 0
        ? Math.round((gradeResults.reduce((sum, q) => sum + q.percentage, 0) / count) * 100) / 100
        : 0;
      averageQuizScoresByGrade[grade] = { avgPercentage, count };
    }

    // By term
    const averageQuizScoresByTerm: Record<string, { avgPercentage: number; count: number }> = {};
    for (const result of quizResultsWithDetails) {
      const key = `G${result.grade}T${result.term}`;
      if (!averageQuizScoresByTerm[key]) {
        averageQuizScoresByTerm[key] = { avgPercentage: 0, count: 0 };
      }
      averageQuizScoresByTerm[key].count += 1;
      averageQuizScoresByTerm[key].avgPercentage += result.percentage;
    }
    for (const key of Object.keys(averageQuizScoresByTerm)) {
      const entry = averageQuizScoresByTerm[key];
      entry.avgPercentage =
        entry.count > 0
          ? Math.round((entry.avgPercentage / entry.count) * 100) / 100
          : 0;
    }

    // By unit
    const averageQuizScoresByUnit: Record<string, { avgPercentage: number; count: number }> = {};
    for (const result of quizResultsWithDetails) {
      const key = `G${result.grade}T${result.term}U${result.unit}`;
      if (!averageQuizScoresByUnit[key]) {
        averageQuizScoresByUnit[key] = { avgPercentage: 0, count: 0 };
      }
      averageQuizScoresByUnit[key].count += 1;
      averageQuizScoresByUnit[key].avgPercentage += result.percentage;
    }
    for (const key of Object.keys(averageQuizScoresByUnit)) {
      const entry = averageQuizScoresByUnit[key];
      entry.avgPercentage =
        entry.count > 0
          ? Math.round((entry.avgPercentage / entry.count) * 100) / 100
          : 0;
    }

    // ── 4. Diagnostic assessment results ───────────────────────────
    const diagnosticResults: Record<number, Array<{
      studentId: string;
      studentName: string;
      term: number;
      score: number;
      total: number;
      percentage: number;
      completedAt: string;
    }>> = {};

    const allDiagnosticResults = await db.diagnosticResult.findMany({
      where: { studentId: { in: studentIds } },
      include: {
        student: { select: { name: true, grade: true } },
      },
      orderBy: { completedAt: 'desc' },
    });

    for (const diag of allDiagnosticResults) {
      const grade = diag.grade;
      if (!diagnosticResults[grade]) {
        diagnosticResults[grade] = [];
      }
      diagnosticResults[grade].push({
        studentId: diag.studentId,
        studentName: diag.student.name,
        term: diag.term,
        score: diag.score,
        total: diag.total,
        percentage: diag.percentage,
        completedAt: diag.completedAt.toISOString(),
      });
    }

    // ── 5. Performance trends over time ────────────────────────────
    // Group quiz results by week for trend analysis
    const quizResultsForTrend = await db.quizResultDB.findMany({
      where: { studentId: { in: studentIds } },
      select: {
        percentage: true,
        completedAt: true,
        grade: true,
      },
      orderBy: { completedAt: 'asc' },
    });

    // Group by ISO week
    const weekBuckets: Record<string, { total: number; count: number; byGrade: Record<number, { total: number; count: number }> }> = {};

    for (const qr of quizResultsForTrend) {
      const date = new Date(qr.completedAt);
      // Get ISO week start (Monday)
      const day = date.getDay();
      const diff = date.getDate() - day + (day === 0 ? -6 : 1);
      const weekStart = new Date(date.setDate(diff));
      const weekKey = weekStart.toISOString().split('T')[0];

      if (!weekBuckets[weekKey]) {
        weekBuckets[weekKey] = { total: 0, count: 0, byGrade: {} };
      }
      weekBuckets[weekKey].total += qr.percentage;
      weekBuckets[weekKey].count += 1;

      if (!weekBuckets[weekKey].byGrade[qr.grade]) {
        weekBuckets[weekKey].byGrade[qr.grade] = { total: 0, count: 0 };
      }
      weekBuckets[weekKey].byGrade[qr.grade].total += qr.percentage;
      weekBuckets[weekKey].byGrade[qr.grade].count += 1;
    }

    const performanceTrends = Object.entries(weekBuckets)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([week, data]) => ({
        week,
        averageScore: data.count > 0 ? Math.round((data.total / data.count) * 100) / 100 : 0,
        quizCount: data.count,
        byGrade: Object.fromEntries(
          Object.entries(data.byGrade).map(([grade, gd]) => [
            grade,
            {
              averageScore: gd.count > 0 ? Math.round((gd.total / gd.count) * 100) / 100 : 0,
              quizCount: gd.count,
            },
          ])
        ),
      }));

    // ── 6. Students needing attention ──────────────────────────────
    // Criteria: average quiz score < 50% or lesson completion rate < 50%
    const studentsNeedingAttention: Array<{
      studentId: string;
      studentName: string;
      grade: number;
      section: string;
      reasons: string[];
      avgQuizPercentage: number;
      lessonCompletionRate: number;
    }> = [];

    const allStudents = await db.student.findMany({
      where: { id: { in: studentIds } },
      include: {
        quizResults: { select: { percentage: true } },
        lessonProgress: { select: { isCompleted: true } },
      },
    });

    for (const student of allStudents) {
      const reasons: string[] = [];

      // Average quiz percentage
      const totalQuizzes = student.quizResults.length;
      const avgQuizPercentage =
        totalQuizzes > 0
          ? Math.round(
              (student.quizResults.reduce((sum, q) => sum + q.percentage, 0) / totalQuizzes) * 100
            ) / 100
          : 0;

      // Lesson completion rate
      const totalLessonEntries = student.lessonProgress.length;
      const completedLessons = student.lessonProgress.filter((lp) => lp.isCompleted).length;
      const lessonCompletionRate =
        totalLessonEntries > 0
          ? Math.round((completedLessons / totalLessonEntries) * 10000) / 100
          : 0;

      if (avgQuizPercentage < 50 && totalQuizzes > 0) {
        reasons.push(`Low average quiz score: ${avgQuizPercentage}%`);
      }

      if (lessonCompletionRate < 50 && totalLessonEntries > 0) {
        reasons.push(`Low lesson completion rate: ${lessonCompletionRate}%`);
      }

      if (totalQuizzes === 0 && totalLessonEntries === 0) {
        reasons.push('No activity recorded');
      }

      if (reasons.length > 0) {
        studentsNeedingAttention.push({
          studentId: student.id,
          studentName: student.name,
          grade: student.grade,
          section: student.section,
          reasons,
          avgQuizPercentage,
          lessonCompletionRate,
        });
      }
    }

    // Sort: most severe first (by number of reasons, then by avg score)
    studentsNeedingAttention.sort((a, b) => {
      if (b.reasons.length !== a.reasons.length) return b.reasons.length - a.reasons.length;
      return a.avgQuizPercentage - b.avgQuizPercentage;
    });

    // ── Compose final analytics ────────────────────────────────────
    const analytics = {
      studentProgressByGrade,
      assessmentCompletionRates,
      averageQuizScores: {
        byGrade: averageQuizScoresByGrade,
        byTerm: averageQuizScoresByTerm,
        byUnit: averageQuizScoresByUnit,
      },
      diagnosticResults,
      performanceTrends,
      studentsNeedingAttention,
    };

    return NextResponse.json({ success: true, data: analytics });
  } catch (error) {
    console.error('[Teacher Analytics GET] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
