import Document, { Head, Html, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/ga';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Josh Burgess's Web Portfolio. Experience something more than just another website, and if you like what you see, let's work together and make something creative for you!"
          />
          <meta name="author" content="Josh Burgess" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@bluejay_mr" />

          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
