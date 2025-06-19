"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Clock, 
  Users, 
  Video,
  Phone,
  MapPin,
  Target,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

const upcomingEvents = [
  {
    id: 1,
    title: "Acme Corp - Final Presentation",
    time: "10:00 AM",
    date: "Today",
    type: "meeting",
    attendees: ["Sarah Johnson", "Michael Chen"],
    dealValue: "R2.5M",
    location: "Zoom Meeting",
    priority: "high"
  },
  {
    id: 2,
    title: "TechFlow - Contract Review",
    time: "2:30 PM",
    date: "Today",
    type: "call",
    attendees: ["David Miller"],
    dealValue: "R1.2M",
    location: "Phone Call",
    priority: "medium"
  },
  {
    id: 3,
    title: "Global Solutions - Stakeholder Mapping",
    time: "9:00 AM",
    date: "Tomorrow",
    type: "meeting",
    attendees: ["Emma Williams", "John Smith", "Lisa Chen"],
    dealValue: "R3.8M",
    location: "Client Office",
    priority: "high"
  }
];

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <CalendarIcon className="w-8 h-8" />
                  Sales Calendar
                </h1>
                <p className="text-muted-foreground">
                  Manage your deal-related meetings and activities
                </p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>

            {/* Today's Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Today&apos;s Events</p>
                      <p className="text-2xl font-bold">6</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Deal Value</p>
                      <p className="text-2xl font-bold">R4.2M</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Stakeholders</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">High Priority</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar Widget */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              {/* Events List */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="today" className="space-y-4">
                    <TabsList>
                      <TabsTrigger value="today">Today</TabsTrigger>
                      <TabsTrigger value="week">This Week</TabsTrigger>
                      <TabsTrigger value="month">This Month</TabsTrigger>
                    </TabsList>

                    <TabsContent value="today" className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center space-x-4 p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            event.type === 'meeting' ? 'bg-blue-100' : 'bg-green-100'
                          }`}>
                            {event.type === 'meeting' ? (
                              event.location.includes('Zoom') ? (
                                <Video className="w-6 h-6 text-blue-600" />
                              ) : (
                                <Users className="w-6 h-6 text-blue-600" />
                              )
                            ) : (
                              <Phone className="w-6 h-6 text-green-600" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold">{event.title}</h3>
                              <Badge 
                                variant={event.priority === 'high' ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {event.priority}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Target className="w-4 h-4" />
                                <span>{event.dealValue}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-muted-foreground">Attendees:</span>
                              <div className="flex items-center gap-1">
                                {event.attendees.slice(0, 3).map((attendee, index) => (
                                  <Avatar key={index} className="w-6 h-6">
                                    <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=24&h=24&fit=crop&crop=face`} />
                                    <AvatarFallback className="text-xs">
                                      {attendee.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                ))}
                                {event.attendees.length > 3 && (
                                  <span className="text-xs text-muted-foreground ml-1">
                                    +{event.attendees.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm">Join</Button>
                          </div>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="week">
                      <div className="text-center py-8 text-muted-foreground">
                        <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Weekly view coming soon...</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="month">
                      <div className="text-center py-8 text-muted-foreground">
                        <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Monthly view coming soon...</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default CalendarPage;