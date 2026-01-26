import { createAuthClient } from "better-auth/react";
import { env } from "process";

export const authClient = createAuthClient({
  baseURL: env.BACKEND_URL,
});
