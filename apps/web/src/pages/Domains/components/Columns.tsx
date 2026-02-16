import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowRight,
  Edit2,
  ExternalLink,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  DotSquare,
  Ellipsis,
} from "lucide-react";
import {
  ApiDomainStatus,
  IDomainType,
} from "@/services/getDomainService/useGetDomainService.types.ts";
import CopyButton from "./CopyButton.tsx";
import { Button } from "@repo/ui";
import { formatDistanceToNow } from "date-fns";

export const columns: ColumnDef<IDomainType>[] = [
  {
    id: "status-dot",
    header: "",
    size: 20,
    cell: ({ row }) => {
      const status = row.getValue("status") as ApiDomainStatus;
      const isActive = status === "ACTIVE";
      const isPaused = status === "PAUSED";
      const dotClass = isActive
        ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
        : isPaused
          ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
          : "bg-neutral-300";

      return (
        <div className="flex items-center justify-center">
          <div className={`h-2 w-2 rounded-full ${dotClass}`} />
        </div>
      );
    },
  },

  {
    accessorKey: "url",
    header: "Domain",
    cell: ({ row }) => {
      const url = row.getValue("url") as string;

      return (
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 group/link"
        >
          <span className="font-medium text-foreground transition-colors group-hover:text-primary">
            {url}
          </span>
          <ExternalLink className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      );
    },
  },
  {
    accessorKey: "clientId",
    header: "Client ID",
    cell: ({ row }) => {
      const clientId: string = row?.getValue("clientId");
      const toShow =
        clientId?.substring(0, 10) +
        "..." +
        clientId?.substring(clientId?.length - 10, clientId?.length - 1);
      return (
        <div className="flex items-center gap-2">
          <div className="flex text-xs font-mono text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded border border-transparent">
            <span>client_{toShow}</span>
          </div>
          <CopyButton value={clientId} />
        </div>
      );
    },
  },
  {
    accessorKey: "feedbacksCount",
    header: () => <div className="w-full text-center">Feedback</div>,
    cell: ({ row }) => {
      const count: number = row.getValue("feedbacksCount");
      return (
        <div className="w-full text-center text-muted-foreground text-xs font-medium">
          {count}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as ApiDomainStatus;

      const config = {
        ACTIVE: {
          icon: CheckCircle2,
          color: "text-emerald-500",
          label: "Active",
        },
        PAUSED: {
          icon: AlertCircle,
          color: "text-amber-500",
          label: "Paused",
        },
        INACTIVE: {
          icon: XCircle,
          color: "text-muted-foreground",
          label: "Inactive",
        },
        DISABLED: {
          icon: XCircle,
          color: "text-muted-foreground",
          label: "Disabled",
        },
      };

      const { icon: Icon, color, label } = config[status] || config.INACTIVE;

      return (
        <div className="flex items-center gap-1.5">
          <Icon className={`size-3.5 ${color}`} />
          <span className="text-xs text-muted-foreground capitalize">
            {label}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "updatedAt",
    header: "Last Activity",
    cell: ({ row }) => {
      const dateStr = row.getValue("updatedAt") as string;
      if (!dateStr)
        return <span className="text-xs text-muted-foreground">-</span>;

      return (
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="size-3" />
          <span className="text-xs">
            {formatDistanceToNow(new Date(dateStr), { addSuffix: true })}
          </span>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: "",
    cell: () => {
      return (
        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            className="h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground"
          >
            View
            <ArrowRight className="size-3.5 ml-1" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
          >
            <Ellipsis className="size-3.5" />
          </Button>
        </div>
      );
    },
  },
];
