---
Task ID: 1
Agent: Main Agent
Task: Fix Vercel build failure, admin login error, and missing setup page

Work Log:
- Diagnosed root cause: SQLite database doesn't work on Vercel serverless (no persistent filesystem)
- Switched Prisma from SQLite to PostgreSQL (for Neon/Vercel Postgres)
- Added GET handler to /api/admin/seed route (was missing, causing setup page to never show)
- Changed AuditLog.details from String to Json type for PostgreSQL compatibility
- Updated auth lib to use Prisma Json type directly (removed JSON.stringify/parse)
- Created vercel.json with proper build configuration (prisma generate + next build)
- Fixed package.json: removed broken standalone start script, added postinstall for Prisma
- Created .env.example for documentation
- Verified build passes locally
- Committed and pushed to GitHub

Stage Summary:
- Build now passes locally
- PostgreSQL schema ready for Neon/Vercel Postgres
- Setup page will now show when no admin exists (GET /api/admin/seed handler added)
- All changes pushed to GitHub (commits: 8b29571, 5c749d4)
- CRITICAL: User must set up PostgreSQL database on Vercel and add DATABASE_URL env var
