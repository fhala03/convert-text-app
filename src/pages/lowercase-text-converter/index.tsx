import LowercaseText from "@/components/converters/lowercase";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const LowercasePage = () => {
  return (
    <>
      <Head>
        <title>Lowercase Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          content="If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-4 flex flex-col gap-6">
        <section>
          <h1 className="flex flex-col text-5xl font-bold tracking-tight">
            Convert your text to{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Lowercase.
            </span>
          </h1>
        </section>
        <LowercaseText />
      </div>
    </>
  );
};

export default LowercasePage;

LowercasePage.getLayout = navbarLayout;
