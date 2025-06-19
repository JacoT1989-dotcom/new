"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Clock, 
  DollarSign,
  // Users,
  // Calendar,
  Award,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

const analyticsData = {
  overview: {
    totalDeals: 47,
    totalValue: 12500000,
    averageDealSize: 265957,
    winRate: 68,
    averageSalesCycle: 45
  },
  stageAnalysis: [
    { stage: "Discovery", count: 8, value: 4200000, avgDays: 12, conversionRate: 75 },
    { stage: "Qualification", count: 6, value: 2800000, avgDays: 18, conversionRate: 65 },
    { stage: "Proposal", count: 4, value: 3200000, avgDays: 15, conversionRate: 80 },
    { stage: "Negotiation", count: 3, value: 2300000, avgDays: 22, conversionRate: 85 },
  ],
  trends: {
    dealVelocity: { current: 42, previous: 48, change: -12.5 },
    winRate: { current: 68, previous: 62, change: 9.7 },
    averageValue: { current: 265957, previous: 245000, change: 8.5 },
    pipelineGrowth: { current: 12500000, previous: 10800000, change: 15.7 }
  },
  riskFactors: [
    { factor: "Long sales cycles", impact: "high", deals: 8, description: "Deals stuck in stages for >30 days" },
    { factor: "Low stakeholder coverage", impact: "medium", deals: 5, description: "Deals with <3 stakeholders mapped" },
    { factor: "Price sensitivity", impact: "medium", deals: 12, description: "Deals with budget concerns" }
  ]
};

export function DealAnalytics() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatChange = (change: number) => {
    const sign = change > 0 ? '+' : '';
    return `${sign}${change.toFixed(1)}%`;
  };

  const getChangeColor = (change: number) => {
    return change > 0 ? 'text-green-600' : 'text-red-600';
  };

  const getChangeIcon = (change: number) => {
    return change > 0 ? TrendingUp : TrendingDown;
  };

  const getRiskColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Deals</p>
                <p className="text-2xl font-bold">{analyticsData.overview.totalDeals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">{formatCurrency(analyticsData.overview.totalValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Win Rate</p>
                <p className="text-2xl font-bold">{analyticsData.overview.winRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Deal Size</p>
                <p className="text-2xl font-bold">{formatCurrency(analyticsData.overview.averageDealSize)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-indigo-500" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Cycle</p>
                <p className="text-2xl font-bold">{analyticsData.overview.averageSalesCycle}d</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <p className="text-muted-foreground">Key metrics compared to previous period</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(analyticsData.trends).map(([key, data]) => {
              const ChangeIcon = getChangeIcon(data.change);
              return (
                <div key={key} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <div className={`flex items-center gap-1 ${getChangeColor(data.change)}`}>
                      <ChangeIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">{formatChange(data.change)}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">
                    {key.includes('Value') || key.includes('Growth') 
                      ? formatCurrency(data.current)
                      : key.includes('Rate') 
                        ? `${data.current}%`
                        : key.includes('Velocity')
                          ? `${data.current}d`
                          : data.current
                    }
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Previous: {key.includes('Value') || key.includes('Growth') 
                      ? formatCurrency(data.previous)
                      : key.includes('Rate') 
                        ? `${data.previous}%`
                        : key.includes('Velocity')
                          ? `${data.previous}d`
                          : data.previous
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Stage Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Stage Analysis</CardTitle>
          <p className="text-muted-foreground">Performance breakdown by deal stage</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {analyticsData.stageAnalysis.map((stage, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{stage.stage}</h4>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {stage.count} deals • {formatCurrency(stage.value)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
                    <div className="flex items-center gap-2">
                      <Progress value={stage.conversionRate} className="flex-1 h-2" />
                      <span className="text-sm font-medium">{stage.conversionRate}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Average Days</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{stage.avgDays} days</span>
                      {stage.avgDays > 20 && (
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Average Deal Size</p>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{formatCurrency(stage.value / stage.count)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Factors */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Factors Analysis</CardTitle>
          <p className="text-muted-foreground">Potential issues affecting deal success</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.riskFactors.map((risk, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getRiskColor(risk.impact)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {risk.impact === 'high' ? (
                      <AlertTriangle className="w-5 h-5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                    <h4 className="font-semibold">{risk.factor}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {risk.deals} deals affected
                    </Badge>
                    <Badge 
                      variant={risk.impact === 'high' ? 'destructive' : risk.impact === 'medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {risk.impact} impact
                    </Badge>
                  </div>
                </div>
                <p className="text-sm opacity-90">{risk.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
      );
    }
    