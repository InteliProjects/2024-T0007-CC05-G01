import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Charset and viewport */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="favicon/favicon_32x32.png" sizes="32x32" />

        {/* Title of the page */}
        <meta name="application-name" content="ValeMax" />

        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#fff" />

        {/* Description that will show in the search results */}
        <meta
          name="description"
          content="ValeMax is a web application that calculates the maximum flow in a graph"
        />

        {/* Prevents Google from indexing the page */}
        <meta name="robots" content="noindex,nofollow" />
        {/* Prevents Google from indexing the page */}
        <meta name="googlebot" content="noindex,nofollow" />

        <meta name="google" content="nositelinkssearchbox" />

        {/* Prevents Google from translating the page */}
        <meta name="google" content="notranslate" />

        <meta name="subject" content="your document's subject" />

        <meta name="rating" content="General" />

        <meta name="referrer" content="no-referrer" />

        <meta name="format-detection" content="telephone=no" />

        <meta http-equiv="x-dns-prefetch-control" content="off" />

        <meta http-equiv="Window-Target" content="_value" />

        {/* iOS */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Forces the browser to use the WebKit rendering engine */}
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
