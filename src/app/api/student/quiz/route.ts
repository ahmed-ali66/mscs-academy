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

// ─── POST: Submit quiz result ────────────────────────────────────────
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
    const {
      lessonId,
      grade,
      term,
      unit,
      lessonTitle,
      score,
      total,
      percentage,
      dokLevel,
      domains,
      assessmentType,
    } = body;

    // Validate required fields
    if (!lessonId || grade === undefined || term === undefined || !unit || !lessonTitle) {
      return NextResponse.json(
        { error: 'Missing required fields: lessonId, grade, term, unit, lessonTitle' },
        { status: 400 }
      );
    }

    if (score === undefined || total === undefined || percentage === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: score, total, percentage' },
        { status: 400 }
      );
    }

    if (!dokLevel || !domains) {
      return NextResponse.json(
        { error: 'Missing required fields: dokLevel, domains' },
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

    // Validate score and total
    if (score < 0 || total <= 0 || score > total) {
      return NextResponse.json(
        { error: 'Invalid score/total values. Score must be >= 0 and <= total, total must be > 0' },
        { status: 400 }
      );
    }

    // Validate percentage
    if (percentage < 0 || percentage > 100) {
      return NextResponse.json(
        { error: 'Invalid percentage. Must be between 0 and 100' },
        { status: 400 }
      );
    }

    // Validate assessment type if provided
    const validAssessmentTypes = ['formative', 'diagnostic', 'summative'];
    const finalAssessmentType = assessmentType || 'formative';
    if (!validAssessmentTypes.includes(finalAssessmentType)) {
      return NextResponse.json(
        { error: 'Invalid assessmentType. Must be one of: formative, diagnostic, summative' },
        { status: 400 }
      );
    }

    // Create quiz result
    const quizResult = await db.quizResultDB.create({
      data: {
        studentId: student.id,
        lessonId,
        grade,
        term,
        unit,
        lessonTitle,
        score,
        total,
        percentage,
        dokLevel,
        domains: typeof domains === 'string' ? domains : JSON.stringify(domains),
        assessmentType: finalAssessmentType,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: quizResult.id,
          lessonId: quizResult.lessonId,
          grade: quizResult.grade,
          term: quizResult.term,
          unit: quizResult.unit,
          lessonTitle: quizResult.lessonTitle,
          score: quizResult.score,
          total: quizResult.total,
          percentage: quizResult.percentage,
          dokLevel: quizResult.dokLevel,
          domains: quizResult.domains,
          assessmentType: quizResult.assessmentType,
          completedAt: quizResult.completedAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[Student Quiz POST] Error:', error);
    return NextResponse.json({ error: 'Failed to submit quiz result' }, { status: 500 });
  }
}

// ─── GET: Get student's quiz history ─────────────────────────────────
export async function GET(request: Request) {
  try {
    const student = await verifyStudent(request);
    if (!student) {
      return NextResponse.json(
        { error: 'Unauthorized. Student access required.' },
        { status: 401 }
      );
    }

    // Parse query params
    const { searchParams } = new URL(request.url);
    const gradeParam = searchParams.get('grade');
    const termParam = searchParams.get('term');

    // Build where clause
    const whereClause: Record<string, unknown> = {
      studentId: student.id,
    };

    if (gradeParam) {
      const grade = parseInt(gradeParam, 10);
      if (![6, 7, 8, 9].includes(grade)) {
        return NextResponse.json(
          { error: 'Invalid grade. Must be one of: 6, 7, 8, 9' },
          { status: 400 }
        );
      }
      whereClause.grade = grade;
    }

    if (termParam) {
      const term = parseInt(termParam, 10);
      if (![1, 2, 3].includes(term)) {
        return NextResponse.json(
          { error: 'Invalid term. Must be one of: 1, 2, 3' },
          { status: 400 }
        );
      }
      whereClause.term = term;
    }

    // Fetch quiz results
    const quizResults = await db.quizResultDB.findMany({
      where: whereClause,
      orderBy: { completedAt: 'desc' },
    });

    // Compute summary statistics
    const totalQuizzes = quizResults.length;
    const avgScore =
      totalQuizzes > 0
        ? Math.round(
            (quizResults.reduce((sum, q) => sum + q.score, 0) / totalQuizzes) * 100
          ) / 100
        : 0;
    const avgPercentage =
      totalQuizzes > 0
        ? Math.round(
            (quizResults.reduce((sum, q) => sum + q.percentage, 0) / totalQuizzes) * 100
          ) / 100
        : 0;

    // Group by assessment type
    const byAssessmentType: Record<string, { count: number; avgPercentage: number }> = {};
    for (const qr of quizResults) {
      if (!byAssessmentType[qr.assessmentType]) {
        byAssessmentType[qr.assessmentType] = { count: 0, avgPercentage: 0 };
      }
      byAssessmentType[qr.assessmentType].count += 1;
      byAssessmentType[qr.assessmentType].avgPercentage += qr.percentage;
    }
    for (const key of Object.keys(byAssessmentType)) {
      const entry = byAssessmentType[key];
      entry.avgPercentage =
        entry.count > 0
          ? Math.round((entry.avgPercentage / entry.count) * 100) / 100
          : 0;
    }

    // Score distribution
    const scoreDistribution = {
      excellent: quizResults.filter((q) => q.percentage >= 80).length, // 80-100%
      good: quizResults.filter((q) => q.percentage >= 60 && q.percentage < 80).length, // 60-79%
      average: quizResults.filter((q) => q.percentage >= 40 && q.percentage < 60).length, // 40-59%
      belowAverage: quizResults.filter((q) => q.percentage < 40).length, // 0-39%
    };

    const formattedResults = quizResults.map((qr) => ({
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

    return NextResponse.json({
      success: true,
      data: {
        quizzes: formattedResults,
        summary: {
          totalQuizzes,
          avgScore,
          avgPercentage,
          byAssessmentType,
          scoreDistribution,
        },
      },
    });
  } catch (error) {
    console.error('[Student Quiz GET] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch quiz history' }, { status: 500 });
  }
}
