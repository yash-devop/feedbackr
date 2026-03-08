import { CorsOptions } from "cors";
import { FRONTEND_URL } from "@repo/common/config";

// cors config
export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    callback(null, true); // reflect request origin
  },
  credentials: true,
};
