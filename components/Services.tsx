"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Permanent Staffing",
    description:
      "Tailored workforce solutions designed to scale with your business through permanent technology placements.",
  },
  {
    number: "02",
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions that help businesses quickly access skilled technology professionals for changing project and workforce needs.",
  },
  {
    number: "03",
    title: "Direct Hire",
    description:
      "Connect with qualified technology professionals for permanent positions and build high-performing teams.",
  },
  {
    number: "04",
    title: "Contract-to-Hire",
    description:
      "Evaluate technology professionals through a flexible engagement model before making a permanent hiring decision.",
  },
  {
    number: "05",
    title: "Statement of Work",
    description:
      "Project-based technology engagements designed around defined requirements, deliverables, and business outcomes.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      {/* Section Header */}
      <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-4xl text-[12vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
          WHAT
          <br />
          WE DO
        </h2>

        <p className="max-w-sm text-base leading-relaxed text-[#6B6B67] md:text-lg">
          Flexible IT staffing solutions designed to scale with your
          business, from permanent placements to project-based
          engagements.
        </p>
      </div>

      {/* Services List */}
      <div className="grid border-t border-[#DEDCD2] lg:grid-cols-2">
        {/* Left — Service List */}
        <div>
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <button
                key={service.number}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                className="group flex w-full items-center justify-between border-b border-[#DEDCD2] py-7 text-left md:py-9"
              >
                <div className="flex items-center gap-6">
                  {/* Number */}
                  <span className="w-6 text-xs text-[#6B6B67]">
                    {service.number}
                  </span>

                  {/* Title */}
                  <span
                    className={`text-2xl tracking-[-0.03em] transition-all duration-300 md:text-3xl ${
                      isActive
                        ? "translate-x-3 text-[#171717]"
                        : "text-[#6B6B67]"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>

                {/* Arrow */}
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

        {/* Right — Active Service */}
        <div className="hidden min-h-[500px] border-l border-[#DEDCD2] lg:flex lg:items-center lg:p-16">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="max-w-lg"
          >
            {/* Large Number */}
            <div className="mb-10 text-[9rem] font-medium leading-none tracking-[-0.09em] text-[#171717]/10">
              {services[activeService].number}
            </div>

            {/* Title */}
            <h3 className="mb-6 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              {services[activeService].title}
            </h3>

            {/* Description */}
            <p className="max-w-md text-base leading-relaxed text-[#6B6B67] md:text-lg">
              {services[activeService].description}
            </p>

            {/* Learn More */}
            <button className="mt-10 border-b border-[#171717] pb-1 text-sm">
              Learn More ↗
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}