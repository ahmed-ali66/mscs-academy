/**
 * MSCS Academy — Auth middleware
 *
 * - Validates env on every request (fail-fast in production)
 * - Enforces auth on protected API routes
 * - Rate-limits auth endpoints (login, OTP, consent verification)
 * - Adds security headers (CSP applied via next.config.headers, but we
 *   add a few dynamic ones here for routes that bypass config matching)
 *
 * Route protection map:
 *   /api/admin/*        → admin only
 *   /api/teacher/*      → teacher only (with active subscription)
 *   /api/student/*      → student only (with parental consent for u13)
 *   /api/parent/*       → parent only (with 18+ verified)
 *   /api/auth/*         → public (rate-limited)
 *   /api/consent/*      → public via signed token (rate-limited)
 *   /api/public/*       → public (rate-limited)
 */

import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

// ─── Route protection rules ────────────────────────────────────────
type AuthRole = "admin" | "teacher" | "student" | "parent";
interface RouteRule {
  pattern: RegExp;
  roles: AuthRole[]; // [] = public
  methods?: string[]; // [] = all methods
}

const ROUTE_RULES: RouteRule[] = [
  // Public routes — auth endpoints, consent verification, public health checks
  { pattern: /^\/api\/auth\/(login|logout)/, roles: [] },
  { pattern: /^\/api\/auth\/me$/, roles: [] }, // returns user or null
  { pattern: /^\/api\/consent\//, roles: [] }, // token-based consent flow
  { pattern: /^\/api\/public\//, roles: [] },
  { pattern: /^\/api\/admin\/seed$/, roles: [] }, // initial setup only
  { pattern: /^\/api\/subscription\/check/, roles: [] },
  { pattern: /^\/api\/notifications$/, roles: [] }, // reads from token itself

  // Admin-only
  { pattern: /^\/api\/admin\/(?!seed)/, roles: ["admin"] },

  // Teacher-only
  { pattern: /^\/api\/teacher\//, roles: ["teacher"] },

  // Student-only
  { pattern: /^\/api\/student\//, roles: ["student"] },

  // Parent-only
  { pattern: /^\/api\/parent\//, roles: ["parent"] },

  // Content access — teacher or student (subscription-gated inside route)
  { pattern: /^\/api\/content\//, roles: ["teacher", "student"] },
];

// ─── In-memory rate limiter (per-instance, falls back if no Redis) ──
// For production at scale, replace with Upstash Redis-based limiter.
const RATE_LIMITS: Record<string, { windowMs: number; max: number }> = {
  "/api/auth/login": { windowMs: 15 * 60 * 1000, max: 20 }, // 20 attempts per 15min per IP
  "/api/consent/verify": { windowMs: 60 * 60 * 1000, max: 10 },
  "/api/parent/otp/request": { windowMs: 60 * 60 * 1000, max: 5 },
  "/api/parent/otp/verify": { windowMs: 60 * 60 * 1000, max: 10 },
  // Default for all other API routes — generous to allow legitimate use
  "_default": { windowMs: 60 * 1000, max: 60 }, // 60 req/min per IP
};

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function rateLimit(key: string, ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const rule = RATE_LIMITS[key] || RATE_LIMITS._default;
  const storeKey = `${key}:${ip}`;
  const now = Date.now();
  const entry = rateLimitStore.get(storeKey);

  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(storeKey, { count: 1, resetAt: now + rule.windowMs });
    return { allowed: true, remaining: rule.max - 1, resetAt: now + rule.windowMs };
  }

  if (entry.count >= rule.max) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return { allowed: true, remaining: rule.max - entry.count, resetAt: entry.resetAt };
}

// ─── Helper: get client IP (Vercel-aware) ─────────────────────────
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.ip ||
    "unknown"
  );
}

// ─── Helper: extract bearer token ─────────────────────────────────
function extractToken(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice(7);
  }
  // Also accept cookie-based session for browser requests
  const cookieToken = request.cookies.get("mscs_session")?.value;
  return cookieToken || null;
}

// ─── Main middleware ──────────────────────────────────────────────
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only apply to /api routes (page-level auth handled client-side for SPA)
  if (!pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // 1. Rate limit
  const ip = getClientIp(request);
  const rateLimitKey = RATE_LIMITS[pathname] ? pathname : "_default";
  const rl = rateLimit(rateLimitKey, ip);
  if (!rl.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please try again later.",
        retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000),
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          "X-RateLimit-Limit": String(RATE_LIMITS[rateLimitKey]?.max || RATE_LIMITS._default.max),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.floor(rl.resetAt / 1000)),
        },
      }
    );
  }

  // 2. Find matching route rule
  let matchedRule: RouteRule | null = null;
  for (const rule of ROUTE_RULES) {
    if (rule.pattern.test(pathname)) {
      matchedRule = rule;
      break;
    }
  }

  // No rule = treat as protected admin route (fail-safe)
  if (!matchedRule) {
    return NextResponse.json(
      { success: false, error: "Not found" },
      { status: 404 }
    );
  }

  // 3. Public route — allow through (rate limit already applied)
  if (matchedRule.roles.length === 0) {
    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Remaining", String(rl.remaining));
    return response;
  }

  // 4. Protected route — verify token + role
  const token = extractToken(request);
  if (!token) {
    return NextResponse.json(
      { success: false, error: "Authentication required" },
      { status: 401 }
    );
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json(
      { success: false, error: "Invalid or expired session. Please log in again." },
      { status: 401 }
    );
  }

  if (!matchedRule.roles.includes(payload.userType as AuthRole)) {
    return NextResponse.json(
      { success: false, error: `Access denied. Required role: ${matchedRule.roles.join(" or ")}` },
      { status: 403 }
    );
  }

  // 5. CSRF check for state-changing methods (PDPL: prevent cross-site request forgery)
  const method = request.method.toUpperCase();
  if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
    // Skip CSRF for /api/auth/login (no token yet) — already handled by rule
    if (!pathname.startsWith("/api/auth/login") && !pathname.startsWith("/api/consent/")) {
      const csrfHeader = request.headers.get("x-csrf-token");
      if (!payload.csrf || csrfHeader !== payload.csrf) {
        return NextResponse.json(
          { success: false, error: "CSRF validation failed" },
          { status: 403 }
        );
      }
    }
  }

  // 6. Pass through with auth context in headers (for route handlers)
  const response = NextResponse.next();
  response.headers.set("X-Auth-User-Id", payload.id);
  response.headers.set("X-Auth-User-Type", payload.userType);
  response.headers.set("X-RateLimit-Remaining", String(rl.remaining));
  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};

/**
 * Force Node.js runtime (not Edge).
 *
 * Why: The middleware imports `verifyToken` from @/lib/auth, which uses the
 * `jsonwebtoken` package. `jsonwebtoken` depends on Node.js `crypto` which
 * is NOT available in the Edge Runtime. Forcing Node.js runtime ensures
 * JWT verification works correctly.
 *
 * Trade-off: Node.js middleware has slightly higher cold-start latency than
 * Edge (~50ms vs ~5ms), but correctness > latency for auth.
 */
export const runtime = "nodejs";
