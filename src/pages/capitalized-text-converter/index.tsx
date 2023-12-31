import CapitalizeText from "@/components/converters/capitalized";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const CapitalizedPage = () => {
  return (
    <>
      <Head>
        <title>Capitalize Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          content="The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones."
        />
        <meta
          property="og:title"
          content="Capitalize Text Converter | CONVERTEXT"
        />
        <meta
          property="og:description"
          content="The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones."
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
              Capitalized.
            </span>
          </h1>
        </section>
        <CapitalizeText />
      </div>
    </>
  );
};

export default CapitalizedPage;

CapitalizedPage.getLayout = navbarLayout;
