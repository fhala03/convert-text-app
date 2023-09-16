/* eslint-disable @typescript-eslint/no-misused-promises  */

import React, { useState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const UnderlinedText = () => {
  const [text, setText] = useState("");

  const underlineCharacter = (char: string): string => {
    const characterMappings: Record<string, string> = {
      a: "a̲",
      b: "b̲",
      c: "c̲",
      d: "d̲",
      e: "e̲",
      f: "f̲",
      g: "g̲",
      h: "h̲",
      i: "i̲",
      j: "j̲",
      k: "k̲",
      l: "l̲",
      m: "m̲",
      n: "n̲",
      o: "o̲",
      p: "p̲",
      q: "q̲",
      r: "r̲",
      s: "s̲",
      t: "t̲",
      u: "u̲",
      v: "v̲",
      w: "w̲",
      x: "x̲",
      y: "y̲",
      z: "z̲",
      A: "A̲",
      B: "B̲",
      C: "C̲",
      D: "D̲",
      E: "E̲",
      F: "F̲",
      G: "G̲",
      H: "H̲",
      I: "I̲",
      J: "J̲",
      K: "K̲",
      L: "L̲",
      M: "M̲",
      N: "N̲",
      O: "O̲",
      P: "P̲",
      Q: "Q̲",
      R: "R̲",
      S: "S̲",
      T: "T̲",
      U: "U̲",
      V: "V̲",
      W: "W̲",
      X: "X̲",
      Y: "Y̲",
      Z: "Z̲",
      "0": "0̲",
      "1": "1̲",
      "2": "2̲",
      "3": "3̲",
      "4": "4̲",
      "5": "5̲",
      "6": "6̲",
      "7": "7̲",
      "8": "8̲",
      "9": "9̲",
      "!": "!̲",
      "@": "@̲",
      "#": "#̲",
      $: "$̲",
      "%": "%̲",
      "^": "^̲",
      "&": "&̲",
      "*": "*̲",
      "(": "(_̲",
      ")": ")̲",
      "-": "-̲",
      _: "_̲",
      "=": "=̲",
      "+": "+̲",
      "{": "{̲",
      "}": "}̲",
      "[": "[̲",
      "]": "]̲",
      ":": ":̲",
      ";": ";̲",
      "<": "<̲",
      ">": ">̲",
      "?": "?̲",
      "/": "/̲",
      "|": "|̲",
      "\\": "\\̲",
      ",": ",̲",
      ".": ".̲",
      "'": "'̲",
      '"': '"̲',
    };

    return characterMappings[char] ?? char;
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

  const UnderlineText = () => {
    const underlinedText = text
      .split("")
      .map((char) => underlineCharacter(char))
      .join("");

    setText(underlinedText);

    toast({
      title: "👍 Text Underlined!",
      description: "Your text has been manually underlined.",
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

  useEffect(() => {
    const handlePaste = async () => {
      try {
        const clipboardText = await navigator.clipboard.readText();
        const underlinedText = clipboardText
          .split("")
          .map((char) => underlineCharacter(char))
          .join("");
        setText(underlinedText);
        await navigator.clipboard.writeText(underlinedText);
      } catch (error) {
        console.error("Failed to read or write clipboard data:", error);
      }
    };

    void handlePaste();

    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <section className="flex flex-col gap-2">
      <Textarea
        className="h-[220px] rounded-md bg-secondary placeholder:opacity-40"
        placeholder="Type or paste your content here"
        id="inputarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex flex-col items-start justify-between gap-4 border lg:flex-row lg:items-center">
        <div className="flex gap-4">
          <Label className="text-sm text-foreground/50" htmlFor="inputarea">
            Word Count : {text.split(/\s+/).filter(Boolean).length}
          </Label>
          <Label className="text-sm text-foreground/50" htmlFor="inputarea">
            Character Count : {text.length}
          </Label>
        </div>
        <div className="flex w-full lg:w-fit flex-col gap-2 lg:flex-row">
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
          <Button onClick={UnderlineText}>Convert</Button>
        </div>
      </div>
    </section>
  );
};

export default UnderlinedText;
