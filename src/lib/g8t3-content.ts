import { g8t3Unit9 } from './g8t3-unit9-content';

export type { LessonContent } from './g7t1-content';

const allG8T3Lessons = [...g8t3Unit9];

export function getG8T3LessonContent(lessonId: string): import('./g7t1-content').LessonContent | null {
  return allG8T3Lessons.find(l => l.lessonId === lessonId) || null;
}

export { g8t3Unit9 };
