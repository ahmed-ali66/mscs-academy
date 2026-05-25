// ═══════════════════════════════════════════════════════════════
// G9 TERM 1 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 9 Volume 1
// Unit 1: Introduction to Global Ethics
// Unit 2: Financial Awareness
// Unit 3: UAE History and Heritage
// ═══════════════════════════════════════════════════════════════

import { g9t1Unit1 } from './g9t1-unit1-content';
import { g9t1Unit2 } from './g9t1-unit2-content';
import { g9t1Unit3 } from './g9t1-unit3-content';

// Re-export LessonContent from the canonical source
export type { LessonContent } from './g7t1-content';

// All G9T1 lessons combined
const allG9T1Lessons = [...g9t1Unit1, ...g9t1Unit2, ...g9t1Unit3];

/**
 * Look up rich textbook content for a G9T1 lesson by its lessonId.
 * lessonId format: "G9_T1_Unit 1_l1" through "G9_T1_Unit 3_l5"
 */
export function getG9T1LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG9T1Lessons.find(l => l.lessonId === lessonId) || null;
}

// Export individual unit arrays for direct access if needed
export { g9t1Unit1, g9t1Unit2, g9t1Unit3 };
