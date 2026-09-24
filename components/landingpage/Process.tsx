"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Requirements",
    description: "Tell us about your technology hiring requirements, skills, experience, and team needs.",
    color: "#ffffff",
    textColor: "#171717",
  },
  {
    number: "02",
    title: "Receive Pre-Vetted Profiles",
    description: "Our team identifies and presents qualified technology professionals aligned with your requirements.",
    color: "#f5f5f5",
    textColor: "#171717",
  },
  {
    number: "03",
    title: "Interview Candidates",
    description: "Review profiles, connect with candidates, and identify the professionals who best fit your organization.",
    color: "#eaeaea",
    textColor: "#171717",
  },
  {
    number: "04",
    title: "Onboard Talent",
    description: "Once you select your candidate, we help move the process forward so your new talent can get started.",
    color: "#171717",
    textColor: "#ffffff",
  },
];

function TimelineItem({ step, index }: { step: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex w-full flex-col items-start md:flex-row md:items-center md:justify-between my-8 md:my-12">
      {/* Desktop alternating layout */}
      <div className={`w-full md:w-[45%] ${isEven ? "md:pr-12" : "md:pl-12 md:order-2"}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 p-8 shadow-sm md:p-10"
          style={{ backgroundColor: step.color, color: step.textColor }}
        >
          <div className="mb-6 text-[3rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[5rem]">
            {step.number}
          </div>
          <div className="max-w-xl">
            <h3 className="mb-3 text-2xl font-medium tracking-[-0.05em] md:text-3xl">
              {step.title}
            </h3>
            <p className="text-base leading-relaxed opacity-70 md:text-lg">
              {step.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Empty space for alternating layout on desktop */}
      <div className={`hidden md:block w-[45%] ${isEven ? "md:order-2" : ""}`}></div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative px-6 pb-24 pt-32 md:px-10 lg:px-14">
      {/* Header */}
      <div className="mb-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
            Our Process
          </p>

          <h2 className="max-w-4xl text-[12vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
            FROM NEED
            <br />
            TO TALENT
          </h2>
        </div>

        <p className="max-w-md text-base leading-relaxed text-[#6B6B67] md:text-lg">
          A simple four-step process designed to help businesses find
          qualified technology professionals efficiently.
        </p>
      </div>

      <div ref={containerRef} className="relative mx-auto mt-20 w-full max-w-6xl">
        {/* Dashed Center Line */}
        <div className="absolute bottom-0 left-0 top-0 w-px -translate-x-1/2 border-l-2 border-dashed border-black/15 md:left-1/2"></div>

        {/* Animated Moving Square */}
        <motion.div
          className="absolute left-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.8)] md:left-1/2"
          style={{ top: dotTop }}
        />

        {/* Steps */}
        <div className="flex flex-col pl-10 md:pl-0">
          {steps.map((step, index) => (
            <TimelineItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}