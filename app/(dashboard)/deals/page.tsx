"use client";

import { DealFilters } from "@/components/DealFilters";
import { DealPipelineView } from "@/components/DealPipelineView";
import { DealKanban } from "@/components/DealKanban";
import { DealAnalytics } from "@/components/DealAnalytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DealsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Deals</h1>
            <p className="text-muted-foreground">
              Manage your deals with AI-powered insights and The Dealcrafter Framework™
            </p>
          </div>
        </div>

        <DealFilters />

        <Tabs defaultValue="list" className="space-y-6">
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <DealPipelineView />
          </TabsContent>

          <TabsContent value="kanban">
            <DealKanban />
          </TabsContent>

          <TabsContent value="analytics">
            <DealAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}