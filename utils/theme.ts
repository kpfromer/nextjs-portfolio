import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#e3872d',
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
        color: 'primary',
      },
    },
  },
});
