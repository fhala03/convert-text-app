import React from "react";
import HoverCard from "./hoverCard";
import Link from "next/link";

const Cards = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <Link href={"/italic"}>
        <HoverCard
          title="Italic"
          desc="If you want to italicise your font, this is a great tool. Type out your normal text and see it automatically write on a slant, which you can copy and paste where you want."
        />
      </Link>

      <Link href={"/reverse"}>
        <HoverCard
          title="Reverse"
          desc="If you want a fast and quick way of making your text go back to front, the reverse text generator is great. Write out your text like normal and then see it get flipped."
        />
      </Link>
      <Link href={"/underline"}>
        <HoverCard
          title="Underline"
          desc="Underline your text online with this underliner tool. Write out or paste across the content you want to be underlined and then you will see it automatically generated underlined - which you can copy and paste across to where you want."
        />
      </Link>
      <Link href={"/bold"}>
        <HoverCard
          title="Bold"
          desc="A quick way to bold your text online. Simply type out the normal text into the tool and see it automatically get converted to the bold versio which you can copy and paste across."
        />
      </Link>
      <Link href={"/"}>
        <HoverCard
          title="Uppercase"
          desc="The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters)."
        />
      </Link>
    </div>
  );
};

export default Cards;
