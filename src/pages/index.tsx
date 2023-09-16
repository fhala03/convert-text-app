import React from "react";
import { navbarLayout } from "@/constant/layout";
import UppercaseText from "@/components/converters/uppercase";

const HomePage = () => {
  return (
    <div className="mb-4 flex flex-col gap-6">
      <section>
        <h1 className="flex flex-col text-5xl font-bold tracking-tight">
          Convert your text to{" "}
          <span className="bg-gradient-to-r from-primary via-background to-background bg-clip-text text-transparent">
            Uppercase.
          </span>
        </h1>
      </section>
      <UppercaseText />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = navbarLayout;
