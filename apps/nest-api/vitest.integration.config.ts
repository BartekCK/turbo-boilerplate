import { defineConfig } from "vitest/config";
import swc from "unplugin-swc";

import testVitest from "@packages/test-vitest";

export default defineConfig({
   test: {
      ...testVitest.test,
      setupFiles: ["dotenv/config"],
      include: ["**/*.integration.test.ts", "**/*.e2e.test.ts"],
   },
   plugins: [swc.vite()],
});
