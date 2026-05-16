//  Axios api client

import axios from "axios";
import { clientEnv } from "../env.ts";

export const apiClient = axios.create({
  baseURL: `${clientEnv.VITE_BACKEND_URL}/api`,
  withCredentials: true,
  timeout: 15000,
});
