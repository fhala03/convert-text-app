import React from "react";
import { navbarLayout } from "@/constant/layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee, Sparkles } from "lucide-react";

const HomePage = () => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <motion.div
        transition={{ duration: 0.8, ease: "easeInOut" }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="relative max-w-xl text-center"
      >
        <div className="z-10 flex flex-col items-center gap-4 lg:gap-6">
          <Badge
            className="cursor-pointer rounded-full px-10 py-2 font-medium"
            variant={"secondary"}
          >
            Introducing CNVRTXT - one word at a time.
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            To layz to rewrite yourself? Welcome to{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              CNVRTXT
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Your path to endless opportunities and beyond begins now. Join us in
            shaping the future of online engagement, one word at a time.
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-4">
            <Link href={"/uppercase"}>
              <Button className="rounded-full" size={"lg"}>
                Get Started
              </Button>
            </Link>
            <Link
              href="https://github.com/fhala03/linktab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="flex items-center gap-2 rounded-full"
                size="lg"
                variant="secondary"
              >
                <Coffee className="h-4 w-4" />
                <h1>Buy me a Coffee</h1>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = navbarLayout;
