import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import info from '@configs/info';
import DarkModeProvider from '@utils/dark-mode-provider';

import '../styles/global.css';
import { SmoothScroll } from '@utils/smooth-scroll';

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
      <DarkModeProvider>
        <SmoothScroll>
          <Component {...pageProps} />
        </SmoothScroll>
      </DarkModeProvider>
    </>
  );
}

export default MyApp;
