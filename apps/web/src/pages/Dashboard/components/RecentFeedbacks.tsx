import { useMemo } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowUpRight,
  ChevronRight,
  Globe,
  Monitor,
  Smartphone,
  Loader2,
  Inbox,
} from "lucide-react";
import { Button, Card, Badge } from "@repo/ui";
import {
  IFeedback,
  TFeedbackStatus,
} from "@/services/getFeedbackService/useGetFeedbackService.types.ts";
import useGetFeedbacks from "@/hooks/useGetFeedbacks.ts";

interface ActivityItem {
  id: string;
  message: string;
  domainName: string;
  browserName: string;
  deviceType: "mobile" | "desktop";
  status: "pending" | "in-progress" | "done" | "rejected";
  timeAgo: string;
  screenshot: string;
}

const getDeviceType = (os: string): "mobile" | "desktop" => {
  const lowerOs = os?.toLowerCase() || "";
  if (
    lowerOs.includes("android") ||
    lowerOs.includes("ios") ||
    lowerOs.includes("iphone")
  ) {
    return "mobile";
  }
  return "desktop";
};

const mapStatus = (status: TFeedbackStatus): ActivityItem["status"] => {
  const statusMap: Record<TFeedbackStatus, ActivityItem["status"]> = {
    PENDING: "pending",
    RESOLVED: "done",
    REJECTED: "rejected",
    INVALID: "rejected",
  };
  return statusMap[status] || "pending";
};

export function RecentFeedbacks() {
  const {
    data: { feedbackDataArray },
    services: { getFeedbackService },
  } = useGetFeedbacks();
  const isLoading = getFeedbackService?.isLoading;

  const activities: ActivityItem[] = useMemo(() => {
    if (!feedbackDataArray) return [];

    const sortedData = [...feedbackDataArray].sort(
      (a, b) =>
        new Date(b.createdAt)?.getTime() - new Date(a.createdAt)?.getTime(),
    );

    return sortedData.slice(0, 5).map((item: IFeedback) => ({
      id: item.id,
      message: item.message,
      domainName: item.domain?.name || "Unknown Domain",
      browserName: item.clientContext?.browser || "Unknown Browser",
      deviceType: getDeviceType(item?.clientContext?.os),
      status: mapStatus(item?.status),
      timeAgo: formatDistanceToNow(new Date(item?.createdAt), {
        addSuffix: true,
      }),
      screenshot:
        item.images?.[0] ||
        "https://placehold.co/140x100/2a2a2a/FFF?text=No+Image",
    }));
  }, [feedbackDataArray]);

  return (
    <Card className="overflow-hidden border border-border bg-white py-0 shadow-none">
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

      <div className="divide-y divide-border/50 min-h-[100px]">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : activities.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground/50">
            <Inbox className="h-8 w-8 mb-2" />
            <p className="text-sm">No recent activity</p>
          </div>
        ) : (
          activities.map((item) => <ActivityRow key={item.id} item={item} />)
        )}
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
    rejected: {
      label: "Closed",
      style: "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100",
    },
  };

  const config = statusConfig[item.status] || statusConfig.pending;
  const DeviceIcon = item.deviceType === "mobile" ? Smartphone : Monitor;

  return (
    <div className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/40 cursor-pointer">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
        <img
          src={item?.screenshot}
          alt="Feedback screenshot"
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/140x100/2a2a2a/FFF?text=Error";
          }}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {item.message}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 min-w-0">
            <Globe className="h-3 w-3 shrink-0" />
            <span className="truncate">{item?.domainName}</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-1.5 min-w-0">
            <DeviceIcon className="h-3 w-3 shrink-0" />
            <span className="truncate">{item?.browserName}</span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4 pl-4">
        <span className="hidden text-xs font-medium text-muted-foreground/70 sm:inline-block whitespace-nowrap">
          {item.timeAgo}
        </span>
        <Badge
          variant="outline"
          className={`h-6 px-2.5 text-[10px] font-semibold uppercase tracking-wide border shadow-none ${config?.style}`}
        >
          {config?.label}
        </Badge>
        <ChevronRight className="h-4 w-4 text-muted-foreground/50 transition-all group-hover:text-foreground group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}
