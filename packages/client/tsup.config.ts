import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["api/**/*.ts"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["axios"],
  ...options,
}));
