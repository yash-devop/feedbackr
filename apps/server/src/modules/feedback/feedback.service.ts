import { prisma } from "@/lib/prisma-orm/prisma.js";
import { TcreateFeedbackPayload } from "@repo/common/schemas";

const FeedbackService = {
  createFeedback: async (data: TcreateFeedbackPayload) => {
    try {
      return await prisma.feedback.create({
        data: {
          domainId: data.domainId,
          url: data.url,
          message: data.message,
          email: data.email,
          clientContext: data.clientContext ?? {},
          debugContext: data.debugContext ?? {},
          images: {
            create: data.images?.map((img) => ({
              url: img.url,
              key: img.key,
            })),
          },
        },
        include: { images: true },
      });
    } catch (error) {
      throw error;
    }
  },
};

export { FeedbackService };
