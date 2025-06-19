"use client";

import { useParams } from "next/navigation";

export default function VoiceCoachPage() {
  const params = useParams();
  const { VoiceCoachId } = params;
  
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Voice Coach Session</h1>
      <div className="text-muted-foreground mb-6">
      Voice Coach ID: {VoiceCoachId}
      </div>
      
      <div className="space-y-6">
        <p>This Voice Coach session content is being developed.</p>
      </div>
    </div>
  );
}