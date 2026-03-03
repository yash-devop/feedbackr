import { parse } from "stacktrace-parser";
export const errorsBuffer: any = [];
const MAX_ERRORS_LIMIT = 40;

function normalizeErrors(e: Error, meta: { timeStamp: number }) {
  const occuredAt = new Date().toISOString();
  return {
    message: e.message,
    stackTrace: parse(e.stack ?? ""),
    occuredAt,
    pageTimeMs: meta.timeStamp,
    networkStatus: navigator.onLine,
  };
}
function normalizeReason(reason: unknown): Error {
  if (reason instanceof Error) return reason;
  if (typeof reason === "string") return new Error(reason);

  try {
    return new Error(JSON.stringify(reason));
  } catch {
    return new Error("Unknown rejection");
  }
}

export function errorCapture() {
  window.addEventListener("error", (e) => {
    console.log("ERROR: e", e);
    const errorObj = e.error instanceof Error ? e.error : new Error(e.message);

    const captured = normalizeErrors(errorObj, e);
    console.log("captured", errorObj);
    if (errorsBuffer.length < MAX_ERRORS_LIMIT) {
      console.log("Pushing error to buffer", captured);
      console.log("BUFFER", errorsBuffer);
      errorsBuffer.push(captured);
    }
  });

  window.addEventListener("unhandledrejection", (e) => {
    console.log("ERROR: unhandled", e);
    const errorObj = normalizeReason(e.reason);
    const captured = normalizeErrors(errorObj, e);
    if (errorsBuffer.length < MAX_ERRORS_LIMIT) {
      console.log("Pushing rejection to buffer", captured);
      console.log("BUFFER", errorsBuffer);

      errorsBuffer.push(captured);
    }
  });
}
