import { SidebarProvider } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/AppSidebar";
// import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Play, 
  // Pause, 
  // RotateCcw, 
  TrendingUp, 
  // TrendingDown,
  Award,
  MessageSquare,
  Clock,
  Target,
  Users,
  Lightbulb,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

const callAnalytics = [
  {
    id: 1,
    callName: "Acme Corp - Discovery Call",
    date: "Dec 15, 2024",
    duration: "45 min",
    participants: ["Sarah Johnson", "Michael Chen"],
    aiScore: 8.2,
    sentiment: "positive",
    keyTopics: ["Technical Requirements", "Budget Discussion", "Timeline"],
    recommendations: 3,
    status: "analyzed"
  },
  {
    id: 2,
    callName: "TechFlow - Objection Handling",
    date: "Dec 14, 2024",
    duration: "32 min",
    participants: ["David Miller"],
    aiScore: 6.7,
    sentiment: "neutral",
    keyTopics: ["Competitor Comparison", "Pricing Concerns"],
    recommendations: 5,
    status: "analyzed"
  }
];

const improvementAreas = [
  {
    area: "Objection Handling",
    currentScore: 72,
    potentialScore: 85,
    improvement: "+13%",
    priority: "high"
  },
  {
    area: "Value Proposition",
    currentScore: 81,
    potentialScore: 90,
    improvement: "+9%",
    priority: "medium"
  },
  {
    area: "Closing Techniques",
    currentScore: 69,
    potentialScore: 82,
    improvement: "+13%",
    priority: "high"
  }
];

export default function DealReplayAIPage() {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-full">
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Brain className="w-8 h-8 text-purple-500" />
                Deal Replay AI
              </h1>
              <p className="text-muted-foreground">
                Analyze sales calls and get AI-powered feedback to improve your performance
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Play className="w-4 h-4 mr-2" />
              Upload Call Recording
            </Button>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Calls Analyzed</p>
                    <p className="text-2xl font-bold">23</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Avg AI Score</p>
                    <p className="text-2xl font-bold">7.8/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Performance Boost</p>
                    <p className="text-2xl font-bold">+18%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Win Rate Impact</p>
                    <p className="text-2xl font-bold">+12%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="recent" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recent">Recent Analysis</TabsTrigger>
              <TabsTrigger value="improvement">Improvement Areas</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-4">
              <div className="space-y-4">
                {callAnalytics.map((call) => (
                  <Card key={call.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{call.callName}</h3>
                            <Badge 
                              variant={call.sentiment === 'positive' ? 'default' : 
                                      call.sentiment === 'neutral' ? 'secondary' : 'destructive'}
                            >
                              {call.sentiment}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{call.date} • {call.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{call.participants.join(', ')}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-3">
                            <div>
                              <p className="text-sm text-muted-foreground">AI Score</p>
                              <p className="text-2xl font-bold text-blue-600">{call.aiScore}/10</p>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-1">Performance</p>
                              <Progress value={call.aiScore * 10} className="h-2" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Key Topics Discussed:</p>
                            <div className="flex flex-wrap gap-2">
                              {call.keyTopics.map((topic, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary" className="mb-2">
                            {call.recommendations} recommendations
                          </Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Play className="w-4 h-4 mr-1" />
                              Replay
                            </Button>
                            <Button size="sm">
                              View Analysis
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="improvement" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Improvement Opportunities</CardTitle>
                  <p className="text-muted-foreground">
                    AI-identified areas where focused improvement can have the biggest impact
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {improvementAreas.map((area, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{area.area}</h4>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={area.priority === 'high' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {area.priority} priority
                            </Badge>
                            <span className="text-sm font-medium text-green-600">{area.improvement}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Current Score</span>
                            <span>{area.currentScore}%</span>
                          </div>
                          <Progress value={area.currentScore} className="h-2" />
                          
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Potential Score</span>
                            <span>{area.potentialScore}%</span>
                          </div>
                          <Progress value={area.potentialScore} className="h-2 opacity-50" />
                        </div>
                        
                        <div className="flex justify-end mt-3">
                          <Button size="sm" variant="outline">
                            <Lightbulb className="w-4 h-4 mr-1" />
                            Get Coaching
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Strengths Identified
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium text-green-800">Excellent Discovery Questions</p>
                        <p className="text-xs text-green-600 mt-1">You consistently ask probing questions that uncover real needs</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium text-green-800">Strong Rapport Building</p>
                        <p className="text-xs text-green-600 mt-1">Great at establishing trust and connection with prospects</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                      Areas for Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm font-medium text-orange-800">Closing Confidence</p>
                        <p className="text-xs text-orange-600 mt-1">Hesitation when asking for commitment or next steps</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm font-medium text-orange-800">Objection Pivot</p>
                        <p className="text-xs text-orange-600 mt-1">Opportunity to better redirect pricing objections to value</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-500" />
                    AI Performance Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Performance trend analysis coming soon...</p>
                    <p className="text-sm mt-2">Upload more call recordings to see detailed trends and patterns</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  );
}