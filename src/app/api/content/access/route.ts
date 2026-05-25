import { verifyToken } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// ─── Preview lesson detection ────────────────────────────────────────
// First lesson of each grade (lesson 0 of G6T1U1, G7T1U1, G8T1U1, G9T1U1) is always free/preview
function isPreviewLesson(grade: number, term: number, unit: string, lesson: string): boolean {
  const previewLessons: Record<number, { term: number; unit: string; lesson: string }> = {
    6: { term: 1, unit: 'Unit 1', lesson: '0' },
    7: { term: 1, unit: 'Unit 1', lesson: '0' },
    8: { term: 1, unit: 'Unit 1', lesson: '0' },
    9: { term: 1, unit: 'Unit 1', lesson: '0' },
  };

  const preview = previewLessons[grade];
  if (!preview) return false;

  return (
    term === preview.term &&
    (unit === preview.unit || unit === '1') &&
    (lesson === preview.lesson || lesson === '0')
  );
}

// ─── GET: Check if user has access to specific content ───────────────
export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization token is required' },
        { status: 401 }
      );
    }

    const payload = verifyToken(authHeader.split(' ')[1]);
    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Parse query params
    const { searchParams } = new URL(request.url);
    const gradeParam = searchParams.get('grade');
    const termParam = searchParams.get('term');
    const unit = searchParams.get('unit');
    const lesson = searchParams.get('lesson');

    // Validate required params
    if (!gradeParam || !termParam || !unit || !lesson) {
      return NextResponse.json(
        { error: 'Missing required query params: grade, term, unit, lesson' },
        { status: 400 }
      );
    }

    const grade = parseInt(gradeParam, 10);
    const term = parseInt(termParam, 10);

    if (![6, 7, 8, 9].includes(grade)) {
      return NextResponse.json(
        { error: 'Invalid grade. Must be one of: 6, 7, 8, 9' },
        { status: 400 }
      );
    }

    if (![1, 2, 3].includes(term)) {
      return NextResponse.json(
        { error: 'Invalid term. Must be one of: 1, 2, 3' },
        { status: 400 }
      );
    }

    // Check if this is a preview (free) lesson
    const preview = isPreviewLesson(grade, term, unit, lesson);
    if (preview) {
      return NextResponse.json({
        success: true,
        data: {
          hasAccess: true,
          isPreview: true,
          reason: 'This is a free preview lesson available to all users.',
        },
      });
    }

    // ── Admin has full access ──────────────────────────────────────
    if (payload.userType === 'admin') {
      const admin = await db.admin.findUnique({ where: { id: payload.id } });
      if (!admin || !admin.isActive) {
        return NextResponse.json(
          { error: 'Admin account not found or inactive' },
          { status: 403 }
        );
      }
      return NextResponse.json({
        success: true,
        data: {
          hasAccess: true,
          isPreview: false,
          reason: 'Admin has full access to all content.',
        },
      });
    }

    // ── Teacher access ─────────────────────────────────────────────
    if (payload.userType === 'teacher') {
      const teacher = await db.teacher.findUnique({
        where: { id: payload.id },
        include: { subscription: true },
      });

      if (!teacher || !teacher.isActive) {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: 'Teacher account not found or inactive.',
          },
        });
      }

      if (!teacher.subscription) {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: 'No subscription found. Please contact your administrator.',
          },
        });
      }

      // Check if subscription is expired
      const now = new Date();
      if (teacher.subscription.status === 'active' && teacher.subscription.endDate < now) {
        // Auto-expire
        await db.subscription.update({
          where: { id: teacher.subscription.id },
          data: { status: 'expired' },
        });

        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: 'Subscription has expired. Please renew to access content.',
          },
        });
      }

      if (teacher.subscription.status !== 'active') {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: `Subscription status is '${teacher.subscription.status}'. Active subscription required.`,
          },
        });
      }

      // Check if the grade is covered by subscription
      const coveredGrades = teacher.subscription.gradesCovered
        .split(',')
        .map((g) => parseInt(g.trim(), 10));

      if (!coveredGrades.includes(grade)) {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: `Grade ${grade} is not covered by your subscription. Covered grades: ${coveredGrades.join(', ')}`,
          },
        });
      }

      return NextResponse.json({
        success: true,
        data: {
          hasAccess: true,
          isPreview: false,
          reason: 'Active subscription grants access.',
        },
      });
    }

    // ── Student access (depends on teacher's subscription) ─────────
    if (payload.userType === 'student') {
      const student = await db.student.findUnique({
        where: { id: payload.id },
        include: {
          studentGroup: {
            include: {
              teacher: {
                include: { subscription: true },
              },
            },
          },
        },
      });

      if (!student || !student.isActive) {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: 'Student account not found or inactive.',
          },
        });
      }

      // Student must be in a group with a teacher
      if (!student.studentGroup || !student.studentGroup.teacher) {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: 'No teacher assigned. Contact your administrator.',
          },
        });
      }

      const teacherWithSub = student.studentGroup.teacher;

      // Check teacher's subscription
      if (!teacherWithSub.subscription) {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: "Your teacher's subscription is not set up. Please ask your teacher to contact the administrator.",
          },
        });
      }

      // Check if subscription is expired
      const now = new Date();
      if (teacherWithSub.subscription.status === 'active' && teacherWithSub.subscription.endDate < now) {
        await db.subscription.update({
          where: { id: teacherWithSub.subscription.id },
          data: { status: 'expired' },
        });

        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: "Your teacher's subscription has expired. Access is restricted.",
          },
        });
      }

      if (teacherWithSub.subscription.status !== 'active') {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: `Your teacher's subscription is '${teacherWithSub.subscription.status}'. Active subscription required for content access.`,
          },
        });
      }

      // Check if the grade is covered by teacher's subscription
      const coveredGrades = teacherWithSub.subscription.gradesCovered
        .split(',')
        .map((g) => parseInt(g.trim(), 10));

      if (!coveredGrades.includes(grade)) {
        return NextResponse.json({
          success: true,
          data: {
            hasAccess: false,
            isPreview: false,
            reason: `Grade ${grade} is not covered by your teacher's subscription.`,
          },
        });
      }

      return NextResponse.json({
        success: true,
        data: {
          hasAccess: true,
          isPreview: false,
          reason: "Access granted through your teacher's active subscription.",
        },
      });
    }

    // Unknown user type
    return NextResponse.json({
      success: true,
      data: {
        hasAccess: false,
        isPreview: false,
        reason: 'Unknown user type.',
      },
    });
  } catch (error) {
    console.error('[Content Access GET] Error:', error);
    return NextResponse.json({ error: 'Failed to check content access' }, { status: 500 });
  }
}
