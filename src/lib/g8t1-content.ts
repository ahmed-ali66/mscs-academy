// ═══════════════════════════════════════════════════════════════
// G8 TERM 1 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 8 Volume 1
// Units 1–3: Ethics in the Context of Communities,
//            Valuing Diversity, African Civilizations
// ═══════════════════════════════════════════════════════════════

import { g8t1Unit1 } from './g8t1-unit1-content';
import { g8t1Unit2 } from './g8t1-unit2-content';
import { g8t1Unit3 } from './g8t1-unit3-content';

// Re-export LessonContent from the canonical source
export type { LessonContent } from './g7t1-content';

// All G8T1 lessons combined
const allG8T1Lessons = [...g8t1Unit1, ...g8t1Unit2, ...g8t1Unit3];

/**
 * Look up rich textbook content for a G8T1 lesson by its lessonId.
 * lessonId format: "G8_T1_Unit 1_l1" through "G8_T1_Unit 3_l5"
 */
export function getG8T1LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG8T1Lessons.find(l => l.lessonId === lessonId) || null;
}

// Export individual unit arrays for direct access if needed
export { g8t1Unit1, g8t1Unit2, g8t1Unit3 };
