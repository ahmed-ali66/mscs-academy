// ═══════════════════════════════════════════════════════════════
// G7 TERM 3 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 7 Volume 3
// Units 7–9: Digital Challenge, Moral Education in Action, Central Asia
// ═══════════════════════════════════════════════════════════════

import { g7t3Unit7 } from './g7t3-unit7-content';
import { g7t3Unit8 } from './g7t3-unit8-content';
import { g7t3Unit9 } from './g7t3-unit9-content';

// Re-export LessonContent from the canonical source
export type { LessonContent } from './g7t1-content';

// All G7T3 lessons combined
const allG7T3Lessons = [...g7t3Unit7, ...g7t3Unit8, ...g7t3Unit9];

/**
 * Look up rich textbook content for a G7T3 lesson by its lessonId.
 * lessonId format: "G7_T3_Unit 7_l1" through "G7_T3_Unit 9_l7"
 */
export function getG7T3LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG7T3Lessons.find(l => l.lessonId === lessonId) || null;
}

// Export individual unit arrays for direct access if needed
export { g7t3Unit7, g7t3Unit8, g7t3Unit9 };
