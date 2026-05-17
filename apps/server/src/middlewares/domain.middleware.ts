import { UserDomainService } from "@/modules/user-domain/userDomain.service.js";
import { NextFunction, Request, Response } from "express";
import { AppError } from "./error.middleware.js";
export const domainMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("DOMAIN MIDDLEWARE RUNNING");
  const clientId = req.headers["x-client-id"] as string;

  if (!clientId) {
    throw new AppError("Missing Client ID", 400, "NOT_FOUND");
  }

  const origin = req.headers.origin || req.headers.referer;

  if (!origin) {
    throw new AppError("Origin not found", 404);
  }

  let hostname = new URL(origin).hostname;

  const { data } = await UserDomainService.validateClientId({
    clientId,
    hostname,
  });

  if (!data.domain) {
    throw new AppError("Invalid Client ID", 400);
  }

  req.domain = data.domain;

  next();
};

/**
 * Remaining:
 * 1) Cors level conditions.
 * 2) block http requests.. keep https only.
 */
