import { cn } from "@/lib/utils.ts";
import { ClassValue } from "clsx";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  iconClassName?: ClassValue;
  className?: string;
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  iconClassName,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center gap-4 rounded-xl p-5 transition-all duration-300 ease-in-out",
        "bg-white ring ring-border ",
        "hover:shadow-sm shadow-border hover:border-primary/30",

        className,
      )}
    >
      {Icon && (
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
            "bg-secondary text-secondary-foreground",
            iconClassName,
          )}
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      )}

      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground/60 group-hover:text-primary transition-colors">
          {title}
        </span>

        <span className="text-2xl font-bold tracking-tight text-foreground">
          {value}
        </span>
      </div>
    </div>
  );
}
