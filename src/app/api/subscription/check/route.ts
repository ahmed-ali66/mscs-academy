import { verifyToken } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// ─── GET: Check subscription status for a teacher (token-based) ──────
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

    // Only teachers can check their own subscription
    if (payload.userType !== 'teacher') {
      return NextResponse.json(
        { error: 'Only teachers can check subscription status' },
        { status: 403 }
      );
    }

    const teacher = await db.teacher.findUnique({
      where: { id: payload.id },
      include: { subscription: true },
    });

    if (!teacher || !teacher.isActive) {
      return NextResponse.json(
        { error: 'Teacher not found or inactive' },
        { status: 404 }
      );
    }

    const now = new Date();

    // No subscription at all
    if (!teacher.subscription) {
      return NextResponse.json({
        success: true,
        data: {
          active: false,
          expiryDate: null,
          daysRemaining: 0,
          planType: null,
          studentCount: 0,
          gradesCovered: [],
          notifications: [
            {
              type: 'warning',
              message: 'No subscription found. Please contact your administrator.',
            },
          ],
        },
      });
    }

    const subscription = teacher.subscription;

    // Check if subscription should be marked as expired
    if (subscription.status === 'active' && subscription.endDate < now) {
      await db.subscription.update({
        where: { id: subscription.id },
        data: { status: 'expired' },
      });

      // Create expiry notification
      await db.notification.create({
        data: {
          type: 'subscription_expiry',
          title: 'Subscription Expired',
          message: `Your subscription expired on ${subscription.endDate.toLocaleDateString()}. Please contact your administrator for renewal.`,
          recipientType: 'teacher',
          recipientId: teacher.id,
          subscriptionId: subscription.id,
          teacherId: teacher.id,
        },
      });

      return NextResponse.json({
        success: true,
        data: {
          active: false,
          expiryDate: subscription.endDate.toISOString(),
          daysRemaining: 0,
          planType: subscription.planType,
          studentCount: subscription.studentCount,
          gradesCovered: subscription.gradesCovered.split(',').map((g) => parseInt(g.trim(), 10)),
          notifications: [
            {
              type: 'expired',
              message: `Your subscription expired on ${subscription.endDate.toLocaleDateString()}. Access is restricted.`,
            },
          ],
        },
      });
    }

    // Active subscription
    if (subscription.status === 'active') {
      const daysRemaining = Math.ceil(
        (subscription.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );

      const notifications: Array<{ type: string; message: string }> = [];

      // Expiry warnings
      if (daysRemaining <= 30 && daysRemaining > 20) {
        notifications.push({
          type: 'warning',
          message: `Your subscription expires in ${daysRemaining} days. Please arrange renewal.`,
        });
      } else if (daysRemaining <= 20 && daysRemaining > 10) {
        notifications.push({
          type: 'urgent',
          message: `Your subscription expires in ${daysRemaining} days. Renewal is recommended soon.`,
        });
      } else if (daysRemaining <= 10 && daysRemaining > 1) {
        notifications.push({
          type: 'critical',
          message: `Your subscription expires in ${daysRemaining} days! Immediate action required.`,
        });
      } else if (daysRemaining <= 1) {
        notifications.push({
          type: 'critical',
          message: 'Your subscription expires TOMORROW! Renew immediately to avoid service interruption.',
        });
      }

      // Create automatic notifications for approaching expiry
      if (daysRemaining <= 30 && daysRemaining > 0) {
        const existingNotification = await db.notification.findFirst({
          where: {
            subscriptionId: subscription.id,
            type: 'subscription_expiry',
            teacherId: teacher.id,
            isRead: false,
          },
        });

        if (!existingNotification) {
          await db.notification.create({
            data: {
              type: 'subscription_expiry',
              title: `Subscription Expiring in ${daysRemaining} Days`,
              message: `Your subscription expires on ${subscription.endDate.toLocaleDateString()}. Please arrange renewal.`,
              recipientType: 'teacher',
              recipientId: teacher.id,
              subscriptionId: subscription.id,
              teacherId: teacher.id,
            },
          });
        }
      }

      return NextResponse.json({
        success: true,
        data: {
          active: true,
          expiryDate: subscription.endDate.toISOString(),
          daysRemaining,
          planType: subscription.planType,
          studentCount: subscription.studentCount,
          gradesCovered: subscription.gradesCovered.split(',').map((g) => parseInt(g.trim(), 10)),
          startDate: subscription.startDate.toISOString(),
          notifications,
        },
      });
    }

    // Suspended or other non-active status
    return NextResponse.json({
      success: true,
      data: {
        active: false,
        expiryDate: subscription.endDate.toISOString(),
        daysRemaining: 0,
        planType: subscription.planType,
        studentCount: subscription.studentCount,
        gradesCovered: subscription.gradesCovered.split(',').map((g) => parseInt(g.trim(), 10)),
        notifications: [
          {
            type: subscription.status === 'suspended' ? 'suspended' : 'expired',
            message: `Your subscription is ${subscription.status}. Please contact your administrator.`,
          },
        ],
      },
    });
  } catch (error) {
    console.error('[Subscription Check GET] Error:', error);
    return NextResponse.json({ error: 'Failed to check subscription status' }, { status: 500 });
  }
}
