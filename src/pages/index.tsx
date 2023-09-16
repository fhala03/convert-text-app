import HoverCard from "@/components/hoverCard";
import React from "react";
import TextInput from "@/components/textInput";
import { navbarLayout } from "@/constant/layout";

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
      <TextInput />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <HoverCard
          title="Italic"
          desc="If you want to italicise your font, this is a great tool. Type out your normal text and see it automatically write on a slant, which you can copy and paste where you want."
        />
        <HoverCard
          title="Reverse"
          desc="If you want a fast and quick way of making your text go back to front, the reverse text generator is great. Write out your text like normal and then see it get flipped."
        />
        <HoverCard
          title="Underline"
          desc="Underline your text online with this underliner tool. Write out or paste across the content you want to be underlined and then you will see it automatically generated underlined - which you can copy and paste across to where you want."
        />
        <HoverCard
          title="Bold"
          desc="A quick way to bold your text online. Simply type out the normal text into the tool and see it automatically get converted to the bold versio which you can copy and paste across."
        />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = navbarLayout;
