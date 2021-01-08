import { useColorMode } from '@chakra-ui/react';
import { theme } from '@utils/theme';
import { getColor } from '@chakra-ui/theme-tools';
import { useState } from 'react';

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
  // const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // TODO: make better
  const toggle = () => {
    if (mode === 'light') window.document.querySelector('html').classList.add('dark');
    else window.document.querySelector('html').classList.remove('dark');

    setMode(mode === 'light' ? 'dark' : 'light');

    console.log('toggle', mode);
  };

  return {
    colorMode: mode,
    toggleColorMode: toggle,
  };
}
