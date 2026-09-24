"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description: "We engage closely with your stakeholders to understand the role, team dynamics, technical requirements, and long-term goals.",
    color: "#ffffff",
    textColor: "#171717",
  },
  {
    number: "02",
    title: "Targeted Sourcing",
    description: "Leveraging our vast global network, we identify active and passive candidates who match the exact skill and culture profile required.",
    color: "#f5f5f5",
    textColor: "#171717",
  },
  {
    number: "03",
    title: "Rigorous Screening",
    description: "Every candidate undergoes a multi-tier evaluation process including technical assessments, behavioral interviews, and reference checks.",
    color: "#eaeaea",
    textColor: "#171717",
  },
  {
    number: "04",
    title: "Interview & Selection",
    description: "We coordinate the interview process, provide debriefs, and assist in offer negotiation to ensure a smooth closing.",
    color: "#dedede",
    textColor: "#171717",
  },
  {
    number: "05",
    title: "Onboarding & Aftercare",
    description: "Our job doesn't end at the offer. We facilitate seamless onboarding and check in regularly to ensure long-term success.",
    color: "#171717",
    textColor: "#ffffff",
  },
];

function Card({ step, index, progress, targetScale }: { step: any, index: number, progress: any, targetScale: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scale = useTransform(progress, [index * 0.2, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-0 flex h-screen items-center justify-center pt-24 md:pt-32">
      <motion.div 
        style={{ backgroundColor: step.color, color: step.textColor, scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex h-[400px] w-full max-w-5xl flex-col justify-between overflow-hidden rounded-3xl border border-black/10 p-10 shadow-lg md:h-[500px] md:p-16"
      >
        <div className="flex h-full w-full flex-col justify-between">
          <div className="text-[6rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[8rem]">
            {step.number}
          </div>
          <div className="max-w-2xl">
            <h3 className="mb-4 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              {step.title}
            </h3>
            <p className="text-lg leading-relaxed opacity-70 md:text-xl">
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Process() {
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
            How We Work
          </p>
          <h2 className="max-w-4xl text-[12vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
            OUR PROVEN
            <br />
            PROCESS
          </h2>
        </div>
      </div>

      <div className="relative w-full">
        {steps.map((step, index) => {
          const targetScale = 1 - ((steps.length - index) * 0.05);
          return (
            <Card 
              key={index} 
              index={index} 
              step={step} 
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}
