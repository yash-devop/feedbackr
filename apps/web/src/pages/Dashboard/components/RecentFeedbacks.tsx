import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronRight,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react";
import { Button, Card, Badge } from "@repo/ui";

interface ActivityItem {
  id: string;
  message: string;
  domainName: string;
  browserName: string;
  deviceType?: "mobile" | "desktop";
  status: "pending" | "in-progress" | "done";
  timeAgo: string;
  screenshot: string;
}

const MOCK_DATA: ActivityItem[] = [
  {
    id: "1",
    message:
      "The login button is not responding when clicked. I've tried multiple times but nothing happens.",
    domainName: "app.example.com",
    browserName: "Chrome",
    deviceType: "desktop",
    status: "pending",
    timeAgo: "20 days ago",
    screenshot: "https://placehold.co/140x100/2a2a2a/FFF",
  },
  {
    id: "2",
    message: "Profile picture upload is failing with error message.",
    domainName: "app.example.com",
    browserName: "Safari",
    deviceType: "desktop",
    status: "done",
    timeAgo: "21 days ago",
    screenshot: "https://placehold.co/140x100/2a2a2a/FFF",
  },
  {
    id: "3",
    message: "Navigation menu disappears on mobile view.",
    domainName: "app.example.com",
    browserName: "Chrome Mobile",
    deviceType: "mobile",
    status: "pending",
    timeAgo: "20 days ago",
    screenshot: "https://placehold.co/140x100/2a2a2a/FFF",
  },
];

export function RecentFeedbacks() {
  return (
    <Card className="overflow-hidden border border-border bg-white py-0">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 p-5">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Recent Activity
        </h2>

        <Link to="/feedback">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1 text-xs font-medium text-muted-foreground hover:text-primary"
          >
            View all
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>

      {/* List */}
      <div className="divide-y divide-border/50">
        {MOCK_DATA.map((item) => (
          <ActivityRow key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
}

function ActivityRow({ item }: { item: ActivityItem }) {
  const statusConfig = {
    pending: {
      label: "Pending",
      style: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    },
    "in-progress": {
      label: "In Progress",
      style: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    },
    done: {
      label: "Resolved",
      style:
        "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    },
  };

  const config = statusConfig[item.status];

  const DeviceIcon = item.deviceType === "mobile" ? Smartphone : Monitor;

  return (
    <div className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/40 cursor-pointer">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
        <img
          src={item.screenshot}
          alt=""
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {item.message}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 min-w-0">
            <Globe className="h-3 w-3 shrink-0" />
            <span className="truncate">{item.domainName}</span>
          </div>

          <span className="text-border">•</span>

          <div className="flex items-center gap-1.5 min-w-0">
            <DeviceIcon className="h-3 w-3 shrink-0" />
            <span className="truncate">{item.browserName}</span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4 pl-4">
        <span className="hidden text-xs font-medium text-muted-foreground/70 sm:inline-block whitespace-nowrap">
          {item.timeAgo}
        </span>

        <Badge
          variant="outline"
          className={`h-6 px-2.5 text-[10px] font-semibold uppercase tracking-wide border shadow-none ${config.style}`}
        >
          {config.label}
        </Badge>

        <ChevronRight className="h-4 w-4 text-muted-foreground/50 transition-all group-hover:text-foreground group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}
