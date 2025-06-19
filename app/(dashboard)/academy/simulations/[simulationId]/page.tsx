"use client";

import { useParams } from "next/navigation";

export default function SimulationPage() {
  const params = useParams();
  const { simulationId } = params;
  
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Sales Simulation</h1>
      <div className="text-muted-foreground mb-6">
        Simulation ID: {simulationId}
      </div>
      
      <div className="space-y-6">
        <p>This simulation content is being developed.</p>
      </div>
    </div>
  );
}