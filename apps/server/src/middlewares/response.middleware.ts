import { NextFunction, Request, Response } from "express";

export interface TSuccess<T> {
  data: T;
  message: string;
  status: number;
  meta?: T;
}

export interface TError {
  status: number;
  error: {
    code: string;
    message: string;
    cause?: string;
  };
  meta: any;
}
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
