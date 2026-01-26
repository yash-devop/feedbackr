import { NextFunction, Request, Response } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "@/lib/better-auth/auth.js";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const headers = fromNodeHeaders(req.headers);
    const session = await auth.api.getSession({
      headers,
    });

    if (!session) {
      res.status(401).json({ message: "Unauthorized Access" });
      return;
    }
    req.user = session.user;
    req.session = session.session;
    next();
  } catch (err) {
    const error = err as Error;
    console.error("Auth Middleware Error:", error);
    res.status(500).json({ message: "Unexpected error" });
  }
};
