import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, AlertTriangle, TrendingUp, Users } from "lucide-react"

const insights = [
  {
    type: "opportunity",
    title: "Follow up with Michael Chen",
    description: "VP Finance at Acme Corp hasn't been engaged in 5 days",
    priority: "high",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    type: "risk",
    title: "Budget concerns detected",
    description: "TechFlow mentioned budget constraints in last call",
    priority: "medium",
    icon: AlertTriangle,
    color: "text-yellow-500",
  },
  {
    type: "action",
    title: "Schedule stakeholder meeting",
    description: "3 new decision makers identified at Global Solutions",
    priority: "high",
    icon: Users,
    color: "text-blue-500",
  },
]

export function AIInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3">
              <insight.icon className={`h-5 w-5 mt-0.5 ${insight.color}`} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{insight.title}</p>
                  <Badge
                    variant={insight.priority === "high" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {insight.priority}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}