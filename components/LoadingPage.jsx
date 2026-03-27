"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingPage = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          exit={{ opacity: 0 }}
          duration={0.5}
          className="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen bg-black"
        >
          <div className="hidden text-white fontt-in text-9xl animate-pulse">
            /
          </div>
          <video
            controls={false}
            autoPlay
            muted
            loop
            className="w-[300px] sm:w-[27vw]"
            src="/0001-0110.mkv"
          ></video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
