/* eslint-disable @typescript-eslint/no-misused-promises  */

import React, { useState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const ItalicText = () => {
  const [text, setText] = useState("");

  const stylizeText = () => {
    const stylizedText = text
      .split("")
      .map((char) => stylizeCharacter(char))
      .join("");

    setText(stylizedText);

    toast({
      title: "🚀 Text Stylized!",
      description: "Your text has been stylized.",
      duration: 2000,
    });
  };

  // Define a function to map characters to their stylized equivalents
  const stylizeCharacter = (char: string): string => {
    const letterMappings: Record<string, string> = {
      a: "𝘢",
      b: "𝘣",
      c: "𝘤",
      d: "𝘥",
      e: "𝘦",
      f: "𝘧",
      g: "𝘨",
      h: "𝘩",
      i: "𝘪",
      j: "𝘫",
      k: "𝘬",
      l: "𝘭",
      m: "𝘮",
      n: "𝘯",
      o: "𝘰",
      p: "𝘱",
      q: "𝘲",
      r: "𝘳",
      s: "𝘴",
      t: "𝘵",
      u: "𝘶",
      v: "𝘷",
      w: "𝘸",
      x: "𝘹",
      y: "𝘺",
      z: "𝘻",
      A: "𝘈",
      B: "𝘉",
      C: "𝘊",
      D: "𝘋",
      E: "𝘌",
      F: "𝘍",
      G: "𝘎",
      H: "𝘏",
      I: "𝘐",
      J: "𝘑",
      K: "𝘒",
      L: "𝘓",
      M: "𝘔",
      N: "𝘕",
      O: "𝘖",
      P: "𝘗",
      Q: "𝘘",
      R: "𝘙",
      S: "𝘚",
      T: "𝘛",
      U: "𝘜",
      V: "𝘝",
      W: "𝘞",
      X: "𝘟",
      Y: "𝘠",
      Z: "𝘡",
    };

    return letterMappings[char] ?? char;
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
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
        <div className="flex gap-4">
          <Label className="text-sm text-foreground/50" htmlFor="inputarea">
            Word Count : {text.split(/\s+/).filter(Boolean).length}
          </Label>
          <Label className="text-sm text-foreground/50" htmlFor="inputarea">
            Character Count : {text.length}
          </Label>
        </div>
        <div className="flex w-full flex-col gap-2 lg:w-fit lg:flex-row">
          <Button onClick={downloadTextFile}>Download Text</Button>
          <Button
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
          <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
          <Button onClick={stylizeText}>Convert</Button>
        </div>
      </div>
    </section>
  );
};

export default ItalicText;
