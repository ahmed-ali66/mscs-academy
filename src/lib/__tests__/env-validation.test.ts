/**
 * Sample tests for the env validation module.
 *
 * Verifies that environment variable validation correctly enforces
 * PDPL compliance requirements (no default secrets in production).
 */
import { validateEnv } from "@/lib/env";

describe("env validation", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("should fail when DATABASE_URL is missing", () => {
    delete process.env.DATABASE_URL;
    delete process.env.JWT_SECRET;
    delete process.env.SESSION_ENCRYPTION_KEY;
    delete process.env.COOKIE_SECRET;
    const result = validateEnv();
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => e.includes("DATABASE_URL"))).toBe(true);
  });

  it("should fail when JWT_SECRET is too short", () => {
    process.env.DATABASE_URL = "postgresql://user:pass@host/db";
    process.env.JWT_SECRET = "short"; // < 32 chars
    process.env.SESSION_ENCRYPTION_KEY = "a".repeat(64);
    process.env.COOKIE_SECRET = "b".repeat(64);
    const result = validateEnv();
    expect(result.ok).toBe(false);
    expect(
      result.errors.some((e) => e.includes("JWT_SECRET") && e.includes("32"))
    ).toBe(true);
  });

  it("should fail when JWT_SECRET is a default/placeholder value", () => {
    process.env.DATABASE_URL = "postgresql://user:pass@host/db";
    process.env.JWT_SECRET = "mscs-academy-secret-key-2026-change-in-production";
    process.env.SESSION_ENCRYPTION_KEY = "a".repeat(64);
    process.env.COOKIE_SECRET = "b".repeat(64);
    const result = validateEnv();
    expect(result.ok).toBe(false);
    expect(
      result.errors.some(
        (e) => e.includes("JWT_SECRET") && e.includes("placeholder")
      )
    ).toBe(true);
  });

  it("should fail when DATABASE_URL is not PostgreSQL", () => {
    process.env.DATABASE_URL = "mysql://user:pass@host/db";
    process.env.JWT_SECRET = "a".repeat(48);
    process.env.SESSION_ENCRYPTION_KEY = "b".repeat(64);
    process.env.COOKIE_SECRET = "c".repeat(64);
    const result = validateEnv();
    expect(result.ok).toBe(false);
    expect(
      result.errors.some((e) => e.includes("PostgreSQL"))
    ).toBe(true);
  });

  it("should pass when all required env vars are set with valid values", () => {
    process.env.DATABASE_URL = "postgresql://user:pass@host:5432/db?sslmode=require";
    process.env.JWT_SECRET = "a-super-secure-random-jwt-secret-32+chars";
    process.env.SESSION_ENCRYPTION_KEY = "b".repeat(64);
    process.env.COOKIE_SECRET = "c".repeat(64);
    process.env.NODE_ENV = "development";
    const result = validateEnv();
    expect(result.errors).toEqual([]);
    // warnings may exist for missing optional vars — that's fine
  });

  it("should warn about missing DPO_EMAIL in production", () => {
    process.env.DATABASE_URL = "postgresql://user:pass@host:5432/db?sslmode=require";
    process.env.JWT_SECRET = "a-super-secure-random-jwt-secret-32+chars";
    process.env.SESSION_ENCRYPTION_KEY = "b".repeat(64);
    process.env.COOKIE_SECRET = "c".repeat(64);
    process.env.NODE_ENV = "production";
    delete process.env.DPO_EMAIL;
    const result = validateEnv();
    expect(
      result.warnings.some((w) => w.includes("DPO_EMAIL"))
    ).toBe(true);
  });
});
