import cors from "cors";
import express from "express";
import { corsConfig } from "./config/config.js";

import "@repo/common/env";
import { yourMiddleware } from "./middlewares/middleware.js";
import { YourRouter } from "./modules/yourCode/your.route.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/better-auth/auth.js";

export const app = express();

app.use(cors(corsConfig));

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api/<route>", yourMiddleware, YourRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server started successfully on PORT ${process.env.PORT}`);
});
