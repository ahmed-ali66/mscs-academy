// ═══════════════════════════════════════════════════════════════
// G8 TERM 3 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 8 Volume 3
// Unit 9: West Asia, North Africa & The Ottoman Empire
// ═══════════════════════════════════════════════════════════════

import { g8t3Unit9a } from './g8t3-unit9a-content';
import { g8t3Unit9b } from './g8t3-unit9b-content';

// Re-export LessonContent from the canonical source
export type { LessonContent } from './g7t1-content';

// All G8T3 lessons combined
const allG8T3Lessons = [...g8t3Unit9a, ...g8t3Unit9b];

/**
 * Look up rich textbook content for a G8T3 lesson by its lessonId.
 * lessonId format: "G8_T3_General_l1" through "G8_T3_General_l9"
 */
export function getG8T3LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG8T3Lessons.find(l => l.lessonId === lessonId) || null;
}

// Export individual unit arrays for direct access if needed
export { g8t3Unit9a, g8t3Unit9b };
