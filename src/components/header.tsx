import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className={cn`sticky inset-x-0 top-0 z-30 w-full bg-background transition-all`}
    >
      <div className="maincol flex h-14 items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex text-3xl font-bold tracking-tighter">
            CNVRTXT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
