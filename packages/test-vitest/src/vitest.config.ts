import { defineConfig } from "vitest/config";

export default defineConfig({
   test: {
      globals: false,
      passWithNoTests: true,
      include: ["**/*.test.ts"],
      testTimeout: 10000,
      retry: 0,
      setupFiles: ["dotenv/config"],
   },
});
