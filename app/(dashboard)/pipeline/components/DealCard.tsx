"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Calendar, 
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

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

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return "border-green-500 bg-green-50";
    if (score >= 60) return "border-yellow-500 bg-yellow-50";
    return "border-red-500 bg-red-50";
  };

  const getHealthScoreTextColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getPriorityFromScore = (score: number) => {
    if (score < 60) return "high";
    if (score < 80) return "medium";
    return "low";
  };

  const getBadgeVariant = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      default: return "secondary";
    }
  };

  const priority = getPriorityFromScore(deal.healthScore);
  
  const formattedDate = deal.nextActionDate ? 
    new Date(deal.nextActionDate).toLocaleDateString('en-ZA', { 
      month: 'short', 
      day: 'numeric' 
    }) : '';

  return (
    <Link href={`/pipeline/${deal.id}`} className="block mb-6">
      <Card className={`hover:shadow-md transition-shadow cursor-pointer border-l-4 ${getHealthScoreColor(deal.healthScore)}`}>
        <CardContent className="p-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm truncate pr-2">{deal.name}</div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <MoreHorizontal className="w-3 h-3" />
            </Button>
          </div>
          
          <div className="text-xs text-muted-foreground">
            {deal.company}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm font-medium">
              <DollarSign className="w-3 h-3" />
              <span>{formatCurrency(deal.value)}</span>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthScoreTextColor(deal.healthScore)}`}>
              {deal.healthScore}%
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Avatar className="w-5 h-5">
                <AvatarImage src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=20&h=20&fit=crop&crop=face`} />
                <AvatarFallback className="text-xs">
                  {deal.owner.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">
                {deal.owner.split(' ')[0]}
              </span>
            </div>
            <Badge variant={getBadgeVariant(priority)} className="text-xs">
              {priority}
            </Badge>
          </div>
          
          {deal.nextAction && (
            <div className="flex items-center justify-between text-xs border-t border-gray-100 pt-2 mt-2">
              <div className="truncate text-muted-foreground max-w-[70%]">
                {deal.nextAction}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-muted-foreground" />
                <span className="text-muted-foreground">{formattedDate}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}