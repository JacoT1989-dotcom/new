"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Crown, 
  Heart, 
  Shield, 
  AlertTriangle,
  // Calendar,
  Phone,
  Mail,
  // Linkedin,
  MessageSquare,
  // MoreHorizontal,
  Plus,
  Target,
  TrendingUp,
  Clock
} from "lucide-react";

const stakeholderData = {
  deals: [
    {
      id: 1,
      name: "Acme Corp Enterprise Deal",
      stakeholders: [
        {
          id: 1,
          name: "Sarah Johnson",
          title: "Chief Technology Officer",
          department: "Technology",
          role: "Champion",
          influence: 9,
          support: 8,
          lastContact: "2 days ago",
          email: "sarah.j@acmecorp.com",
          phone: "+27 11 123 4567",
          linkedin: "/in/sarahjohnson",
          notes: "Strong technical advocate, loves our API flexibility",
          relationshipStrength: "strong"
        },
        {
          id: 2,
          name: "Michael Chen",
          title: "VP Finance",
          department: "Finance",
          role: "Decision Maker",
          influence: 10,
          support: 6,
          lastContact: "1 week ago",
          email: "m.chen@acmecorp.com",
          phone: "+27 11 123 4568",
          linkedin: "/in/michaelchen",
          notes: "Budget concerns, needs ROI justification",
          relationshipStrength: "moderate"
        },
        {
          id: 3,
          name: "David Park",
          title: "IT Director",
          department: "Technology",
          role: "Influencer",
          influence: 7,
          support: 9,
          lastContact: "3 days ago",
          email: "d.park@acmecorp.com",
          phone: "+27 11 123 4569",
          linkedin: "/in/davidpark",
          notes: "Implementation lead, very supportive",
          relationshipStrength: "strong"
        },
        {
          id: 4,
          name: "Lisa Williams",
          title: "Head of Procurement",
          department: "Operations",
          role: "Blocker",
          influence: 6,
          support: 3,
          lastContact: "2 weeks ago",
          email: "l.williams@acmecorp.com",
          phone: "+27 11 123 4570",
          linkedin: "/in/lisawilliams",
          notes: "Prefers existing vendor, price sensitive",
          relationshipStrength: "weak"
        }
      ]
    }
  ]
};

export function StakeholderMapView() {
  const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
      case 'decision maker': return Crown;
      case 'champion': return Heart;
      case 'influencer': return TrendingUp;
      case 'blocker': return Shield;
      default: return Users;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'decision maker': return 'bg-purple-100 text-purple-800';
      case 'champion': return 'bg-green-100 text-green-800';
      case 'influencer': return 'bg-blue-100 text-blue-800';
      case 'blocker': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRelationshipColor = (strength: string) => {
    switch (strength) {
      case 'strong': return 'border-green-500 bg-green-50';
      case 'moderate': return 'border-yellow-500 bg-yellow-50';
      case 'weak': return 'border-red-500 bg-red-50';
      default: return 'border-gray-300 bg-white';
    }
  };

  const getInfluenceSize = (influence: number) => {
    if (influence >= 8) return 'w-16 h-16';
    if (influence >= 6) return 'w-14 h-14';
    return 'w-12 h-12';
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="visual" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="visual">Visual Map</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="visual" className="space-y-6">
          {stakeholderData.deals.map((deal) => (
            <Card key={deal.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {deal.name} - Stakeholder Map
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      {deal.stakeholders.length} stakeholders
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Stakeholder
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Visual Stakeholder Map */}
                <div className="relative min-h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 mb-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 h-full">
                    {deal.stakeholders.map((stakeholder, index) => {
                      const RoleIcon = getRoleIcon(stakeholder.role);
                      return (
                        <div
                          key={stakeholder.id}
                          className={`relative group cursor-pointer transition-all duration-200 hover:scale-105 ${getRelationshipColor(stakeholder.relationshipStrength)} border-2 rounded-xl p-4 ${getInfluenceSize(stakeholder.influence)}`}
                          style={{
                            position: 'relative',
                            transform: `translate(${index * 20}px, ${(index % 2) * 40}px)`
                          }}
                        >
                          <div className="text-center space-y-2">
                            <Avatar className="mx-auto">
                              <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=64&h=64&fit=crop&crop=face`} />
                              <AvatarFallback>
                                {stakeholder.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div>
                              <h4 className="font-semibold text-sm">{stakeholder.name}</h4>
                              <p className="text-xs text-muted-foreground">{stakeholder.title}</p>
                            </div>
                            
                            <div className="flex items-center justify-center">
                              <Badge className={`text-xs ${getRoleColor(stakeholder.role)}`}>
                                <RoleIcon className="w-3 h-3 mr-1" />
                                {stakeholder.role}
                              </Badge>
                            </div>
                            
                            <div className="flex justify-center space-x-1">
                              <div className="text-center">
                                <div className="text-xs font-bold">{stakeholder.influence}</div>
                                <div className="text-xs text-muted-foreground">Influence</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xs font-bold">{stakeholder.support}</div>
                                <div className="text-xs text-muted-foreground">Support</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Connection lines would be drawn here with SVG */}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-green-500 bg-green-50 rounded"></div>
                    <span>Strong Relationship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-yellow-500 bg-yellow-50 rounded"></div>
                    <span>Moderate Relationship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-red-500 bg-red-50 rounded"></div>
                    <span>Weak Relationship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-purple-600" />
                    <span>Decision Maker</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-green-600" />
                    <span>Champion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-600" />
                    <span>Blocker</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          {stakeholderData.deals.map((deal) => (
            <Card key={deal.id}>
              <CardHeader>
                <CardTitle>{deal.name} - Stakeholder List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deal.stakeholders.map((stakeholder) => {
                    const RoleIcon = getRoleIcon(stakeholder.role);
                    return (
                      <Card key={stakeholder.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + stakeholder.id}?w=48&h=48&fit=crop&crop=face`} />
                                <AvatarFallback>
                                  {stakeholder.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold">{stakeholder.name}</h4>
                                  <Badge className={`text-xs ${getRoleColor(stakeholder.role)}`}>
                                    <RoleIcon className="w-3 h-3 mr-1" />
                                    {stakeholder.role}
                                  </Badge>
                                </div>
                                
                                <p className="text-sm text-muted-foreground mb-2">
                                  {stakeholder.title} • {stakeholder.department}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                                  <div>
                                    <p className="text-xs text-muted-foreground">Influence Level</p>
                                    <div className="flex items-center gap-2">
                                      <Progress value={stakeholder.influence * 10} className="flex-1 h-2" />
                                      <span className="text-sm font-medium">{stakeholder.influence}/10</span>
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <p className="text-xs text-muted-foreground">Support Level</p>
                                    <div className="flex items-center gap-2">
                                      <Progress value={stakeholder.support * 10} className="flex-1 h-2" />
                                      <span className="text-sm font-medium">{stakeholder.support}/10</span>
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <p className="text-xs text-muted-foreground">Last Contact</p>
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      <span className="text-sm">{stakeholder.lastContact}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <p className="text-sm text-muted-foreground italic">
                                  &quot;{stakeholder.notes}&quot;
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="outline">
                                <Mail className="w-4 h-4 mr-1" />
                                Email
                              </Button>
                              <Button size="sm" variant="outline">
                                <Phone className="w-4 h-4 mr-1" />
                                Call
                              </Button>
                              <Button size="sm" variant="outline">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                Note
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Coverage Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Decision Makers</span>
                    <Badge variant="outline">1/2</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Champions</span>
                    <Badge variant="outline">1/1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Influencers</span>
                    <Badge variant="outline">1/3</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Blockers Identified</span>
                    <Badge variant="destructive">1</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Relationship Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Strong Relationships</span>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Average Influence</span>
                      <span className="text-sm font-medium">8.0/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Average Support</span>
                      <span className="text-sm font-medium">6.5/10</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Engagement Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Recently Contacted</span>
                    <Badge variant="outline">2/4</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Overdue Follow-up</span>
                    <Badge variant="destructive">1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Meeting Scheduled</span>
                    <Badge variant="default">1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Response Pending</span>
                    <Badge variant="outline">0</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recommended Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800">Urgent: Contact Lisa Williams</h4>
                      <p className="text-sm text-red-700">
                        Procurement head hasn&apos;t been contacted in 2 weeks. Risk of vendor lock-in.
                      </p>
                      <Button size="sm" className="mt-2">Schedule Meeting</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800">Leverage Sarah Johnson</h4>
                      <p className="text-sm text-blue-700">
                        Strong champion with high influence. Ask for internal advocacy support.
                      </p>
                      <Button size="sm" variant="outline" className="mt-2">Create Action Plan</Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">Expand Stakeholder Network</h4>
                      <p className="text-sm text-green-700">
                        Identify additional influencers in Operations and HR departments.
                      </p>
                      <Button size="sm" variant="outline" className="mt-2">Research Contacts</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>  
  );
}
