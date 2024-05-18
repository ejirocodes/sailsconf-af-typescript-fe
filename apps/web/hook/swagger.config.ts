import { Configuration } from "@luppa/client";
import { useMemo } from "react";

export const baseURL =
  process.env["NEXT_PUBLIC_API_URL"] || "http://localhost:3434";

export const useSwaggerConfig = (): Configuration => {
  return useMemo(
    () => ({
      basePath: baseURL.endsWith("/")
        ? baseURL.substring(0, baseURL.length - 1)
        : baseURL,
      isJsonMime(): boolean {
        return false;
      },
    }),
    []
  );
};
