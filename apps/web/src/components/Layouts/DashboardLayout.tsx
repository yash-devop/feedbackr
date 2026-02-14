import { Outlet } from "react-router";
import { SidebarProvider } from "@repo/ui";
import { AppSidebar } from "../Sidebar/AppSidebar.tsx";

const DashboardLayout = () => {
  return (
    <SidebarProvider className="w-full h-screen flex bg-muted">
      <AppSidebar />
      <main className="flex-1 p-2 overflow-hidden">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
