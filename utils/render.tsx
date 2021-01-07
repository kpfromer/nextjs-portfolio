// A testing helper file
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
// import fetcher from '@lib/fetch';
import { SWRConfig } from 'swr';
import { theme } from '@utils/theme';

const Providers: React.FC = ({ children }) => {
  //   <SWRConfig value={{ fetcher, dedupingInterval: 0 }}>
  return (
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SWRConfig>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
