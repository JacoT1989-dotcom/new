"use client";

// import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function LessonPage() {
  const params = useParams();
  const { courseId, lessonId } = params;
  
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Lesson Content</h1>
      <div className="text-muted-foreground mb-6">
        Course ID: {courseId}, Lesson ID: {lessonId}
      </div>
      
      <div className="space-y-6">
        <p>This lesson content is being developed.</p>
      </div>
    </div>
  );
}