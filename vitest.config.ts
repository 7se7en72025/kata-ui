import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    include: ["__tests__/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules/", ".next/", "e2e/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      include: ["components/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}", "registry/**/*.{ts,tsx}"],
      exclude: ["node_modules/", ".next/"],
      thresholds: {
        statements: 50,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
  },
});
