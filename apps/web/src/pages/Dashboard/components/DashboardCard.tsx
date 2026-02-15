import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils.ts";

interface DashboardCardProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function DashboardCard({
  title,
  icon: Icon,
  children,
  className,
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-border bg-white p-5",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        {Icon && <Icon className="h-5 w-5 text-muted-foreground/50" />}
      </div>

      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}
