import axios from "axios";
import { env } from "../../env";

export const api = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
});

if (env.ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return config;
  });
}
