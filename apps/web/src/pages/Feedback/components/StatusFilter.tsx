import { useEditFeedback } from "@/hooks/useEditFeedback.ts";
import { cn } from "@/lib/utils.ts";
import useGetIndividualFeedbackService from "@/services/getIndividualFeedbackService/useGetIndividualFeedbackService.ts";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui";
import {
  Ban,
  CircleCheckBig,
  CircleDotDashed,
  CircleOff,
  Earth,
  Ellipsis,
  LucideProps,
  X,
} from "lucide-react";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router";

const STATUS_FILTERS = [
  "NIL",
  "PENDING",
  "RESOLVED",
  "REJECTED",
  "INVALID",
] as const;
type STATUS = (typeof STATUS_FILTERS)[number];

export const StatusFilter = () => {
  const [selectedStatusFilter, setSelectedStatusFilter] =
    useState<STATUS>("NIL");

  const { domainId, feedbackId } = useParams<{
    domainId: string;
    feedbackId: string;
  }>();
  const {
    services: { getIndividualFeedbackService },
  } = useGetIndividualFeedbackService({
    domainId: domainId ?? "",
    feedbackId: feedbackId ?? "",
  });

  const {
    mutations: { updateFeedbackStatusMutation },
    handler: { updateFeedbackStatusHandler },
  } = useEditFeedback();

  const STATUS_TO_ICONS: Record<
    STATUS,
    {
      displayText: string;
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
      color: string;
    }
  > = {
    PENDING: {
      displayText: "Pending",
      icon: CircleDotDashed,
      color: "stroke-yellow-400",
    },
    REJECTED: {
      displayText: "Rejected",
      icon: Ban,
      color: "stroke-red-400",
    },
    RESOLVED: {
      displayText: "Resolved",
      icon: CircleCheckBig,
      color: "stroke-green-400",
    },
    INVALID: {
      displayText: "Invalid",
      icon: X,
      color: "stroke-red-400",
    },

    NIL: {
      displayText: "Select Status",
      icon: Ellipsis,
      color: "",
      // icon: ChartNoAxesColumnIncreasing,
    },
  };

  // PREFILLING STATUS
  useEffect(() => {
    if (getIndividualFeedbackService?.data?.data?.status) {
      setSelectedStatusFilter(getIndividualFeedbackService.data.data.status);
    }
  }, [getIndividualFeedbackService?.data?.data?.status]);

  const StatusIconComponent = STATUS_TO_ICONS[selectedStatusFilter]?.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"sm"} className="text-neutral-600">
          <StatusIconComponent
            className={cn(
              `size-3.5 stroke-3`,
              STATUS_TO_ICONS[selectedStatusFilter]?.color,
            )}
          />
          {STATUS_TO_ICONS[selectedStatusFilter]?.displayText}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="border-border">
        {STATUS_FILTERS?.map((option) => {
          const OptionIconComponent = STATUS_TO_ICONS[option]?.icon;
          return (
            <DropdownMenuItem
              key={option}
              asChild
              className={cn(
                `focus:bg-neutral-200 text-neutral-700! hover:bg-muted! hover:text-neutral-700! font-medium group`,
              )}
              onClick={() => {
                // setSelectedStatusFilter(option);
                updateFeedbackStatusMutation.mutateAsync(
                  {
                    status: option,
                  },
                  {
                    onError: (err) => {
                      setSelectedStatusFilter((prev) => prev);
                    },
                    onSuccess: (data) => {
                      setSelectedStatusFilter(data.data.status ?? "NIL");
                    },
                  },
                );
              }}
            >
              <div className="flex justify-between w-full cursor-pointer">
                <div className="flex items-center gap-x-1.5">
                  <OptionIconComponent
                    className={cn(
                      `size-3.5 stroke-3`,
                      STATUS_TO_ICONS[option]?.color,
                    )}
                  />
                  <p className="text-xs capitalize">{option?.toLowerCase()}</p>
                </div>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
