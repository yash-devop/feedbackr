import { Router } from "express";
import { YourController } from "./your.controller.js";

export const YourRouter = Router();

YourRouter.post("/signin", YourController.login);
