import { useQuery } from "@tanstack/react-query";
import { CACHE_KEYS } from "@repo/common/queryCacheKeys";
import { API_URLS } from "@repo/common/apiUrls";
import { handleGlobalGetRequestQuery } from "@/utils/httpFuntions.ts";
import { IFeedbackResponse } from "./useGetFeedbackService.types.ts";

const useGetFeedbackService = ({ domainId }: { domainId: string }) => {
  const getFeedbackService = useQuery<IFeedbackResponse>({
    queryKey: [CACHE_KEYS?.GET_FEEDBACKS, domainId],
    queryFn: () =>
      handleGlobalGetRequestQuery({
        url: API_URLS?.GET_FEEBACKS,
        searchParams: { domainId: domainId },
      }),
    enabled: !!domainId,
  });

  return {
    services: { getFeedbackService },
  };
};

export default useGetFeedbackService;
