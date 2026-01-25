import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/**/*.ts"],
  clean: true,
  format: ["esm"],
  target: "es2020",
  platform: "node",
  shims: true,
  // external: ["socket-io"],
  ...options,
}));
