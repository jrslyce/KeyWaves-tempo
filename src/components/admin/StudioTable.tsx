import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Power, Trash2 } from "lucide-react";

interface Studio {
  id: string;
  name: string;
  status: "active" | "inactive";
  website: string;
  campaignsCount: number;
  lastActive: string;
}

interface StudioTableProps {
  studios?: Studio[];
  onEdit?: (studioId: string) => void;
  onDeactivate?: (studioId: string) => void;
  onDelete?: (studioId: string) => void;
}

const StudioTable = ({
  studios = [
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
    {
      id: "3",
      name: "Indie Games Co",
      status: "inactive",
      website: "https://example.com",
      campaignsCount: 0,
      lastActive: "2024-02-15",
    },
  ],
  onEdit = () => {},
  onDeactivate = () => {},
  onDelete = () => {},
}: StudioTableProps) => {
  return (
    <div className="w-full bg-background rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Studio Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Website</TableHead>
            <TableHead className="text-center">Active Campaigns</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {studios.map((studio) => (
            <TableRow key={studio.id}>
              <TableCell className="font-medium">{studio.name}</TableCell>
              <TableCell>
                <Badge
                  variant={studio.status === "active" ? "default" : "secondary"}
                >
                  {studio.status}
                </Badge>
              </TableCell>
              <TableCell>
                <a
                  href={studio.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {studio.website}
                </a>
              </TableCell>
              <TableCell className="text-center">
                {studio.campaignsCount}
              </TableCell>
              <TableCell>{studio.lastActive}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onEdit(studio.id)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDeactivate(studio.id)}>
                      <Power className="mr-2 h-4 w-4" />
                      {studio.status === "active" ? "Deactivate" : "Activate"}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onDelete(studio.id)}
                      className="text-red-600"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudioTable;
