import BinaryText from "@/components/converters/binary";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const BinaryPage = () => {
  return (
    <>
      <Head>
        <title>Binary Text Converter | CONVERTEXT</title>
        <meta
          name="description"
          content="Translate binary code into English and English into binary code with the following generator. Type out regularly and get a series of 0 and 1 in return."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-4 flex flex-col gap-6">
        <section>
          <h1 className="flex flex-col text-5xl font-bold tracking-tight">
            Convert your text to{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Binary.
            </span>
          </h1>
        </section>
        <BinaryText />
      </div>
    </>
  );
};

export default BinaryPage;

BinaryPage.getLayout = navbarLayout;
