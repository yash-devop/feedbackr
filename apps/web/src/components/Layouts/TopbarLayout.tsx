import { cn } from "@/lib/utils.ts";
import { SidebarTrigger, useSidebar } from "@repo/ui";

export const TopbarContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { open, isMobile } = useSidebar();
  return (
    <div
      className={cn(
        `w-full border-b border-border h-14 flex items-center justify-between gap-x-2 px-3`,
        open && "px-6",
      )}
    >
      <TopbarStaticSection>
        {(!open || isMobile) && (
          <SidebarTrigger className="bg-muted text-foreground! hover:bg-neutral-200! cursor-pointer" />
        )}
        <h1 className="font-medium tracking-tight">{title}</h1>
      </TopbarStaticSection>
      {children}
    </div>
  );
};
export const TopbarGroup = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `font-medium tracking-tight flex items-center gap-x-2`,
        className,
      )}
    >
      {children}
    </div>
  );
};
export const TopbarStaticSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        `font-medium tracking-tight flex items-center gap-x-2`,
        className,
      )}
    >
      {children}
    </h1>
  );
};
