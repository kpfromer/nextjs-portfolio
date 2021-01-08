import { useColorMode } from '@chakra-ui/react';
import { theme } from '@utils/theme';
import { getColor } from '@chakra-ui/theme-tools';

function updateColor(root: HTMLElement, mode: 'light' | 'dark') {
  return (variable: string, light: string, dark: string) => {
    root.style.setProperty(variable, getColor(theme, mode === 'light' ? dark : light));
  };
}

/**
 * Inspired by:
 * - https://gist.github.com/trevorblades/1bd240c58ad4790fd6c11006e77ab9db
 * - https://www.joshwcomeau.com/react/dark-mode/#adding-a-toggle
 * - https://github.com/chakra-ui/chakra-ui/issues/1878
 */
export function useColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const toggle = () => {
    const root = window.document.documentElement;
    const update = updateColor(root, colorMode);

    toggleColorMode();

    update('--bg-color', 'white', 'gray.800');
    update('--text-color', 'gray.800', 'whiteAlpha.900');
    update('--placeholder-text-color', 'gray.400', 'whiteAlpha.400');
    update('--border-color', 'gray.200', 'whiteAlpha.300');
    update('--button-text-color', 'white', 'gray.800');
    update('--button-bg-color-gray', 'gray.100', 'whiteAlpha.200');
    update('--button-bg-color-gray-hover', 'gray.200', 'whiteAlpha.300');
    update('--button-bg-color-gray-active', 'gray.300', 'whiteAlpha.400');

    Object.keys(theme.colors)
      .filter((color) => color !== 'gray')
      .map((color) => {
        {
          update(`--button-bg-color-${color}`, `${color}.500`, `${color}.200`);
          update(`--button-bg-color-${color}-hover`, `${color}.600`, `${color}.300`);
          update(`--button-bg-color-${color}-active`, `${color}.700`, `${color}.400`);
        }
      });
  };

  return {
    colorMode,
    toggleColorMode: toggle,
  };
}
