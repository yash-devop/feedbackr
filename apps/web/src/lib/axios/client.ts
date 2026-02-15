//  Axios api client

import axios from "axios";
export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  withCredentials: true,
  timeout: 15000,
});
