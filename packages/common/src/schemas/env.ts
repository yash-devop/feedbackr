import { config } from "dotenv";
import { findUpSync } from "find-up";
import z from "zod";
config({
  path: findUpSync(".env"),
});

const envSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),
  // ... more
});

export const env = envSchema.parse(process.env);
