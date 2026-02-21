import { prisma } from "@/lib/prisma-orm/prisma.js";
import { AppError } from "@/middlewares/error.middleware.js";
import {
  FeedbackStatus,
  FeedbackPriority,
} from "@prismaGenerated/src/generatedClient/prisma/client.js";
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
    return await prisma.feedback.findFirst({
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
  editFeedback: async ({
    feedbackId,
    domainId,
    comment,
    status,
    priority,
  }: {
    feedbackId: string;
    domainId: string;
    status?: FeedbackStatus;
    priority?: FeedbackPriority;
    comment?: string;
  }) => {
    try {
      return await prisma.feedback.update({
        data: {
          comment,
          status,
          priority,
        },
        where: {
          id: feedbackId,
          domainId: domainId,
        },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new AppError(
          "Feedback not found for this domain",
          404,
          "NOT_FOUND",
        );
      }
    }
  },
  deleteFeedback: async ({
    feedbackId,
    domainId,
  }: {
    feedbackId: string;
    domainId: string;
  }) => {
    try {
      return await prisma.feedback.delete({
        where: {
          id: feedbackId,
          domainId: domainId,
        },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new AppError(
          "Feedback not found for this domain",
          404,
          "NOT_FOUND",
        );
      }
    }
  },
};

export { FeedbackService };
