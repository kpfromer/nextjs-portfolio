import React, { useCallback, useContext, useState } from 'react';

type Mode = 'light' | 'dark';

export const DarkModeContext = React.createContext<{
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}>({} as any);

export function useDarkMode() {
  return useContext(DarkModeContext);
}

function getInitialMode(): Mode {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs as Mode;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // Default for server rendered react code
  // If you want to use light theme as the default, return "light" instead
  return 'dark';
}

export interface DarkModeProviderProps {
  // intialMode: Mode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<Mode>(getInitialMode);

  // Used for intial setup of theme (on new page/new route pushed)
  const rawSetTheme = useCallback((theme: Mode) => {
    const root = window.document.querySelector('html');
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    if (isDark) root.classList.add('dark');

    localStorage.setItem('color-theme', theme);
  }, []);

  // Set raw to match local storage on initial book
  // This is replaced by the script in _document that loads before next script to halt next rendering until dark mode is set
  // this prevents the flash of color mode (white to dark mode) see more here:
  // https://www.joshwcomeau.com/react/dark-mode/
  // useEffect(() => {
  //   rawSetTheme(mode);
  // }, []);

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        setMode: (mode) => {
          rawSetTheme(mode);
          setMode(mode);
        },
        toggleMode: () => {
          const newMode = mode === 'dark' ? 'light' : 'dark';
          rawSetTheme(newMode);
          setMode(newMode);
        },
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
