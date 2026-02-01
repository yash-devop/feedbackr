import { createHmac } from "crypto";
export const generateHash = (data: string) => {
  const SECRET = "feedbackr_e321hu3hb2yu1b";
  return createHmac("sha256", SECRET).update(data).digest("base64url"); // digest is the final fixed length string
};
