/** @type { import('@storybook/react-vite').StorybookConfig } */
import { withoutVitePlugins } from '@storybook/builder-vite'

const config = {
  async viteFinal(config) {
    return {
        ...config,
        plugins: await withoutVitePlugins(config.plugins, ['vite:lib-inject-css']),
    }
},
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-designs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
