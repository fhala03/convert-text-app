import UnderlinedText from "@/components/converters/underline";
import { navbarLayout } from "@/constant/layout";
import React from "react";

const UnderlinePage = () => {
  return (
    <div className="mb-4 flex flex-col gap-6">
      <section>
        <h1 className="flex flex-col text-5xl font-bold tracking-tight">
          Convert your text to{" "}
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Underline.
          </span>
        </h1>
      </section>
      <UnderlinedText />
    </div>
  );
};

export default UnderlinePage;

UnderlinePage.getLayout = navbarLayout;
