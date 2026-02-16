import { SidebarTrigger, useSidebar } from "@repo/ui";

const MainPagesLayout = ({ children }: { children: React.ReactNode }) => {
  const { open, isMobile } = useSidebar();
  console.log("isMobile", isMobile);
  return (
    <div className="bg-white w-full h-full shadow-sm ring ring-neutral-300 rounded-sm p-2 overflow-y-auto">
      {(!open || isMobile) && (
        <SidebarTrigger className="bg-muted text-foreground! hover:bg-neutral-200! cursor-pointer" />
      )}
      {children}
    </div>
  );
};

export default MainPagesLayout;
