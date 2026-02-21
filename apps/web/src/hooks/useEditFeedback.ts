import {
  TFeedbackStatus,
  TPriorityStatus,
} from "@/services/getFeedbackService/useGetFeedbackService.types.ts";
import {
  handleGlobalDeleteRequest,
  handleGlobalPatchRequest,
} from "@/utils/httpFuntions.ts";
import { API_URLS } from "@repo/common/apiUrls";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router";
import { toast } from "sonner";

type EditFeedbackPayload = {
  status?: TFeedbackStatus;
  priority?: TPriorityStatus;
  comment?: string;
};
export const useEditFeedback = () => {
  const { feedbackId, domainId } = useParams();
  const updateFeedbackStatusMutation = useMutation<
    {
      data: {
        status?: TFeedbackStatus;
        priority?: TPriorityStatus;
        comment?: string;
      };
      message: string;
      status: number;
    },
    AxiosError<{
      error: {
        message: string;
        code: string;
      };
    }>,
    EditFeedbackPayload
  >({
    mutationFn: async (data) => {
      console.log("payload in mutation", data);
      return handleGlobalPatchRequest({
        url: `${API_URLS.FEEDBACK}/${feedbackId}?domainId=${domainId}`,
        data,
      });
    },
    onError: (err) => {
      const apiError = err?.response?.data?.error.message;
      console.log("onError update", apiError);
      toast.error(err?.message, {
        description: apiError,
        richColors: true,
      });
    },
    onSuccess: (data) => {
      console.log("onSuccess update", data);
      toast.success(data?.message, {
        richColors: true,
      });
    },
  });
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
    }>,
    EditFeedbackPayload
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

  const updateFeedbackStatusHandler = ({
    data,
    callback,
  }: {
    data: EditFeedbackPayload;
    callback?: (data: { message: string }) => void;
  }) => {
    updateFeedbackStatusMutation
      .mutateAsync(data)
      ?.then((data) => callback?.(data));
  };

  return {
    mutations: {
      updateFeedbackStatusMutation,
      deleteFeedbackMutation,
    },
    handler: {
      updateFeedbackStatusHandler,
    },
  };
};
