import { useState } from "react";
import DashboardHeader from "./layout/DashboardHeader";
import StudioManagement from "./admin/StudioManagement";
import UserRoleManagement from "./admin/UserRoleManagement";
import CampaignOverview from "./admin/CampaignOverview";

function Home() {
  const [activePath, setActivePath] = useState("/");

  const handleNavigate = (path: string) => {
    setActivePath(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader activePath={activePath} onNavigate={handleNavigate} />
      <main className="container py-6 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <CampaignOverview />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StudioManagement />
            <UserRoleManagement />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
