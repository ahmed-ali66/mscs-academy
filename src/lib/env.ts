/**
 * MSCS Academy — Environment validation
 *
 * Forces fail-fast at boot if any required env var is missing or invalid.
 * This is critical for UAE compliance: a missing JWT_SECRET in production
 * would expose students to authentication bypass — a PDPL breach.
 */
type EnvSchema = {
  required: string[];
  optional: string[];
  secrets: string[]; // vars that must meet minimum entropy
};

const ENV_SCHEMA: EnvSchema = {
  required: [
    "DATABASE_URL",
    "JWT_SECRET",
    "SESSION_ENCRYPTION_KEY",
    "COOKIE_SECRET",
  ],
  optional: [
    "NEXT_PUBLIC_APP_NAME",
    "NEXT_PUBLIC_APP_URL",
    "NEXT_PUBLIC_ACADEMIC_YEAR",
    "NEXT_PUBLIC_TEACHER_URL",
    "RESEND_API_KEY",
    "SMTP_URL",
    "UNIFONIC_APP_SID",
    "TWILIO_ACCOUNT_SID",
    "BLOB_READ_WRITE_TOKEN",
    "R2_ACCOUNT_ID",
    "TURN_SERVER_URL",
    "UPSTASH_REDIS_REST_URL",
    "SENTRY_DSN",
    "DPO_EMAIL",
    "DPO_PHONE",
  ],
  secrets: ["JWT_SECRET", "SESSION_ENCRYPTION_KEY", "COOKIE_SECRET"],
};

const MIN_SECRET_LENGTH = 32;
const DEFAULT_SECRET_PATTERNS = [
  /change.?me/i,
  /your.?secret/i,
  /replace.?me/i,
  /mscs-academy-secret-key-2026/i, // The previous insecure fallback
  /^test/i,
  /^example/i,
];

export interface EnvValidationResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
}

export function validateEnv(): EnvValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const isProd = process.env.NODE_ENV === "production";

  // Required vars
  for (const key of ENV_SCHEMA.required) {
    const value = process.env[key];
    if (!value || value.trim() === "") {
      errors.push(`Missing required env var: ${key}`);
    }
  }

  // Secrets — minimum length + no default/placeholder values
  for (const key of ENV_SCHEMA.secrets) {
    const value = process.env[key];
    if (!value) continue; // already caught by required check above
    if (value.length < MIN_SECRET_LENGTH) {
      errors.push(
        `${key} must be at least ${MIN_SECRET_LENGTH} characters (got ${value.length}). Generate with: openssl rand -base64 48`
      );
    }
    if (DEFAULT_SECRET_PATTERNS.some((p) => p.test(value))) {
      errors.push(
        `${key} appears to be a default/placeholder value. Generate a real secret with: openssl rand -base64 48`
      );
    }
  }

  // DATABASE_URL sanity check
  const dbUrl = process.env.DATABASE_URL;
  if (dbUrl) {
    if (!dbUrl.startsWith("postgresql://") && !dbUrl.startsWith("postgres://")) {
      errors.push("DATABASE_URL must be a PostgreSQL connection string (must start with postgresql:// or postgres://)");
    }
    if (isProd && !dbUrl.includes("sslmode=")) {
      warnings.push("DATABASE_URL should include sslmode=require for production PostgreSQL connections");
    }
  }

  // Warnings only — optional but recommended
  if (isProd) {
    if (!process.env.DPO_EMAIL) {
      warnings.push("DPO_EMAIL not set — required for PDPL compliance. A Data Protection Officer contact must be available for data subject requests.");
    }
    if (!process.env.SENTRY_DSN) {
      warnings.push("SENTRY_DSN not set — error monitoring strongly recommended for production.");
    }
    if (!process.env.UPSTASH_REDIS_REST_URL) {
      warnings.push("UPSTASH_REDIS_REST_URL not set — rate limiting will fall back to in-memory (per-instance) which is less effective on serverless.");
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Throw if env is invalid — call at app boot in middleware.
 * In development, just log warnings; in production, hard-fail.
 */
export function assertEnvOrThrow(): void {
  const result = validateEnv();
  if (result.ok) {
    if (result.warnings.length > 0) {
      console.warn("[env] Configuration warnings:");
      for (const w of result.warnings) console.warn(`  ⚠ ${w}`);
    }
    return;
  }
  if (process.env.NODE_ENV === "production") {
    console.error("[env] FATAL — environment configuration invalid:");
    for (const e of result.errors) console.error(`  ✗ ${e}`);
    throw new Error(
      `Environment validation failed with ${result.errors.length} error(s). See server logs.`
    );
  } else {
    console.warn("[env] Development mode — env validation warnings:");
    for (const e of result.errors) console.warn(`  ⚠ ${e}`);
  }
}
