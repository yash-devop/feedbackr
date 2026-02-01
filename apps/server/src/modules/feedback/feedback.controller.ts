import { createFeedbackSchema } from "@repo/common/schemas";
import { Request, Response } from "express";
import { FeedbackService } from "./feedback.service.js";

const FeedBackController = {
  createFeedback: async (req: Request, res: Response) => {
    const parsedPayload = createFeedbackSchema.parse(req.body);
    const newFeedback = await FeedbackService.createFeedback(parsedPayload);

    res.jsonSuccess({
      data: newFeedback,
      status: 200,
      message: "Feedback created successfully",
    });
  },
};

export { FeedBackController };
