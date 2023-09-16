import type { AppProps } from "next/app";
import { api } from "@/utils/api";
import Head from "next/head";
import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

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
        <title>LinkTab</title>
        <meta
          name="description"
          content="LinkTab is a simple web app that allows you to save and organize web links. App is built with the T3 stack."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {layoutForPage(<Component {...pageProps} />)}
    </>
  );
}

export default api.withTRPC(App);
