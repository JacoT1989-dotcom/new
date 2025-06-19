"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DealCard from "./DealCard";

interface Deal {
  id: number;
  name: string;
  company: string;
  value: number;
  owner: string;
  probability: number;
  healthScore: number;
  daysInStage: number;
  nextAction?: string;
  nextActionDate?: string;
}

interface PipelineStageProps {
  stage: {
    name: string;
    deals: Deal[];
  };
  stageIndex: number;
}

export function PipelineStage({
  stage
}: PipelineStageProps) {
  const totalValue = stage.deals.reduce((sum, deal) => sum + deal.value, 0);
  
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="h-full min-h-[500px]">
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">{stage.name}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {stage.deals.length}
              </Badge>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {formatCurrency(totalValue)} total
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 pb-2 flex-1 overflow-y-auto">
          <div className="space-y-6">
            {stage.deals.map(deal => (
              <DealCard 
                key={deal.id} 
                deal={deal} 
              />
            ))}
            
            {stage.deals.length === 0 && (
              <div className="text-center py-8 text-muted-foreground h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                  <Plus className="w-6 h-6" />
                </div>
                <p className="text-sm">No deals in {stage.name.toLowerCase()}</p>
                <Button variant="ghost" size="sm" className="mt-2 text-xs">
                  Add Deal
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}