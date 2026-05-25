import { NextRequest } from 'next/server';
import { verifyPassword, generateToken, logAudit, logLoginAttempt } from '@/lib/auth';
import { db } from '@/lib/db';

const MAX_FAILED_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { identifier, password, userType } = body as {
      identifier?: string;
      password?: string;
      userType?: string;
    };

    // ── Validate required fields ──────────────────────────────────
    if (!identifier || typeof identifier !== 'string' || !identifier.trim()) {
      return Response.json(
        { success: false, error: 'Identifier is required' },
        { status: 400 }
      );
    }

    if (!userType || !['admin', 'teacher', 'student'].includes(userType)) {
      return Response.json(
        { success: false, error: 'Valid userType is required (admin, teacher, or student)' },
        { status: 400 }
      );
    }

    // ── Rate limiting: check recent failed attempts ───────────────
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);
    const recentFailures = await db.loginAttempt.count({
      where: {
        identifier: identifier.trim(),
        userType,
        success: false,
        createdAt: { gte: windowStart },
      },
    });

    if (recentFailures >= MAX_FAILED_ATTEMPTS) {
      await logLoginAttempt(identifier.trim(), userType, false);
      return Response.json(
        {
          success: false,
          error: 'Too many failed login attempts. Please try again later.',
        },
        { status: 429 }
      );
    }

    // ── Admin login ───────────────────────────────────────────────
    if (userType === 'admin') {
      if (!password) {
        return Response.json(
          { success: false, error: 'Password is required for admin login' },
          { status: 400 }
        );
      }

      const admin = await db.admin.findUnique({
        where: { username: identifier.trim() },
      });

      if (!admin || !admin.isActive) {
        await logLoginAttempt(identifier.trim(), userType, false);
        return Response.json(
          { success: false, error: 'Invalid username or password' },
          { status: 401 }
        );
      }

      const passwordValid = await verifyPassword(password, admin.passwordHash);
      if (!passwordValid) {
        await logLoginAttempt(identifier.trim(), userType, false);
        return Response.json(
          { success: false, error: 'Invalid username or password' },
          { status: 401 }
        );
      }

      // Update last login
      await db.admin.update({
        where: { id: admin.id },
        data: { lastLoginAt: new Date() },
      });

      const token = generateToken({
        id: admin.id,
        userType: 'admin',
        username: admin.username,
      });

      await logLoginAttempt(identifier.trim(), userType, true);
      await logAudit('login', 'admin', admin.id, admin.name);

      return Response.json({
        success: true,
        token,
        user: {
          id: admin.id,
          name: admin.name,
          username: admin.username,
          email: admin.email,
          userType: 'admin',
        },
      });
    }

    // ── Teacher login ─────────────────────────────────────────────
    if (userType === 'teacher') {
      if (!password) {
        return Response.json(
          { success: false, error: 'Password is required for teacher login' },
          { status: 400 }
        );
      }

      const trimmedIdentifier = identifier.trim();
      const teacher = await db.teacher.findFirst({
        where: {
          OR: [{ username: trimmedIdentifier }, { email: trimmedIdentifier }],
        },
        include: { subscription: true },
      });

      if (!teacher || !teacher.isActive) {
        await logLoginAttempt(identifier.trim(), userType, false);
        return Response.json(
          { success: false, error: 'Invalid username/email or password' },
          { status: 401 }
        );
      }

      const passwordValid = await verifyPassword(password, teacher.passwordHash);
      if (!passwordValid) {
        await logLoginAttempt(identifier.trim(), userType, false);
        return Response.json(
          { success: false, error: 'Invalid username/email or password' },
          { status: 401 }
        );
      }

      // Check subscription status
      let subscriptionStatus = teacher.subscription?.status || 'none';
      if (teacher.subscription && teacher.subscription.status === 'active') {
        const now = new Date();
        if (teacher.subscription.endDate < now) {
          await db.subscription.update({
            where: { id: teacher.subscription.id },
            data: { status: 'expired' },
          });
          subscriptionStatus = 'expired';
        }
      }

      // Update last login
      await db.teacher.update({
        where: { id: teacher.id },
        data: { lastLoginAt: new Date() },
      });

      const token = generateToken({
        id: teacher.id,
        userType: 'teacher',
        username: teacher.username,
      });

      await logLoginAttempt(identifier.trim(), userType, true);
      await logAudit('login', 'teacher', teacher.id, teacher.name);

      return Response.json({
        success: true,
        token,
        user: {
          id: teacher.id,
          name: teacher.name,
          username: teacher.username,
          email: teacher.email,
          phone: teacher.phone,
          schoolName: teacher.schoolName,
          userType: 'teacher',
          subscription: {
            status: subscriptionStatus,
            planType: teacher.subscription?.planType || null,
            endDate: teacher.subscription?.endDate || null,
          },
        },
      });
    }

    // ── Student login ─────────────────────────────────────────────
    if (userType === 'student') {
      const student = await db.student.findUnique({
        where: { studentCode: identifier.trim() },
      });

      if (!student || !student.isActive) {
        await logLoginAttempt(identifier.trim(), userType, false);
        return Response.json(
          { success: false, error: 'Invalid student code' },
          { status: 401 }
        );
      }

      // Update last login
      await db.student.update({
        where: { id: student.id },
        data: { lastLoginAt: new Date() },
      });

      const token = generateToken({
        id: student.id,
        userType: 'student',
        studentCode: student.studentCode,
        grade: student.grade,
      });

      await logLoginAttempt(identifier.trim(), userType, true);
      await logAudit('login', 'student', student.id, student.name);

      return Response.json({
        success: true,
        token,
        user: {
          id: student.id,
          name: student.name,
          studentCode: student.studentCode,
          grade: student.grade,
          section: student.section,
          academicYear: student.academicYear,
          userType: 'student',
        },
      });
    }

    // Should never reach here due to earlier validation
    return Response.json(
      { success: false, error: 'Invalid user type' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return Response.json(
      { success: false, error: 'An internal server error occurred' },
      { status: 500 }
    );
  }
}
