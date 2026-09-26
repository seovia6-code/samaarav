"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServiceHero({ title, subtitle, description, stats }: any) {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headingX1 = useTransform(scrollYProgress, [0, 1], ["0%", "15vw"]);
  const headingX2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15vw"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40vh"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20vh"]);

  // Split title by <br /> or <br> to animate parts in opposite directions
  const titleParts = title.split(/<br\s*\/?>/i);
  const part1 = titleParts[0] || "";
  const part2 = titleParts[1] || "";

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
              {subtitle}
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
                {part1}
              </motion.div>
              {part2 && (
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
                  {part2}
                </motion.div>
              )}
            </motion.h1>
          </div>

          <motion.div style={{ y: contentY }} className="mt-20 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-base leading-relaxed text-black/65 md:text-lg"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-8"
            >
              {stats?.slice(0, 3).map((stat: any, index: number) => (
                <div key={index} className="flex flex-col gap-2 border-l border-black/15 pl-6">
                  <span className="text-3xl font-medium tracking-tight md:text-4xl">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider text-black/50">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
