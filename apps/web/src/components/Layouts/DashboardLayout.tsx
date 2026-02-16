import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@repo/ui";
import { AppSidebar } from "../Sidebar/AppSidebar.tsx";

const DashboardLayout = () => {
  return (
    <SidebarProvider className="w-full h-screen flex bg-muted/80">
      <AppSidebar />
      <main className="flex-1 p-2 overflow-hidden w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
