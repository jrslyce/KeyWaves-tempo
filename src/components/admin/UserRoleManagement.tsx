import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import UserRoleTable from "./UserRoleTable";

interface UserRoleManagementProps {
  activeTab?: string;
  onTabChange?: (value: string) => void;
  onAddUser?: () => void;
  onEditUser?: (userId: string) => void;
  onChangeRole?: (userId: string) => void;
  onManagePermissions?: (userId: string) => void;
}

const UserRoleManagement = ({
  activeTab = "all",
  onTabChange = () => {},
  onAddUser = () => {},
  onEditUser = () => {},
  onChangeRole = () => {},
  onManagePermissions = () => {},
}: UserRoleManagementProps) => {
  const adminUsers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      lastActive: "2024-03-20",
    },
  ];

  const studioManagers = [
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@studio.com",
      role: "studio_manager",
      studio: "Awesome Games Studio",
      lastActive: "2024-03-19",
    },
  ];

  const regularUsers = [
    {
      id: "3",
      name: "Bob Wilson",
      email: "bob@studio.com",
      role: "user",
      studio: "Epic Game Makers",
      lastActive: "2024-03-18",
    },
  ];

  return (
    <Card className="w-full bg-background">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl font-bold">
          User Role Management
        </CardTitle>
        <Button onClick={onAddUser}>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="admins">Administrators</TabsTrigger>
            <TabsTrigger value="managers">Studio Managers</TabsTrigger>
            <TabsTrigger value="users">Regular Users</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <UserRoleTable
              users={[...adminUsers, ...studioManagers, ...regularUsers]}
              onEdit={onEditUser}
              onChangeRole={onChangeRole}
              onManagePermissions={onManagePermissions}
            />
          </TabsContent>
          <TabsContent value="admins">
            <UserRoleTable
              users={adminUsers}
              onEdit={onEditUser}
              onChangeRole={onChangeRole}
              onManagePermissions={onManagePermissions}
            />
          </TabsContent>
          <TabsContent value="managers">
            <UserRoleTable
              users={studioManagers}
              onEdit={onEditUser}
              onChangeRole={onChangeRole}
              onManagePermissions={onManagePermissions}
            />
          </TabsContent>
          <TabsContent value="users">
            <UserRoleTable
              users={regularUsers}
              onEdit={onEditUser}
              onChangeRole={onChangeRole}
              onManagePermissions={onManagePermissions}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UserRoleManagement;
