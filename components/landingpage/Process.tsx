"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Requirements",
    description:
      "Tell us about your technology hiring requirements, skills, experience, and team needs.",
  },
  {
    number: "02",
    title: "Receive Pre-Vetted Profiles",
    description:
      "Our team identifies and presents qualified technology professionals aligned with your requirements.",
  },
  {
    number: "03",
    title: "Interview Candidates",
    description:
      "Review profiles, connect with candidates, and identify the professionals who best fit your organization.",
  },
  {
    number: "04",
    title: "Onboard Talent",
    description:
      "Once you select your candidate, we help move the process forward so your new talent can get started.",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];

  return (
    <section
      id="process"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      {/* Header */}
      <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
            Our Process
          </p>

          <h2 className="max-w-4xl text-[12vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
            FROM NEED
            <br />
            TO TALENT
          </h2>
        </div>

        <p className="max-w-md text-base leading-relaxed text-[#6B6B67] md:text-lg">
          A simple four-step process designed to help businesses find
          qualified technology professionals efficiently.
        </p>
      </div>

      {/* Process */}
      <div className="grid border-t border-[#DEDCD2] lg:grid-cols-[0.9fr_1.1fr]">
        {/* Steps */}
        <div className="border-b border-[#DEDCD2] lg:border-b-0 lg:border-r">
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <button
                key={step.number}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className="group flex w-full items-center justify-between border-b border-[#DEDCD2] py-7 text-left md:py-9"
              >
                <div className="flex items-center gap-6">
                  <span className="w-7 text-xs text-[#6B6B67]">
                    {step.number}
                  </span>

                  <span
                    className={`text-2xl font-medium tracking-[-0.04em] transition-all duration-300 md:text-3xl ${
                      isActive
                        ? "translate-x-3 text-[#171717]"
                        : "text-[#6B6B67]"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                <span
                  className={`text-xl transition-transform duration-300 ${
                    isActive ? "rotate-0" : "-rotate-45"
                  }`}
                >
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        {/* Active step */}
        <div className="min-h-[500px] p-8 md:p-12 lg:flex lg:items-center lg:p-20">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="mb-8 text-[8rem] font-medium leading-none tracking-[-0.09em] text-[#171717]/10 md:text-[10rem]">
              {currentStep.number}
            </div>

            <h3 className="mb-6 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              {currentStep.title}
            </h3>

            <p className="text-base leading-relaxed text-[#6B6B67] md:text-lg">
              {currentStep.description}
            </p>

            <div className="mt-10 h-px w-24 bg-[#171717]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}