import { ColumnDef } from "@tanstack/react-table";
import { ArrowRight, Edit, Edit2, ExternalLink, MoreHorizontal } from "lucide-react";
import {
  ApiDomainStatus,
  IDomainType,
} from "@/services/getDomainService/useGetDomainService.types.ts";
import CopyButton from "./CopyButton.tsx";
import { Button } from "@repo/ui";

export const columns: ColumnDef<IDomainType>[] = [
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
          className="text-muted-foreground hover:text-primary flex items-center gap-2"
        >
          <span className="font-medium text-foreground">{url}</span>
          <ExternalLink className="size-3" />
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
        <section className="flex items-center gap-2">
          <div className="flex text-xs font-mono text-muted-foreground bg-muted p-1 rounded-md">
            <p>client_{toShow}</p>
          </div>
          <CopyButton value={clientId} />
        </section>
      );
    },
  },
  {
    accessorKey: "feedbacksCount",
    header: "Total Feedback",
    cell: ({ row }) => {
      const count: number = row?.getValue("feedbacksCount");

      return <div className="text-muted-foreground text-xs">{count}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as ApiDomainStatus;

      const statusStyles = {
        ACTIVE: {
          dot: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]",
          text: "text-foreground",
        },
        PAUSED: {
          dot: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]",
          text: "text-foreground",
        },
        INACTIVE: {
          dot: "bg-neutral-300 dark:bg-neutral-600",
          text: "text-muted-foreground",
        },
      };

      const config = statusStyles[status] || statusStyles.INACTIVE;

      return (
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${config.dot}`} />
          <span className={`text-[13px] capitalize ${config.text}`}>
            {status.toLowerCase()}
          </span>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className=" text-muted-foreground hover:text-foreground"
          >
            <Edit2 className="size-4" />
          </Button>
          <Button variant="ghost" className=" text-muted-foreground text-xs">
            View Feedbacks
            <ArrowRight className="size-4" />
          </Button>
        </div>
      );
    },
  },
];
