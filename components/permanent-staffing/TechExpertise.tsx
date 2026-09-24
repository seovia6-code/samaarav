"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const expertise = [
  {
    name: "CLOUD",
    title: "Cloud & Infrastructure",
    description: "Expertise in AWS, Azure, and Google Cloud Platform. From cloud migration strategies to maintaining robust, scalable serverless architectures.",
    color: "#ffffff",
    textColor: "#171717",
  },
  {
    name: "AI/ML",
    title: "Artificial Intelligence",
    description: "Specialized roles in machine learning, deep learning, NLP, and computer vision to build intelligent, data-driven enterprise solutions.",
    color: "#f5f5f5",
    textColor: "#171717",
  },
  {
    name: "DATA",
    title: "Data Engineering",
    description: "Architecting scalable data pipelines, optimizing databases, and deploying big data solutions across modern distributed environments.",
    color: "#eaeaea",
    textColor: "#171717",
  },
  {
    name: "CYBER",
    title: "Cybersecurity",
    description: "Ensuring your organization's digital assets remain protected with top-tier security analysts, penetration testers, and compliance experts.",
    color: "#dedede",
    textColor: "#171717",
  },
  {
    name: "FULL-STACK",
    title: "Full-Stack Development",
    description: "End-to-end application development experts proficient in modern frontend frameworks and robust backend ecosystems.",
    color: "#171717",
    textColor: "#ffffff",
  },
];

function Card({ item, index, progress, targetScale }: { item: any, index: number, progress: any, targetScale: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scale = useTransform(progress, [index * (1/expertise.length), 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-0 flex h-screen items-center justify-center pt-24 md:pt-32">
      <motion.div 
        style={{ backgroundColor: item.color, color: item.textColor, scale, top: `calc(-5vh + ${index * 20}px)` }} 
        className="relative flex h-[400px] w-full max-w-5xl flex-col justify-between overflow-hidden rounded-3xl border border-black/10 p-10 shadow-lg md:h-[500px] md:p-16"
      >
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex items-end justify-between">
            <div className="text-[5rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[7rem]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="text-2xl font-medium tracking-tight opacity-40 md:text-4xl">
              {item.name}
            </div>
          </div>
          
          <div className="max-w-2xl">
            <h3 className="mb-4 text-3xl font-medium tracking-[-0.05em] md:text-5xl">
              {item.title}
            </h3>
            <p className="text-base leading-relaxed opacity-70 md:text-xl">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TechExpertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative px-6 pb-24 md:px-10 lg:px-14">
      <div className="sticky top-10 mb-20 pt-24">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          Domains We Cover
        </p>

        <h2 className="max-w-5xl text-[11vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
          TECHNICAL
          <br />
          EXPERTISE
        </h2>
      </div>

      <div className="relative w-full">
        {expertise.map((item, index) => {
          const targetScale = 1 - ((expertise.length - index) * 0.04);
          return (
            <Card 
              key={item.name} 
              index={index} 
              item={item} 
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}
