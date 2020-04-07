import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import presetTheme from '@rebass/preset';

const theme = {
  ...presetTheme,
  colors: {
    ...presetTheme.colors,
    primary: '#e3872d',
    secondary: '#041230',
    background: '#f6f7fd'
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

export const wrapRootElement = ({ element }) => <ThemeProvider theme={theme}>{element}</ThemeProvider>;
