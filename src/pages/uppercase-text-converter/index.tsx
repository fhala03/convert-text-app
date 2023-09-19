import UppercaseText from "@/components/converters/uppercase";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const UppercaseTextPage = () => {
  return (
    <>
      <Head>
        <title>Uppercase Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          key="desc"
          content="The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters)"
        />
        <meta
          property="og:title"
          content="Uppercase Text Converter | CONVERTEXT"
        />
        <meta
          property="og:description"
          content="The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters)"
        />
        <meta
          property="og:image"
          content="https://convert-text-app.vercel.app/seo.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-4 flex flex-col gap-6">
        <section>
          <h1 className="flex flex-col text-5xl font-bold tracking-tight">
            Convert your text to{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Uppercase.
            </span>
          </h1>
        </section>
        <UppercaseText />
      </div>
    </>
  );
};

export default UppercaseTextPage;

UppercaseTextPage.getLayout = navbarLayout;
