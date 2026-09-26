"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Cultural Fit & Alignment",
    description: "We go beyond skills and experience. Our rigorous vetting process identifies professionals who share your values, communication style, and commitment to excellence.",
    color: "#ffffff",
    textColor: "#171717",
  },
  {
    number: "02",
    title: "Access Specialized Expertise",
    description: "Our extensive network spans cloud platforms, DevOps, AI/ML, full-stack development, and cybersecurity. We pre-screen for technical depth and certifications.",
    color: "#f5f5f5",
    textColor: "#171717",
  },
  {
    number: "03",
    title: "Build Sustainable Pipeline",
    description: "Permanent placements create stability for long-term growth. You retain institutional knowledge, develop future leaders, and build organizational resilience.",
    color: "#eaeaea",
    textColor: "#171717",
  },
  {
    number: "04",
    title: "Strategic Partnership Approach",
    description: "We're invested in your success. Our tech-savvy recruiters provide ongoing guidance, market insights, and pre-placement technical assessments to ensure perfect fits.",
    color: "#171717",
    textColor: "#ffffff",
  },
];

export default function Benefits() {
  return (
    <section className="relative px-6 py-12 md:px-10 lg:px-14 min-h-screen flex flex-col justify-center max-h-screen overflow-hidden">
      <div className="mb-10 pt-10">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          Core Benefits
        </p>
        <h2 className="max-w-4xl text-[10vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[6vw] lg:text-[5vw]">
          WHY PERMANENT
          <br />
          STAFFING?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full flex-grow pb-10">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            style={{ backgroundColor: benefit.color, color: benefit.textColor }} 
            className="flex flex-col justify-between overflow-hidden rounded-3xl border border-black/10 p-6 shadow-sm md:p-8"
          >
            <div className="text-[3rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[4rem] mb-4">
              {benefit.number}
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium tracking-[-0.05em] md:text-2xl">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70 md:text-base">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
