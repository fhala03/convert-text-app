/* eslint-disable @typescript-eslint/no-misused-promises  */

import React, { useState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const Converter = () => {
  const [text, setText] = useState("");

  const convertToSentenceCase = () => {
    const sentenceCaseText =
      text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(sentenceCaseText);

    toast({
      title: "🚀 Text Converted to Sentence Case!",
      description: "Your text has been converted to sentence case.",
      duration: 2000,
    });
  };

  const convertToLowerCase = () => {
    const lowercaseText = text.toLowerCase();
    setText(lowercaseText);

    toast({
      title: "🚀 Text Converted to Lower Case!",
      description: "Your text has been converted to lower case.",
      duration: 2000,
    });
  };

  const convertToUpperCase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);

    toast({
      title: "🚀 Text Converted to Upper Case!",
      description: "Your text has been converted to upper case.",
      duration: 2000,
    });
  };

  const convertToCapitalizedCase = () => {
    const capitalizedText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitalizedText);

    toast({
      title: "🚀 Text Converted to Capitalized Case!",
      description: "Your text has been converted to capitalized case.",
      duration: 2000,
    });
  };

  const convertToReverseCase = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);

    toast({
      title: "🚀 Text Converted to Reversed Case!",
      description: "Your text has been reversed.",
      duration: 2000,
    });
  };

  const downloadTextFile = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "textfile.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "📥 Text Downloaded!",
      description: "Your text has been downloaded as 'textfile.txt'.",
      duration: 2000,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "🚀 Text Copied!",
          description:
            "You've successfully copied the text to your clipboard. Now, go paste it like a pro!",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  return (
    <section className="flex flex-col gap-2">
      <Textarea
        className="h-[220px] rounded-md bg-secondary placeholder:opacity-40"
        placeholder="Type or paste your content here"
        id="inputarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex flex-col items-start justify-between gap-4">
        <div className="flex w-full flex-col gap-2 lg:flex-row">
          <Button size={"sm"} onClick={convertToSentenceCase}>
            Sentence Case
          </Button>
          <Button size={"sm"} onClick={convertToLowerCase}>
            Lower Case
          </Button>
          <Button size={"sm"} onClick={convertToUpperCase}>
            Uper Case
          </Button>
          <Button size={"sm"} onClick={convertToCapitalizedCase}>
            Capitalized Case
          </Button>
          <Button size={"sm"} onClick={convertToReverseCase}>
            Reverse Case
          </Button>
          <Button size={"sm"} onClick={downloadTextFile}>
            Download Text
          </Button>
          <Button size={"sm"} onClick={copyToClipboard}>
            Copy to Clipboard
          </Button>
          <Button
            size={"sm"}
            onClick={() => {
              setText("");
              toast({
                title: "🧹 Text Cleared!",
                description: "You've cleared the text area.",
                duration: 2000,
              });
            }}
          >
            Clear
          </Button>
        </div>
        <div className="flex gap-4">
          <Label className="text-sm text-foreground/50" htmlFor="inputarea">
            Word Count : {text.split(/\s+/).filter(Boolean).length}
          </Label>
          <Label className="text-sm text-foreground/50" htmlFor="inputarea">
            Character Count : {text.length}
          </Label>
        </div>
      </div>
    </section>
  );
};

export default Converter;
