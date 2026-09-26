"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceTechExpertise({ expertise }: { expertise: any[] }) {
  if (!expertise || expertise.length === 0) return null;
  const [activeTab, setActiveTab] = useState(expertise[0].id);
  const activeContent = expertise.find((item) => item.id === activeTab) || expertise[0];

  return (
    <section className="relative px-6 py-12 md:px-10 lg:px-14 min-h-screen flex flex-col justify-center w-full bg-[#faf9f6] text-[#171717] rounded-t-[40px]">
      <div className="mb-10 text-center md:text-left pt-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.05em] mb-4">
          Technical Expertise
        </h2>
        <p className="text-black/60 text-lg md:text-xl max-w-2xl">
          We specialize across the full spectrum of modern tech roles and emerging technologies.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto flex-grow">
        {/* Left Side: Vertical Tabs */}
        <div className="w-full lg:w-1/3 flex flex-col gap-2">
          {expertise.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-6 py-5 rounded-2xl flex items-center justify-between transition-all duration-300 border ${
                  isActive 
                    ? "bg-white border-black/10 shadow-sm" 
                    : "bg-transparent border-transparent hover:bg-black/[0.03]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-black/5 text-black' : 'bg-transparent text-black/50'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <span className={`text-lg font-medium ${isActive ? 'text-black' : 'text-black/60'}`}>
                    {item.title}
                  </span>
                </div>
                {isActive && (
                  <motion.div layoutId="active-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side: Animated Content Box */}
        <div className="w-full lg:w-2/3">
          <div className="bg-[#171717] border border-white/10 rounded-3xl p-8 md:p-12 min-h-[500px] h-full flex flex-col shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col h-full"
              >
                {/* Badge */}
                <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium w-fit mb-8">
                  {activeContent.title}
                </div>

                <h3 className="text-4xl md:text-5xl font-medium tracking-[-0.05em] text-white mb-6">
                  {activeContent.title}
                </h3>
                
                <p className="text-lg leading-relaxed text-white/70 mb-12 max-w-3xl">
                  {activeContent.description}
                </p>

                <div className="mt-auto">
                  <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-4">
                    Key Technologies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {activeContent.technologies?.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
