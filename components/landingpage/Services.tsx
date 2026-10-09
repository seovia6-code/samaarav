"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Permanent Staffing",
    description: "Tailored workforce solutions designed to scale with your business through permanent technology placements.",
    color: "#ffffff",
    textColor: "#071A2B",
    link: "/services/staffing-services/permanent-staffing",
  },
  {
    number: "02",
    title: "Contract Staffing",
    description: "Flexible staffing solutions that help businesses quickly access skilled technology professionals for changing project and workforce needs.",
    color: "#ffffff",
    textColor: "#071A2B",
    link: "/services/staffing-services/contract-staffing",
  },
  {
    number: "03",
    title: "Direct Hire",
    description: "Connect with qualified technology professionals for permanent positions and build high-performing teams.",
    color: "#ffffff",
    textColor: "#071A2B",
    link: "/services/staffing-services/direct-hire",
  },
  {
    number: "04",
    title: "Contract-to-Hire",
    description: "Evaluate technology professionals through a flexible engagement model before making a permanent hiring decision.",
    color: "#ffffff",
    textColor: "#071A2B",
    link: "/services/staffing-services/contract-to-hire",
  },
  {
    number: "05",
    title: "Statement of Work",
    description: "Project-based technology engagements designed around defined requirements, deliverables, and business outcomes.",
    color: "#ffffff",
    textColor: "#071A2B",
    link: "/services/staffing-services/statement-of-work",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="relative w-full overflow-hidden bg-[#f8f9fa] py-24 px-4 md:px-10">
      {/* Header */}
      <div className="relative mb-12 flex flex-col items-center justify-center text-center z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a0f1c] uppercase">
          WHAT WE DO
        </h2>
        <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[#6B6B67]">
          Flexible IT staffing solutions designed to scale with your business, from permanent placements to project-based engagements.
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div 
        className="relative flex h-[500px] md:h-[600px] w-full items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div className="relative flex h-full w-full max-w-[300px] md:max-w-[400px] items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {services.map((service, index) => {
            // Calculate shortest path offset for infinite looping effect
            const offset = ((index - currentIndex + services.length + Math.floor(services.length / 2)) % services.length) - Math.floor(services.length / 2);
            
            const isCenter = offset === 0;
            const x = offset * 220; 
            const z = Math.abs(offset) * -150;
            const rotateY = offset * -35; // Curve inward
            const scale = 1 - Math.abs(offset) * 0.15;
            const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25;

            return (
              <motion.div
                key={index}
                className={`absolute flex h-[400px] w-[280px] md:h-[500px] md:w-[350px] flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 md:p-8 shadow-2xl transition-colors duration-300 ${isCenter ? 'border-[#598cff] cursor-default' : 'border-transparent cursor-pointer hover:border-black/10'}`}
                style={{
                  backgroundColor: service.color,
                  color: service.textColor,
                }}
                initial={false}
                animate={{
                  x,
                  z,
                  rotateY,
                  scale,
                  opacity,
                  zIndex: services.length - Math.abs(offset),
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  mass: 0.9,
                }}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(index);
                }}
              >
                {/* Card Content */}
                <div className="flex flex-col h-full relative z-10">
                  <div>
                    <div className="mb-2 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#598cff] to-[#f39f78] opacity-80">
                      {service.number}
                    </div>
                    <h3 className="mb-3 text-2xl md:text-3xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed opacity-70">
                      {service.description}
                    </p>
                  </div>
                  
                  <motion.div 
                    initial={false}
                    animate={{ 
                      opacity: isCenter ? 1 : 0,
                      y: isCenter ? 0 : 10,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`mt-auto ${isCenter ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  >
                    <Link 
                      href={service.link || "#"}
                      className="inline-flex items-center gap-2 rounded-full bg-[#0a0f1c] px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-lg" 
                    >
                      Learn More <span>↗</span>
                    </Link>
                  </motion.div>
                </div>

                {/* Dark overlay for side cards to give depth */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isCenter ? 0 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black/5 rounded-3xl pointer-events-none" 
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-20 mt-4 flex justify-center gap-4">
        <button 
          onClick={prevSlide} 
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 text-black shadow-md hover:scale-110 hover:bg-gray-50 transition-all"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={nextSlide} 
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 text-black shadow-md hover:scale-110 hover:bg-gray-50 transition-all"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}