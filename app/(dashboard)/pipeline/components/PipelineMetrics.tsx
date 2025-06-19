"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CircleUser, 
  TrendingUp,
  PieChart
} from "lucide-react";

export default function PipelineMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deal Health Distribution */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Deal Health Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              {/* This would be an actual chart in a real implementation */}
              <div className="relative w-full max-w-md h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted-foreground/30" />
                </div>
                <div className="space-y-4 z-10">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="text-sm">Healthy (11)</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="text-sm">At Risk (8)</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="text-sm">Critical (5)</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Deal Value by Stage */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Deal Value by Stage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex flex-col justify-center">
              {/* This would be an actual chart in a real implementation */}
              <div className="space-y-4">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm">Discovery</div>
                    <div className="text-sm font-medium">R2,100,000</div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm">Qualification</div>
                    <div className="text-sm font-medium">R2,050,000</div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm">Proposal</div>
                    <div className="text-sm font-medium">R1,880,000</div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm">Negotiation</div>
                    <div className="text-sm font-medium">R1,920,000</div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Velocity */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Sales Velocity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold">68 days</div>
                <div className="text-sm text-muted-foreground">Average days to close</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>Discovery</div>
                  <div className="font-medium">14 days</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>Qualification</div>
                  <div className="font-medium">18 days</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>Proposal</div>
                  <div className="font-medium">22 days</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>Negotiation</div>
                  <div className="font-medium">14 days</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center">
              <CircleUser className="mr-2 h-5 w-5" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600 font-medium">
                    SJ
                  </div>
                  <div>
                    <div className="text-sm font-medium">Sarah Johnson</div>
                    <div className="text-xs text-muted-foreground">R3.2M / 4 deals</div>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">+12%</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600 font-medium">
                    MC
                  </div>
                  <div>
                    <div className="text-sm font-medium">Michael Chen</div>
                    <div className="text-xs text-muted-foreground">R2.8M / 3 deals</div>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">+8%</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600 font-medium">
                    EW
                  </div>
                  <div>
                    <div className="text-sm font-medium">Emma Williams</div>
                    <div className="text-xs text-muted-foreground">R2.1M / 2 deals</div>
                  </div>
                </div>
                <div className="text-sm text-red-600 font-medium">-3%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}