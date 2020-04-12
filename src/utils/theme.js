import React from 'react';
import { ThemeProvider } from 'theme-ui';
import presetTheme from '@rebass/preset';
import mdx from './mdx';

const theme = {
  ...presetTheme,
  colors: {
    ...presetTheme.colors,
    primary: '#e3872d',
    secondary: '#041230',
    background: '#fff',
    backgroundAlt: '#f6f7fd'
  },
  fonts: {
    ...presetTheme.fonts,
    heading: "'Work Sans', sans-serif",
    body: "'Quattrocento Sans', sans-serif"
  },
  shadows: {
    ...presetTheme.shadows,
    list: '0px 0px 20px rgba(0, 0, 0, 0.1)'
  }
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme} components={mdx}>
    {element}
  </ThemeProvider>
);
