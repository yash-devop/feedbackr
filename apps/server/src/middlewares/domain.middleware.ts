import { prisma } from "@/lib/prisma-orm/prisma.js";
import { NextFunction, Request, Response } from "express";
import { AppError } from "./error.middleware.js";
import { hashFunction } from "@repo/utils";
export const domainMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const clientId = req.headers["x-client-id"] as string;

  if (!clientId) {
    throw new AppError("Missing Client ID", 400, "NOT_FOUND");
  }
  const origin = req.headers.origin || req.headers.referer;
  if (!origin) {
    throw new AppError("Origin not found", 404);
  }

  const hostname = new URL(origin).hostname;
  const isLocalhost = hostname.includes("localhost"); // http://localhost:5173
  if (isLocalhost) {
    return next();
  }

  const hashedclientId = hashFunction(clientId);
  const domain = await prisma.domain.findFirst({
    where: { clientId: hashedclientId, url: hostname },
  });
  if (!domain) {
    throw new AppError("Invalid Client ID", 400);
  }

  req.domain = domain;

  next();
};

/**
 * Remaining:
 * 1) Cors level conditions.
 * 2) block http requests.. keep https only.
 */
