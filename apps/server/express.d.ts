// src/types/express.d.ts
import "express";
import { type Session, User } from "better-auth";

/**
 * Useful for extending any libraries types with urs
 */

declare global {
  namespace Express {
    interface Request {
      user: User;
      session: Session;
    }
  }
}
