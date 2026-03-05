import useGetDomainService from "@/services/getDomainService/useGetDomainService.ts";
import {
  ApiDomainStatus,
  IDomainResponse,
  TDomainClientIdGenerateResponse,
  TDomainStatusUpdateResponse,
} from "@/services/getDomainService/useGetDomainService.types.ts";
import {
  handleGlobalPatchRequest,
  handleGlobalPostRequest,
} from "@/utils/httpFuntions.ts";
import { API_URLS } from "@repo/common/apiUrls";
import { TDomainPayload } from "@repo/common/schemas";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { data, useNavigate } from "react-router";
import { toast } from "sonner";

export const useDomain = () => {
  const navigate = useNavigate();

  //SERVICE/s
  const {
    services: { getDomainService },
  } = useGetDomainService();

  //DATA
  const domains = getDomainService.data?.data || [];

  //MUTATION/s
  const createDomainMutation = useMutation<
    IDomainResponse,
    AxiosError<{
      error: {
        message: string;
        code: string;
      };
    }>,
    TDomainPayload
  >({
    mutationFn: async (data) => {
      return handleGlobalPostRequest<Promise<IDomainResponse>>({
        url: API_URLS.DOMAIN,
        data,
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

  const updateDomainStatusMutation = useMutation<
    TDomainStatusUpdateResponse,
    AxiosError<{
      error: {
        message: string;
        code: string;
      };
    }>,
    { status: ApiDomainStatus; domainId: string }
  >({
    mutationFn: async (data) => {
      return handleGlobalPatchRequest({
        url: `${API_URLS.DOMAIN}/${data?.domainId}`,
        data: { status: data?.status },
      });
    },
    onError: (err) => {
      const apiError = err?.response?.data?.error.message;
      toast.error(err?.message, {
        description: apiError,
        richColors: true,
      });
    },
  });

  const regenerateClientIdMutation = useMutation<
    TDomainClientIdGenerateResponse,
    AxiosError<{
      error: {
        message: string;
        code: string;
      };
    }>,
    { domainId: string }
  >({
    mutationFn: async (data) => {
      return handleGlobalPostRequest({
        url: `${API_URLS.DOMAIN}/${data?.domainId}/regenerateKey`,
      });
    },
    onError: (err) => {
      const apiError = err?.response?.data?.error.message;
      toast.error(err?.message, {
        description: apiError,
        richColors: true,
      });
    },
  });

  //FUNCION/s
  const createDomainHandler = ({
    data,
    callback,
  }: {
    data: TDomainPayload;
    callback?: (data: IDomainResponse) => void;
  }) => {
    createDomainMutation.mutateAsync(data)?.then((data) => callback?.(data));
  };

  const updateDomainStatusHandler = ({
    data,
    callback,
  }: {
    data: { status: ApiDomainStatus; domainId: string };
    callback?: (data: TDomainStatusUpdateResponse) => void;
  }) => {
    updateDomainStatusMutation
      ?.mutateAsync(data)
      ?.then((data) => callback?.(data));
  };
  const regenerateClientIdHandler = ({
    data,
    callback,
  }: {
    data: { domainId: string };
    callback?: (data: TDomainClientIdGenerateResponse) => void;
  }) => {
    regenerateClientIdMutation
      ?.mutateAsync(data)
      ?.then((data) => callback?.(data));
  };

  return {
    mutations: {
      createDomainMutation,
      updateDomainStatusMutation,
      regenerateClientIdMutation,
    },
    handler: {
      createDomainHandler,
      updateDomainStatusHandler,
      regenerateClientIdHandler,
    },
    data: {
      domains,
    },
    services: {
      getDomainService,
    },
  };
};
