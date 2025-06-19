import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Users, Calendar } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    label: "New Deal",
    icon: Plus,
    href: "/deals/new",
    variant: "default" as const,
  },
  {
    label: "Create War Room",
    icon: FileText,
    href: "/deal-war-rooms/new",
    variant: "outline" as const,
  },
  {
    label: "Map Stakeholders",
    icon: Users,
    href: "/stakeholder-maps/new",
    variant: "outline" as const,
  },
  {
    label: "Schedule Meeting",
    icon: Calendar,
    href: "/calendar/new",
    variant: "outline" as const,
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Link key={action.label} href={action.href}>
              <Button
                variant={action.variant}
                className="w-full justify-start"
                size="sm"
              >
                <action.icon className="h-4 w-4 mr-2" />
                {action.label}
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}