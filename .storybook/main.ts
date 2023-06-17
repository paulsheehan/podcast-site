import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  stories: ['../src/app/**/*.mdx', '../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  previewHead: (head) => `
    ${head}
    ${
      process.env.GOOGLE_FONT ? '<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400&display=swap" rel="stylesheet" />' : ''
    }
  `,
};

export default config;
