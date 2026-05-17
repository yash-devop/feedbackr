import { getCache, setCache } from "../core/cache";
import { serverEnv } from "@repo/common/env.server";
import { WIDGET_BACKEND_URL } from "./urls";

export interface ValidateClientResponse {
  data: {
    valid: boolean;
  };
  message?: string;
}
export async function validateClientId(
  clientId: string,
): Promise<ValidateClientResponse> {
  if (!clientId) {
    throw new Error("clientId is required");
  }

  const cached = getCache(clientId);
  if (cached) {
    return {
      data: { valid: true },
      message: "validated",
    };
  }

  try {
    const url = new URL(
      `${WIDGET_BACKEND_URL}/api/domain/validateClientId`,
      window.location.origin,
    ); // adjust backend URL
    url.searchParams.append("clientId", clientId);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Validation failed with status ${response.status}`);
    }

    setCache(clientId);

    const data: ValidateClientResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error validating clientId:", error);
    throw error;
  }
}
