// Common for all

import { ErrorCodes } from "../errorCodes";

// export type

export interface ServiceResponse {
  message: string;
  status: number;
  data?: any;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
}
export type TErrorCode = (typeof ErrorCodes)[number];
