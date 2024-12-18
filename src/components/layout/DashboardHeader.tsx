import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import UserMenu from "./UserMenu";

interface DashboardHeaderProps {
  activePath?: string;
  onNavigate?: (path: string) => void;
}

const DashboardHeader = ({
  activePath = "/",
  onNavigate = () => {},
}: DashboardHeaderProps) => {
  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/studios", label: "Studios" },
    { path: "/users", label: "Users" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold">Game Campaign Portal</h2>
          <Separator orientation="vertical" className="h-6" />
          <nav className="flex items-center space-x-2">
            {navigationItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => onNavigate(item.path)}
                  className="gap-2"
                >
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>
        <UserMenu />
      </div>
    </header>
  );
};

export default DashboardHeader;
