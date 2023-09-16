import HoverCard from "@/components/hoverCard";
import React from "react";
import TextInput from "@/components/textInput";
import { navbarLayout } from "@/constant/layout";

const HomePage = () => {
  return (
    <div className="mb-6 mt-4 flex flex-col gap-6">
      <TextInput />
      <div className="grid grid-cols-2 gap-2">
        <HoverCard
          title="Uppercase"
          desc="Convert your desired text to uppercase in no time."
        />
        <HoverCard
          title="Lowercase"
          desc="Convert your desired text to lowercase in no time."
        />
        <HoverCard
          title="Upsidedown"
          desc="Convert your desired text to upsidedown text in no time."
        />
        <HoverCard
          title="Reverse"
          desc="Convert your desired text to reversed text in no time."
        />
        <HoverCard
          title="Italic"
          desc="Convert your desired text to italic in no time."
        />
        <HoverCard
          title="Bold"
          desc="Convert your desired text to bold in no time."
        />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = navbarLayout;
