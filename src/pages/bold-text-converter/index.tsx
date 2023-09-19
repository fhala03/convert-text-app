import BoldText from "@/components/converters/bold";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const BoldPage = () => {
  return (
    <>
      <Head>
        <title>Bold Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          content="A quick way to bold your text online. Simply type out the normal text into the tool and see it automatically get converted to the bold versio which you can copy and paste across."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-4 flex flex-col gap-6">
        <section>
          <h1 className="flex flex-col text-5xl font-bold tracking-tight">
            Convert your text to{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Bold.
            </span>
          </h1>
        </section>
        <BoldText />
      </div>
    </>
  );
};

export default BoldPage;

BoldPage.getLayout = navbarLayout;
