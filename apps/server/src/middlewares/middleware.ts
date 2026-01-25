import { NextFunction, Request, Response } from "express";

export const yourMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("auth middleware is running");
  // your middleware logic
  next();
};
