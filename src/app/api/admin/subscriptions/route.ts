import { verifyToken, logAudit } from '@/lib/auth';
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

// ─── Helper: Create expiry notifications ────────────────────────────
async function createExpiryNotifications(subscription: {
  id: string;
  teacherId: string;
  adminId: string;
  endDate: Date;
  status: string;
}) {
  if (subscription.status !== 'active') return;

  const now = new Date();
  const daysUntilExpiry = Math.ceil(
    (subscription.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Create notifications at 30, 20, 10, and 1 day(s) before expiry
  const notificationThresholds = [30, 20, 10, 1];

  for (const days of notificationThresholds) {
    // Check if a notification for this threshold already exists
    const existingNotification = await db.notification.findFirst({
      where: {
        subscriptionId: subscription.id,
        type: 'subscription_expiry',
        message: { contains: `${days} day` },
      },
    });

    if (daysUntilExpiry <= days && !existingNotification) {
      const message =
        days === 1
          ? `Subscription expires TOMORROW! Immediate action required.`
          : `Subscription expires in ${days} days. Please arrange renewal.`;

      // Notify teacher
      await db.notification.create({
        data: {
          type: 'subscription_expiry',
          title: `Subscription Expiring in ${days === 1 ? '1 Day' : `${days} Days`}`,
          message,
          recipientType: 'teacher',
          recipientId: subscription.teacherId,
          subscriptionId: subscription.id,
          teacherId: subscription.teacherId,
        },
      });

      // Notify admin
      await db.notification.create({
        data: {
          type: 'subscription_expiry',
          title: `Teacher Subscription Expiring in ${days === 1 ? '1 Day' : `${days} Days`}`,
          message,
          recipientType: 'admin',
          recipientId: subscription.adminId,
          subscriptionId: subscription.id,
          adminId: subscription.adminId,
        },
      });
    }
  }
}

// ─── GET: List all subscriptions ────────────────────────────────────
export async function GET(request: Request) {
  try {
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
    }

    const subscriptions = await db.subscription.findMany({
      include: {
        teacher: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            schoolName: true,
            isActive: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Check and update any expired subscriptions
    const now = new Date();
    const updatedSubscriptions = await Promise.all(
      subscriptions.map(async (sub) => {
        if (sub.status === 'active' && sub.endDate < now) {
          const updated = await db.subscription.update({
            where: { id: sub.id },
            data: { status: 'expired' },
            include: {
              teacher: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  phone: true,
                  schoolName: true,
                  isActive: true,
                },
              },
            },
          });
          return updated;
        }
        // Check for upcoming expiries and create notifications
        await createExpiryNotifications(sub);
        return sub;
      })
    );

    await logAudit('list_subscriptions', 'admin', admin.id, admin.name);

    return NextResponse.json({ success: true, data: updatedSubscriptions });
  } catch (error) {
    console.error('[Admin Subscriptions GET] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch subscriptions' }, { status: 500 });
  }
}

// ─── POST: Create subscription ──────────────────────────────────────
export async function POST(request: Request) {
  try {
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
    }

    const body = await request.json();
    const { teacherId, startDate, endDate, studentCount, gradesCovered, amount, planType } = body;

    if (!teacherId || !startDate || !endDate || studentCount === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: teacherId, startDate, endDate, studentCount' },
        { status: 400 }
      );
    }

    // Verify teacher exists
    const teacher = await db.teacher.findUnique({ where: { id: teacherId } });
    if (!teacher) {
      return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
    }

    // Check if teacher already has an active subscription
    const existingSub = await db.subscription.findUnique({ where: { teacherId } });
    if (existingSub && existingSub.status === 'active') {
      return NextResponse.json(
        { error: 'Teacher already has an active subscription. Use PUT to update or renew.' },
        { status: 409 }
      );
    }

    const parsedStart = new Date(startDate);
    const parsedEnd = new Date(endDate);

    if (parsedEnd <= parsedStart) {
      return NextResponse.json(
        { error: 'End date must be after start date' },
        { status: 400 }
      );
    }

    // If teacher has an existing expired subscription, update it instead
    let subscription;
    if (existingSub && existingSub.status !== 'active') {
      subscription = await db.subscription.update({
        where: { id: existingSub.id },
        data: {
          adminId: admin.id,
          startDate: parsedStart,
          endDate: parsedEnd,
          studentCount,
          gradesCovered: gradesCovered || '6,7,8,9',
          amount: amount ?? 0,
          planType: planType || 'semester',
          status: 'active',
          autoRenew: false,
        },
        include: {
          teacher: {
            select: { id: true, name: true, email: true, phone: true, schoolName: true },
          },
        },
      });
    } else {
      subscription = await db.subscription.create({
        data: {
          teacherId,
          adminId: admin.id,
          startDate: parsedStart,
          endDate: parsedEnd,
          studentCount,
          gradesCovered: gradesCovered || '6,7,8,9',
          amount: amount ?? 0,
          planType: planType || 'semester',
          status: 'active',
        },
        include: {
          teacher: {
            select: { id: true, name: true, email: true, phone: true, schoolName: true },
          },
        },
      });
    }

    // Create expiry notifications for the new subscription
    await createExpiryNotifications(subscription);

    // Create a welcome notification for the teacher
    await db.notification.create({
      data: {
        type: 'subscription_expiry',
        title: 'Subscription Activated',
        message: `Your subscription has been activated from ${parsedStart.toLocaleDateString()} to ${parsedEnd.toLocaleDateString()} for ${studentCount} students.`,
        recipientType: 'teacher',
        recipientId: teacherId,
        subscriptionId: subscription.id,
        teacherId,
      },
    });

    await logAudit('create_subscription', 'admin', admin.id, admin.name, 'subscription', subscription.id, {
      teacherId,
      teacherName: teacher.name,
      startDate,
      endDate,
      studentCount,
      planType: planType || 'semester',
    });

    return NextResponse.json({ success: true, data: subscription }, { status: 201 });
  } catch (error) {
    console.error('[Admin Subscriptions POST] Error:', error);
    return NextResponse.json({ error: 'Failed to create subscription' }, { status: 500 });
  }
}

// ─── PUT: Update/renew subscription ─────────────────────────────────
export async function PUT(request: Request) {
  try {
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 401 });
    }

    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing required field: id' }, { status: 400 });
    }

    const existing = await db.subscription.findUnique({
      where: { id },
      include: { teacher: { select: { id: true, name: true } } },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Subscription not found' }, { status: 404 });
    }

    const data: Record<string, unknown> = {};

    if (updates.startDate !== undefined) data.startDate = new Date(updates.startDate);
    if (updates.endDate !== undefined) data.endDate = new Date(updates.endDate);
    if (updates.studentCount !== undefined) data.studentCount = updates.studentCount;
    if (updates.gradesCovered !== undefined) data.gradesCovered = updates.gradesCovered;
    if (updates.amount !== undefined) data.amount = updates.amount;
    if (updates.planType !== undefined) data.planType = updates.planType;
    if (updates.autoRenew !== undefined) data.autoRenew = updates.autoRenew;
    if (updates.status !== undefined) data.status = updates.status;
    if (updates.currency !== undefined) data.currency = updates.currency;

    // Validate date range if both dates are being set
    const finalStartDate = data.startDate ? (data.startDate as Date) : existing.startDate;
    const finalEndDate = data.endDate ? (data.endDate as Date) : existing.endDate;
    if (finalEndDate <= finalStartDate) {
      return NextResponse.json(
        { error: 'End date must be after start date' },
        { status: 400 }
      );
    }

    // If renewing (setting status back to active with new end date)
    if (updates.status === 'active' && updates.endDate && existing.status !== 'active') {
      data.status = 'active';
    }

    const subscription = await db.subscription.update({
      where: { id },
      data,
      include: {
        teacher: {
          select: { id: true, name: true, email: true, phone: true, schoolName: true },
        },
      },
    });

    // Re-check expiry notifications with updated dates
    await createExpiryNotifications(subscription);

    // If this is a renewal, notify the teacher
    if (updates.status === 'active' && existing.status !== 'active') {
      await db.notification.create({
        data: {
          type: 'account',
          title: 'Subscription Renewed',
          message: `Your subscription has been renewed. New expiry: ${subscription.endDate.toLocaleDateString()}.`,
          recipientType: 'teacher',
          recipientId: existing.teacherId,
          subscriptionId: subscription.id,
          teacherId: existing.teacherId,
        },
      });
    }

    await logAudit('update_subscription', 'admin', admin.id, admin.name, 'subscription', id, {
      teacherName: existing.teacher.name,
      previousStatus: existing.status,
      newStatus: updates.status,
      updates,
    });

    return NextResponse.json({ success: true, data: subscription });
  } catch (error) {
    console.error('[Admin Subscriptions PUT] Error:', error);
    return NextResponse.json({ error: 'Failed to update subscription' }, { status: 500 });
  }
}
