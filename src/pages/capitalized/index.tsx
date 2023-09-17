import CapitalizeText from "@/components/converters/capitalized";
import { navbarLayout } from "@/constant/layout";
import React from "react";

const CapitalizedPage = () => {
  return (
    <div className="mb-4 flex flex-col gap-6">
      <section>
        <h1 className="flex flex-col text-5xl font-bold tracking-tight">
          Convert your text to{" "}
          <span className="bg-gradient-to-r from-primary via-background to-background bg-clip-text text-transparent">
            Capitalized.
          </span>
        </h1>
      </section>
      <CapitalizeText />
    </div>
  );
};

export default CapitalizedPage;

CapitalizedPage.getLayout = navbarLayout;
