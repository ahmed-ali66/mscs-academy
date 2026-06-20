import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '@/lib/db';

/**
 * JWT secret — MUST come from env. No insecure fallback.
 * Previous fallback ('mscs-academy-secret-key-2026-change-in-production')
 * was a PDPL violation waiting to happen: if env var was missing in
 * production, anyone could forge auth tokens.
 */
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'FATAL: JWT_SECRET environment variable is not set. Refusing to start in production without a secure secret. Generate one with: openssl rand -base64 48'
    );
  }
  // In development only, use an ephemeral random secret (changes per boot)
  console.warn('⚠ JWT_SECRET not set — using ephemeral dev secret. Set JWT_SECRET in .env for stable sessions.');
}
const _SECRET: string = JWT_SECRET || (process.env.NODE_ENV !== 'production'
  ? `dev-only-secret-${Math.random().toString(36).slice(2)}-${Date.now()}`
  : (() => { throw new Error('JWT_SECRET required in production'); })());

const SALT_ROUNDS = 12;
const TOKEN_TTL_SECONDS = 60 * 60 * 8; // 8 hours — ADEK school day + buffer

export interface JWTPayload {
  id: string;
  userType: 'admin' | 'teacher' | 'student' | 'parent';
  username?: string;
  studentCode?: string;
  grade?: number;
  email?: string;
  // CSRF token — embedded in JWT and verified against X-CSRF-Token header
  csrf: string;
  // Session metadata
  issuedAt: number;
  expiresAt: number;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(payload: Omit<JWTPayload, 'csrf' | 'issuedAt' | 'expiresAt'>): string {
  const now = Math.floor(Date.now() / 1000);
  // Generate a random CSRF token (16 bytes hex)
  const csrf = require('crypto').randomBytes(16).toString('hex');
  return jwt.sign(
    { ...payload, csrf, issuedAt: now, expiresAt: now + TOKEN_TTL_SECONDS },
    _SECRET,
    { algorithm: 'HS256' }
  );
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    const payload = jwt.verify(token, _SECRET, { algorithms: ['HS256'] }) as JWTPayload;
    // Check expiry (belt + suspenders — jwt.verify already checks exp)
    if (payload.expiresAt && payload.expiresAt < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

/**
 * Verify a CSRF token against the one embedded in the JWT.
 * Use in every state-changing API route (POST/PUT/DELETE/PATCH).
 */
export function verifyCsrf(token: string, csrfHeader: string | null): boolean {
  const payload = verifyToken(token);
  if (!payload || !payload.csrf) return false;
  if (!csrfHeader) return false;
  // Constant-time comparison to prevent timing attacks
  return require('crypto').timingSafeEqual(
    Buffer.from(payload.csrf),
    Buffer.from(csrfHeader)
  );
}

export async function getAuthUser(token: string): Promise<{
  type: 'admin' | 'teacher' | 'student' | 'parent';
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

  if (payload.userType === 'parent') {
    const parent = await db.parent.findUnique({
      where: { id: payload.id },
      include: { students: { include: { student: true } } }
    });
    if (!parent || !parent.isActive) return null;
    return { type: 'parent', user: parent };
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
      details: details ?? null,
    }
  });
}

export async function logLoginAttempt(identifier: string, userType: string, success: boolean) {
  await db.loginAttempt.create({
    data: { identifier, userType, success }
  });
}
