import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import useScroll from "@/hooks/useScroll";

const Header = () => {
  const scrolled = useScroll(30);

  return (
    <header
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        "border-b border-gray-200 bg-white": scrolled,
      })}
    >
      <div className="maincol flex h-14 items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex text-3xl font-bold tracking-tighter">
            CONVERTEXT
          </Link>
        </div>
        <Link href={"/uppercase"}>
          <Button className="rounded-full">Donate</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
