import React, { useState, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const TextInput = () => {
  const [text, setText] = useState("");

  const convertToUppercase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  useEffect(() => {
    const handlePaste = async () => {
      try {
        const clipboardText = await navigator.clipboard.readText();
        const uppercaseText = clipboardText.toUpperCase();
        setText(uppercaseText);
        await navigator.clipboard.writeText(uppercaseText);
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
        className="h-[220px] bg-background placeholder:opacity-40"
        placeholder="Type or paste your content here"
        id="inputarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Label className="text-sm text-foreground" htmlFor="inputarea">
            Word Count : {text.split(/\s+/).filter(Boolean).length}
          </Label>
          <Label className="text-sm text-foreground" htmlFor="inputarea">
            Character Count : {text.length}
          </Label>
        </div>
        <Button onClick={convertToUppercase}>Convert</Button>{" "}
      </div>
    </section>
  );
};

export default TextInput;
