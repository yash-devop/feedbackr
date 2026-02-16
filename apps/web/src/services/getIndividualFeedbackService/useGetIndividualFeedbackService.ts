import { handleGlobalGetRequestQuery } from "@/utils/httpFuntions.ts";
import { API_URLS } from "@repo/common/apiUrls";
import { CACHE_KEYS } from "@repo/common/queryCacheKeys";
import { useQuery } from "@tanstack/react-query";
import { IIndividualFeedbackResponse } from "./useGetIndividualFeedbackService.types.ts";

const useGetIndividualFeedbackService = ({
  domainId,
  feedbackId,
}: {
  domainId: string;
  feedbackId: string;
}) => {
  const getIndividualFeedbackService = useQuery<IIndividualFeedbackResponse>({
    queryKey: [CACHE_KEYS?.GET_FEEDBACK, domainId, feedbackId],
    queryFn: () =>
      handleGlobalGetRequestQuery({
        url: `${API_URLS?.GET_FEEDBACKS}/${feedbackId}`,
        searchParams: { domainId: domainId },
      }),
    enabled: !!domainId,
  });
  return {
    services: { getIndividualFeedbackService },
  };
};

export default useGetIndividualFeedbackService;
