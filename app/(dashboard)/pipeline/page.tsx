"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Filter, 
  PlusCircle, 
  AlertTriangle,
  CheckCircle2, 
  Sparkles, 
  Search,
} from "lucide-react";
import PipelineMetrics from "./components/PipelineMetrics";
import DragDropProvider from "./components/DragDropProvider";
import { PipelineStage } from "./components/PipelineStage";

const pipelineData = {
  summary: {
    totalDeals: 24,
    totalValue: 7950000,
    avgDealSize: 331250,
    winRate: 68,
    atRiskDeals: 5,
    needsAction: 8,
    onTrack: 11
  },
  stages: [
    {
      id: 1,
      name: "Discovery",
      deals: [
        {
          id: 1,
          name: "TechNova Enterprise Suite",
          company: "TechNova Inc.",
          value: 850000,
          owner: "Michael Chen",
          probability: 35,
          healthScore: 58,
          daysInStage: 18,
          nextAction: "Technical demonstration",
          nextActionDate: "2025-06-25"
        },
        {
          id: 2,
          name: "Global Solutions Platform",
          company: "Global Solutions Ltd",
          value: 1250000,
          owner: "Emma Williams",
          probability: 45,
          healthScore: 72,
          daysInStage: 9,
          nextAction: "Proposal review",
          nextActionDate: "2025-06-20"
        }
      ]
    },
    {
      id: 2,
      name: "Qualification",
      deals: [
        {
          id: 3,
          name: "Startup Growth Package",
          company: "StartupX",
          value: 420000,
          owner: "David Miller",
          probability: 55,
          healthScore: 43,
          daysInStage: 14,
          nextAction: "Budget discussion",
          nextActionDate: "2025-06-19"
        },
        {
          id: 4,
          name: "Healthcare Analytics Platform",
          company: "MediTech Solutions",
          value: 680000,
          owner: "Sarah Johnson",
          probability: 60,
          healthScore: 81,
          daysInStage: 7,
          nextAction: "Executive meeting",
          nextActionDate: "2025-06-22"
        },
        {
          id: 5,
          name: "Retail Expansion Project",
          company: "Urban Retail Group",
          value: 950000,
          owner: "James Wilson",
          probability: 40,
          healthScore: 62,
          daysInStage: 21,
          nextAction: "ROI assessment",
          nextActionDate: "2025-06-30"
        }
      ]
    },
    {
      id: 3,
      name: "Proposal",
      deals: [
        {
          id: 6,
          name: "Financial Services Upgrade",
          company: "Capital Finance",
          value: 1100000,
          owner: "Olivia Martinez",
          probability: 75,
          healthScore: 88,
          daysInStage: 5,
          nextAction: "Contract review",
          nextActionDate: "2025-06-21"
        },
        {
          id: 7,
          name: "Manufacturing Optimization",
          company: "Industrial Works Co.",
          value: 780000,
          owner: "Robert Smith",
          probability: 65,
          healthScore: 77,
          daysInStage: 12,
          nextAction: "Final proposal",
          nextActionDate: "2025-06-24"
        }
      ]
    },
    {
      id: 4,
      name: "Negotiation",
      deals: [
        {
          id: 8,
          name: "Cloud Infrastructure Migration",
          company: "Data Systems Inc.",
          value: 1350000,
          owner: "Jennifer Lee",
          probability: 85,
          healthScore: 92,
          daysInStage: 8,
          nextAction: "Legal review",
          nextActionDate: "2025-06-20"
        },
        {
          id: 9,
          name: "Marketing Analytics Suite",
          company: "Brand Elevate",
          value: 570000,
          owner: "Thomas Brown",
          probability: 90,
          healthScore: 95,
          daysInStage: 3,
          nextAction: "Contract signing",
          nextActionDate: "2025-06-19"
        }
      ]
    }
  ]
};

export default function PipelinePage() {
  const [activeTab, setActiveTab] = useState("pipeline");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-8 space-y-8">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Smart Pipeline</h1>
            <p className="text-muted-foreground">
              Visual deal health tracking based on live data
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Deal
            </Button>
          </div>
        </div>

        {/* Health cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Pipeline Value</CardTitle>
              <div className="text-2xl font-bold">
                {formatCurrency(pipelineData.summary.totalValue)}
              </div>
              <p className="text-xs text-muted-foreground">
                Avg. {formatCurrency(pipelineData.summary.avgDealSize)}
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex items-center mt-1">
                <Sparkles className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500 font-medium">12%</span> vs previous month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center text-red-700">
                <AlertTriangle className="mr-1 h-4 w-4 text-red-500" />
                At Risk
              </CardTitle>
              <div className="text-2xl font-bold text-red-700">
                {pipelineData.summary.atRiskDeals} Deals
              </div>
              <p className="text-xs text-red-600/70">
                {formatCurrency(pipelineData.summary.atRiskDeals * 200000)} at risk
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-red-600/70 mt-1">
                Require immediate attention
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center text-yellow-700">
                <AlertTriangle className="mr-1 h-4 w-4 text-yellow-500" />
                Needs Action
              </CardTitle>
              <div className="text-2xl font-bold text-yellow-700">
                {pipelineData.summary.needsAction} Deals
              </div>
              <p className="text-xs text-yellow-600/70">
                Actions due within 7 days
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-yellow-600/70 mt-1">
                Follow up required
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center text-green-700">
                <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                On Track
              </CardTitle>
              <div className="text-2xl font-bold text-green-700">
                {pipelineData.summary.onTrack} Deals
              </div>
              <p className="text-xs text-green-600/70">
                {pipelineData.summary.winRate}% win rate
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-green-600/70 mt-1">
                Progressing as expected
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Tabs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search deals..."
              className="w-full pl-8 bg-white"
            />
          </div>
          <Tabs defaultValue="pipeline" className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="pipeline" onClick={() => setActiveTab("pipeline")}>Pipeline</TabsTrigger>
              <TabsTrigger value="metrics" onClick={() => setActiveTab("metrics")}>
                <Sparkles className="mr-2 h-4 w-4" />
                Metrics
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          {activeTab === "pipeline" ? (
            <div className="h-full">
              <DragDropProvider>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                  {pipelineData.stages.map((stage, index) => (
                    <PipelineStage 
                      key={index} 
                      stage={stage}
                      stageIndex={index} 
                    />
                  ))}
                </div>
              </DragDropProvider>
            </div>
          ) : (
            <PipelineMetrics />
          )}
        </div>
      </div>
    </div>
  );
}