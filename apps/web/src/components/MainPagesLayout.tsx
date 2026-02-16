import { SidebarTrigger } from "@repo/ui";

const MainPagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white w-full h-full shadow-sm ring ring-neutral-300 rounded-sm p-2 overflow-y-auto">
      <SidebarTrigger className="bg-muted text-foreground! hover:bg-neutral-200! cursor-pointer" />
      <div className="px-8 pt-2">{children}</div>
    </div>
  );
};

export default MainPagesLayout;
