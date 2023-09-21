import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import useScroll from "@/hooks/useScroll";
import { ModeToggle } from "./toggleTheme";

const Header = () => {
  const scrolled = useScroll(30);

  return (
    <header
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        "border-b border-muted bg-background": scrolled,
      })}
    >
      <div className="maincol flex h-14 items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="hidden text-3xl font-bold tracking-tighter sm:flex"
          >
            CONVERTEXT
          </Link>
          <Link
            href="/"
            className="flex text-3xl font-bold tracking-tighter sm:hidden"
          >
            CNVRTXT
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.buymeacoffee.com/whiselyprop"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="rounded-full">Donate</Button>
          </a>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
