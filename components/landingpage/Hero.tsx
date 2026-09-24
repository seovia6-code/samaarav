"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const orbitalItems = [
  // Inner circle (3 items perfectly spaced by 120°)
  { text: "AI & ML", radius: 100, duration: 40, startAngle: 0 },
  { text: "IT Consulting", radius: 100, duration: 40, startAngle: 120 },
  { text: "App Dev", radius: 100, duration: 40, startAngle: 240 },
  
  // Middle circle (4 items perfectly spaced by 90°, offset 15°)
  { text: "Cloud Solutions", radius: 180, duration: 40, startAngle: 15 },
  { text: "DevOps", radius: 180, duration: 40, startAngle: 105 },
  { text: "Cybersecurity", radius: 180, duration: 40, startAngle: 195 },
  { text: "Blockchain", radius: 180, duration: 40, startAngle: 285 },
  
  // Outer circle (4 items perfectly spaced by 90°, offset 45°)
  { text: "UI/UX Design", radius: 260, duration: 40, startAngle: 45 },
  { text: "Data Science", radius: 260, duration: 40, startAngle: 135 },
  { text: "Staffing", radius: 260, duration: 40, startAngle: 225 },
  { text: "Web Development", radius: 260, duration: 40, startAngle: 315 },
];

const orbitalRadii = [100, 180, 260];


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
  const cardScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const cardBorderRadius = useTransform(scrollYProgress, [0, 0.6], ["0px", "60px"]);
  const bottomContentY = useTransform(scrollYProgress, [0, 0.4], ["0%", "150%"]);
  const bottomContentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <>
      <section
        id="home"
        ref={containerRef}
        className="relative h-[200vh]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-gray-50/50">
          
          {/* =====================================================
              REVEALED BACKGROUND TEXT
          ====================================================== */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 pointer-events-none z-0 overflow-hidden">
             <h1 className="text-[7vw] sm:text-[5vw] font-black uppercase tracking-tighter text-black/90 leading-none text-center whitespace-nowrap">
                STAFFING & CONSULTANCY SERVICES
             </h1>
          </div>

          {/* =====================================================
              SHRINKING HERO CARD
          ====================================================== */}
          <motion.div 
            style={{ scale: cardScale, borderRadius: cardBorderRadius }}
            className="relative z-10 w-full h-full overflow-hidden bg-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col px-6 pb-12 pt-32 md:px-10 md:pt-40 lg:px-14"
          >
            {/* Background Blobs */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-orange-50 -z-10" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-[10%] -top-[10%] h-[70%] w-[50%] rounded-full bg-blue-400/30 blur-[120px] -z-10"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-[10%] top-[10%] h-[60%] w-[40%] rounded-full bg-orange-400/30 blur-[120px] -z-10"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -40, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-[10%] left-[20%] h-[60%] w-[60%] rounded-full bg-purple-400/30 blur-[120px] -z-10"
            />

            {/* Orbiting Circles Animation */}
            <div className="absolute inset-0 origin-center -z-10">
              {/* Center Graphic */}
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-black text-3xl font-bold text-white shadow-xl">
                S
              </div>

              {/* Circular Tracks */}
              {orbitalRadii.map((r, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 rounded-full border border-black/[0.06]"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              {/* Orbiting Items */}
              {orbitalItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: item.radius * 2,
                    height: item.radius * 2,
                    x: "-50%",
                    y: "-50%",
                  }}
                  animate={{ rotate: [item.startAngle, item.startAngle + 360] }}
                  transition={{ repeat: Infinity, duration: item.duration, ease: "linear" }}
                >
                  <motion.div
                    className="absolute left-1/2 top-0"
                    style={{ x: "-50%", y: "-50%" }}
                    animate={{ rotate: [-item.startAngle, -(item.startAngle + 360)] }}
                    transition={{ repeat: Infinity, duration: item.duration, ease: "linear" }}
                  >
                    <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium text-black shadow-sm backdrop-blur-md md:text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-black/80"></div>
                      {item.text}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Spacer to push content to bottom */}
            <div className="flex-1" />

            {/* Bottom Content (Slides out when shrinking) */}
            <motion.div 
              style={{ y: bottomContentY, opacity: bottomContentOpacity }}
              className="mt-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between pb-8"
            >
              <p className="max-w-md text-base leading-relaxed text-black/65 md:text-lg">
                Connecting businesses with exceptional technology talent
                and delivering strategic consulting solutions that drive
                meaningful growth.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="rounded-full bg-black px-6 py-3 text-sm text-white transition-transform duration-300 hover:scale-105">
                  Find Talent ↗
                </a>
                <a href="#services" className="rounded-full border border-black/70 px-6 py-3 text-sm transition-all duration-300 hover:bg-black hover:text-white">
                  Our Services ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}