"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does the permanent staffing process typically take?",
    answer: "Our standard time-to-hire is between 2 to 4 weeks. However, this can vary based on the specific niche, role complexity, and the availability of candidates.",
  },
  {
    question: "Do you offer a replacement guarantee?",
    answer: "Yes, we stand behind our placements. We offer a standard replacement guarantee if the candidate leaves or is found unsuitable within the first 90 days of employment.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We primarily specialize in Information Technology, focusing heavily on Enterprise Software (SAP, Infor, Odoo), Cloud Infrastructure, AI/ML, and Cybersecurity.",
  },
  {
    question: "How do you source passive candidates?",
    answer: "We leverage proprietary databases, industry networking events, specialized forums, and deep relationships built by our senior recruiters over the past decade to access talent not actively on the job market.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mb-20">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          Got Questions?
        </p>
        <h2 className="max-w-4xl text-[11vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[6vw]">
          FREQUENTLY
          <br />
          ASKED.
        </h2>
      </div>

      <div className="mx-auto max-w-4xl border-t border-[#171717]/20">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-[#171717]/20">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-black/60 md:py-8"
              >
                <span className="text-xl font-medium tracking-tight md:text-2xl">
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-base leading-relaxed text-[#6B6B67] md:text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
