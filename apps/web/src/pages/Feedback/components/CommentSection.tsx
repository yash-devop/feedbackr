import { useAuth } from "@/features/auth/hooks.ts";
import { useEditFeedback } from "@/hooks/useEditFeedback.ts";
import { queryClientGlobal } from "@/lib/tanstack-query/client.ts";
import { cn } from "@/lib/utils.ts";
import useGetIndividualFeedbackService from "@/services/getIndividualFeedbackService/useGetIndividualFeedbackService.ts";
import { CACHE_KEYS } from "@repo/common/queryCacheKeys";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Textarea,
} from "@repo/ui";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";

export const CommentSection = () => {
  const [message, setMessage] = useState("");
  const { userSession } = useAuth();

  const { domainId, feedbackId } = useParams<{
    domainId: string;
    feedbackId: string;
  }>();
  const {
    mutations: { updateFeedbackStatusMutation },
  } = useEditFeedback();
  const {
    services: { getIndividualFeedbackService },
  } = useGetIndividualFeedbackService({
    domainId: domainId ?? "",
    feedbackId: feedbackId ?? "",
  });

  const handleSubmit = () => {
    if (!message.trim()) return;
    updateFeedbackStatusMutation.mutateAsync(
      {
        comment: message,
      },
      {
        // onError: (err) => {
        //   setSelectedStatusFilter((prev) => prev);
        // },
        onSuccess: (data) => {
          queryClientGlobal?.removeQueries({
            queryKey: [CACHE_KEYS?.GET_FEEDBACK],
          });
        },
        onSettled(data, error, variables, onMutateResult, context) {
          setMessage("");
        },
      },
    );
  };

  const updatedAt = getIndividualFeedbackService?.data?.data?.updatedAt;
  const formattedTime = updatedAt ? moment(updatedAt).fromNow() : "";

  return (
    <div className="flex flex-col gap-2">
      {getIndividualFeedbackService?.data?.data?.comment ? (
        <div className="border border-border rounded-xl bg-background flex gap-2 flex-col p-4">
          <section className="w-full">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-5">
                <AvatarImage src={userSession?.data?.user?.image as string} />
                <AvatarFallback>{userSession?.data?.user?.name}</AvatarFallback>
              </Avatar>
              <span className="text-neutral-600 text-sm">
                {userSession?.data?.user?.name}
              </span>
              <span className="text-neutral-4 00 text-xs pt-0.5">
                {formattedTime}
              </span>
            </div>
          </section>
          <section className="px-7 py-2">
            <span className="text-sm text-neutral-600">
              {getIndividualFeedbackService?.data?.data?.comment}
            </span>
          </section>
        </div>
      ) : null}
      <div className="border border-border rounded-xl bg-background p-3 flex items-end gap-2">
        <Textarea
          placeholder="Leave a comment..."
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          className={cn(
            "resize-none border-0 shadow-none focus-visible:ring-0",
            "min-h-[44px] max-h-[120px] bg-transparent!",
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />

        <Button
          size="icon-sm"
          disabled={!message.trim() || updateFeedbackStatusMutation.isPending}
          onClick={handleSubmit}
          className="rounded-full disabled:bg-neutral-600"
        >
          <Send className="mr-0.5" />
        </Button>
      </div>
    </div>
  );
};
