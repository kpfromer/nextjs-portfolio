export default `
function getInitialMode() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
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

var mode = getInitialMode();

var root = window.document.querySelector('html');

if (mode === 'dark')
  root.classList.add('dark');
else
  root.classList.remove('dark')
`;
