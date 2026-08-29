"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#171717] px-6 py-24 text-[#FFFDF3] md:px-10 md:py-32 lg:px-14"
    >
      {/* Small label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-xs uppercase tracking-[0.22em] text-[#FFFDF3]/50"
      >
        Let's Work Together
      </motion.p>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl text-[13vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[9vw] lg:text-[8vw]"
      >
        BUILD YOUR
        <br />
        <span className="ml-[8vw]">NEXT TEAM.</span>
      </motion.h2>

      {/* Bottom content */}
      <div className="mt-20 flex flex-col gap-12 border-t border-[#FFFDF3]/15 pt-10 md:flex-row md:items-end md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg text-base leading-relaxed text-[#FFFDF3]/60 md:text-lg"
        >
          Whether you're looking for exceptional technology talent or your
          next career opportunity, let's make it happen.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full bg-[#FFFDF3] px-7 py-4 text-center text-sm font-medium text-[#171717] transition-transform duration-300 hover:scale-105"
          >
            Find Talent ↗
          </a>

          <a
            href="#jobs"
            className="rounded-full border border-[#FFFDF3]/40 px-7 py-4 text-center text-sm font-medium text-[#FFFDF3] transition-all duration-300 hover:bg-[#FFFDF3] hover:text-[#171717]"
          >
            Find a Job ↗
          </a>
        </motion.div>
      </div>

      {/* Decorative number */}
      <div className="pointer-events-none absolute bottom-[-8vw] right-[-2vw] select-none text-[25vw] font-medium leading-none tracking-[-0.08em] text-[#FFFDF3]/[0.025]">
        01
      </div>
    </section>
  );
}