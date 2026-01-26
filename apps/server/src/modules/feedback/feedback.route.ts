import { Router } from "express";
import { FeedBackController } from "./feedback.controller.js";

export const FeedbackRouter = Router();

FeedbackRouter.post("/signin", FeedBackController.get);
