/**
 * MSCS Academy — 21st-Century Skills Framework
 *
 * Combines:
 *   - P21 Framework (Partnership for 21st Century Skills)
 *   - OECD Learning Compass 2030
 *   - UAE National Framework for Values and Ethics
 *
 * Used to tag every Assignment, Rubric Criterion, LiveClass, and
 * Discussion Thread so the platform can report on skill development
 * per student (StudentSkillMapping) and aggregate (analytics).
 */

export interface SkillDefinition {
  code: string;
  name: string;
  description: string;
  category: SkillCategory;
  framework: "P21" | "OECD_2030" | "UAE_NATIONAL";
  defaultDokLevel?: number;
  defaultBloomsLevel?: BloomsLevel;
}

export type SkillCategory =
  | "4C" // critical_thinking, collaboration, creativity, communication
  | "information_literacy"
  | "media_literacy"
  | "ict_literacy"
  | "citizenship"
  | "life_career"
  | "research";

export type BloomsLevel =
  | "remember"
  | "understand"
  | "apply"
  | "analyze"
  | "evaluate"
  | "create";

// ─── P21 + OECD Learning Compass 2030 skills ──────────────────────
export const SKILLS: SkillDefinition[] = [
  // 4Cs — core
  {
    code: "critical_thinking",
    name: "Critical Thinking",
    description:
      "Reason effectively, question assumptions, evaluate evidence, and identify patterns. Central to ADEK Irtiq'aa teaching domain.",
    category: "4C",
    framework: "P21",
    defaultDokLevel: 3,
    defaultBloomsLevel: "analyze",
  },
  {
    code: "collaboration",
    name: "Collaboration",
    description:
      "Work effectively with diverse teams, share responsibility, and compromise to achieve common goals.",
    category: "4C",
    framework: "P21",
    defaultDokLevel: 3,
    defaultBloomsLevel: "create",
  },
  {
    code: "creativity",
    name: "Creativity",
    description:
      "Generate new ideas, elaborate on existing ones, and communicate them in novel ways.",
    category: "4C",
    framework: "P21",
    defaultDokLevel: 4,
    defaultBloomsLevel: "create",
  },
  {
    code: "communication",
    name: "Communication",
    description:
      "Articulate thoughts clearly in written, oral, and non-verbal forms; listen actively.",
    category: "4C",
    framework: "P21",
    defaultDokLevel: 2,
    defaultBloomsLevel: "understand",
  },

  // Information, media, technology
  {
    code: "information_literacy",
    name: "Information Literacy",
    description:
      "Access, evaluate, and use information effectively and ethically.",
    category: "information_literacy",
    framework: "P21",
    defaultDokLevel: 3,
    defaultBloomsLevel: "evaluate",
  },
  {
    code: "media_literacy",
    name: "Media Literacy",
    description:
      "Analyze media messages, understand media's role in society, and create media responsibly.",
    category: "media_literacy",
    framework: "P21",
    defaultDokLevel: 3,
    defaultBloomsLevel: "evaluate",
  },
  {
    code: "ict_literacy",
    name: "ICT Literacy",
    description:
      "Use technology to access, manage, integrate, evaluate, and create information.",
    category: "ict_literacy",
    framework: "P21",
    defaultDokLevel: 2,
    defaultBloomsLevel: "apply",
  },

  // Citizenship (UAE specific)
  {
    code: "citizenship",
    name: "Citizenship & National Identity",
    description:
      "Understand UAE heritage, civic responsibilities, and contribute to the community. Tied to S9 (UAE Heritage) domain standard.",
    category: "citizenship",
    framework: "UAE_NATIONAL",
    defaultDokLevel: 3,
    defaultBloomsLevel: "evaluate",
  },
  {
    code: "ethical_reasoning",
    name: "Ethical Reasoning",
    description:
      "Apply moral frameworks (Islamic ethics, secular ethics) to real dilemmas. Tied to S8 (Ethics) domain standard.",
    category: "citizenship",
    framework: "UAE_NATIONAL",
    defaultDokLevel: 4,
    defaultBloomsLevel: "evaluate",
  },

  // Life & career
  {
    code: "self_direction",
    name: "Self-Direction",
    description:
      "Set goals, manage time, and reflect on learning. P21 life/career skill.",
    category: "life_career",
    framework: "P21",
    defaultDokLevel: 2,
    defaultBloomsLevel: "apply",
  },
  {
    code: "social_responsibility",
    name: "Social Responsibility",
    description:
      "Act for the benefit of family, community, and society at large.",
    category: "life_career",
    framework: "UAE_NATIONAL",
    defaultDokLevel: 3,
    defaultBloomsLevel: "evaluate",
  },

  // Research
  {
    code: "research",
    name: "Research Skills",
    description:
      "Formulate questions, gather sources, analyze data, and present findings. Tied to S7 (Research) domain standard.",
    category: "research",
    framework: "P21",
    defaultDokLevel: 4,
    defaultBloomsLevel: "create",
  },
];

// ─── DOK framework (Webb's Depth of Knowledge) ────────────────────
export const DOK_LEVELS = [
  {
    level: 1,
    name: "Recall",
    description: "Recall facts, definitions, information, simple procedures.",
    targetPercent: 30,
    color: "#7C5B2E",
  },
  {
    level: 2,
    name: "Skills & Concepts",
    description: "Use information, conceptual knowledge, apply skills.",
    targetPercent: 30,
    color: "#B5532A",
  },
  {
    level: 3,
    name: "Strategic Thinking",
    description: "Reasoning, planning, complex thinking, justifying.",
    targetPercent: 30,
    color: "#0F5C5E",
  },
  {
    level: 4,
    name: "Extended Thinking",
    description: "Synthesize across subjects, investigate, real-world application.",
    targetPercent: 10,
    color: "#4A6B3E",
  },
] as const;

// ─── Bloom's Taxonomy ─────────────────────────────────────────────
export const BLOOMS_LEVELS: { level: BloomsLevel; name: string; description: string }[] = [
  { level: "remember", name: "Remember", description: "Recall facts and basic concepts." },
  { level: "understand", name: "Understand", description: "Explain ideas or concepts." },
  { level: "apply", name: "Apply", description: "Use information in new situations." },
  { level: "analyze", name: "Analyze", description: "Draw connections among ideas." },
  { level: "evaluate", name: "Evaluate", description: "Justify a stand or decision." },
  { level: "create", name: "Create", description: "Produce new or original work." },
];

// ─── Helpers ──────────────────────────────────────────────────────
export function getSkillByCode(code: string): SkillDefinition | undefined {
  return SKILLS.find((s) => s.code === code);
}

export function getSkillsByCategory(category: SkillCategory): SkillDefinition[] {
  return SKILLS.filter((s) => s.category === category);
}

export function getDokLevel(level: number) {
  return DOK_LEVELS.find((d) => d.level === level);
}

export function getBloomsLevel(level: BloomsLevel) {
  return BLOOMS_LEVELS.find((b) => b.level === level);
}

// ─── Seed data for SkillTag table ─────────────────────────────────
export function getSkillTagsForSeed() {
  return SKILLS.map((s) => ({
    code: s.code,
    name: s.name,
    description: s.description,
    framework: s.framework,
    category: s.category,
    defaultDokLevel: s.defaultDokLevel,
    defaultBloomsLevel: s.defaultBloomsLevel,
  }));
}
