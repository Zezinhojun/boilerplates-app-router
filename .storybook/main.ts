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

    if (config.optimization) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            chunks: "all",
            priority: 20,
          },
          storybook: {
            test: /[\\/]node_modules[\\/]@storybook[\\/]/,
            name: "storybook",
            chunks: "all",
            priority: 30,
          },
        },
      };
    }

    if (config.performance) {
      config.performance.hints = false;
      config.performance.maxAssetSize = 512000;
      config.performance.maxEntrypointSize = 512000;
    }

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};

export default config;
