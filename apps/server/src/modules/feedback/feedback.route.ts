import { Router } from "express";
import { FeedBackController } from "./feedback.controller.js";
import { responseMiddleware } from "@/middlewares/response.middleware.js";

export const FeedbackRouter = Router();

FeedbackRouter.use(responseMiddleware);
FeedbackRouter.get("/", FeedBackController.getFeedback);
