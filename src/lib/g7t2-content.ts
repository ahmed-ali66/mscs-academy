// ═══════════════════════════════════════════════════════════════
// G7 TERM 2 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 7 Volume 2
// Units 4–6: Trade/Travel/Communications, Human Needs, South Asia
// ═══════════════════════════════════════════════════════════════

import { g7t2Unit4 } from './g7t2-unit4-content';
import { g7t2Unit5 } from './g7t2-unit5-content';
import { g7t2Unit6 } from './g7t2-unit6-content';

// Re-export LessonContent from the canonical source
export type { LessonContent } from './g7t1-content';

// All G7T2 lessons combined
const allG7T2Lessons = [...g7t2Unit4, ...g7t2Unit5, ...g7t2Unit6];

/**
 * Look up rich textbook content for a G7T2 lesson by its lessonId.
 * lessonId format: "G7_T2_Unit 4_l1" through "G7_T2_Unit 6_l7"
 */
export function getG7T2LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG7T2Lessons.find(l => l.lessonId === lessonId) || null;
}

// Export individual unit arrays for direct access if needed
export { g7t2Unit4, g7t2Unit5, g7t2Unit6 };
