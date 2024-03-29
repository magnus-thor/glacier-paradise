/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  rules: {
    indent: ["error", 2],
  },
  parser: "@babel/eslint-parser",
  // parserOptions: {
  //   requireConfigFile: false, // <== ADD THIS
  //   //   ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
  //   //   sourceType: "module", // Allows for the use of imports
  // },
};
