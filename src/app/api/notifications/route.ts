import { verifyToken } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// ─── Auth: Verify teacher or admin ───────────────────────────────────
async function verifyTeacherOrAdmin(request: Request): Promise<{
  type: 'teacher' | 'admin';
  id: string;
  name: string;
} | null> {
  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) return null;
  const payload = verifyToken(authHeader.split(' ')[1]);
  if (!payload) return null;

  if (payload.userType === 'admin') {
    const admin = await db.admin.findUnique({ where: { id: payload.id } });
    if (!admin || !admin.isActive) return null;
    return { type: 'admin', id: admin.id, name: admin.name };
  }

  if (payload.userType === 'teacher') {
    const teacher = await db.teacher.findUnique({ where: { id: payload.id } });
    if (!teacher || !teacher.isActive) return null;
    return { type: 'teacher', id: teacher.id, name: teacher.name };
  }

  return null;
}

// ─── GET: Get notifications for current user ─────────────────────────
export async function GET(request: Request) {
  try {
    const user = await verifyTeacherOrAdmin(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized. Teacher or admin access required.' },
        { status: 401 }
      );
    }

    // Parse query params
    const { searchParams } = new URL(request.url);
    const unreadOnly = searchParams.get('unreadOnly') === 'true';
    const typeFilter = searchParams.get('type');

    // Build where clause
    const whereClause: Record<string, unknown> = {
      recipientType: user.type,
      recipientId: user.id,
    };

    if (unreadOnly) {
      whereClause.isRead = false;
    }

    if (typeFilter) {
      whereClause.type = typeFilter;
    }

    // Fetch notifications
    const notifications = await db.notification.findMany({
      where: whereClause,
      orderBy: { sentAt: 'desc' },
      include: {
        subscription: {
          select: {
            id: true,
            status: true,
            endDate: true,
            planType: true,
          },
        },
      },
    });

    // Count unread
    const unreadCount = await db.notification.count({
      where: {
        recipientType: user.type,
        recipientId: user.id,
        isRead: false,
      },
    });

    // Count by type
    const notificationsByType: Record<string, number> = {};
    for (const notif of notifications) {
      if (!notificationsByType[notif.type]) {
        notificationsByType[notif.type] = 0;
      }
      notificationsByType[notif.type] += 1;
    }

    const formattedNotifications = notifications.map((n) => ({
      id: n.id,
      type: n.type,
      title: n.title,
      message: n.message,
      isRead: n.isRead,
      sentAt: n.sentAt.toISOString(),
      readAt: n.readAt ? n.readAt.toISOString() : null,
      subscription: n.subscription
        ? {
            id: n.subscription.id,
            status: n.subscription.status,
            endDate: n.subscription.endDate.toISOString(),
            planType: n.subscription.planType,
          }
        : null,
    }));

    return NextResponse.json({
      success: true,
      data: {
        notifications: formattedNotifications,
        total: notifications.length,
        unreadCount,
        notificationsByType,
      },
    });
  } catch (error) {
    console.error('[Notifications GET] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
  }
}

// ─── PUT: Mark notification(s) as read ───────────────────────────────
export async function PUT(request: Request) {
  try {
    const user = await verifyTeacherOrAdmin(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized. Teacher or admin access required.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { notificationIds, markAllRead } = body;

    // Validate: must provide either notificationIds or markAllRead
    if (!notificationIds && markAllRead !== true) {
      return NextResponse.json(
        { error: 'Provide either notificationIds (array of strings) or markAllRead: true' },
        { status: 400 }
      );
    }

    if (markAllRead === true) {
      // Mark all unread notifications as read for this user
      const result = await db.notification.updateMany({
        where: {
          recipientType: user.type,
          recipientId: user.id,
          isRead: false,
        },
        data: {
          isRead: true,
          readAt: new Date(),
        },
      });

      return NextResponse.json({
        success: true,
        data: {
          markedCount: result.count,
          action: 'markAllRead',
        },
      });
    }

    // Mark specific notifications as read
    if (!Array.isArray(notificationIds) || notificationIds.length === 0) {
      return NextResponse.json(
        { error: 'notificationIds must be a non-empty array of strings' },
        { status: 400 }
      );
    }

    // Validate all IDs are strings
    if (!notificationIds.every((id: unknown) => typeof id === 'string')) {
      return NextResponse.json(
        { error: 'All notificationIds must be strings' },
        { status: 400 }
      );
    }

    // Only mark notifications that belong to this user
    const result = await db.notification.updateMany({
      where: {
        id: { in: notificationIds },
        recipientType: user.type,
        recipientId: user.id,
        isRead: false,
      },
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        markedCount: result.count,
        requestedCount: notificationIds.length,
        action: 'markSpecificRead',
      },
    });
  } catch (error) {
    console.error('[Notifications PUT] Error:', error);
    return NextResponse.json({ error: 'Failed to mark notifications as read' }, { status: 500 });
  }
}
