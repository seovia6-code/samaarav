"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const expertise = [
  {
    name: "AI",
    title: "AI & Data Engineering",
    description: "Transform raw data into actionable intelligence with AI solutions, machine learning models, predictive analytics, computer vision, generative AI, recommendation engines, and real-time analytics.",
    roles: ["AI/ML Engineers", "Data Engineers", "QA Engineers"],
    color: "#ffffff",
    textColor: "#0f172a",
  },
  {
    name: "SAP",
    title: "SAP Technology",
    description: "Access experienced SAP professionals and consultants to support enterprise technology initiatives and business transformation.",
    roles: ["SAP Consultants", "SAP Specialists", "SAP Professionals"],
    color: "#ffffff",
    textColor: "#0f172a",
  },
  {
    name: "INFOR",
    title: "Infor Technology",
    description: "Connect with professionals experienced in enterprise resource planning and Infor technology environments.",
    roles: ["Infor Consultants", "ERP Specialists", "Technology Professionals"],
    color: "#ffffff",
    textColor: "#0f172a",
  },
  {
    name: "ODOO",
    title: "Odoo Technology",
    description: "Build and scale technology teams with professionals experienced in Odoo and enterprise business applications.",
    roles: ["Odoo Developers", "Odoo Consultants", "ERP Professionals"],
    color: "#ffffff",
    textColor: "#0f172a",
  },
  {
    name: "WEB",
    title: "Web Technology",
    description: "Find skilled professionals who can support modern web development and digital technology initiatives.",
    roles: ["Web Developers", "Full Stack Developers", "Software Engineers"],
    color: "#ffffff",
    textColor: "#0f172a",
  },
  {
    name: "QA",
    title: "Quality Assurance",
    description: "Build quality-focused teams with professionals experienced in automated testing, regression testing, performance testing, and quality assurance.",
    roles: ["QA Engineers", "Automation Engineers", "Test Engineers"],
    color: "#ffffff",
    textColor: "#0f172a",
  },
  {
    name: "CLOUD",
    title: "Cloud Technology",
    description: "Access cloud technology professionals to support scalable, modern, and globally distributed technology environments.",
    roles: ["Cloud Engineers", "Cloud Architects", "DevOps Professionals"],
    color: "#ffffff",
    textColor: "#0f172a",
  },
];

export default function Expertise() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % expertise.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + expertise.length) % expertise.length);
  };

  return (
    <section id="expertise" className="relative w-full overflow-hidden bg-[#071A2B] py-24 px-4 md:px-10 min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="relative mb-16 flex flex-col items-center justify-center text-center z-10">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
          Technology Expertise
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-sm">
          SPECIALIZED TALENT
        </h2>
      </div>

      {/* 3D Carousel Container */}
      <div 
        className="relative flex h-[500px] md:h-[600px] w-full items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div className="relative flex h-full w-full max-w-[300px] md:max-w-[400px] items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {expertise.map((item, index) => {
            // Calculate shortest path offset for infinite looping effect
            const offset = ((index - currentIndex + expertise.length + Math.floor(expertise.length / 2)) % expertise.length) - Math.floor(expertise.length / 2);
            
            const isCenter = offset === 0;
            
            // Exact math for the "half-circle fan" arc seen in the screenshot:
            // 1. Shift them down (y) based on distance from center (parabola)
            // 2. Tilt them (rotateZ) to fan outwards
            // 3. Keep them overlapping (x) and add subtle 3D depth (z, rotateY)
            const x = offset * 160; 
            const y = (Math.abs(offset) * Math.abs(offset)) * 30; // 0, 30, 120 (pushes side cards down)
            const z = Math.abs(offset) * -100; 
            const rotateY = offset * -15; 
            const rotateZ = offset * 8; // Tilts cards left/right
            const scale = 1 - Math.abs(offset) * 0.05;
            const opacity = Math.abs(offset) > 3 ? 0 : 1; // Keep them fully opaque to look solid like the screenshot

            return (
              <motion.div
                key={index}
                className={`absolute flex h-[450px] w-[280px] md:h-[550px] md:w-[350px] flex-col justify-between overflow-hidden rounded-2xl border bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-colors duration-300 ${isCenter ? 'border-[#3b82f6] cursor-default' : 'border-gray-200 cursor-pointer hover:border-[#3b82f6]/50'}`}
                style={{
                  color: item.textColor,
                  transformOrigin: "bottom center"
                }}
                initial={false}
                animate={{
                  x,
                  y,
                  z,
                  rotateY,
                  rotateZ,
                  scale,
                  opacity,
                  zIndex: expertise.length - Math.abs(offset),
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
                {/* Top Section */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="text-[#3b82f6] font-black text-xl md:text-2xl tracking-wider">
                    {item.name}
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-gray-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                
                {/* Middle Content */}
                <div className="flex-1">
                  <h3 className="mb-3 text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 line-clamp-5">
                    {item.description}
                  </p>
                </div>
                
                {/* Bottom Section (Roles) */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Key Roles
                  </p>
                  <div className="space-y-2">
                    {item.roles.map((role) => (
                      <div key={role} className="text-xs font-semibold text-gray-700 bg-gray-50 px-2 py-1.5 rounded-md text-center">
                        {role}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dark overlay for side cards to simulate shadow/depth in the arc */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isCenter ? 0 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black/[0.08] pointer-events-none rounded-2xl" 
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-20 mt-8 flex justify-center gap-6">
        <button 
          onClick={prevSlide} 
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#3b82f6] shadow-xl hover:scale-110 hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={nextSlide} 
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#3b82f6] shadow-xl hover:scale-110 hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}