/* eslint-disable @typescript-eslint/no-misused-promises  */

import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const MorseCodeText = () => {
  const [text, setText] = useState("");

  const charToMorseCode = (char: string): string => {
    const morseCodeMappings: Record<string, string> = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
      A: ".-",
      B: "-...",
      C: "-.-.",
      D: "-..",
      E: ".",
      F: "..-.",
      G: "--.",
      H: "....",
      I: "..",
      J: ".---",
      K: "-.-",
      L: ".-..",
      M: "--",
      N: "-.",
      O: "---",
      P: ".--.",
      Q: "--.-",
      R: ".-.",
      S: "...",
      T: "-",
      U: "..-",
      V: "...-",
      W: ".--",
      X: "-..-",
      Y: "-.--",
      Z: "--..",
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      " ": " ", // Space
    };

    return morseCodeMappings[char] ?? char;
  };

  const convertToMorseCode = () => {
    const morseCodeText = text
      .split("")
      .map((char) => charToMorseCode(char))
      .join(" ");

    setText(morseCodeText);

    toast({
      title: "🚀 Text Converted to Morse Code!",
      description: "Your text has been converted to Morse code.",
      duration: 2000,
    });
  };

  const downloadTextFile = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "morsecode.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "📥 Morse Code Downloaded!",
      description:
        "Your Morse code text has been downloaded as 'morsecode.txt'.",
      duration: 2000,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "🚀 Morse Code Copied!",
          description:
            "You've successfully copied the Morse code to your clipboard. Now, go paste it like a pro!",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.error("Failed to copy Morse code to clipboard:", error);
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
            Word Count: {text.split(/\s+/).filter(Boolean).length}
          </Label>
          <Label className="text-sm text-foreground/50" htmlFor="inputarea">
            Character Count: {text.length}
          </Label>
        </div>
        <div className="flex w-full flex-col gap-2 lg:w-fit lg:flex-row">
          <Button onClick={downloadTextFile}>Download Text</Button>
          <Button
            onClick={() => {
              setText("");
              toast({
                title: "🧹 Morse Code Cleared!",
                description: "You've cleared the Morse code text area.",
                duration: 2000,
              });
            }}
          >
            Clear
          </Button>
          <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
          <Button onClick={convertToMorseCode}>Convert</Button>
        </div>
      </div>
    </section>
  );
};

export default MorseCodeText;
