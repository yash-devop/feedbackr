import { Globe } from "lucide-react";
import { DashboardCard } from "./DashboardCard.tsx";

const BROWSERS = [
  { name: "Chrome", percent: 45 },
  { name: "Safari", percent: 28 },
  { name: "Firefox", percent: 18 },
  { name: "Edge", percent: 9 },
];

export function BrowserStats() {
  return (
    <DashboardCard title="Browser Breakdown" icon={Globe}>
      <div className="w-full flex flex-col gap-6">
        {BROWSERS.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground/80">
                {item.name}
              </span>
              <span className="text-muted-foreground">{item.percent}%</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
