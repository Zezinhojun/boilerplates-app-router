import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  staticDirs: ["../public"],
  stories: ["../src/app/components/**/stories.tsx"],
  addons: ["@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  webpackFinal: async (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`, "node_modules");
    return config;
  },
};
export default config;
