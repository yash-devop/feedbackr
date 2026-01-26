import cors from "cors";
import express from "express";
import { corsConfig } from "./config/config.js";
import { authMiddleware } from "./middlewares/middleware.js";
import { FeedbackRouter } from "./modules/feedback/feedback.route.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/better-auth/auth.js";
import { env } from "@repo/common/env";

export const app = express();

app.use(cors(corsConfig));

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api/feedback", authMiddleware, FeedbackRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server started successfully on PORT ${env.PORT}`);
});
