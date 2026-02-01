import { prisma } from "@/lib/prisma-orm/prisma.js";
import { TcreateFeedbackPayload } from "@repo/common/schemas";

const FeedbackService = {
  createFeedback: async (data: TcreateFeedbackPayload) => {
    try {
      return await prisma.feedback.create({
        data: {
          domainId: data.domainId,
          url: data.url,
          screenshotUrl: data.screenshotUrl,
          message: data.message,
          email: data.email,
          clientContext: data.clientContext ?? {},
          debugContext: data.debugContext ?? {},
        },
      });
    } catch (error) {
      throw error;
    }
  },
};

export { FeedbackService };
