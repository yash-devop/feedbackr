import { TError, TSuccess } from "@repo/common/types";
import { NextFunction, Request, Response } from "express";

export const responseMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.jsonSuccess = function <T>({ data, message, status }: TSuccess<T>) {
    return res.status(status).json({
      data,
      message,
    });
  };
  res.jsonFail = function ({ error, meta, status }: TError) {
    return res.status(status).json({
      error,
      meta,
    });
  };
  next();
};
