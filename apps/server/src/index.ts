import cors from "cors";
import express from "express";
import { corsConfig } from "./config/config.js";

import "@repo/common/env";
import { yourMiddleware } from "./middlewares/middleware.js";
import { YourRouter } from "./modules/yourCode/your.route.js";

export const app = express();

app.use(cors(corsConfig));

app.use(express.json());

app.use("/api/<route>", yourMiddleware, YourRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server started successfully on PORT ${process.env.PORT}`);
});
