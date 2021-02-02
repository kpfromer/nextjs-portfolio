import '@testing-library/jest-dom/extend-expect';
import { cache } from 'swr';
import { initTestHelpers } from 'next-page-tester';

// This ensures you can use `window.fetch()` in the Jest tests.
import 'whatwg-fetch';

initTestHelpers();

window.matchMedia = jest.fn((media) => {
  if (media === '(prefers-color-scheme: dark)') {
    return { matches: false } as MediaQueryList;
  }
  throw new Error(`Invalid media "${media}"`);
});

afterEach(() => {
  // Makes sure that SWR data is cleared between tests so tests does not affect each other
  cache.clear();
});
