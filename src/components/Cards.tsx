import React from "react";
import HoverCard from "./hoverCard";
import Link from "next/link";
import {
  ArrowBigUp,
  Binary,
  Bold,
  CaseLower,
  CaseUpper,
  Italic,
  MoreHorizontal,
  Ratio,
  StepBack,
  Underline,
} from "lucide-react";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <motion.div
      transition={{ duration: 0.8, ease: "easeInOut" }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="mb-2 grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <Link href={"/italic-text-converter"}>
          <HoverCard
            icon={Italic}
            title="Italic"
            desc="If you want to italicise your font, this is a great tool. Type out your normal text and see it automatically write on a slant, which you can copy and paste where you want."
          />
        </Link>
        <Link href={"/morse-code-text-converter"}>
          <HoverCard
            icon={MoreHorizontal}
            title="Morse Code"
            desc="Whether you are looking to translate morse code messages into simple english or the other way around, this online translation generator can do just that."
          />
        </Link>
        <Link href={"/capitalized-text-converter"}>
          <HoverCard
            icon={ArrowBigUp}
            title="Capitalized"
            desc="The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones."
          />
        </Link>
        <Link href={"/wide-text-text-converter"}>
          <HoverCard
            icon={Ratio}
            title="Wide Text"
            desc="If you are looking to widen the look of your text, the widening text generator is great for this, otherwise known as the Aesthetic Font and text generator."
          />
        </Link>
        <Link href={"/lowercase-text-converter"}>
          <HoverCard
            icon={CaseLower}
            title="Lowercase"
            desc="If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters."
          />
        </Link>
        <Link href={"/reverse-text-converter"}>
          <HoverCard
            icon={StepBack}
            title="Reverse"
            desc="If you want a fast and quick way of making your text go back to front, the reverse text generator is great. Write out your text like normal and then see it get flipped."
          />
        </Link>
        <Link href={"/binary-text-converter"}>
          <HoverCard
            icon={Binary}
            title="Binary"
            desc="Translate binary code into English and English into binary code with the following generator. Type out regularly and get a series of 0 and 1 in return."
          />
        </Link>
        <Link href={"/underline-text-converter"}>
          <HoverCard
            icon={Underline}
            title="Underline"
            desc="Underline your text online with this underliner tool. Write out or paste across the content you want to be underlined and then you will see it automatically generated underlined - which you can copy and paste across to where you want."
          />
        </Link>
        <Link href={"/bold-text-converter"}>
          <HoverCard
            icon={Bold}
            title="Bold"
            desc="A quick way to bold your text online. Simply type out the normal text into the tool and see it automatically get converted to the bold versio which you can copy and paste across."
          />
        </Link>
        <Link href={"/uppercase-text-converter"}>
          <HoverCard
            icon={CaseUpper}
            title="Uppercase"
            desc="The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters)."
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default Cards;
