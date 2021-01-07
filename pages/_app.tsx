import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@utils/theme';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Kyle Pfromer"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.kylepfromer.com/',
          site_name: 'Kyle Pfromer',
          // TODO: og image, description
        }}
        twitter={{
          handle: '@kpfromer',
          site: '@kpfromer',
          cardType: 'summary_large_image',
        }}
      />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
