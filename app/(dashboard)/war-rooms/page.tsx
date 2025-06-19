import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Plus, 
  Users, 
  Clock, 
  Target, 
  TrendingUp, 
  MessageSquare,
  Calendar,
  AlertCircle
} from "lucide-react";

const warRooms = [
  {
    id: 1,
    name: "Acme Corp Enterprise Deal",
    dealValue: "R2,500,000",
    status: "active",
    priority: "high",
    members: 5,
    lastActivity: "2 hours ago",
    nextMilestone: "Final presentation - Dec 20",
    healthScore: 85,
    updates: 12
  },
  {
    id: 2,
    name: "TechFlow Digital Transformation",
    dealValue: "R1,200,000",
    status: "active",
    priority: "medium",
    members: 3,
    lastActivity: "1 day ago",
    nextMilestone: "Contract review - Dec 18",
    healthScore: 72,
    updates: 8
  },
  {
    id: 3,
    name: "Global Solutions Partnership",
    dealValue: "R3,800,000",
    status: "planning",
    priority: "high",
    members: 7,
    lastActivity: "3 hours ago",
    nextMilestone: "Stakeholder meeting - Dec 22",
    healthScore: 91,
    updates: 15
  }
];

export default function WarRoomsPage() {
  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FileText className="w-8 h-8" />
            Deal War Rooms
          </h1>
          <p className="text-muted-foreground">
            Collaborative spaces for managing complex, high-value deals
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Create War Room
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Active Rooms</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">R7.5M</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Team Members</p>
                <p className="text-2xl font-bold">15</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Urgent Actions</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* War Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warRooms.map((room) => (
          <Card key={room.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{room.name}</CardTitle>
                <Badge 
                  variant={room.priority === 'high' ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {room.priority} priority
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{room.dealValue}</span>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${
                    room.healthScore >= 80 ? 'bg-green-500' : 
                    room.healthScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <span>{room.healthScore}%</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{room.members} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <span>{room.updates} updates</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>Last activity: {room.lastActivity}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{room.nextMilestone}</span>
                </div>
              </div>
              
              <div className="flex space-x-2 pt-2">
                <Button size="sm" className="flex-1">
                  Enter Room
                </Button>
                <Button size="sm" variant="outline">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}