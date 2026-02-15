import { createFeedbackSchema } from "@repo/common/schemas";
import { Request, Response } from "express";
import { FeedbackService } from "./feedback.service.js";
import MediaService from "../media/media.service.js";
import { AppError } from "@/middlewares/error.middleware.js";

const FeedBackController = {
  createFeedback: async (req: Request, res: Response) => {
    let uploadFileKeys: string[] = [];

    try {
      const payload = req?.body;
      const initialPayload = {
        ...payload,
        clientContext: payload.clientContext
          ? JSON.parse(payload.clientContext)
          : undefined,
        debugContext: payload.debugContext
          ? JSON.parse(payload.debugContext)
          : undefined,
        images: undefined,
      };

      createFeedbackSchema.parse(initialPayload);

      const uploadResponse = await MediaService.uploadFiles(
        req?.files as Express.Multer.File[],
      );

      uploadFileKeys = uploadResponse?.map((resp) => resp?.key);

      const finalPayload = {
        ...initialPayload,
        images: uploadResponse,
      };

      const parsedPayload = createFeedbackSchema.parse(finalPayload);

      const newFeedback = await FeedbackService?.createFeedback({
        data: parsedPayload,
        domainId: req?.domain?.id,
      });

      res.jsonSuccess({
        data: newFeedback,
        status: 200,
        message: "Feedback created successfully",
      });
    } catch (error) {
      if (uploadFileKeys?.length > 0) {
        MediaService?.deleteFiles(uploadFileKeys);
      }

      throw error;
    }
  },

  getFeedbacks: async (req: Request, res: Response) => {
    const { domainId } = req?.query as { domainId: string };
    if (!domainId) throw new AppError("Domain Id not found", 404, "NOT_FOUND");
    const feedbacksResponse = await FeedbackService.getFeedbacks(domainId);

    res.jsonSuccess({
      data: feedbacksResponse,
      status: 200,
      message: "Feedbacks fetched successfully",
    });
  },
};

export { FeedBackController };
