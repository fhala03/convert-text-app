import ItalicText from "@/components/converters/italic";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const ItalicPage = () => {
  return (
    <>
      <Head>
        <title>Italic Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          content="If you want to italicise your font, this is a great tool. Type out your normal text and see it automatically write on a slant, which you can copy and paste where you want."
        />
        <meta
          property="og:title"
          content="Italic Text Converter | CONVERTEXT"
        />
        <meta
          property="og:description"
          content="If you want to italicise your font, this is a great tool. Type out your normal text and see it automatically write on a slant, which you can copy and paste where you want."
        />
        <meta
          property="og:image"
          content="https://convert-text-app.vercel.app/background.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-4 flex flex-col gap-6">
        <section>
          <h1 className="flex flex-col text-5xl font-bold tracking-tight">
            Convert your text to{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Italic.
            </span>
          </h1>
        </section>
        <ItalicText />
      </div>
    </>
  );
};

export default ItalicPage;

ItalicPage.getLayout = navbarLayout;
