"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceFAQ({ faqs }: { faqs: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mb-20">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          Got Questions?
        </p>
        <h2 className="max-w-4xl text-[11vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
          FREQUENTLY ASKED
          <br />
          QUESTIONS
        </h2>
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-col border-t border-black/10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-black/60 md:py-10"
              >
                <span className="text-xl font-medium tracking-tight md:text-3xl">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 text-2xl font-light transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 pr-12 text-base leading-relaxed text-black/60 md:text-xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
