/* eslint-disable @typescript-eslint/no-misused-promises  */

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import React, { useState, useEffect } from "react";

const ReverseText = () => {
  const [text, setText] = useState("");

  const reverseText = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);

    toast({
      title: "🚀 Text Reversed!",
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
          <Button onClick={reverseText}>Convert</Button>
        </div>
      </div>
    </section>
  );
};

export default ReverseText;
