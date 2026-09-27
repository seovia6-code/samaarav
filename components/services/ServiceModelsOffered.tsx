"use client";

import { motion } from "framer-motion";

export default function ServiceModelsOffered({ models }: { models: any[] }) {
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
            Contract Staffing Models We Offer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black/60 text-lg md:text-xl max-w-2xl"
          >
            Flexible engagement models designed to meet your specific project requirements and business goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-xl font-medium text-black">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-medium tracking-[-0.03em]">{model.title}</h3>
              </div>
              <p className="text-black/60 text-lg leading-relaxed">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
