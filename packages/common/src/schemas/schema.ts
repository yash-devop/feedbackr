// Zod schemas.

import z from "zod";

export const DomainSchema = z.object({
  name: z.string(),
  url: z.hostname(),
  // publicApiKey: z.string(),
  // status: z.string().refine((status) => {
  //   if (["ACTIVE", "PAUSED", "INACTIVE"].includes(status)) {
  //     return true;
  //   }
  //   return false;
  // }),
});
