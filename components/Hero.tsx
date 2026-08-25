"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] px-6 pb-10 pt-16 md:px-10 md:pt-24 lg:px-14">
      <div className="flex min-h-[calc(100vh-160px)] flex-col justify-between">
        
        {/* Main heading */}
        <div className="max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[14vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[10vw] lg:text-[8.5vw]"
          >
            POWERING
            <br />
            GLOBAL
            <br />
            <span className="ml-[8vw]">GROWTH</span>
          </motion.h1>
        </div>

        {/* Bottom content */}
        <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-md text-base leading-relaxed text-black/60 md:text-lg"
          >
            Connecting businesses with exceptional technology talent
            across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-3"
          >
            <a
              href="#contact"
              className="rounded-full bg-black px-6 py-3 text-sm text-white transition-transform hover:scale-105"
            >
              Find Talent ↗
            </a>

            <a
              href="#jobs"
              className="rounded-full border border-black px-6 py-3 text-sm transition-all hover:bg-black hover:text-white"
            >
              Find a Job ↗
            </a>
          </motion.div>
        </div>

        {/* Technology strip */}
       
      </div>
    </section>
  );
} 