import UnderlinedText from "@/components/converters/underline";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const UnderlinePage = () => {
  return (
    <>
      <Head>
        <title>Underline Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          content="Underline your text online with this underliner tool. Write out or paste across the content you want to be underlined and then you will see it automatically generated underlined - which you can copy and paste across to where you want."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Underline Text Converter | CONVERTEXT"
        />
        <meta
          property="og:description"
          content="Underline your text online with this underliner tool. Write out or paste across the content you want to be underlined and then you will see it automatically generated underlined - which you can copy and paste across to where you want."
        />
        <meta
          property="og:image"
          content="https://convert-text-app.vercel.app/background.png"
        />
      </Head>

      <div className="mb-4 flex flex-col gap-6">
        <section>
          <h1 className="flex flex-col text-5xl font-bold tracking-tight">
            Convert your text to{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Underline.
            </span>
          </h1>
        </section>
        <UnderlinedText />
      </div>
    </>
  );
};

export default UnderlinePage;

UnderlinePage.getLayout = navbarLayout;
