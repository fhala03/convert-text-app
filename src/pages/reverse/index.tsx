import ReverseText from "@/components/converters/reverse";
import { navbarLayout } from "@/constant/layout";
import React from "react";

const ReversePage = () => {
  return (
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
  );
};

export default ReversePage;

ReversePage.getLayout = navbarLayout;
