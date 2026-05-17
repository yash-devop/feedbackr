export const API_URLS = {
  VALIDATE_CLIENT_ID: "/api/domain/validateClientId",
};

export const WIDGET_FRONTEND_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:5174" : "";

export const WIDGET_BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8001"
    : "https://feedbackr-web-server.up.railway.app";
