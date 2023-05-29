import "@/styles/globals.css";
import { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";

export type NextPageWithLayout<P = Record<string, any>> = NextComponentType<
  NextPageContext,
  any,
  P
> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <ThemeProvider attribute="class">
    <NextNProgress
      color="#6b7280"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      showOnShallow={true}
    />
    {getLayout(<Component {...pageProps} />)}
  </ThemeProvider>;
}
