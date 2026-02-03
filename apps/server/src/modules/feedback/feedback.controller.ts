import { createFeedbackSchema } from "@repo/common/schemas";
import { Request, Response } from "express";
import { FeedbackService } from "./feedback.service.js";
import MediaService from "../media/media.service.js";

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
      const newFeedback = await FeedbackService?.createFeedback(parsedPayload);

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

  getFeedback: async (req: Request, res: Response) => {
    try {
      // wip
    } catch (error) {}
  },
};

export { FeedBackController };
