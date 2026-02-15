import { ScrollText } from "lucide-react";
import { DashboardCard } from "./DashboardCard.tsx";

const TOP_PAGES = [
  { rank: 1, path: "/login", issues: 12 },
  { rank: 2, path: "/profile", issues: 8 },
  { rank: 3, path: "/dashboard", issues: 5 },
  { rank: 4, path: "/settings", issues: 2 },
];

export function MostFeedbackPagesCard() {
  return (
    <DashboardCard title="Pages with Most Feedback" icon={ScrollText}>
      <div className="w-full flex flex-col gap-8 items-center">
        {TOP_PAGES.map((page) => (
          <div key={page.path} className="w-full flex items-center gap-4 group">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/50 text-xs font-bold text-secondary-foreground">
              {page.rank}
            </div>

            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors cursor-pointer">
                https://app.example.com{page.path}
              </p>
            </div>

            <div className="shrink-0 rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {page.issues} issues
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
