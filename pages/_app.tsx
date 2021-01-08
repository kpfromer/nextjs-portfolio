import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@utils/theme';
import { DefaultSeo } from 'next-seo';
import info from '@configs/info';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Kyle Pfromer"
        description="Kyle Pfromer's portfolio."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: info.baseUrl,
          site_name: 'Kyle Pfromer',
          images: [
            {
              width: 3922,
              height: 2206,
              url: `${info.baseUrl}/assets/2019-07-27-Collegiate-West.jpeg`,
            },
          ],
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
