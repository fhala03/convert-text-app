import type { AppProps } from "next/app";
import { api } from "@/utils/api";
import Head from "next/head";
import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Toaster } from "@/components/ui/toaster";

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const layoutForPage = Component.getLayout
    ? Component.getLayout
    : (page: JSX.Element) => page;

  return (
    <>
      <Head>
        <title>Convert Text</title>
        <meta
          name="description"
          content="CNVRTXT is a simple web app that allows you to convert your text. App is built with the T3 stack."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {layoutForPage(<Component {...pageProps} />)}
      <Toaster />
    </>
  );
}

export default api.withTRPC(App);
