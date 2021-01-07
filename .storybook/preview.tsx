import { ChakraProvider } from '@chakra-ui/react';
import { withNextRouter } from 'storybook-addon-next-router';
import { theme } from '../utils/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  withNextRouter,
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
