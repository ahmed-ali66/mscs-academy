// ═══════════════════════════════════════════════════════════════
// G8 TERM 2 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 8 Volume 2
// Units 4–6: The Growth of Consultative Governance in the UAE,
//            Morality in the Context of States,
//            North and South America
// ═══════════════════════════════════════════════════════════════

import { g8t2Unit4 } from './g8t2-unit4-content';
import { g8t2Unit5 } from './g8t2-unit5-content';
import { g8t2Unit6 } from './g8t2-unit6-content';

// Re-export LessonContent from the canonical source
export type { LessonContent } from './g7t1-content';

// All G8T2 lessons combined
const allG8T2Lessons = [...g8t2Unit4, ...g8t2Unit5, ...g8t2Unit6];

/**
 * Look up rich textbook content for a G8T2 lesson by its lessonId.
 * lessonId format: "G8_T2_Unit 4_l1" through l5, "G8_T2_Unit 5_l1" through l5, "G8_T2_Unit 6_l1" through l6
 */
export function getG8T2LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG8T2Lessons.find(l => l.lessonId === lessonId) || null;
}

// Export individual unit arrays for direct access if needed
export { g8t2Unit4, g8t2Unit5, g8t2Unit6 };
