import { useState } from 'react';

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
