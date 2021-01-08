import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  // use the CSS variables created in the color variables script tag
  styles: {
    global: {
      // use the CSS variables created in the script tag
      body: {
        bg: 'var(--bg-color)',
        color: 'var(--text-color)',
      },
      '*::placeholder': {
        color: 'var(--placeholder-text-color)',
      },
      '*, *::before, &::after': {
        borderColor: 'var(--border-color)',
      },
    },
  },

  colors: {
    // color scheme: https://github.com/chakra-ui/chakra-ui/blob/eb8bff911e6ec9de0165ab1e8f5ca10d5e022459/packages/theme/src/components/button.ts#L103
    primary: {
      200: '#eeb781',
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
    Button: {
      variants: {
        // https://github.com/chakra-ui/chakra-ui/blob/eb8bff911e6ec9de0165ab1e8f5ca10d5e022459/packages/theme/src/components/button.ts#L103
        // I'm just covering solid buttons, but this technique can be expanded for other button variants
        solid: (props) => {
          const c = props.colorScheme;

          // Use custom dark mode logic
          return {
            // color: 'var(--button-text-color)',
            bg: `var(--button-bg-color-${c})`,
            _hover: { bg: `var(--button-bg-color-${c}-hover)` },
            _active: { bg: `var(--button-bg-color-${c}-active)` },
          };
        },
      },
    },
  },
});
