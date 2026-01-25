//  Axios api client

import { BACKEND_URL } from "@repo/common/config";
import axios from "axios";
export const apiClient = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  withCredentials: true,
  timeout: 15000,
});
