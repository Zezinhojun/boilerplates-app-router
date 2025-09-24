// eslint.config.js
const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "storybook-static/**",
      "public/**",
      "eslint.config.js",
      "next.config.js",
      "next-env.d.ts",
      "*.config.js",
      "*.config.ts",
      ".lintstagedrc.js",
      "jest.config.*",
      "tailwind.config.*",
      "postcss.config.*",
    ],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:storybook/recommended",
  ),
];
