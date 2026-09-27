"use client";

import { motion } from "framer-motion";

export default function ServiceTextSections({ sections }: { sections: { title: string, content: string[] }[] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="w-full bg-[#faf9f6] text-[#171717] py-20 px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto space-y-24">
        {sections.map((sec, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
          >
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                {sec.title}
              </h2>
            </div>
            <div className="md:w-2/3 space-y-6 text-lg md:text-xl text-black/70 leading-relaxed">
              {sec.content.map((p: string, pIdx: number) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
