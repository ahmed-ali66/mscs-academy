// G9 TERM 3 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 9 Volume 3
// Unit 8: Being an Active Citizen
// Unit 9: The UAE in the 21st Century

import { g9t3Unit8 } from './g9t3-unit8-content';
import { g9t3Unit9 } from './g9t3-unit9-content';

// Re-export LessonContent from the canonical source
export type { LessonContent } from './g7t1-content';

// All G9T3 lessons combined
const allG9T3Lessons = [...g9t3Unit8, ...g9t3Unit9];

/**
 * Look up rich textbook content for a G9T3 lesson by its lessonId.
 * lessonId format: "G9_T3_Unit 8_l1" through "G9_T3_Unit 9_l10"
 */
export function getG9T3LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG9T3Lessons.find(l => l.lessonId === lessonId) || null;
}

// Export individual unit arrays for direct access if needed
export { g9t3Unit8, g9t3Unit9 };
