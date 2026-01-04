/**
 * Lesson DTOs
 */

import type { Tables } from "@/types/supabase";

type Lesson = Tables<"lessons">;

export interface LessonDTO {
  id: string;
  instructorId: string;
  studentId: string;
  startDateTime: Date;
  endDateTime: Date;
  status: string;
  location: string;
  objectives: string[];
  notes?: string;
  price: number;
  createdAt: Date;
}

export function toLessonDTO(lesson: Lesson): LessonDTO {
  return {
    id: lesson.id,
    instructorId: lesson.instructorId,
    studentId: lesson.studentId,
    startDateTime: lesson.startDateTime,
    endDateTime: lesson.endDateTime,
    status: lesson.status,
    location: lesson.location,
    objectives: lesson.objectives,
    notes: lesson.notes,
    price: lesson.price,
    createdAt: lesson.createdAt,
  };
}

export function toLessonDTOs(lessons: Lesson[]): LessonDTO[] {
  return lessons.map(toLessonDTO);
}
