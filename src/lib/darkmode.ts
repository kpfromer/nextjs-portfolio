import { writable } from 'svelte/store';

export type Mode = 'light' | 'dark';

const key = 'dark-mode';

function getInitialMode(): Mode {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(key);
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

function createDarkMode() {
  const { subscribe, set, update } = writable(getInitialMode());

  return {
    subscribe,
    toggle: () => update((mode) => (mode === 'light' ? 'dark' : 'light')),
    on: () => set('light'),
    off: () => set('dark'),
    key,
  };
}
export const darkMode = createDarkMode();
