/**
 * Sample tests for the 21st-century skills framework.
 *
 * These tests verify the data integrity of the skills framework,
 * which is referenced by Assignment.skillTags, RubricCriterion.skillTag,
 * StudentSkillMapping.skillTagId, and LiveClass.skillTags.
 */
import {
  SKILLS,
  DOK_LEVELS,
  BLOOMS_LEVELS,
  getSkillByCode,
  getSkillsByCategory,
  getDokLevel,
  getBloomsLevel,
  getSkillTagsForSeed,
} from "@/lib/pedagogy/skills";
import type { BloomsLevel, SkillCategory } from "@/lib/pedagogy/skills";

describe("21st-century skills framework", () => {
  describe("SKILLS constant", () => {
    it("should include the 4Cs (critical_thinking, collaboration, creativity, communication)", () => {
      const codes = SKILLS.map((s) => s.code);
      expect(codes).toContain("critical_thinking");
      expect(codes).toContain("collaboration");
      expect(codes).toContain("creativity");
      expect(codes).toContain("communication");
    });

    it("should include UAE-specific citizenship skills", () => {
      const codes = SKILLS.map((s) => s.code);
      expect(codes).toContain("citizenship");
      expect(codes).toContain("ethical_reasoning");
    });

    it("should have unique codes", () => {
      const codes = SKILLS.map((s) => s.code);
      const unique = new Set(codes);
      expect(unique.size).toBe(codes.length);
    });

    it("should have all required fields populated", () => {
      for (const skill of SKILLS) {
        expect(skill.code).toBeTruthy();
        expect(skill.name).toBeTruthy();
        expect(skill.description).toBeTruthy();
        expect(skill.description.length).toBeGreaterThan(20);
        expect(skill.category).toBeTruthy();
        expect(["P21", "OECD_2030", "UAE_NATIONAL"]).toContain(skill.framework);
      }
    });

    it("should have valid DOK levels (1-4) for skills with defaultDokLevel", () => {
      for (const skill of SKILLS) {
        if (skill.defaultDokLevel !== undefined) {
          expect(skill.defaultDokLevel).toBeGreaterThanOrEqual(1);
          expect(skill.defaultDokLevel).toBeLessThanOrEqual(4);
        }
      }
    });

    it("should have valid Bloom's levels for skills with defaultBloomsLevel", () => {
      const validBlooms: BloomsLevel[] = [
        "remember",
        "understand",
        "apply",
        "analyze",
        "evaluate",
        "create",
      ];
      for (const skill of SKILLS) {
        if (skill.defaultBloomsLevel !== undefined) {
          expect(validBlooms).toContain(skill.defaultBloomsLevel);
        }
      }
    });
  });

  describe("getSkillByCode", () => {
    it("should return the skill for a valid code", () => {
      const skill = getSkillByCode("critical_thinking");
      expect(skill).toBeDefined();
      expect(skill?.name).toBe("Critical Thinking");
      expect(skill?.category).toBe("4C");
    });

    it("should return undefined for an invalid code", () => {
      const skill = getSkillByCode("nonexistent_skill");
      expect(skill).toBeUndefined();
    });
  });

  describe("getSkillsByCategory", () => {
    it("should filter skills by category", () => {
      const skills = getSkillsByCategory("4C" as SkillCategory);
      expect(skills.length).toBeGreaterThanOrEqual(4); // at least the 4Cs
      expect(skills.every((s) => s.category === "4C")).toBe(true);
    });

    it("should return empty array for unknown category", () => {
      const skills = getSkillsByCategory("nonexistent" as SkillCategory);
      expect(skills).toEqual([]);
    });
  });
});

describe("DOK levels (Webb's Depth of Knowledge)", () => {
  it("should have exactly 4 levels", () => {
    expect(DOK_LEVELS.length).toBe(4);
  });

  it("should target 30/30/30/10 distribution", () => {
    const targets = DOK_LEVELS.map((d) => d.targetPercent);
    expect(targets[0]).toBe(30); // DOK 1
    expect(targets[1]).toBe(30); // DOK 2
    expect(targets[2]).toBe(30); // DOK 3
    expect(targets[3]).toBe(10); // DOK 4
    expect(targets.reduce((a, b) => a + b, 0)).toBe(100);
  });

  it("should have progressive cognitive demand", () => {
    for (let i = 0; i < DOK_LEVELS.length - 1; i++) {
      const current = DOK_LEVELS[i];
      const next = DOK_LEVELS[i + 1];
      expect(current.level).toBeLessThan(next.level);
    }
  });

  it("should return the level via getDokLevel", () => {
    expect(getDokLevel(1)?.name).toBe("Recall");
    expect(getDokLevel(4)?.name).toBe("Extended Thinking");
    expect(getDokLevel(5)).toBeUndefined();
  });
});

describe("Bloom's Taxonomy", () => {
  it("should have exactly 6 levels in correct order", () => {
    expect(BLOOMS_LEVELS.length).toBe(6);
    expect(BLOOMS_LEVELS[0].level).toBe("remember");
    expect(BLOOMS_LEVELS[5].level).toBe("create");
  });

  it("should return the level via getBloomsLevel", () => {
    expect(getBloomsLevel("evaluate")?.name).toBe("Evaluate");
    expect(getBloomsLevel("nonexistent" as BloomsLevel)).toBeUndefined();
  });
});

describe("getSkillTagsForSeed (database seeding helper)", () => {
  it("should produce seed data with codes matching SKILLS", () => {
    const seed = getSkillTagsForSeed();
    expect(seed.length).toBe(SKILLS.length);
    for (const item of seed) {
      expect(item.code).toBeTruthy();
      expect(item.name).toBeTruthy();
      expect(item.framework).toBeTruthy();
    }
  });
});
