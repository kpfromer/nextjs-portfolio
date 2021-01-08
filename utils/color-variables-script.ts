import { theme } from '@utils/theme';
import { getColor } from '@chakra-ui/theme-tools';

// a helper function to create color variables given a variable name and theme keys
function createVar(name: string, light: string, dark: string) {
  return `
    root.style.setProperty(
      '${name}',
      darkMode
        ? '${getColor(theme, dark)}'
        : '${getColor(theme, light)}'
    );
  `;
}

export const colorSchemeScript = `
const darkMode = localStorage.getItem('chakra-ui-color-mode') === 'dark';
const root = document.documentElement;
${createVar('--bg-color', 'white', 'gray.800')}
${createVar('--text-color', 'gray.800', 'whiteAlpha.900')}
${createVar('--placeholder-text-color', 'gray.400', 'whiteAlpha.400')}
${createVar('--border-color', 'gray.200', 'whiteAlpha.300')}
${createVar('--button-text-color', 'white', 'gray.800')}
${createVar('--button-bg-color-gray', 'gray.100', 'whiteAlpha.200')}
${createVar('--button-bg-color-gray-hover', 'gray.200', 'whiteAlpha.300')}
${createVar('--button-bg-color-gray-active', 'gray.300', 'whiteAlpha.400')}
${Object.keys(theme.colors)
  .filter((color) => color !== 'gray')
  .map(
    (color) => `
      ${createVar(`--button-bg-color-${color}`, `${color}.500`, `${color}.200`)}
      ${createVar(`--button-bg-color-${color}-hover`, `${color}.600`, `${color}.300`)}
      ${createVar(`--button-bg-color-${color}-active`, `${color}.700`, `${color}.400`)}
    `,
  )
  .join('\n')}
`;
