import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
  // Check ALL schemas — Al Reef might use a different schema
  console.log("=== ALL schemas in database ===");
  const schemas = await db.$queryRawUnsafe<{ schema_name: string }[]>(`
    SELECT schema_name FROM information_schema.schemata 
    ORDER BY schema_name;
  `);
  console.log(`All schemas (${schemas.length}):`);
  for (const s of schemas) console.log(`  - ${s.schema_name}`);

  // Check oldest audit_logs entries
  console.log("\n=== Oldest audit_logs entries ===");
  const oldAudits = await db.$queryRawUnsafe<{ createdat: Date; action: string; actortype: string; actorname: string }[]>(`
    SELECT "createdAt" as createdat, action, "actorType" as actortype, "actorName" as actorname
    FROM audit_logs 
    ORDER BY "createdAt" ASC 
    LIMIT 10;
  `);
  for (const a of oldAudits) console.log(`  ${a.createdat.toISOString()} — ${a.action} by ${a.actortype}/${a.actorname}`);

  // Check oldest login_attempts
  console.log("\n=== Oldest login_attempts ===");
  const oldLogins = await db.$queryRawUnsafe<{ createdat: Date; identifier: string; usertype: string; success: boolean }[]>(`
    SELECT "createdAt" as createdat, identifier, "userType" as usertype, success
    FROM login_attempts 
    ORDER BY "createdAt" ASC 
    LIMIT 5;
  `);
  for (const l of oldLogins) console.log(`  ${l.createdat.toISOString()} — ${l.identifier} (${l.usertype}) success=${l.success}`);

  // Check for _prisma_migrations table
  console.log("\n=== Check for _prisma_migrations table ===");
  const migrationsTable = await db.$queryRawUnsafe<{ table_name: string }[]>(`
    SELECT table_name FROM information_schema.tables 
    WHERE table_schema = 'public' AND table_name = '_prisma_migrations';
  `);
  console.log(`_prisma_migrations table exists: ${migrationsTable.length > 0}`);

  // Check ALL databases this user can see (Neon typically has 1 db per project, but let's verify)
  console.log("\n=== ALL databases accessible ===");
  const dbs = await db.$queryRawUnsafe<{ datname: string }[]>(`
    SELECT datname FROM pg_database WHERE datistemplate = false ORDER BY datname;
  `);
  for (const d of dbs) console.log(`  - ${d.datname}`);
  
  // Check database size to gauge if there's hidden data
  console.log("\n=== Database size ===");
  const size = await db.$queryRaw<{ size: string }[]>(`
    SELECT pg_size_pretty(pg_database_size(current_database())) as size;
  `);
  console.log(`Database size: ${size[0].size}`);
}

main().catch(console.error).finally(() => db.$disconnect());
