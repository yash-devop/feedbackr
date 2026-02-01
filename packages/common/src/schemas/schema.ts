// Zod schemas.

import z from "zod";

export const createFeedbackSchema = z.object({
  domainId: z.string().nonempty(),
  url: z.string().nonempty(),
  screenshotUrl: z.string(),
  message: z.string().optional(),
  email: z.email(),
  clientContext: z
    .record(z.union([z.string(), z.number(), z.symbol()]), z.any())
    .optional(),
  debugContext: z
    .record(z.union([z.string(), z.number(), z.symbol()]), z.any())
    .optional(),
});

export type TcreateFeedbackPayload = z.infer<typeof createFeedbackSchema>;
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
