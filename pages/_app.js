import Head from "next/head";

import "../styles/base.css";
import { FAVICON } from "../constants/AppConstants";

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og;
  const title = pageProps.data?.title;

  return (
    <>
      <Head>
        <link rel="icon" href={FAVICON} />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content={title || `Amol Tangade`} />
        <meta property="og:site_name" content="Amol Tangade" />
        <meta
          property="og:description"
          content={
            og ? og.description : `I write about code and life in general.`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@amoltangade" />
        <meta
          property="og:image"
          content={og ? og.image : `https://amolt.me/og/default.png`}
        />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>

        <title>{title || `Amol Tangade`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
