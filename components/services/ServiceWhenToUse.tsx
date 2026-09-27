"use client";

import { motion } from "framer-motion";

export default function ServiceWhenToUse({ whenToUse }: { whenToUse: any[] }) {
  return (
    <section className="relative px-6 py-20 md:px-10 lg:px-14 flex flex-col justify-center w-full bg-[#faf9f6] text-[#171717]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.05em] mb-4"
          >
            When to Use Contract Staffing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black/60 text-lg md:text-xl max-w-2xl"
          >
            Discover the ideal scenarios where our flexible workforce solutions can accelerate your business objectives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whenToUse.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-medium tracking-[-0.03em] mb-3">{item.title}</h3>
              <p className="text-black/60 text-base leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
