"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Permanent Staffing",
    description: "Tailored workforce solutions designed to scale with your business through permanent technology placements.",
    color: "#ffffff",
    textColor: "#171717",
    link: "/services/staffing-services/permanent-staffing",
  },
  {
    number: "02",
    title: "Contract Staffing",
    description: "Flexible staffing solutions that help businesses quickly access skilled technology professionals for changing project and workforce needs.",
    color: "#f5f5f5",
    textColor: "#171717",
  },
  {
    number: "03",
    title: "Direct Hire",
    description: "Connect with qualified technology professionals for permanent positions and build high-performing teams.",
    color: "#eaeaea",
    textColor: "#171717",
  },
  {
    number: "04",
    title: "Contract-to-Hire",
    description: "Evaluate technology professionals through a flexible engagement model before making a permanent hiring decision.",
    color: "#dedede",
    textColor: "#171717",
  },
  {
    number: "05",
    title: "Statement of Work",
    description: "Project-based technology engagements designed around defined requirements, deliverables, and business outcomes.",
    color: "#171717",
    textColor: "#ffffff",
  },
];

function Card({ service, index, progress, targetScale }: { service: any, index: number, progress: any, targetScale: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scale = useTransform(progress, [index * 0.2, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-0 flex h-screen items-center justify-center pt-24 md:pt-32">
      <motion.div 
        style={{ backgroundColor: service.color, color: service.textColor, scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex h-[400px] w-full max-w-5xl flex-col justify-between overflow-hidden rounded-3xl border border-black/10 p-10 shadow-lg md:h-[500px] md:p-16 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex h-full w-full flex-col justify-between">
          <div className="text-[6rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[8rem]">
            {service.number}
          </div>
          <div className="max-w-2xl">
            <h3 className="mb-4 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              {service.title}
            </h3>
            <p className="mb-8 text-lg leading-relaxed opacity-70 md:text-xl">
              {service.description}
            </p>
            <a 
              href={service.link || "#"}
              className="border-b pb-1 text-sm transition-opacity hover:opacity-70 inline-block w-fit" 
              style={{ borderColor: service.textColor }}
            >
              Learn More ↗
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="services" className="relative px-6 pb-24 md:px-10 lg:px-14">
      {/* Section Header */}
      <div className="sticky top-10 mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between pt-24">
        <h2 className="max-w-4xl text-[12vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
          WHAT
          <br />
          WE DO
        </h2>

        <p className="max-w-sm text-base leading-relaxed text-[#6B6B67] md:text-lg">
          Flexible IT staffing solutions designed to scale with your
          business, from permanent placements to project-based
          engagements.
        </p>
      </div>

      <div className="relative w-full">
        {services.map((service, index) => {
          const targetScale = 1 - ((services.length - index) * 0.04);
          return (
            <Card 
              key={index} 
              index={index} 
              service={service} 
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}