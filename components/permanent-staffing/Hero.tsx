"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headingX1 = useTransform(scrollYProgress, [0, 1], ["0%", "15vw"]);
  const headingX2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15vw"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40vh"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20vh"]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen overflow-hidden px-6 pb-12 pt-32 md:px-10 md:pt-40 lg:px-14 bg-[#faf9f6]"
      >
        <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_7px,rgba(0,0,0,0.045)_8px)]" />
        </motion.div>

        <div className="relative z-10 flex min-h-[calc(100vh-190px)] flex-col justify-between">
          <div className="max-w-[1500px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8 text-xs uppercase tracking-[0.25em] text-black/40"
            >
              Permanent IT Staffing
            </motion.p>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.25, delayChildren: 0.8 },
                },
              }}
              className="text-[13vw] font-medium leading-[0.82] tracking-[-0.075em] md:text-[10vw]"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: 15 },
                  visible: {
                    opacity: 1, y: 0, rotateX: 0,
                    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                style={{ transformPerspective: 1000, x: headingX1 }}
                className="origin-bottom"
              >
                PERMANENT
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: 15 },
                  visible: {
                    opacity: 1, y: 0, rotateX: 0,
                    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                style={{ transformPerspective: 1000, x: headingX2 }}
                className="ml-[10vw] origin-bottom mt-4 md:mt-0"
              >
                STAFFING.
              </motion.div>
            </motion.h1>
          </div>

          <motion.div style={{ y: contentY }} className="mt-20 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-base leading-relaxed text-black/65 md:text-lg"
            >
              Connect with top-tier tech talent. Build teams that grow with your business. Expert placement in 2-4 weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6 md:gap-8"
            >
              <div className="flex flex-col gap-1 md:gap-2 border-l border-black/15 pl-4 md:pl-6">
                <span className="text-2xl font-medium tracking-tight md:text-4xl">85%</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-black/50">Success Rate</span>
              </div>
              <div className="flex flex-col gap-1 md:gap-2 border-l border-black/15 pl-4 md:pl-6">
                <span className="text-2xl font-medium tracking-tight md:text-4xl">500+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-black/50">Professionals Placed</span>
              </div>
              <div className="flex flex-col gap-1 md:gap-2 border-l border-black/15 pl-4 md:pl-6">
                <span className="text-2xl font-medium tracking-tight md:text-4xl">95%</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-black/50">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
