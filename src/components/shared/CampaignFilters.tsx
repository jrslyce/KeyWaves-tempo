import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface CampaignFiltersProps {
  selectedStudio?: string;
  selectedStatus?: string;
  searchQuery?: string;
  onStudioChange?: (value: string) => void;
  onStatusChange?: (value: string) => void;
  onSearchChange?: (value: string) => void;
}

const CampaignFilters = ({
  selectedStudio = "",
  selectedStatus = "",
  searchQuery = "",
  onStudioChange = () => {},
  onStatusChange = () => {},
  onSearchChange = () => {},
}: CampaignFiltersProps) => {
  const studios = [
    { value: "all", label: "All Studios" },
    { value: "awesome-games", label: "Awesome Games Studio" },
    { value: "epic-makers", label: "Epic Game Makers" },
    { value: "indie-games", label: "Indie Games Co" },
  ];

  const statuses = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
    { value: "draft", label: "Draft" },
  ];

  return (
    <div className="w-full bg-background p-4 border rounded-lg space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
      <div className="flex-1 flex items-center space-x-2">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search campaigns..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <Select value={selectedStudio} onValueChange={onStudioChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Studio" />
          </SelectTrigger>
          <SelectContent>
            {studios.map((studio) => (
              <SelectItem key={studio.value} value={studio.value}>
                {studio.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={onStatusChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CampaignFilters;
