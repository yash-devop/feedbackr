import z from "zod";

const createClientEnvchema = z.object({
  VITE_BACKEND_URL: z.string(),
  VITE_FRONTEND_URL: z.string(),
});
export const createClientEnv = (runtimeEnv: ImportMetaEnv) => {
  return createClientEnvchema.parse(runtimeEnv);
};
