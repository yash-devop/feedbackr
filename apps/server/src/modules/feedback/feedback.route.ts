import { Router } from "express";
import { FeedBackController } from "./feedback.controller.js";

export const FeedbackRouter = Router();

FeedbackRouter.get("/", FeedBackController.getFeedback);
