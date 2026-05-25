import { verifyToken, logAudit, hashPassword } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// ─── POST: Seed initial admin & system settings (one-time only) ─────
export async function POST(request: Request) {
  try {
    // Prevent re-seeding: check if any admin already exists
    const existingAdminCount = await db.admin.count();
    if (existingAdminCount > 0) {
      return NextResponse.json(
        { error: 'Database already seeded. Admin accounts exist. Re-seeding is not allowed.' },
        { status: 409 }
      );
    }

    const body = await request.json();
    const { username, password, name, email } = body;

    if (!username || !password || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: username, password, name, email' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    // ── Create the initial admin account ──────────────────────────────
    const passwordHash = await hashPassword(password);

    const admin = await db.admin.create({
      data: {
        username,
        passwordHash,
        name,
        email,
        isActive: true,
      },
    });

    // ── Create default system settings ────────────────────────────────
    const defaultSettings = [
      {
        key: 'platform_name',
        value: 'MSCS Academy',
        description: 'Name of the educational platform',
      },
      {
        key: 'academic_year',
        value: '2025-2026',
        description: 'Current academic year',
      },
      {
        key: 'supported_grades',
        value: '6,7,8,9',
        description: 'Comma-separated list of supported grade levels',
      },
      {
        key: 'supported_sections',
        value: 'A,B,C,D',
        description: 'Comma-separated list of class sections',
      },
      {
        key: 'default_subscription_duration_days',
        value: '180',
        description: 'Default subscription duration in days (semester)',
      },
      {
        key: 'expiry_notification_days',
        value: '30,20,10,1',
        description: 'Days before expiry to send notifications (comma-separated)',
      },
      {
        key: 'max_students_per_teacher',
        value: '200',
        description: 'Maximum number of students allowed per teacher subscription',
      },
      {
        key: 'quiz_pass_percentage',
        value: '60',
        description: 'Minimum percentage to pass a quiz',
      },
      {
        key: 'platform_currency',
        value: 'AED',
        description: 'Default currency for subscriptions and payments',
      },
      {
        key: 'session_timeout_minutes',
        value: '1440',
        description: 'Session timeout in minutes (24 hours default)',
      },
    ];

    await db.systemSetting.createMany({
      data: defaultSettings,
    });

    // ── Log the seeding action ────────────────────────────────────────
    await logAudit('seed_database', 'system', admin.id, admin.name, 'admin', admin.id, {
      action: 'initial_seed',
      adminUsername: username,
      adminEmail: email,
      adminName: name,
      settingsCreated: defaultSettings.length,
    });

    // ── Create a welcome notification for the new admin ───────────────
    await db.notification.create({
      data: {
        type: 'system',
        title: 'Welcome to MSCS Academy Admin',
        message: `Hello ${name}! The MSCS Academy platform has been initialized successfully. You can now manage teachers, students, subscriptions, and more from the admin panel.`,
        recipientType: 'admin',
        recipientId: admin.id,
        adminId: admin.id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Database seeded successfully. Initial admin account and default system settings created.',
        data: {
          admin: {
            id: admin.id,
            username: admin.username,
            name: admin.name,
            email: admin.email,
          },
          settingsCreated: defaultSettings.length,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[Admin Seed POST] Error:', error);
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}
