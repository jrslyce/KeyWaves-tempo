import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CampaignFilters from "../shared/CampaignFilters";
import CampaignGrid from "../shared/CampaignGrid";

interface CampaignOverviewProps {
  activeTab?: string;
  onTabChange?: (value: string) => void;
  onViewCampaign?: (campaignId: string) => void;
  onEditCampaign?: (campaignId: string) => void;
  onDeleteCampaign?: (campaignId: string) => void;
  onFilterChange?: {
    onStudioChange?: (value: string) => void;
    onStatusChange?: (value: string) => void;
    onSearchChange?: (value: string) => void;
  };
}

const CampaignOverview = ({
  activeTab = "all",
  onTabChange = () => {},
  onViewCampaign = () => {},
  onEditCampaign = () => {},
  onDeleteCampaign = () => {},
  onFilterChange = {
    onStudioChange: () => {},
    onStatusChange: () => {},
    onSearchChange: () => {},
  },
}: CampaignOverviewProps) => {
  const activeCampaigns = [
    {
      id: "1",
      gameName: "Awesome Adventure",
      studio: "Awesome Games Studio",
      status: "active",
      keysTotal: 100,
      keysAssigned: 45,
      startDate: "2024-03-01",
      endDate: "2024-04-01",
      thumbnail:
        "https://dummyimage.com/320x180/6366F1/ffffff&text=Awesome+Adventure",
    },
  ];

  const completedCampaigns = [
    {
      id: "2",
      gameName: "Epic Quest",
      studio: "Epic Game Makers",
      status: "completed",
      keysTotal: 50,
      keysAssigned: 50,
      startDate: "2024-02-01",
      endDate: "2024-03-01",
      thumbnail: "https://dummyimage.com/320x180/6366F1/ffffff&text=Epic+Quest",
    },
  ];

  const draftCampaigns = [
    {
      id: "3",
      gameName: "Indie Dreams",
      studio: "Indie Games Co",
      status: "draft",
      keysTotal: 75,
      keysAssigned: 0,
      startDate: "",
      endDate: "",
      thumbnail:
        "https://dummyimage.com/320x180/6366F1/ffffff&text=Indie+Dreams",
    },
  ];

  return (
    <Card className="w-full bg-background">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Campaign Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <CampaignFilters
          onStudioChange={onFilterChange.onStudioChange}
          onStatusChange={onFilterChange.onStatusChange}
          onSearchChange={onFilterChange.onSearchChange}
        />

        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Campaigns</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <CampaignGrid
              campaigns={[
                ...activeCampaigns,
                ...completedCampaigns,
                ...draftCampaigns,
              ]}
              onView={onViewCampaign}
              onEdit={onEditCampaign}
              onDelete={onDeleteCampaign}
            />
          </TabsContent>

          <TabsContent value="active">
            <CampaignGrid
              campaigns={activeCampaigns}
              onView={onViewCampaign}
              onEdit={onEditCampaign}
              onDelete={onDeleteCampaign}
            />
          </TabsContent>

          <TabsContent value="completed">
            <CampaignGrid
              campaigns={completedCampaigns}
              onView={onViewCampaign}
              onEdit={onEditCampaign}
              onDelete={onDeleteCampaign}
            />
          </TabsContent>

          <TabsContent value="draft">
            <CampaignGrid
              campaigns={draftCampaigns}
              onView={onViewCampaign}
              onEdit={onEditCampaign}
              onDelete={onDeleteCampaign}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CampaignOverview;
