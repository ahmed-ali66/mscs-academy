import { verifyToken } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// ─── Auth: Verify student ────────────────────────────────────────────
async function verifyStudent(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) return null;
  const payload = verifyToken(authHeader.split(' ')[1]);
  if (!payload || payload.userType !== 'student') return null;
  const student = await db.student.findUnique({
    where: { id: payload.id },
    include: { studentGroup: true },
  });
  if (!student || !student.isActive) return null;
  return student;
}

// ─── GET: Get current student's progress across all grades ───────────
export async function GET(request: Request) {
  try {
    const student = await verifyStudent(request);
    if (!student) {
      return NextResponse.json(
        { error: 'Unauthorized. Student access required.' },
        { status: 401 }
      );
    }

    // Fetch all lesson progress for this student
    const lessonProgress = await db.lessonProgress.findMany({
      where: { studentId: student.id },
      orderBy: [{ grade: 'asc' }, { term: 'asc' }, { unit: 'asc' }],
    });

    // Fetch all quiz results for this student
    const quizResults = await db.quizResultDB.findMany({
      where: { studentId: student.id },
      orderBy: { completedAt: 'desc' },
    });

    // Fetch all diagnostic results for this student
    const diagnosticResults = await db.diagnosticResult.findMany({
      where: { studentId: student.id },
      orderBy: { completedAt: 'desc' },
    });

    // ── Compute overall completion percentage per grade ────────────
    const grades = [6, 7, 8, 9];
    const completionByGrade: Record<number, {
      totalLessons: number;
      completedLessons: number;
      completionPercentage: number;
    }> = {};

    for (const grade of grades) {
      const gradeProgress = lessonProgress.filter((lp) => lp.grade === grade);
      const totalLessons = gradeProgress.length;
      const completedLessons = gradeProgress.filter((lp) => lp.isCompleted).length;
      const completionPercentage =
        totalLessons > 0
          ? Math.round((completedLessons / totalLessons) * 10000) / 100
          : 0;

      if (totalLessons > 0 || completionPercentage > 0) {
        completionByGrade[grade] = {
          totalLessons,
          completedLessons,
          completionPercentage,
        };
      }
    }

    // ── Group lesson completions with timestamps ───────────────────
    const lessonCompletions = lessonProgress.map((lp) => ({
      id: lp.id,
      lessonId: lp.lessonId,
      grade: lp.grade,
      term: lp.term,
      unit: lp.unit,
      isCompleted: lp.isCompleted,
      completedAt: lp.completedAt ? lp.completedAt.toISOString() : null,
      timeSpent: lp.timeSpent,
    }));

    // ── Group quiz results with details ────────────────────────────
    const quizHistory = quizResults.map((qr) => ({
      id: qr.id,
      lessonId: qr.lessonId,
      grade: qr.grade,
      term: qr.term,
      unit: qr.unit,
      lessonTitle: qr.lessonTitle,
      score: qr.score,
      total: qr.total,
      percentage: qr.percentage,
      dokLevel: qr.dokLevel,
      domains: qr.domains,
      assessmentType: qr.assessmentType,
      completedAt: qr.completedAt.toISOString(),
    }));

    // ── Diagnostic results ─────────────────────────────────────────
    const diagnosticHistory = diagnosticResults.map((dr) => ({
      id: dr.id,
      grade: dr.grade,
      term: dr.term,
      score: dr.score,
      total: dr.total,
      percentage: dr.percentage,
      results: dr.results,
      completedAt: dr.completedAt.toISOString(),
    }));

    // ── Overall stats ──────────────────────────────────────────────
    const totalLessonProgress = lessonProgress.length;
    const totalCompletedLessons = lessonProgress.filter((lp) => lp.isCompleted).length;
    const totalQuizzes = quizResults.length;
    const avgQuizPercentage =
      totalQuizzes > 0
        ? Math.round(
            (quizResults.reduce((sum, q) => sum + q.percentage, 0) / totalQuizzes) * 100
          ) / 100
        : 0;

    return NextResponse.json({
      success: true,
      data: {
        student: {
          id: student.id,
          name: student.name,
          studentCode: student.studentCode,
          grade: student.grade,
          section: student.section,
          academicYear: student.academicYear,
          group: student.studentGroup
            ? {
                id: student.studentGroup.id,
                name: student.studentGroup.name,
                grade: student.studentGroup.grade,
                section: student.studentGroup.section,
              }
            : null,
        },
        lessonCompletions,
        quizResults: quizHistory,
        diagnosticResults: diagnosticHistory,
        completionByGrade,
        overallStats: {
          totalLessonProgress,
          totalCompletedLessons,
          overallCompletion: totalLessonProgress > 0
            ? Math.round((totalCompletedLessons / totalLessonProgress) * 10000) / 100
            : 0,
          totalQuizzes,
          avgQuizPercentage,
          totalDiagnostics: diagnosticResults.length,
        },
      },
    });
  } catch (error) {
    console.error('[Student Progress GET] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch student progress' }, { status: 500 });
  }
}

// ─── POST: Mark lesson as complete ───────────────────────────────────
export async function POST(request: Request) {
  try {
    const student = await verifyStudent(request);
    if (!student) {
      return NextResponse.json(
        { error: 'Unauthorized. Student access required.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { lessonId, grade, term, unit, timeSpent } = body;

    // Validate required fields
    if (!lessonId || grade === undefined || term === undefined || !unit) {
      return NextResponse.json(
        { error: 'Missing required fields: lessonId, grade, term, unit' },
        { status: 400 }
      );
    }

    // Validate grade
    if (![6, 7, 8, 9].includes(grade)) {
      return NextResponse.json(
        { error: 'Invalid grade. Must be one of: 6, 7, 8, 9' },
        { status: 400 }
      );
    }

    // Validate term
    if (![1, 2, 3].includes(term)) {
      return NextResponse.json(
        { error: 'Invalid term. Must be one of: 1, 2, 3' },
        { status: 400 }
      );
    }

    // Upsert lesson progress (unique constraint on studentId + lessonId)
    const progress = await db.lessonProgress.upsert({
      where: {
        studentId_lessonId: {
          studentId: student.id,
          lessonId,
        },
      },
      create: {
        studentId: student.id,
        lessonId,
        grade,
        term,
        unit,
        isCompleted: true,
        completedAt: new Date(),
        timeSpent: timeSpent || 0,
      },
      update: {
        isCompleted: true,
        completedAt: new Date(),
        timeSpent: timeSpent !== undefined ? timeSpent : undefined,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        id: progress.id,
        lessonId: progress.lessonId,
        grade: progress.grade,
        term: progress.term,
        unit: progress.unit,
        isCompleted: progress.isCompleted,
        completedAt: progress.completedAt ? progress.completedAt.toISOString() : null,
        timeSpent: progress.timeSpent,
      },
    });
  } catch (error) {
    console.error('[Student Progress POST] Error:', error);
    return NextResponse.json({ error: 'Failed to mark lesson as complete' }, { status: 500 });
  }
}
