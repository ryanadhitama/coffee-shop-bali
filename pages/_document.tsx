import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={`Listing coffee shop in Bali`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffee-shop-bali.vercel.app" />
        <meta
          property="og:description"
          content={`Listing coffee shop in Bali`}
        />
        {/* <meta property="og:image" content={image} /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://coffee-shop-bali.vercel.app/"
        />
        {/* <meta property="twitter:title" content={`${title} - Coffee Shop Bali`} /> */}
        <meta
          property="twitter:description"
          content={`Listing coffee shop in Bali`}
        />
        {/* <meta property="twitter:image" content={image} /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
