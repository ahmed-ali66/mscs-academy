import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '@/lib/db';

const JWT_SECRET = process.env.JWT_SECRET || 'mscs-academy-secret-key-2026-change-in-production';
const SALT_ROUNDS = 12;

export interface JWTPayload {
  id: string;
  userType: 'admin' | 'teacher' | 'student';
  username?: string;
  studentCode?: string;
  grade?: number;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export async function getAuthUser(token: string): Promise<{
  type: 'admin' | 'teacher' | 'student';
  user: Record<string, unknown>;
} | null> {
  const payload = verifyToken(token);
  if (!payload) return null;

  if (payload.userType === 'admin') {
    const admin = await db.admin.findUnique({ where: { id: payload.id } });
    if (!admin || !admin.isActive) return null;
    return { type: 'admin', user: admin };
  }

  if (payload.userType === 'teacher') {
    const teacher = await db.teacher.findUnique({
      where: { id: payload.id },
      include: { subscription: true, studentGroups: { include: { students: true } } }
    });
    if (!teacher || !teacher.isActive) return null;
    // Check subscription
    if (teacher.subscription) {
      const now = new Date();
      if (teacher.subscription.status === 'active' && teacher.subscription.endDate < now) {
        await db.subscription.update({
          where: { id: teacher.subscription.id },
          data: { status: 'expired' }
        });
        return { type: 'teacher', user: { ...teacher, subscription: { ...teacher.subscription, status: 'expired' } } };
      }
    }
    return { type: 'teacher', user: teacher };
  }

  if (payload.userType === 'student') {
    const student = await db.student.findUnique({ where: { id: payload.id } });
    if (!student || !student.isActive) return null;
    return { type: 'student', user: student };
  }

  return null;
}

export function generateStudentCode(grade: number, section: string, year: string, number: number): string {
  const numStr = String(number).padStart(2, '0');
  return `MSCS-${grade}-${section}-${year}-${numStr}`;
}

export async function logAudit(action: string, actorType: string, actorId: string | null, actorName: string | null, targetType?: string, targetId?: string, details?: Record<string, unknown>) {
  await db.auditLog.create({
    data: {
      action,
      actorType,
      actorId,
      actorName,
      targetType: targetType || null,
      targetId: targetId || null,
      details: details ? JSON.stringify(details) : null,
    }
  });
}

export async function logLoginAttempt(identifier: string, userType: string, success: boolean) {
  await db.loginAttempt.create({
    data: { identifier, userType, success }
  });
}
