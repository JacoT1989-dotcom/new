"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  AlertTriangle,
  // Users,
  Plus,
  MoreHorizontal
} from "lucide-react";

interface Deal {
  id: number;
  name: string;
  company: string;
  value: number;
  owner: string;
  probability: number;
  healthScore: number;
  daysInStage: number;
  priority: string;
}

const stages = [
  { 
    name: "Discovery", 
    deals: [
      {
        id: 3,
        name: "Global Solutions Partnership",
        company: "Global Solutions Ltd",
        value: 3800000,
        owner: "Emma Williams",
        probability: 45,
        healthScore: 85,
        daysInStage: 5,
        priority: "high"
      }
    ] 
  },
  { 
    name: "Qualification", 
    deals: [
      {
        id: 4,
        name: "StartupX Growth Package",
        company: "StartupX",
        value: 450000,
        owner: "David Miller",
        probability: 35,
        healthScore: 62,
        daysInStage: 15,
        priority: "low"
      }
    ] 
  },
  { 
    name: "Proposal", 
    deals: [
      {
        id: 2,
        name: "TechFlow Digital Transformation",
        company: "TechFlow Inc.",
        value: 1200000,
        owner: "Michael Chen",
        probability: 65,
        healthScore: 78,
        daysInStage: 8,
        priority: "medium"
      }
    ] 
  },
  { 
    name: "Negotiation", 
    deals: [
      {
        id: 1,
        name: "Acme Corp Enterprise Deal",
        company: "Acme Corporation",
        value: 2500000,
        owner: "Sarah Johnson",
        probability: 85,
        healthScore: 92,
        daysInStage: 12,
        priority: "high"
      }
    ] 
  },
  { 
    name: "Closed Won", 
    deals: [] 
  },
  { 
    name: "Closed Lost", 
    deals: [] 
  }
];

export function DealKanban() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      default: return "secondary";
    }
  };

  const getStageValue = (deals: Deal[]) => {
    return deals.reduce((sum, deal) => sum + deal.value, 0);
  };

  return (
    <div className="h-full px-4 py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {stages.map((stage, stageIndex) => (
          <div key={stageIndex} className="h-full">
            <Card className="h-full">
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
                  {formatCurrency(getStageValue(stage.deals))} total
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 pb-2">
                <div className="space-y-3">
                  {stage.deals.map((deal) => (
                    <Card key={deal.id} className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <h4 className="font-semibold text-sm leading-tight">{deal.name}</h4>
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
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthScoreColor(deal.healthScore)}`}>
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
                            <Badge variant={getPriorityColor(deal.priority)} className="text-xs">
                              {deal.priority}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>{deal.probability}%</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {deal.daysInStage > 10 && (
                                <>
                                  <AlertTriangle className="w-3 h-3 text-orange-500" />
                                  <span className="text-orange-600">{deal.daysInStage}d</span>
                                </>
                              )}
                              {deal.daysInStage <= 10 && (
                                <>
                                  <Calendar className="w-3 h-3" />
                                  <span>{deal.daysInStage}d</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {stage.deals.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
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
        ))}
      </div>
    </div>
  );
}