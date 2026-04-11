"use client";
import { motion } from "framer-motion";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function CapabilitiesLink() {
  const [showHover, setShowHover] = React.useState(false);
  return (
    <span className="flex 3xl:gap-x-2 2xl:gap-x-2 gap-x-2 items-center">
      <ArrowRight size={10} className="inline-block  duration-300 2xl:hidden" />
      <ArrowRight className="2xl:inline-block  duration-300 hidden max-w-6 w-[0.7vw]" />
      <a
        target="_blank"
        href="
https://docs.google.com/document/d/11n_1NiqAVULVt6EwYcEH-6BsBmWfDpgxcEq3KlRbQpk/edit?usp=sharing"
        className="relative sm:hidden block overflow-hidden  hover:border-b w-fit"
      >
        <motion.span>Our capabilities</motion.span>
      </a>
      <a
        onMouseOver={() => {
          setShowHover(true);
        }}
        onMouseLeave={() => {
          setShowHover(false);
        }}
        href="https://docs.google.com/document/d/11n_1NiqAVULVt6EwYcEH-6BsBmWfDpgxcEq3KlRbQpk/edit?usp=sharing"
        className="relative hidden sm:block overflow-hidden 2xl:h-[1.8em] h-[2em] hover:border-b w-fit"
      >
        <motion.span
          initial={{ y: "0%" }}
          animate={showHover ? { y: "-100%" } : { y: "0%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="block"
        >
          Our capabilities
        </motion.span>

        <motion.span
          initial={{ y: "100%" }}
          animate={showHover ? { y: "0%" } : { y: "100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute left-0 top-0 block"
        >
          Our capabilities
        </motion.span>
      </a>
    </span>
  );
}
