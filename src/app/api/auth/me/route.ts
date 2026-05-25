import { NextRequest } from 'next/server';
import { getAuthUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return Response.json(
        { success: false, error: 'Authorization token is required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const authResult = await getAuthUser(token);

    if (!authResult) {
      return Response.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const { type, user } = authResult;

    // Return user info based on type
    if (type === 'admin') {
      const admin = user as Record<string, unknown>;
      return Response.json({
        success: true,
        user: {
          id: admin.id,
          name: admin.name,
          username: admin.username,
          email: admin.email,
          userType: 'admin',
          isActive: admin.isActive,
        },
      });
    }

    if (type === 'teacher') {
      const teacher = user as Record<string, unknown> & {
        subscription?: Record<string, unknown> | null;
        studentGroups?: unknown[];
      };
      return Response.json({
        success: true,
        user: {
          id: teacher.id,
          name: teacher.name,
          username: teacher.username,
          email: teacher.email,
          phone: teacher.phone,
          schoolName: teacher.schoolName,
          userType: 'teacher',
          isActive: teacher.isActive,
          subscription: teacher.subscription
            ? {
                status: teacher.subscription.status,
                planType: teacher.subscription.planType,
                startDate: teacher.subscription.startDate,
                endDate: teacher.subscription.endDate,
              }
            : null,
          groupsCount: Array.isArray(teacher.studentGroups) ? teacher.studentGroups.length : 0,
        },
      });
    }

    if (type === 'student') {
      const student = user as Record<string, unknown>;
      return Response.json({
        success: true,
        user: {
          id: student.id,
          name: student.name,
          studentCode: student.studentCode,
          grade: student.grade,
          section: student.section,
          academicYear: student.academicYear,
          userType: 'student',
          isActive: student.isActive,
        },
      });
    }

    return Response.json(
      { success: false, error: 'Unknown user type' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Get current user error:', error);
    return Response.json(
      { success: false, error: 'An internal server error occurred' },
      { status: 500 }
    );
  }
}
