"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are the main advantages of permanent staffing over temporary/contract roles?",
    answer: "Permanent staffing offers strategic advantages including institutional knowledge retention, long-term cost efficiency, team stability, and stronger company culture alignment.",
  },
  {
    question: "How long does your permanent staffing process typically take?",
    answer: "Our average timeline is 2-4 weeks from initial consultation to job acceptance. Speed varies based on role complexity, seniority level, and market availability, but we always prioritize quality over speed.",
  },
  {
    question: "Do you handle different technology stacks and experience levels?",
    answer: "Yes. We specialize across multiple tech domains including Cloud & Infrastructure, DevOps, AI/ML, Full-Stack Development, and Data Engineering, covering junior developers through Principal/Staff engineers.",
  },
  {
    question: "Why should I work with us instead of other recruitment agencies?",
    answer: "We bring unique advantages: a tech-native recruiting team, rigorous technical pre-screening, valuable market insights, curated networks of passive candidates, and an 85% placement success rate.",
  },
  {
    question: "How do you ensure cultural fit beyond technical skills?",
    answer: "We spend time understanding your values and team dynamics. We conduct behavioral assessments and reference checks to ensure candidates share your values around innovation, learning, and collaboration.",
  },
  {
    question: "What happens after placement? Do you provide ongoing support?",
    answer: "Yes, we provide a 90-day integration support period where we check in regularly to track success metrics, address any concerns, and ensure successful long-term retention.",
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
