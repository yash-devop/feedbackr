import { serverEnv } from "@repo/common/env/server";

import { createHmac } from "crypto";

export const hashFunction = (data: string) => {
  const SECRET = serverEnv.HASH_SECRET;
  return createHmac("sha256", SECRET).update(data).digest("base64url"); // digest is the final fixed length string
};
