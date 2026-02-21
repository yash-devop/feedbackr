import { Router } from "express";
import { FeedBackController } from "./feedback.controller.js";
import { multerUploadInstance } from "@/lib/multer/multer.js";
import { authMiddleware } from "@/middlewares/auth.middleware.js";
import { domainMiddleware } from "@/middlewares/domain.middleware.js";

export const FeedbackRouter = Router();

FeedbackRouter.post(
  "/",
  domainMiddleware,
  multerUploadInstance.array("images"),
  FeedBackController.createFeedback,
);
FeedbackRouter.get("/", authMiddleware, FeedBackController.getFeedbacks);
FeedbackRouter.get(
  "/:feedbackId",
  authMiddleware,
  FeedBackController.getFeedback,
);
FeedbackRouter.patch(
  "/:feedbackId",
  authMiddleware,
  FeedBackController.editFeedback,
);
FeedbackRouter.delete(
  "/:feedbackId",
  authMiddleware,
  FeedBackController.deleteFeedback,
);
