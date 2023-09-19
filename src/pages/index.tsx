import React from "react";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import Converter from "@/components/converters/convertAll";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>CONVERTEXT</title>
        <meta
          name="description"
          content="Easily convert text between different letter cases: lower case, UPPER CASE, Sentence case, Capitalized Case, aLtErNaTiNg cAsE and more online"
        />
        <meta property="og:title" content="CONVERTEXT | Convert Text" />
        <meta
          property="og:description"
          content="Easily convert text between different letter cases: lower case, UPPER CASE, Sentence case, Capitalized Case, aLtErNaTiNg cAsE and more online"
        />
        <meta
          property="og:image"
          content="https://convert-text-app.vercel.app/background.png"
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
