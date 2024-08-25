import globals from "globals";

import pluginJs from "@eslint/js";

import tsEslint from "typescript-eslint";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
   { files: ["**/*.{js,mjs,cjs,ts}"] },
   {
      ignores: ["**/dist/", "**/.dist/", "**/build/", "**/.build/"],
   },
   {
      rules: {
         "no-implicit-globals": "error",
      },
   },
   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
   pluginJs.configs.recommended,
   ...tsEslint.configs.recommended,
   eslintPluginPrettierRecommended,
];
