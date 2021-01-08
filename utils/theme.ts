import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    // color scheme: https://github.com/chakra-ui/chakra-ui/blob/eb8bff911e6ec9de0165ab1e8f5ca10d5e022459/packages/theme/src/components/button.ts#L103
    primary: {
      300: '#ebab6c',
      400: '#e69342',
      500: '#e3872d',
      600: '#cc7a29',
      700: '#9f5f1f',
    },
    secondary: '#041230',
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    mono: "'Roboto Mono', sans-serif",
  },
  components: {
    Heading: {
      variants: {
        'section-title': {
          fontSize: '5xl',
          my: 6,
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'primary.500',
      },
    },
  },
});
