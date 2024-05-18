import axios, { AxiosInstance } from "axios";
import { useMemo } from "react";
import { baseURL, useSwaggerConfig } from "./swagger.config";

export const NEXT_SERVER = axios.create();

export const SERVER = axios.create({
  baseURL,
});

export const useSwaggerApiParams = () => {
  const config = useSwaggerConfig();

  const apiClient: AxiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: config.basePath as string,
    });

    instance.interceptors.request.use(
      async (config) => {
        const token = "my-token";
        config.headers["Authorization"] = "Bearer " + token;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return instance;
  }, [config]);

  return {
    config,
    basePath: config.basePath as string,
    apiClient,
  };
};
