import { parse, StackFrame } from "stacktrace-parser";

type ClientContext = {
  networkStatus: boolean;
  // userAgent: string;
  // url: string;
  // language: string;
  // screenWidth: number;
  // screenHeight: number;
};

type DebugContext = {
  errors: {
    type: string;
    message: string;
    stackTrace: StackFrame[];
    occuredAt: string;
    pageTimeMs: number;
  };
};

export type ErrorBuffer = {
  debugContext: DebugContext;
  clientContext: ClientContext;
};

export const errorsBuffer: ErrorBuffer[] = [];
const MAX_ERRORS_LIMIT = 60;

function getClientContext(): ClientContext {
  return {
    networkStatus: navigator.onLine,
    // userAgent: navigator.userAgent,
    // url: location.href,
    // language: navigator.language,
    // screenWidth: window.screen.width,
    // screenHeight: window.screen.height,
  };
}

function buildDebugContext(
  error: Error,
  meta: { timeStamp: number },
): DebugContext {
  return {
    errors: {
      type: error.name,
      message: error.message,
      stackTrace: parse(error.stack ?? "")
        .filter((frame) => frame.file)
        .slice(0, 5), // limit stack depth
      occuredAt: new Date().toISOString(),
      pageTimeMs: Math.round(meta.timeStamp),
    },
  };
}

function normalizeReason(reason: unknown): Error {
  if (reason instanceof Error) return reason;

  if (typeof reason === "string") {
    return new Error(reason);
  }

  try {
    return new Error(JSON.stringify(reason));
  } catch {
    return new Error("Unknown rejection");
  }
}

export function errorCapture() {
  window.addEventListener("error", (event) => {
    // Ignore useless cross-origin script errors
    if (event.message === "Script error.") return;

    const errorObj =
      event.error instanceof Error ? event.error : new Error(event.message);

    const captured: ErrorBuffer = {
      debugContext: buildDebugContext(errorObj, event),
      clientContext: getClientContext(),
    };

    if (errorsBuffer.length < MAX_ERRORS_LIMIT) {
      errorsBuffer.push(captured);
    }
  });

  window.addEventListener("unhandledrejection", (event) => {
    const errorObj = normalizeReason(event.reason);

    if (errorObj.name === "AbortError") return;

    const captured: ErrorBuffer = {
      debugContext: buildDebugContext(errorObj, event),
      clientContext: getClientContext(),
    };

    if (errorsBuffer.length < MAX_ERRORS_LIMIT) {
      errorsBuffer.push(captured);
    }
  });
}
