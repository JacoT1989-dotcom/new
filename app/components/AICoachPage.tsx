import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  MessageSquare, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2,
  Clock,
  Zap,
  Target,
  // Users,
  Lightbulb
} from "lucide-react";

const insights = [
  {
    type: "opportunity",
    title: "Follow up on Acme Corp decision maker",
    description: "Sarah Johnson (CTO) hasn't been contacted in 5 days. Her influence score is high.",
    priority: "high",
    dealName: "Acme Corp Enterprise",
    timestamp: "2 hours ago"
  },
  {
    type: "risk",
    title: "Deal velocity slowing down",
    description: "TechFlow deal has been in negotiation stage for 3 weeks. Consider escalation.",
    priority: "medium",
    dealName: "TechFlow Digital",
    timestamp: "4 hours ago"
  },
  {
    type: "success",
    title: "Perfect stakeholder coverage",
    description: "Global Solutions deal has 95% stakeholder coverage. Great job!",
    priority: "low",
    dealName: "Global Solutions",
    timestamp: "1 day ago"
  }
];

const coachingTips = [
  {
    category: "Objection Handling",
    tip: "When facing budget objections, redirect to value and ROI rather than discounting.",
    confidence: 92,
    basedOn: "Analysis of 50+ similar deals"
  },
  {
    category: "Stakeholder Engagement",
    tip: "Schedule regular check-ins with champions to maintain momentum.",
    confidence: 88,
    basedOn: "Your recent stakeholder activity"
  },
  {
    category: "Deal Progression",
    tip: "Create urgency by tying implementation to business quarters.",
    confidence: 85,
    basedOn: "Seasonal purchasing patterns"
  }
];

export default function AICoachPage() {
  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Brain className="w-8 h-8" />
            AI Sales Coach
          </h1>
          <p className="text-muted-foreground">
            Get personalized insights and recommendations to accelerate your deals
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <MessageSquare className="w-4 h-4 mr-2" />
          Ask Coach
        </Button>
      </div>

      {/* AI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">AI Insights Today</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Actions Completed</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Win Rate Boost</p>
                <p className="text-2xl font-bold">+23%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Confidence Score</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="insights" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="insights">Smart Insights</TabsTrigger>
          <TabsTrigger value="coaching">Coaching Tips</TabsTrigger>
          <TabsTrigger value="chat">AI Chat</TabsTrigger>
        </TabsList>

        <TabsContent value="insights" className="space-y-4">
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        insight.type === 'opportunity' ? 'bg-green-100' :
                        insight.type === 'risk' ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        {insight.type === 'opportunity' ? (
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        ) : insight.type === 'risk' ? (
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{insight.title}</h3>
                          <Badge 
                            variant={insight.priority === 'high' ? 'destructive' : 
                                    insight.priority === 'medium' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {insight.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Deal: {insight.dealName}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{insight.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Dismiss</Button>
                      <Button size="sm">Take Action</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="coaching" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coachingTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      {tip.category}
                    </CardTitle>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      {tip.confidence}% confident
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm">{tip.tip}</p>
                  <div className="text-xs text-muted-foreground">
                    <p>Based on: {tip.basedOn}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">Apply</Button>
                    <Button size="sm" variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="chat" className="space-y-4">
          <Card className="h-96">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Chat with AI Coach
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm">
                      Hi! I&apos;m your AI Sales Coach. I&apos;ve analyzed your recent deal activity and I&apos;m ready to help. 
                      What would you like to discuss about your current deals?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask me about your deals, strategies, or get coaching advice..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button>Send</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}