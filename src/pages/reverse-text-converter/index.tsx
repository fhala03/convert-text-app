import ReverseText from "@/components/converters/reverse";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const ReversePage = () => {
  return (
    <>
      <Head>
        <title>Reverse Text Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          content="If you want a fast and quick way of making your text go back to front, the reverse text generator is great. Write out your text like normal and then see it get flipped."
        />
        <meta
          property="og:title"
          content="Reverse Text Text Converter | CONVERTEXT"
        />
        <meta
          property="og:description"
          content="If you want a fast and quick way of making your text go back to front, the reverse text generator is great. Write out your text like normal and then see it get flipped."
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
              Reverse.
            </span>
          </h1>
        </section>
        <ReverseText />
      </div>
    </>
  );
};

export default ReversePage;

ReversePage.getLayout = navbarLayout;
