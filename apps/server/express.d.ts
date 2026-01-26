// src/types/express.d.ts
import "express";
import { type Session, User } from "better-auth";
import { TError, TSuccess } from "./src/middlewares/response.middleware.ts";
/**
 * Useful for extending any libraries types with urs
 */

declare global {
  namespace Express {
    interface Request {
      user: User;
      session: Session;
    }

    interface Response {
      jsonSuccess: <T>(data: TSuccess<T>) => {};
      jsonFail: (err: TError) => {};
    }
  }
}
