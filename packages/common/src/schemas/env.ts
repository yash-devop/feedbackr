import { config } from "dotenv";
import { findUpSync } from "find-up";
import z from "zod";
config({
  path: findUpSync(".env"),
});

const envSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),

  FRONTEND_URL: z.string(),
  BACKEND_URL: z.string(),

  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),

  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),

  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),

  UPLOADTHING_TOKEN: z.string(),
  // ... more
});

export const env = envSchema.parse(process.env);
