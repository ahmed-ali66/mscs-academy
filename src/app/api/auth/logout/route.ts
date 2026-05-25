import { NextRequest } from 'next/server';
import { verifyToken, logAudit } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return Response.json(
        { success: false, error: 'Authorization token is required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const payload = verifyToken(token);

    if (!payload) {
      return Response.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Log the logout action
    await logAudit('logout', payload.userType, payload.id, payload.username || payload.studentCode || null);

    return Response.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    console.error('Logout error:', error);
    return Response.json(
      { success: false, error: 'An internal server error occurred' },
      { status: 500 }
    );
  }
}
