import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    ".next-local/**",
    ".comparison/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "**/*-WIN-*",
  ]),
  {
    // Hostinger loads this custom server as a CommonJS entry point.
    files: ["server.js"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
]);

export default eslintConfig;
