import WideText from "@/components/converters/wide";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const WideTextPage = () => {
  return (
    <>
      <Head>
        <title>Wide Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          content="If you are looking to widen the look of your text, the widening text generator is great for this, otherwise known as the Aesthetic Font and text generator."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-4 flex flex-col gap-6">
        <section>
          <h1 className="flex flex-col text-5xl font-bold tracking-tight">
            Convert your text to{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Wide Text.
            </span>
          </h1>
        </section>
        <WideText />
      </div>
    </>
  );
};

export default WideTextPage;

WideTextPage.getLayout = navbarLayout;
