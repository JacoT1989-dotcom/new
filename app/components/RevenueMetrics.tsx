import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Target, Users } from "lucide-react"

const metrics = [
  {
    title: "Total Revenue",
    value: "R12.5M",
    change: "+15%",
    icon: DollarSign,
    color: "text-blue-500",
  },
  {
    title: "Pipeline Value",
    value: "R45.2M",
    change: "+23%",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    title: "Win Rate",
    value: "68%",
    change: "+5%",
    icon: Target,
    color: "text-purple-500",
  },
  {
    title: "Active Deals",
    value: "47",
    change: "+12",
    icon: Users,
    color: "text-orange-500",
  },
]

export function RevenueMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">{metric.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}