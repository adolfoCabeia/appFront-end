import { api } from "./api";

export function setupInterceptors() {
  api.interceptors.request.use(
    (config) => {
      console.log(`[API REQUEST] ${config.method?.toUpperCase()} - ${config.url}`);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      console.log(`[API RESPONSE] ${response.config.url}`);
      return response;
    },
    (error) => {
      console.error("[API ERROR]", error.response?.data || error.message);
      return Promise.reject(error);
    }
  );
}