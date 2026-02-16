import { prisma } from "@/lib/prisma-orm/prisma.js";
import { TcreateFeedbackPayload } from "@repo/common/schemas";

const FeedbackService = {
  createFeedback: async ({
    data,
    domainId,
  }: {
    data: TcreateFeedbackPayload;
    domainId: string;
  }) => {
    try {
      return await prisma.feedback.create({
        data: {
          domainId: domainId,
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
  getFeedbacks: async (domainId: string) => {
    return await prisma.feedback.findMany({
      where: {
        domainId,
      },
      include: {
        images: true,
        domain: { select: { name: true, status: true } },
      },
    });
  },
  getFeedback: async ({
    feedbackId,
    domainId,
  }: {
    feedbackId: string;
    domainId: string;
  }) => {
    return await prisma?.feedback?.findFirst({
      where: {
        domainId: domainId,
        id: feedbackId,
      },
      include: {
        images: true,
        domain: { select: { name: true, status: true } },
      },
    });
  },
};

export { FeedbackService };
