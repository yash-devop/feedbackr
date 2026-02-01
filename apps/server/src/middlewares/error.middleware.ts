import { Prisma } from "@/lib/prisma-orm/prisma.js";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
  status: number;
  code: string;
  meta?: any;

  constructor(
    message: string,
    status = 500,
    code = "INTERNAL_ERROR",
    meta?: any,
  ) {
    super(message);
    this.code = code;
    this.status = status;
    this.meta = meta;
  }
}

export const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.jsonFail({
      status: 400,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request payload",
      },
      meta: err,
    });
  }

  if (err instanceof Prisma.Prisma.PrismaClientKnownRequestError) {
    return res.jsonFail({
      status: 409,
      error: {
        code: err.code,
        message: "Database constraint error",
        cause: err.meta?.cause as string | undefined,
      },
      meta: err.meta,
    });
  }

  if (err instanceof Prisma.Prisma.PrismaClientValidationError) {
    return res.jsonFail({
      status: 400,
      error: {
        code: "PRISMA_VALIDATION_ERROR",
        message: err.message,
      },
      meta: null,
    });
  }

  if (err instanceof AppError) {
    return res.jsonFail({
      status: err.status,
      error: {
        code: err.code,
        message: err.message,
      },
      meta: err.meta,
    });
  }

  return res.jsonFail({
    status: 500,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Something went wrong",
    },
    meta: null,
  });
};
