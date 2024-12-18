import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddStudioDialog from "./AddStudioDialog";
import StudioTable from "./StudioTable";

interface StudioManagementProps {
  activeTab?: string;
  onTabChange?: (value: string) => void;
  onAddStudio?: (data: {
    name: string;
    website: string;
    contactEmail: string;
  }) => void;
  onEditStudio?: (studioId: string) => void;
  onDeactivateStudio?: (studioId: string) => void;
  onDeleteStudio?: (studioId: string) => void;
}

const StudioManagement = ({
  activeTab = "active",
  onTabChange = () => {},
  onAddStudio = () => {},
  onEditStudio = () => {},
  onDeactivateStudio = () => {},
  onDeleteStudio = () => {},
}: StudioManagementProps) => {
  return (
    <Card className="w-full bg-background">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl font-bold">Studio Management</CardTitle>
        <AddStudioDialog onSubmit={onAddStudio} />
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="active">Active Studios</TabsTrigger>
            <TabsTrigger value="inactive">Inactive Studios</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <StudioTable
              studios={[
                {
                  id: "1",
                  name: "Awesome Games Studio",
                  status: "active",
                  website: "https://example.com",
                  campaignsCount: 5,
                  lastActive: "2024-03-20",
                },
                {
                  id: "2",
                  name: "Epic Game Makers",
                  status: "active",
                  website: "https://example.com",
                  campaignsCount: 3,
                  lastActive: "2024-03-19",
                },
              ]}
              onEdit={onEditStudio}
              onDeactivate={onDeactivateStudio}
              onDelete={onDeleteStudio}
            />
          </TabsContent>
          <TabsContent value="inactive">
            <StudioTable
              studios={[
                {
                  id: "3",
                  name: "Indie Games Co",
                  status: "inactive",
                  website: "https://example.com",
                  campaignsCount: 0,
                  lastActive: "2024-02-15",
                },
              ]}
              onEdit={onEditStudio}
              onDeactivate={onDeactivateStudio}
              onDelete={onDeleteStudio}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default StudioManagement;
