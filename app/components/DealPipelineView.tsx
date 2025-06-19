"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  AlertTriangle,
  Clock,
  Users,
  MoreHorizontal,
  Eye,
  Edit,
  MessageSquare
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const deals = [
  {
    id: 1,
    name: "Acme Corp Enterprise Deal",
    company: "Acme Corporation",
    value: 2500000,
    stage: "Negotiation",
    probability: 85,
    owner: "Sarah Johnson",
    nextAction: "Contract review meeting",
    daysInStage: 12,
    healthScore: 92,
    stakeholders: 8,
    lastActivity: "2 hours ago",
    closeDate: "2024-12-20",
    priority: "high"
  },
  {
    id: 2,
    name: "TechFlow Digital Transformation",
    company: "TechFlow Inc.",
    value: 1200000,
    stage: "Proposal",
    probability: 65,
    owner: "Michael Chen",
    nextAction: "Technical presentation",
    daysInStage: 8,
    healthScore: 78,
    stakeholders: 5,
    lastActivity: "1 day ago",
    closeDate: "2024-12-15",
    priority: "medium"
  },
  {
    id: 3,
    name: "Global Solutions Partnership",
    company: "Global Solutions Ltd",
    value: 3800000,
    stage: "Discovery",
    probability: 45,
    owner: "Emma Williams",
    nextAction: "Stakeholder mapping session",
    daysInStage: 5,
    healthScore: 85,
    stakeholders: 12,
    lastActivity: "3 hours ago",
    closeDate: "2025-01-15",
    priority: "high"
  },
  {
    id: 4,
    name: "StartupX Growth Package",
    company: "StartupX",
    value: 450000,
    stage: "Qualification",
    probability: 35,
    owner: "David Miller",
    nextAction: "Budget qualification call",
    daysInStage: 15,
    healthScore: 62,
    stakeholders: 3,
    lastActivity: "2 days ago",
    closeDate: "2024-12-30",
    priority: "low"
  }
];

export function DealPipelineView() {
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Active Deals Pipeline</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              {deals.length} Active Deals
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              {formatCurrency(deals.reduce((sum, deal) => sum + deal.value, 0))} Total Value
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deals.map((deal) => (
            <Card key={deal.id} className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{deal.name}</h3>
                      <Badge variant={getPriorityColor(deal.priority)} className="text-xs">
                        {deal.priority} priority
                      </Badge>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthScoreColor(deal.healthScore)}`}>
                        {deal.healthScore}% health
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{deal.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{formatCurrency(deal.value)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Close: {new Date(deal.closeDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Stage & Probability</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {deal.stage}
                          </Badge>
                          <span className="text-sm font-medium">{deal.probability}%</span>
                        </div>
                        <Progress value={deal.probability} className="h-1 mt-1" />
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Owner & Stakeholders</p>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face`} />
                            <AvatarFallback className="text-xs">
                              {deal.owner.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{deal.owner}</span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="w-3 h-3" />
                            <span>{deal.stakeholders}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Activity & Timeline (Days in Stage)</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{deal.lastActivity}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {deal.daysInStage} days in {deal.stage}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">Next Action: {deal.nextAction}</span>
                      </div>
                      
                      {deal.daysInStage > 10 && (
                        <div className="flex items-center gap-1 text-orange-600 text-xs">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Long in stage</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      War Room
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Deal
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="w-4 h-4 mr-2" />
                          Stakeholder Map
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TrendingUp className="w-4 h-4 mr-2" />
                          AI Insights
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <Button variant="outline">
            Load More Deals
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}