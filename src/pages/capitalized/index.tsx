import CapitalizeText from "@/components/converters/capitalized";
import { navbarLayout } from "@/constant/layout";
import Head from "next/head";
import React from "react";

const CapitalizedPage = () => {
  return (
    <>
      <Head>
        <title>Capitalize Text | Convert Text</title>
        <meta
          name="description"
          content="CNVRTXT is a simple web app that allows you to convert your text. App is built with the T3 stack."
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
