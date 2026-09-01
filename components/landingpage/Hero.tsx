"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const nodes = [
  { x: "8%", y: "28%", size: 8, color: "#8a8a8a", delay: 0 },
  { x: "15%", y: "18%", size: 5, color: "#999999", delay: 1 },
  { x: "24%", y: "30%", size: 7, color: "#20c4d8", delay: 2 },
  { x: "31%", y: "16%", size: 5, color: "#a0a0a0", delay: 0.5 },
  { x: "42%", y: "27%", size: 6, color: "#999999", delay: 1.5 },
  { x: "52%", y: "15%", size: 5, color: "#8d8d8d", delay: 2.5 },
  { x: "63%", y: "24%", size: 7, color: "#999999", delay: 1 },
  { x: "73%", y: "16%", size: 5, color: "#a0a0a0", delay: 3 },
  { x: "84%", y: "28%", size: 7, color: "#999999", delay: 0.8 },
  { x: "93%", y: "20%", size: 5, color: "#888888", delay: 2 },

  { x: "5%", y: "48%", size: 5, color: "#999999", delay: 1 },
  { x: "18%", y: "54%", size: 6, color: "#8e8e8e", delay: 2 },
  { x: "29%", y: "45%", size: 5, color: "#999999", delay: 0.3 },
  { x: "40%", y: "57%", size: 7, color: "#888888", delay: 1.8 },
  { x: "58%", y: "48%", size: 5, color: "#999999", delay: 2.2 },
  { x: "69%", y: "55%", size: 6, color: "#888888", delay: 0.7 },
  { x: "81%", y: "45%", size: 5, color: "#999999", delay: 1.2 },
  { x: "95%", y: "54%", size: 7, color: "#888888", delay: 2.8 },

  { x: "12%", y: "76%", size: 6, color: "#999999", delay: 1.5 },
  { x: "25%", y: "84%", size: 5, color: "#888888", delay: 0.4 },
  { x: "38%", y: "74%", size: 7, color: "#999999", delay: 2.4 },
  { x: "51%", y: "86%", size: 5, color: "#888888", delay: 1.1 },
  { x: "65%", y: "76%", size: 6, color: "#999999", delay: 2.6 },
  { x: "78%", y: "86%", size: 5, color: "#888888", delay: 0.9 },
  { x: "91%", y: "75%", size: 7, color: "#999999", delay: 1.7 },
];


export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headingX1 = useTransform(scrollYProgress, [0, 1], ["0%", "15vw"]);
  const headingX2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15vw"]);
  const headingX3 = useTransform(scrollYProgress, [0, 1], ["0%", "20vw"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40vh"]);
  const nodesY = useTransform(scrollYProgress, [0, 1], ["0%", "-30vh"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20vh"]);

  return (
    <>
      <section
        id="home"
        ref={containerRef}
        className="relative min-h-screen overflow-hidden px-6 pb-12 pt-32 md:px-10 md:pt-40 lg:px-14"
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Horizontal lines */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_7px,rgba(0,0,0,0.045)_8px)]" />

          {/* Very subtle radial glow */}
          <div
            className="
              absolute
              left-1/2
              top-[48%]
              h-[700px]
              w-[1000px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[radial-gradient(circle,rgba(255,255,255,0.65)_0%,transparent_68%)]
            "
          />

          {/* Constellation SVG */}
          <svg
            className="absolute inset-0 h-full w-full opacity-60"
            viewBox="0 0 1200 900"
            preserveAspectRatio="none"
          >
            {/* Main network lines */}

            <line
              x1="80"
              y1="250"
              x2="180"
              y2="160"
              stroke="rgba(0,0,0,0.13)"
              strokeWidth="1"
            />

            <line
              x1="180"
              y1="160"
              x2="290"
              y2="270"
              stroke="rgba(0,0,0,0.11)"
              strokeWidth="1"
            />

            <line
              x1="290"
              y1="270"
              x2="410"
              y2="180"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="410"
              y1="180"
              x2="520"
              y2="300"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="520"
              y1="300"
              x2="650"
              y2="210"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="650"
              y1="210"
              x2="790"
              y2="290"
              stroke="rgba(0,0,0,0.11)"
              strokeWidth="1"
            />

            <line
              x1="790"
              y1="290"
              x2="930"
              y2="190"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="930"
              y1="190"
              x2="1110"
              y2="270"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            {/* Lower network */}

            <line
              x1="100"
              y1="540"
              x2="230"
              y2="650"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="230"
              y1="650"
              x2="390"
              y2="580"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="390"
              y1="580"
              x2="540"
              y2="720"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="540"
              y1="720"
              x2="700"
              y2="610"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="700"
              y1="610"
              x2="850"
              y2="720"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            <line
              x1="850"
              y1="720"
              x2="1050"
              y2="610"
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="1"
            />

            {/* Small diagonal connections */}

            <line
              x1="180"
              y1="160"
              x2="100"
              y2="540"
              stroke="rgba(0,0,0,0.07)"
              strokeWidth="1"
            />

            <line
              x1="410"
              y1="180"
              x2="390"
              y2="580"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
            />

            <line
              x1="790"
              y1="290"
              x2="700"
              y2="610"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
            />

            <line
              x1="930"
              y1="190"
              x2="1050"
              y2="610"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
            />
          </svg>

          {/* Small moving nodes with parallax */}
          <motion.div style={{ y: nodesY }} className="absolute inset-0">
          {nodes.map((node, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full"
              style={{
                left: node.x,
                top: node.y,
                width: node.size,
                height: node.size,
                background: node.color,
              }}
              animate={{
                x: [0, 12, -8, 0],
                y: [0, -14, 8, 0],
                opacity: [0.35, 0.8, 0.45, 0.35],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{
                duration: 7 + (index % 4),
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          </motion.div>

          {/* Tiny moving particles */}
          {Array.from({ length: 25 }).map((_, index) => (
            <motion.span
              key={`particle-${index}`}
              className="absolute h-[3px] w-[3px] rounded-full bg-black/25"
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 53) % 90}%`,
              }}
              animate={{
                x: [0, 20, -15, 0],
                y: [0, -15, 12, 0],
                opacity: [0.2, 0.65, 0.3, 0.2],
              }}
              transition={{
                duration: 6 + (index % 5),
                delay: index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="relative z-10 flex min-h-[calc(100vh-190px)] flex-col justify-between">
          {/* Heading */}
          <div className="max-w-[1500px]">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 2.5,
                  },
                },
              }}
              className="
                text-[15vw]
                font-medium
                leading-[0.82]
                tracking-[-0.075em]
                md:text-[10.5vw]
                lg:text-[8.7vw]
              "
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                style={{ transformPerspective: 1000, x: headingX1 }}
                className="origin-bottom"
              >
                TALENT.
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                style={{ transformPerspective: 1000, x: headingX2 }}
                className="ml-0 origin-bottom md:ml-[5vw] mt-4 md:mt-0"
              >
                TECHNOLOGY.
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                style={{ transformPerspective: 1000, x: headingX3 }}
                className="ml-[8vw] origin-bottom md:ml-[10vw] mt-4 md:mt-0"
              >
                TRANSFORMATION.
              </motion.div>
            </motion.h1>
          </div>

          {/* Bottom content */}
          <motion.div style={{ y: contentY }} className="mt-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 3.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-md
                text-base
                leading-relaxed
                text-black/65
                md:text-lg
              "
            >
              Connecting businesses with exceptional technology talent
              and delivering strategic consulting solutions that drive
              meaningful growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 3.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="
                  rounded-full
                  bg-black
                  px-6
                  py-3
                  text-sm
                  text-white
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                Find Talent ↗
              </a>

              <a
                href="#services"
                className="
                  rounded-full
                  border
                  border-black/70
                  px-6
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                Our Services ↗
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}