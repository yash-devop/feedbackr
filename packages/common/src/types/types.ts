// Common for all

import { ErrorCodes } from "../errorCodes";

// export type

export interface ServiceResponse {
  message: string;
  status: number;
  data?: any;
}
export type TErrorCode = (typeof ErrorCodes)[number];
