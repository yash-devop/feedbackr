import { ConfirmDialog } from "@/components/ConfirmDialog.tsx";
import { useDeleteFeedback } from "@/hooks/useDeleteFeedback.ts";
import { queryClientGlobal } from "@/lib/tanstack-query/client.ts";
import { CACHE_KEYS } from "@repo/common/queryCacheKeys";
import { Button } from "@repo/ui";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export const FeedbackDeleteSection = () => {
  const {
    mutations: { deleteFeedbackMutation },
  } = useDeleteFeedback();
  const params = useParams<{ domainId: string }>();
  const navigate = useNavigate();
  return (
    <ConfirmDialog
      title="Delete feedback permanently?"
      description="This action will permanently delete the feedback and cannot be undone."
      confirmLabel="Delete"
      cancelLabel="Cancel"
      variant="destructive"
      onConfirm={() => {
        deleteFeedbackMutation.mutate(
          {},
          {
            onSuccess: () => {
              queryClientGlobal.invalidateQueries({
                queryKey: [CACHE_KEYS.GET_FEEDBACKS, params.domainId],
              });
              navigate(`/dashboard/${params.domainId}/feedbacks`, {
                replace: true,
              });
            },
          },
        );
      }}
      trigger={
        <Button variant="destructive" size="sm" className="cursor-pointer">
          <Trash className="mr-1" />
          Delete Permanently
        </Button>
      }
    />
  );
};
