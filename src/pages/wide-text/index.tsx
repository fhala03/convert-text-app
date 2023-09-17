import WideText from "@/components/converters/wide";
import { navbarLayout } from "@/constant/layout";
import React from "react";

const WideTextPage = () => {
  return (
    <div className="mb-4 flex flex-col gap-6">
      <section>
        <h1 className="flex flex-col text-5xl font-bold tracking-tight">
          Convert your text to{" "}
          <span className="bg-gradient-to-r from-primary via-background to-background bg-clip-text text-transparent">
            Wide Text.
          </span>
        </h1>
      </section>
      <WideText />
    </div>
  );
};

export default WideTextPage;

WideTextPage.getLayout = navbarLayout;
