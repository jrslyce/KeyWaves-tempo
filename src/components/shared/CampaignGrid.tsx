import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

interface Campaign {
  id: string;
  gameName: string;
  studio: string;
  status: "active" | "completed" | "draft";
  keysTotal: number;
  keysAssigned: number;
  startDate: string;
  endDate: string;
  thumbnail: string;
}

interface CampaignGridProps {
  campaigns?: Campaign[];
  onView?: (campaignId: string) => void;
  onEdit?: (campaignId: string) => void;
  onDelete?: (campaignId: string) => void;
}

const CampaignGrid = ({
  campaigns = [
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
  ],
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}: CampaignGridProps) => {
  const getStatusBadgeVariant = (status: Campaign["status"]) => {
    switch (status) {
      case "active":
        return "default";
      case "completed":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="w-full bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={campaign.thumbnail}
                alt={campaign.gameName}
                className="w-full h-full object-cover"
              />
              <Badge
                variant={getStatusBadgeVariant(campaign.status)}
                className="absolute top-2 right-2"
              >
                {campaign.status}
              </Badge>
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <h3 className="font-semibold leading-none">
                  {campaign.gameName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {campaign.studio}
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => onView(campaign.id)}>
                    <Eye className="mr-2 h-4 w-4" />
                    View details
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onEdit(campaign.id)}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit campaign
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onDelete(campaign.id)}
                    className="text-red-600"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Keys:</span>
                  <span className="font-medium">
                    {campaign.keysAssigned} / {campaign.keysTotal}
                  </span>
                </div>
                {campaign.status !== "draft" && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">
                      {campaign.startDate} - {campaign.endDate}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CampaignGrid;
