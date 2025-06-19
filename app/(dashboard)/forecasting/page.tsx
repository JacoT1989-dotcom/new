import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  // Calendar, 
  Brain, 
  // AlertTriangle,
  CheckCircle2,
  ArrowUp,
  ArrowDown,
  // DollarSign
} from "lucide-react";

const forecasts = [
  {
    period: "Q4 2024",
    target: 5000000,
    committed: 3200000,
    bestCase: 4800000,
    worstCase: 2800000,
    confidence: 87,
    deals: 12
  },
  {
    period: "Q1 2025",
    target: 5500000,
    committed: 1800000,
    bestCase: 4200000,
    worstCase: 1500000,
    confidence: 73,
    deals: 8
  }
];

const riskDeals = [
  {
    name: "Acme Corp Enterprise",
    value: 2500000,
    probability: 75,
    risk: "medium",
    reason: "Budget approval pending"
  },
  {
    name: "TechFlow Digital",
    value: 1200000,
    probability: 45,
    risk: "high",
    reason: "Competitor engaged"
  }
];

export default function ForecastingPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <TrendingUp className="w-8 h-8" />
              AI Forecasting
            </h1>
            <p className="text-muted-foreground">
              Predictive analytics and intelligent revenue forecasting
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Brain className="w-4 h-4 mr-2" />
            Regenerate Forecast
          </Button>
        </div>

        {/* Forecast Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Q4 Target</p>
                  <p className="text-2xl font-bold">R5.0M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Committed</p>
                  <p className="text-2xl font-bold">R3.2M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <ArrowUp className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Best Case</p>
                  <p className="text-2xl font-bold">R4.8M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-sm text-muted-foreground">AI Confidence</p>
                  <p className="text-2xl font-bold">87%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="quarterly" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quarterly">Quarterly View</TabsTrigger>
            <TabsTrigger value="deals">Deal Analysis</TabsTrigger>
            <TabsTrigger value="trends">Trends & Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="quarterly" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {forecasts.map((forecast, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {forecast.period}
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {forecast.confidence}% confident
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Target</span>
                        <span className="font-semibold">{formatCurrency(forecast.target)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Committed</span>
                        <span className="font-semibold text-green-600">{formatCurrency(forecast.committed)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Best Case</span>
                        <span className="font-semibold text-blue-600">{formatCurrency(forecast.bestCase)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Worst Case</span>
                        <span className="font-semibold text-red-600">{formatCurrency(forecast.worstCase)}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress to Target</span>
                        <span>{Math.round((forecast.committed / forecast.target) * 100)}%</span>
                      </div>
                      <Progress value={(forecast.committed / forecast.target) * 100} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                      <span>{forecast.deals} active deals</span>
                      <div className="flex items-center gap-1">
                        <Brain className="w-4 h-4" />
                        <span>AI Powered</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deals" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Deal Risk Analysis</CardTitle>
                <p className="text-muted-foreground">
                  Deals requiring attention to maintain forecast accuracy
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {riskDeals.map((deal, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          deal.risk === 'high' ? 'bg-red-500' : 
                          deal.risk === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`} />
                        <div>
                          <h4 className="font-semibold">{deal.name}</h4>
                          <p className="text-sm text-muted-foreground">{deal.reason}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{formatCurrency(deal.value)}</p>
                        <p className="text-sm text-muted-foreground">{deal.probability}% probability</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Win Rate Trend</span>
                      <div className="flex items-center gap-2 text-green-600">
                        <ArrowUp className="w-4 h-4" />
                        <span className="font-semibold">+12%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Deal Velocity</span>
                      <div className="flex items-center gap-2 text-green-600">
                        <ArrowUp className="w-4 h-4" />
                        <span className="font-semibold">-8 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Average Deal Size</span>
                      <div className="flex items-center gap-2 text-red-600">
                        <ArrowDown className="w-4 h-4" />
                        <span className="font-semibold">-5%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Predictions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">Strong Q4 Finish Expected</p>
                      <p className="text-xs text-blue-600 mt-1">Based on historical patterns and current pipeline velocity</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm font-medium text-yellow-800">Q1 2025 Requires Attention</p>
                      <p className="text-xs text-yellow-600 mt-1">Pipeline needs strengthening for consistent performance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}