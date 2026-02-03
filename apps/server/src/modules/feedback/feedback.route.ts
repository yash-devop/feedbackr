import { Router } from "express";
import { FeedBackController } from "./feedback.controller.js";
import { multerUploadInstance } from "@/lib/multer/multer.js";
import { authMiddleware } from "@/middlewares/auth.middleware.js";

export const FeedbackRouter = Router();

FeedbackRouter.post("/", multerUploadInstance.array("images"), FeedBackController.createFeedback,);
FeedbackRouter.get("/", authMiddleware, FeedBackController.getFeedback);
