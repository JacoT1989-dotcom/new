import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Target, 
  // Users, 
  TrendingUp, 
  CheckCircle2,
  // AlertCircle,
  Lightbulb,
  ArrowRight,
  Brain,
  Settings
} from "lucide-react";

const dealFrameworks = [
  {
    id: 1,
    name: "Enterprise Sale Framework",
    description: "Comprehensive methodology for complex B2B deals",
    completion: 85,
    factors: 12,
    weightedScore: 8.2,
    status: "active"
  },
  {
    id: 2,
    name: "SMB Quick Sale",
    description: "Streamlined approach for smaller deals",
    completion: 92,
    factors: 8,
    weightedScore: 7.6,
    status: "completed"
  },
  {
    id: 3,
    name: "Partnership Deal",
    description: "Strategic partnership opportunity assessment",
    completion: 45,
    factors: 15,
    weightedScore: 6.1,
    status: "in_progress"
  }
];

const criticalFactors = [
  {
    factor: "Stakeholder Alignment",
    score: 7.2,
    weight: 20,
    status: "needs_attention",
    recommendation: "Schedule meeting with VP Finance to address budget concerns"
  },
  {
    factor: "Technical Fit",
    score: 9.1,
    weight: 25,
    status: "strong",
    recommendation: "Leverage technical champion for internal advocacy"
  },
  {
    factor: "Decision Timeline",
    score: 6.8,
    weight: 15,
    status: "moderate",
    recommendation: "Create urgency with limited-time implementation bonus"
  }
];

const DealcrafterEnginePage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <Zap className="w-8 h-8 text-yellow-500" />
                  Dealcrafter Engine
                </h1>
                <p className="text-muted-foreground">
                  AI-powered deal structuring and optimization framework
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Zap className="w-4 h-4 mr-2" />
                  New Framework
                </Button>
              </div>
            </div>

            {/* Engine Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Active Frameworks</p>
                      <p className="text-2xl font-bold">3</p>
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
                      <p className="text-2xl font-bold">91%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Win Rate Improvement</p>
                      <p className="text-2xl font-bold">+34%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Deals Optimized</p>
                      <p className="text-2xl font-bold">47</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Active Frameworks */}
            <Card>
              <CardHeader>
                <CardTitle>Active Deal Frameworks</CardTitle>
                <p className="text-muted-foreground">
                  Your current deals being optimized by the Dealcrafter Engine
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {dealFrameworks.map((framework) => (
                    <div key={framework.id} className="p-4 border rounded-lg bg-white">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{framework.name}</h3>
                            <Badge 
                              variant={framework.status === 'completed' ? 'default' : 
                                      framework.status === 'active' ? 'secondary' : 'outline'}
                            >
                              {framework.status.replace('_', ' ')}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{framework.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Completion</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Progress value={framework.completion} className="flex-1 h-2" />
                                <span className="text-sm font-medium">{framework.completion}%</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Weighted Score</p>
                              <p className="text-xl font-bold text-blue-600">{framework.weightedScore}/10</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Factors Analyzed</p>
                              <p className="text-xl font-bold">{framework.factors}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Settings className="w-4 h-4 mr-1" />
                            Configure
                          </Button>
                          <Button size="sm">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Critical Success Factors */}
            <Card>
              <CardHeader>
                <CardTitle>Critical Success Factors Analysis</CardTitle>
                <p className="text-muted-foreground">
                  AI-identified factors that most impact your deal success
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {criticalFactors.map((factor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={`w-3 h-3 rounded-full ${
                          factor.status === 'strong' ? 'bg-green-500' :
                          factor.status === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-semibold">{factor.factor}</h4>
                            <Badge variant="outline" className="text-xs">
                              {factor.weight}% weight
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{factor.recommendation}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">{factor.score}/10</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Lightbulb className="w-3 h-3" />
                          <span>AI Insight</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  AI Optimization Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Immediate Action Required</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Schedule follow-up with Michael Chen (VP Finance) within 48 hours to address ROI concerns. 
                          This factor has 20% weight in your deal score.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800">Optimization Opportunity</h4>
                        <p className="text-sm text-green-700 mt-1">
                          Leverage Sarah Johnson&apos;s technical enthusiasm to influence the broader technical team. 
                          Her advocacy could improve your technical fit score by 15%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DealcrafterEnginePage;
