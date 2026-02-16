import { IFeedback } from "../getFeedbackService/useGetFeedbackService.types.ts";

interface IIndividualFeedbackResponse {
  data: IFeedback;
  message: string;
}

export type { IIndividualFeedbackResponse };
