"use client";

import { motion } from "framer-motion";

const technologies = [
  "AI & ML",
  "SAP",
  "CLOUD",
  "DATA",
  "ERP",
  "ODOO",
  "INFOR",
];

export default function TechMarquee() {
  return (
    <div className="overflow-hidden border-y border-[#DEDCD2] py-4">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...technologies, ...technologies].map((technology, index) => (
          <div
            key={index}
            className="flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-[#6B6B67]"
          >
            <span>{technology}</span>
            <span>•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}