import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, css, EmotionCache, Global } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
          * {
            font-family: IRANSansX;
          }
            @font-face {
              font-family: IRANSansX;
              font-style: bold;
              src: url("/fonts/woff/IRANSansX-Bold.woff") format("woff"),
                url("/fonts/woff2/IRANSansX-Bold.woff2") format("woff2");
            }
            @font-face {
              font-family: IRANSansX;
              font-style: normal;
              src: url("/fonts/woff/IRANSansX-Regular.woff") format("woff"),
                url("/fonts/woff2/IRANSansX-Regular.woff2") format("woff2");
            }
            body {
              font-family: IRANSansX !important;
              direction: rtl;
              background: #fff;
            }
            .orange-gradient {
              background: linear-gradient(
                180deg,
                #fe8b3b 0%,
                #7f461e 100%
              ) !important;
            }
            .blue-gradient {
              background: linear-gradient(
                180deg,
                #0576c6 0%,
                #033b63 100%
              ) !important;
            }
          `}
        />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

