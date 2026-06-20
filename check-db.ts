// Check what's in the database
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
  const admins = await db.admin.findMany({ select: { id: true, username: true, name: true, email: true, createdAt: true } });
  console.log(`Admins in database (${admins.length}):`);
  for (const a of admins) {
    console.log(`  - id=${a.id} username=${a.username} name=${a.name} email=${a.email} createdAt=${a.createdAt.toISOString()}`);
  }

  const teachers = await db.teacher.count();
  const students = await db.student.count();
  const parents = await db.parent.count();
  const irtiqaaDomains = await db.irtiqaaDomain.count();
  const skillTags = await db.skillTag.count();
  console.log(`\nOther counts:`);
  console.log(`  Teachers:       ${teachers}`);
  console.log(`  Students:       ${students}`);
  console.log(`  Parents:        ${parents}`);
  console.log(`  Irtiq'aa domains: ${irtiqaaDomains}`);
  console.log(`  Skill tags:     ${skillTags}`);

  // Delete all test admins (keep none — first-time setup will be clean)
  if (admins.length > 0) {
    console.log(`\nDeleting ${admins.length} admin(s) to reset to first-time setup state...`);
    await db.admin.deleteMany({});
    console.log("✓ All admins deleted");
  }
}

main().catch(console.error).finally(() => db.$disconnect());
