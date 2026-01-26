import { Router } from "express";
import { FeedBackController } from "./feedback.controller.js";

export const YourRouter = Router();

YourRouter.post("/signin", FeedBackController.login);
