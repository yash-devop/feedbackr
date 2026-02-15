import { SidebarTrigger } from "@repo/ui";
import { Outlet } from "react-router";

const MainPagesLayout = () => {
  return (
    <div className="bg-white w-full h-full shadow-sm ring ring-neutral-300 rounded-sm p-2">
      <SidebarTrigger className="bg-muted text-foreground! hover:bg-neutral-200! cursor-pointer" />

      <Outlet />
    </div>
  );
};

export default MainPagesLayout;
