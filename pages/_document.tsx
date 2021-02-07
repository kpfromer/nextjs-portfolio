import darkModeScript from '@utils/dark-mode-script';
import { GA_TRACKING_ID } from '@utils/gtag';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const googleAnalyticsCode = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GA_TRACKING_ID}', {
  page_path: window.location.pathname,
});
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Inter Font */}
          <link
            rel="preload"
            href="/fonts/inter-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="57x57" href="/icons/favicon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icons/favicon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons/favicon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icons/favicon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icons/favicon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icons/favicon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons/favicon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/favicon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon-180x180.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icons/favicon-192x192.png" />
          <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" />
          <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/icons/favicon-144x144.png" />
          <meta name="msapplication-config" content="/icons/browserconfig.xml" />
          <link rel="manifest" href="/icons/manifest.json" />
          <meta name="theme-color" content="#ffffff" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script dangerouslySetInnerHTML={{ __html: googleAnalyticsCode }} />
            </>
          )}
        </Head>
        <body>
          <script key="cm" dangerouslySetInnerHTML={{ __html: darkModeScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
