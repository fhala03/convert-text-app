/* eslint-disable @typescript-eslint/no-misused-promises  */

import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const BinaryText = () => {
  const [text, setText] = useState("");

  const convertToBinary = () => {
    const binaryText = text
      .split("")
      .map((char) => {
        if (/[A-Za-z0-9]/.test(char)) {
          return stylizeCharacter(char);
        } else {
          return char;
        }
      })
      .join(" ");

    setText(binaryText);

    toast({
      title: "🚀 Text Converted to Binary!",
      description: "Your text has been converted to binary.",
      duration: 2000,
    });
  };

  const stylizeCharacter = (char: string): string => {
    const letterMappings: Record<string, string> = {
      a: "01100001",
      b: "01100010",
      c: "01100011",
      d: "01100100",
      e: "01100101",
      f: "01100110",
      g: "01100111",
      h: "01101000",
      i: "01101001",
      j: "01101010",
      k: "01101011",
      l: "01101100",
      m: "01101101",
      n: "01101110",
      o: "01101111",
      p: "01110000",
      q: "01110001",
      r: "01110010",
      s: "01110011",
      t: "01110100",
      u: "01110101",
      v: "01110110",
      w: "01110111",
      x: "01111000",
      y: "01111001",
      z: "01111010",
      A: "01000001",
      B: "01000010",
      C: "01000011",
      D: "01000100",
      E: "01000101",
      F: "01000110",
      G: "01000111",
      H: "01001000",
      I: "01001001",
      J: "01001010",
      K: "01001011",
      L: "01001100",
      M: "01001101",
      N: "01001110",
      O: "01001111",
      P: "01010000",
      Q: "01010001",
      R: "01010010",
      S: "01010011",
      T: "01010100",
      U: "01010101",
      V: "01010110",
      W: "01010111",
      X: "01011000",
      Y: "01011001",
      Z: "01011010",
      "0": "00110000",
      "1": "00110001",
      "2": "00110010",
      "3": "00110011",
      "4": "00110100",
      "5": "00110101",
      "6": "00110110",
      "7": "00110111",
      "8": "00111000",
      "9": "00111001",
    };

    return letterMappings[char] ?? char;
  };

  const downloadTextFile = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "binaryfile.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "📥 Binary Text Downloaded!",
      description: "Your binary text has been downloaded as 'binaryfile.txt'.",
      duration: 2000,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "🚀 Binary Text Copied!",
          description:
            "You've successfully copied the binary text to your clipboard. Now, go paste it like a pro!",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.error("Failed to copy binary text to clipboard:", error);
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
          <Button onClick={downloadTextFile}>Download Binary Text</Button>
          <Button
            onClick={() => {
              setText("");
              toast({
                title: "🧹 Binary Text Cleared!",
                description: "You've cleared the binary text area.",
                duration: 2000,
              });
            }}
          >
            Clear
          </Button>
          <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
          <Button onClick={convertToBinary}>Convert</Button>
        </div>
      </div>
    </section>
  );
};

export default BinaryText;
