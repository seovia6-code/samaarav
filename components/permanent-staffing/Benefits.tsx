"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Cultural Fit Validation",
    description: "We ensure candidates align perfectly with your organization's values, mission, and long-term vision to guarantee sustainable retention.",
    color: "#ffffff",
    textColor: "#171717",
  },
  {
    number: "02",
    title: "Access Specialized Talent",
    description: "Tap into our exclusive network of passive candidates and industry experts who aren't actively looking but are open to the right opportunity.",
    color: "#f5f5f5",
    textColor: "#171717",
  },
  {
    number: "03",
    title: "Accelerated Hiring",
    description: "Our streamlined vetting process and vast talent pools drastically reduce your time-to-hire without compromising on quality.",
    color: "#eaeaea",
    textColor: "#171717",
  },
  {
    number: "04",
    title: "Risk Mitigation",
    description: "We conduct thorough background checks, technical assessments, and reference verification to ensure you make secure hiring decisions.",
    color: "#171717",
    textColor: "#ffffff",
  },
];

function Card({ benefit, index, progress, targetScale }: { benefit: any, index: number, progress: any, targetScale: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-0 flex h-screen items-center justify-center pt-24 md:pt-32">
      <motion.div 
        style={{ backgroundColor: benefit.color, color: benefit.textColor, scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex h-[400px] w-full max-w-5xl flex-col justify-between overflow-hidden rounded-3xl border border-black/10 p-10 shadow-lg md:h-[500px] md:p-16"
      >
        <div className="flex h-full w-full flex-col justify-between">
          <div className="text-[6rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[8rem]">
            {benefit.number}
          </div>
          <div className="max-w-2xl">
            <h3 className="mb-4 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              {benefit.title}
            </h3>
            <p className="text-lg leading-relaxed opacity-70 md:text-xl">
              {benefit.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative px-6 pb-24 md:px-10 lg:px-14">
      <div className="sticky top-10 mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between pt-24">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
            Core Benefits
          </p>
          <h2 className="max-w-4xl text-[11vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
            WHY PERMANENT
            <br />
            STAFFING?
          </h2>
        </div>
      </div>

      <div className="relative w-full">
        {benefits.map((benefit, index) => {
          const targetScale = 1 - ((benefits.length - index) * 0.05);
          return (
            <Card 
              key={index} 
              index={index} 
              benefit={benefit} 
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}
