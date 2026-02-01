// Common for all

// export type

export interface ServiceResponse {
  message: string;
  status: number;
  data?: any;
}
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
