import { handleGlobalDeleteRequest } from "@/utils/httpFuntions.ts";
import { API_URLS } from "@repo/common/apiUrls";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router";
import { toast } from "sonner";
export const useDeleteFeedback = () => {
  const { feedbackId, domainId } = useParams();

  const deleteFeedbackMutation = useMutation<
    {
      message: string;
      status: number;
    },
    AxiosError<{
      error: {
        message: string;
        code: string;
      };
    }>
  >({
    mutationFn: async (data) => {
      console.log("payload in mutation", data);
      return handleGlobalDeleteRequest({
        url: `${API_URLS.FEEDBACK}/${feedbackId}?domainId=${domainId}`,
      });
    },
    onError: (err) => {
      const apiError = err?.response?.data?.error.message;
      toast.error(err?.message, {
        description: apiError,
        richColors: true,
      });
    },
    onSuccess: (data) => {
      toast.success(data?.message, {
        richColors: true,
      });
    },
  });

  return {
    mutations: {
      deleteFeedbackMutation,
    },
  };
};
