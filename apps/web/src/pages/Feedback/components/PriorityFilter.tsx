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
  Ellipsis,
  OctagonAlert,
  SignalHigh,
  SignalLow,
  SignalMedium,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const PRIORITY_FILTERS = ["NIL", "URGENT", "HIGH", "MEDIUM", "LOW"] as const;

type PRIORITY = (typeof PRIORITY_FILTERS)[number];

const PRIORITY_TO_ICONS = {
  NIL: {
    displayText: "Select Priority",
    icon: Ellipsis,
  },
  URGENT: {
    displayText: "Urgent",
    icon: OctagonAlert,
  },
  LOW: {
    displayText: "Low",
    icon: SignalLow,
  },
  MEDIUM: {
    displayText: "Medium",
    icon: SignalMedium,
  },
  HIGH: {
    displayText: "High",
    icon: SignalHigh,
  },
};
export const PriorityFilter = () => {
  const [selectedPriorityFilter, setSelectedPriorityFilter] =
    useState<PRIORITY>("NIL");

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
  } = useEditFeedback();

  // PREFILLING priority
  useEffect(() => {
    if (getIndividualFeedbackService?.data?.data?.priority) {
      setSelectedPriorityFilter(
        getIndividualFeedbackService.data.data.priority,
      );
    }
  }, [getIndividualFeedbackService?.data?.data?.priority]);

  const PriorityIconComponent = PRIORITY_TO_ICONS[selectedPriorityFilter].icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"sm"} className="text-neutral-600">
          <PriorityIconComponent className="stroke-3" />
          {PRIORITY_TO_ICONS[selectedPriorityFilter].displayText}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="border-border">
        {PRIORITY_FILTERS.map((option) => {
          const OptionIconComponent = PRIORITY_TO_ICONS[option].icon;
          return (
            <DropdownMenuItem
              key={option}
              asChild
              className={cn(
                `focus:bg-neutral-200 text-neutral-700! hover:bg-muted! hover:text-neutral-700! font-medium group`,
              )}
              onClick={() => {
                // setSelectedPriorityFilter(option);

                updateFeedbackStatusMutation.mutateAsync(
                  {
                    priority: option,
                  },
                  {
                    onError: (err) => {
                      setSelectedPriorityFilter((prev) => prev);
                    },
                    onSuccess: (data) => {
                      setSelectedPriorityFilter(data.data.priority ?? "NIL");
                    },
                  },
                );
              }}
            >
              <div className="flex justify-between w-full cursor-pointer">
                <div className="flex items-center gap-x-1.5">
                  <OptionIconComponent className="size-3.5 stroke-3" />
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
