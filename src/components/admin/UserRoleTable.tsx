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
import { Edit, MoreHorizontal, Shield, UserCog } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "studio_manager" | "user";
  studio?: string;
  lastActive: string;
}

interface UserRoleTableProps {
  users?: User[];
  onEdit?: (userId: string) => void;
  onChangeRole?: (userId: string) => void;
  onManagePermissions?: (userId: string) => void;
}

const UserRoleTable = ({
  users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      lastActive: "2024-03-20",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@studio.com",
      role: "studio_manager",
      studio: "Awesome Games Studio",
      lastActive: "2024-03-19",
    },
    {
      id: "3",
      name: "Bob Wilson",
      email: "bob@studio.com",
      role: "user",
      studio: "Epic Game Makers",
      lastActive: "2024-03-18",
    },
  ],
  onEdit = () => {},
  onChangeRole = () => {},
  onManagePermissions = () => {},
}: UserRoleTableProps) => {
  const getRoleBadgeVariant = (role: User["role"]) => {
    switch (role) {
      case "admin":
        return "destructive";
      case "studio_manager":
        return "default";
      default:
        return "secondary";
    }
  };

  const formatRole = (role: string) => {
    return role
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="w-full bg-background rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Studio</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={getRoleBadgeVariant(user.role)}>
                  {formatRole(user.role)}
                </Badge>
              </TableCell>
              <TableCell>{user.studio || "-"}</TableCell>
              <TableCell>{user.lastActive}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onEdit(user.id)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit user
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onChangeRole(user.id)}>
                      <Shield className="mr-2 h-4 w-4" />
                      Change role
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onManagePermissions(user.id)}
                    >
                      <UserCog className="mr-2 h-4 w-4" />
                      Manage permissions
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

export default UserRoleTable;
