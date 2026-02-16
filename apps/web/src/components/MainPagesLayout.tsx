import { useSidebar } from "@repo/ui";

const MainPagesLayout = ({ children }: { children: React.ReactNode }) => {
  const { open, isMobile } = useSidebar();
  console.log("isMobile", isMobile);
  return (
    <div className="bg-white w-full h-full shadow-sm ring ring-neutral-300 rounded-sm overflow-y-auto">
      <main>{children}</main>
    </div>
  );
};

export default MainPagesLayout;
