'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Building, DollarSign, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

const deals = [
  {
    id: 1,
    name: "Acme Corp Enterprise Deal",
    company: "Acme Corporation",
    value: 2500000,
    stage: "Negotiation",
    probability: 75,
    closeDate: "2024-12-31",
    health: "high",
    aiScore: 8.5,
  },
  {
    id: 2,
    name: "TechFlow Digital Transformation",
    company: "TechFlow Solutions",
    value: 1200000,
    stage: "Discovery",
    probability: 45,
    closeDate: "2025-01-15",
    health: "medium",
    aiScore: 6.2,
  },
  {
    id: 3,
    name: "Global Solutions Partnership",
    company: "Global Solutions Inc",
    value: 3800000,
    stage: "Proposal",
    probability: 60,
    closeDate: "2025-02-01",
    health: "high",
    aiScore: 7.8,
  },
]

export function DealPipeline() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Active Deals</CardTitle>
          <Link 
            href="/deals"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View all →
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{deal.name}</h3>
                  <Badge
                    variant={deal.health === "high" ? "default" : "secondary"}
                  >
                    {deal.health} health
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building className="h-3 w-3" />
                    {deal.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    R{(deal.value / 1000000).toFixed(1)}M
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(deal.closeDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">
                      Stage: {deal.stage}
                    </span>
                    <span className="text-xs font-medium">
                      {deal.probability}%
                    </span>
                  </div>
                  <Progress value={deal.probability} className="h-2" />
                </div>
              </div>
              <div className="text-right ml-4">
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">AI Score: {deal.aiScore}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}