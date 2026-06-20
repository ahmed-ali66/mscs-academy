/**
 * MSCS Academy — Database Seed
 *
 * Seeds the Irtiq'aa framework domains + 21st-century skills on first run.
 * Safe to run multiple times (uses upsert).
 *
 * Usage:
 *   bun run prisma/seeds/index.ts
 *
 * Or via npm:
 *   npx tsx prisma/seeds/index.ts
 */
import { PrismaClient } from "@prisma/client";
import { IRTIQAA_DOMAINS } from "../../src/lib/pedagogy/irtiqaa";
import { getSkillTagsForSeed } from "../../src/lib/pedagogy/skills";

const db = new PrismaClient();

async function seedIrtiqaaDomains() {
  console.log("🌱 Seeding Irtiq'aa domains...");
  for (const domain of IRTIQAA_DOMAINS) {
    await db.irtiqaaDomain.upsert({
      where: { code: domain.code },
      update: {
        name: domain.name,
        description: domain.description,
        targetLevel: domain.targetLevel,
      },
      create: {
        code: domain.code,
        name: domain.name,
        description: domain.description,
        targetLevel: domain.targetLevel,
        order: IRTIQAA_DOMAINS.indexOf(domain),
      },
    });
    console.log(`  ✓ ${domain.code} — ${domain.name}`);
  }
}

async function seedSkillTags() {
  console.log("🌱 Seeding 21st-century skill tags...");
  const skills = getSkillTagsForSeed();
  for (const skill of skills) {
    await db.skillTag.upsert({
      where: { code: skill.code },
      update: {
        name: skill.name,
        description: skill.description,
        framework: skill.framework,
        category: skill.category,
        defaultDokLevel: skill.defaultDokLevel || null,
        defaultBloomsLevel: skill.defaultBloomsLevel || null,
      },
      create: {
        code: skill.code,
        name: skill.name,
        description: skill.description,
        framework: skill.framework,
        category: skill.category,
        defaultDokLevel: skill.defaultDokLevel || null,
        defaultBloomsLevel: skill.defaultBloomsLevel || null,
      },
    });
    console.log(`  ✓ ${skill.code} — ${skill.name}`);
  }
}

async function main() {
  console.log("════════════════════════════════════════════════");
  console.log("  MSCS ACADEMY — Database Seed");
  console.log("════════════════════════════════════════════════\n");

  await seedIrtiqaaDomains();
  console.log("");
  await seedSkillTags();

  console.log("\n════════════════════════════════════════════════");
  console.log("  ✅ Seed complete");
  console.log("════════════════════════════════════════════════");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
