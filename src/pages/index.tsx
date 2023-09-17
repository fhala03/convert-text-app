import React from "react";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import Converter from "@/components/converters/convertAll";

const HomePage = () => {
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

      <div className="mb-4 flex flex-col gap-6">
        <Converter />
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = navbarLayout;
