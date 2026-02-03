import crypto from "crypto";

export const generateApiKey = (prefix: string = "pk_") => {
  const key = crypto.randomBytes(16).toString("base64url");

  const endsWithUnderscore = prefix.endsWith("_");

  const apiKey = `${endsWithUnderscore ? prefix + key : `${prefix}_${key}`}`;
  return apiKey;
};

/**
 * @old_approach
 * Below one is my v1 apikey generator just loop.
 */
// export const generateApiKey = (prefix: string = "pk_") => {
//   const CHARACTER_SET =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const KEY_LENGTH = CHARACTER_SET.length;
//   let key = "";
//   for (let i = 0; i < KEY_LENGTH; i++) {
//     const random = Math.random();
//     key += CHARACTER_SET[Math.floor(random * KEY_LENGTH)];
//   }

//   const endsWithUnderscore = prefix.endsWith("_");

//   const apiKey = `${endsWithUnderscore ? prefix + key : `${prefix}_${key}`}`;
//   return apiKey;
// };
