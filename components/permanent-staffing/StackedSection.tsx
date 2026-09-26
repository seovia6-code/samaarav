"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackedSectionProps {
  children: React.ReactNode;
  index: number;
  bgWhite?: boolean;
}

export default function StackedSection({ children, index, bgWhite = false }: StackedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div ref={containerRef} className="sticky top-0 flex min-h-screen w-full items-center justify-center">
      <motion.div
        style={{ scale, opacity, zIndex: index * 10 }}
        className={`w-full min-h-screen overflow-y-auto ${bgWhite ? 'bg-white' : 'bg-[#faf9f6]'} rounded-t-[40px] shadow-[0_-15px_30px_rgba(0,0,0,0.05)] border-t border-black/5 flex flex-col`}
      >
        {children}
      </motion.div>
    </div>
  );
}
