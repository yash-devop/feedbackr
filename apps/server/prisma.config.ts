/**
 * Prisma ORM config
 */

import "@repo/common/env";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  schema: "./prisma/schemas/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
