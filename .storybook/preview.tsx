import { withNextRouter } from 'storybook-addon-next-router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [withNextRouter];
