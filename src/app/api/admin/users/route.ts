import { verifyToken, logAudit, hashPassword, generateStudentCode } from '@/lib/auth';
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

// ─── GET: List users ────────────────────────────────────────────────
export async function GET(request: Request) {
  try {
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // teachers | students | groups
    const gradeParam = searchParams.get('grade'); // 6 | 7 | 8 | 9
    const grade = gradeParam ? parseInt(gradeParam, 10) : undefined;

    let result: Record<string, unknown> = {};

    if (!type || type === 'teachers') {
      const teachers = await db.teacher.findMany({
        where: {
          ...(grade ? {} : {}),
        },
        select: {
          id: true,
          username: true,
          name: true,
          email: true,
          phone: true,
          schoolName: true,
          isActive: true,
          lastLoginAt: true,
          createdAt: true,
          updatedAt: true,
          _count: { select: { studentGroups: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
      result.teachers = teachers;
    }

    if (!type || type === 'students') {
      const students = await db.student.findMany({
        where: {
          ...(grade ? { grade } : {}),
        },
        select: {
          id: true,
          studentCode: true,
          name: true,
          grade: true,
          section: true,
          academicYear: true,
          isActive: true,
          lastLoginAt: true,
          createdAt: true,
          updatedAt: true,
          studentGroupId: true,
          studentGroup: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
      result.students = students;
    }

    if (!type || type === 'groups') {
      const groups = await db.studentGroup.findMany({
        where: {
          ...(grade ? { grade } : {}),
        },
        select: {
          id: true,
          name: true,
          grade: true,
          section: true,
          academicYear: true,
          createdAt: true,
          updatedAt: true,
          teacher: { select: { id: true, name: true, email: true } },
          _count: { select: { students: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
      result.groups = groups;
    }

    await logAudit('list_users', 'admin', admin.id, admin.name, undefined, undefined, { type, grade });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('[Admin Users GET] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// ─── POST: Create user ──────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
    }

    const body = await request.json();
    const { userType, ...userData } = body;

    if (!userType || !['teacher', 'student'].includes(userType)) {
      return NextResponse.json({ error: 'userType must be "teacher" or "student"' }, { status: 400 });
    }

    if (userType === 'teacher') {
      const { username, password, name, email, phone, schoolName } = userData;

      if (!username || !password || !name || !email) {
        return NextResponse.json(
          { error: 'Missing required fields: username, password, name, email' },
          { status: 400 }
        );
      }

      // Check for duplicate username or email
      const existing = await db.teacher.findFirst({
        where: { OR: [{ username }, { email }] },
      });
      if (existing) {
        return NextResponse.json(
          { error: existing.username === username ? 'Username already exists' : 'Email already exists' },
          { status: 409 }
        );
      }

      const passwordHash = await hashPassword(password);

      const teacher = await db.teacher.create({
        data: {
          username,
          passwordHash,
          name,
          email,
          phone: phone || null,
          schoolName: schoolName || null,
        },
      });

      await logAudit('create_user', 'admin', admin.id, admin.name, 'teacher', teacher.id, {
        username,
        name,
        email,
      });

      return NextResponse.json(
        {
          success: true,
          data: {
            id: teacher.id,
            username: teacher.username,
            name: teacher.name,
            email: teacher.email,
            phone: teacher.phone,
            schoolName: teacher.schoolName,
            isActive: teacher.isActive,
            createdAt: teacher.createdAt,
          },
        },
        { status: 201 }
      );
    }

    if (userType === 'student') {
      const { name, grade, section, academicYear, studentGroupId } = userData;

      if (!name || !grade || !section || !academicYear) {
        return NextResponse.json(
          { error: 'Missing required fields: name, grade, section, academicYear' },
          { status: 400 }
        );
      }

      const gradeNum = typeof grade === 'string' ? parseInt(grade, 10) : grade;
      if (![6, 7, 8, 9].includes(gradeNum)) {
        return NextResponse.json({ error: 'Grade must be 6, 7, 8, or 9' }, { status: 400 });
      }

      // Validate studentGroupId if provided
      if (studentGroupId) {
        const group = await db.studentGroup.findUnique({ where: { id: studentGroupId } });
        if (!group) {
          return NextResponse.json({ error: 'Student group not found' }, { status: 404 });
        }
      }

      // Auto-generate student code: count existing students with same grade/section/year
      const existingCount = await db.student.count({
        where: { grade: gradeNum, section, academicYear },
      });
      const studentCode = generateStudentCode(gradeNum, section, academicYear, existingCount + 1);

      const student = await db.student.create({
        data: {
          studentCode,
          name,
          grade: gradeNum,
          section,
          academicYear,
          studentGroupId: studentGroupId || null,
        },
      });

      await logAudit('create_user', 'admin', admin.id, admin.name, 'student', student.id, {
        studentCode,
        name,
        grade: gradeNum,
        section,
        academicYear,
      });

      return NextResponse.json(
        {
          success: true,
          data: {
            id: student.id,
            studentCode: student.studentCode,
            name: student.name,
            grade: student.grade,
            section: student.section,
            academicYear: student.academicYear,
            studentGroupId: student.studentGroupId,
            isActive: student.isActive,
            createdAt: student.createdAt,
          },
        },
        { status: 201 }
      );
    }

    return NextResponse.json({ error: 'Invalid userType' }, { status: 400 });
  } catch (error) {
    console.error('[Admin Users POST] Error:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

// ─── PUT: Update user ───────────────────────────────────────────────
export async function PUT(request: Request) {
  try {
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
    }

    const body = await request.json();
    const { id, userType, ...updates } = body;

    if (!id || !userType) {
      return NextResponse.json({ error: 'Missing required fields: id, userType' }, { status: 400 });
    }

    if (!['teacher', 'student'].includes(userType)) {
      return NextResponse.json({ error: 'userType must be "teacher" or "student"' }, { status: 400 });
    }

    if (userType === 'teacher') {
      const existing = await db.teacher.findUnique({ where: { id } });
      if (!existing) {
        return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
      }

      const data: Record<string, unknown> = {};

      if (updates.name !== undefined) data.name = updates.name;
      if (updates.email !== undefined) data.email = updates.email;
      if (updates.phone !== undefined) data.phone = updates.phone;
      if (updates.schoolName !== undefined) data.schoolName = updates.schoolName;
      if (updates.isActive !== undefined) data.isActive = updates.isActive;
      if (updates.username !== undefined) data.username = updates.username;

      // Hash password if provided
      if (updates.password) {
        data.passwordHash = await hashPassword(updates.password);
      }

      // Check for duplicate username/email if being updated
      if (updates.username || updates.email) {
        const duplicate = await db.teacher.findFirst({
          where: {
            OR: [
              ...(updates.username ? [{ username: updates.username }] : []),
              ...(updates.email ? [{ email: updates.email }] : []),
            ],
            NOT: { id },
          },
        });
        if (duplicate) {
          return NextResponse.json(
            { error: duplicate.username === updates.username ? 'Username already exists' : 'Email already exists' },
            { status: 409 }
          );
        }
      }

      const teacher = await db.teacher.update({
        where: { id },
        data,
      });

      await logAudit('update_user', 'admin', admin.id, admin.name, 'teacher', id, updates);

      return NextResponse.json({
        success: true,
        data: {
          id: teacher.id,
          username: teacher.username,
          name: teacher.name,
          email: teacher.email,
          phone: teacher.phone,
          schoolName: teacher.schoolName,
          isActive: teacher.isActive,
          updatedAt: teacher.updatedAt,
        },
      });
    }

    if (userType === 'student') {
      const existing = await db.student.findUnique({ where: { id } });
      if (!existing) {
        return NextResponse.json({ error: 'Student not found' }, { status: 404 });
      }

      const data: Record<string, unknown> = {};

      if (updates.name !== undefined) data.name = updates.name;
      if (updates.grade !== undefined) {
        const gradeNum = typeof updates.grade === 'string' ? parseInt(updates.grade, 10) : updates.grade;
        if (![6, 7, 8, 9].includes(gradeNum)) {
          return NextResponse.json({ error: 'Grade must be 6, 7, 8, or 9' }, { status: 400 });
        }
        data.grade = gradeNum;
      }
      if (updates.section !== undefined) data.section = updates.section;
      if (updates.academicYear !== undefined) data.academicYear = updates.academicYear;
      if (updates.studentGroupId !== undefined) data.studentGroupId = updates.studentGroupId;
      if (updates.isActive !== undefined) data.isActive = updates.isActive;

      const student = await db.student.update({
        where: { id },
        data,
      });

      await logAudit('update_user', 'admin', admin.id, admin.name, 'student', id, updates);

      return NextResponse.json({
        success: true,
        data: {
          id: student.id,
          studentCode: student.studentCode,
          name: student.name,
          grade: student.grade,
          section: student.section,
          academicYear: student.academicYear,
          studentGroupId: student.studentGroupId,
          isActive: student.isActive,
          updatedAt: student.updatedAt,
        },
      });
    }

    return NextResponse.json({ error: 'Invalid userType' }, { status: 400 });
  } catch (error) {
    console.error('[Admin Users PUT] Error:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

// ─── DELETE: Deactivate user (soft delete) ──────────────────────────
export async function DELETE(request: Request) {
  try {
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
    }

    const body = await request.json();
    const { id, userType } = body;

    if (!id || !userType) {
      return NextResponse.json({ error: 'Missing required fields: id, userType' }, { status: 400 });
    }

    if (!['teacher', 'student'].includes(userType)) {
      return NextResponse.json({ error: 'userType must be "teacher" or "student"' }, { status: 400 });
    }

    if (userType === 'teacher') {
      const existing = await db.teacher.findUnique({ where: { id } });
      if (!existing) {
        return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
      }

      await db.teacher.update({
        where: { id },
        data: { isActive: false },
      });

      await logAudit('delete_user', 'admin', admin.id, admin.name, 'teacher', id, {
        name: existing.name,
        username: existing.username,
        action: 'soft_delete',
      });

      return NextResponse.json({
        success: true,
        message: `Teacher "${existing.name}" has been deactivated. Data retained per policy.`,
      });
    }

    if (userType === 'student') {
      const existing = await db.student.findUnique({ where: { id } });
      if (!existing) {
        return NextResponse.json({ error: 'Student not found' }, { status: 404 });
      }

      await db.student.update({
        where: { id },
        data: { isActive: false },
      });

      await logAudit('delete_user', 'admin', admin.id, admin.name, 'student', id, {
        name: existing.name,
        studentCode: existing.studentCode,
        action: 'soft_delete',
      });

      return NextResponse.json({
        success: true,
        message: `Student "${existing.name}" (${existing.studentCode}) has been deactivated. Data retained per policy.`,
      });
    }

    return NextResponse.json({ error: 'Invalid userType' }, { status: 400 });
  } catch (error) {
    console.error('[Admin Users DELETE] Error:', error);
    return NextResponse.json({ error: 'Failed to deactivate user' }, { status: 500 });
  }
}
