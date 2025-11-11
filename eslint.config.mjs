import globals from "globals";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  
  eslintConfigPrettier,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, 
      },
    },
    rules: {
    },
  },
  {
    ignores: ["node_modules/", "dist/"],
  }
];