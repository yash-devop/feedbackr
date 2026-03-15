import { env } from "@repo/common/env";
import { createHmac } from "crypto";

export const hashFunction = (data: string) => {
  const SECRET = env.HASH_SECRET;
  return createHmac("sha256", SECRET).update(data).digest("base64url"); // digest is the final fixed length string
};
