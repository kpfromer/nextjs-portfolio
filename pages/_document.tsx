import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Inter and Roboto Mono Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap"
            rel="stylesheet"
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
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
