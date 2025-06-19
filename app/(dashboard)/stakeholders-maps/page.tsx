import { StakeholderMapView } from "@/components/StakeholderMapView";
import { StakeholderFilters } from "@/components/StakeholderFilters";
import { Button } from "@/components/ui/button";
import { Plus, Map } from "lucide-react";

export default function StakeholderMapsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Map className="w-8 h-8" />
              Stakeholder Maps
            </h1>
            <p className="text-muted-foreground">
              Map decision makers, influencers, and champions across your deal ecosystem
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Create New Map
          </Button>
        </div>

        <StakeholderFilters />
        <StakeholderMapView />
      </div>
    </div>
  );
}