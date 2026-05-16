import { createAuthClient } from "better-auth/react";
import { clientEnv } from "../env.ts";

export const authClient: ReturnType<typeof createAuthClient> = createAuthClient(
  {
    baseURL: clientEnv.VITE_BACKEND_URL,
  },
);
