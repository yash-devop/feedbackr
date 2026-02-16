import { SidebarTrigger, useSidebar } from "@repo/ui";

const MainPagesLayout = ({ children }: { children: React.ReactNode }) => {
  const { open, isMobile } = useSidebar();
  console.log("isMobile", isMobile);
  return (
    <div className="bg-white w-full h-full shadow-sm ring ring-neutral-300 rounded-sm overflow-y-auto">
      <div className="w-full border-b p-2 flex items-center gap-x-2">
        {(!open || isMobile) && (
          <SidebarTrigger className="bg-muted text-foreground! hover:bg-neutral-200! cursor-pointer" />
        )}
        Top
      </div>
      <main className="p-2">{children}</main>
    </div>
  );
};

export default MainPagesLayout;
