"use client";
import { motion } from "framer-motion";
import React from "react";

export default function EmailLink() {
  const [showHover, setShowHover] = React.useState(false);
  return (
    <>
      <a
        href="mailto:hello@anewdraft.com"
        className="relative sm:hidden block overflow-hidden  hover:border-b w-fit"
      >
        <motion.span>hello@anewdraft.com</motion.span>
      </a>
      <a
        onMouseOver={() => {
          setShowHover(true);
        }}
        onMouseLeave={() => {
          setShowHover(false);
        }}
        href="mailto:hello@anewdraft.com"
        className="relative hidden sm:block overflow-hidden h-[2em] hover:border-b w-fit"
      >
        <motion.span
          initial={{ y: "0%" }}
          animate={showHover ? { y: "-100%" } : { y: "0%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="block"
        >
          hello@anewdraft.com
        </motion.span>

        <motion.span
          initial={{ y: "100%" }}
          animate={showHover ? { y: "0%" } : { y: "100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute left-0 top-0 block"
        >
          hello@anewdraft.com
        </motion.span>
      </a>
    </>
  );
}
