import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  Award, 
  Clock, 
  Users, 
  TrendingUp,
  Target,
  CheckCircle2,
  Star
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Advanced Objection Handling",
    description: "Master techniques for overcoming complex sales objections",
    duration: "45 min",
    progress: 75,
    level: "Advanced",
    rating: 4.8,
    enrolled: 234
  },
  {
    id: 2,
    title: "Stakeholder Mapping Mastery",
    description: "Identify and influence key decision makers effectively",
    duration: "60 min",
    progress: 0,
    level: "Intermediate",
    rating: 4.9,
    enrolled: 189
  },
  {
    id: 3,
    title: "Dealcrafter Framework™ Fundamentals",
    description: "Learn the core methodology for deal structuring",
    duration: "90 min",
    progress: 100,
    level: "Beginner",
    rating: 4.7,
    enrolled: 456
  }
];

const achievements = [
  { name: "Deal Closer", icon: Target, description: "Closed 10 deals using Dealcrafter methodology" },
  { name: "Stakeholder Master", icon: Users, description: "Completed advanced stakeholder mapping course" },
  { name: "Top Performer", icon: TrendingUp, description: "Achieved 120% of quarterly target" }
];

export default function SalesAcademyPage() {
  return (
    <div className="flex-1 p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="w-8 h-8" />
            Sales Academy
          </h1>
          <p className="text-muted-foreground">
            Continuous learning to accelerate your sales performance
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Play className="w-4 h-4 mr-2" />
          Continue Learning
        </Button>
      </div>

      {/* Learning Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Courses Completed</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Learning Hours</p>
                <p className="text-2xl font-bold">48</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Certifications</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.enrolled} enrolled</span>
                    {course.progress === 100 && (
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant={course.progress === 100 ? "outline" : "default"}
                  >
                    {course.progress === 100 ? "Review" : course.progress > 0 ? "Continue" : "Start Course"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>AI-Recommended Learning Path</CardTitle>
              <p className="text-muted-foreground">
                Based on your current deals and performance metrics
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Enterprise Selling Strategies</h4>
                    <p className="text-sm text-muted-foreground">Recommended for your Acme Corp deal</p>
                  </div>
                  <Button size="sm">Start</Button>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Financial Objection Handling</h4>
                    <p className="text-sm text-muted-foreground">Address budget concerns effectively</p>
                  </div>
                  <Button size="sm" variant="outline">Preview</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}