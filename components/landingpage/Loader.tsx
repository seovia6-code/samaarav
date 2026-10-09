"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake progress loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small pause at 100%
          return 100;
        }
        // Increment randomly between 5 and 20
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="flex h-full w-full flex-col justify-end p-8 md:p-14">
             <div className="flex w-full items-end justify-between overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[12vw] font-medium leading-none tracking-[-0.04em] md:text-[8vw]"
                >
                  SAMAARAV
                </motion.span>
                <motion.span
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.3 }}
                   className="text-2xl font-light leading-none md:text-5xl"
                >
                  {Math.min(progress, 100)}%
                </motion.span>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
