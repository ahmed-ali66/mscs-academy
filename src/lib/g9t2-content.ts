// ═══════════════════════════════════════════════════════════════
// G9 TERM 2 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 9 Volume 2
// Unit 4: What Should Be Preserved and How?
// Unit 5: Governments, Authority, and the Judiciary System in the UAE
// Unit 6: Developments Leading up to the Founding of the UAE
// Unit 7: The UAE Emerges
// ═══════════════════════════════════════════════════════════════

import { g9t2Unit4 } from './g9t2-unit4-content';
import { g9t2Unit5 } from './g9t2-unit5-content';
import { g9t2Unit6 } from './g9t2-unit6-content';
import { g9t2Unit7 } from './g9t2-unit7-content';

// Re-export LessonContent from the canonical source
export type { LessonContent } from './g7t1-content';

// All G9T2 lessons combined
const allG9T2Lessons = [...g9t2Unit4, ...g9t2Unit5, ...g9t2Unit6, ...g9t2Unit7];

/**
 * Look up rich textbook content for a G9T2 lesson by its lessonId.
 * lessonId format: "G9_T2_Unit 4_l1" through "G9_T2_Unit 7_l4"
 */
export function getG9T2LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG9T2Lessons.find(l => l.lessonId === lessonId) || null;
}

// Export individual unit arrays for direct access if needed
export { g9t2Unit4, g9t2Unit5, g9t2Unit6, g9t2Unit7 };
