"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const expertise = [
  {
    name: "AI",
    title: "AI & Data Engineering",
    description:
      "Transform raw data into actionable intelligence with AI solutions, machine learning models, predictive analytics, computer vision, generative AI, recommendation engines, and real-time analytics.",
    roles: [
      "AI/ML Engineers",
      "Data Engineers",
      "QA Engineers",
    ],
  },
  {
    name: "SAP",
    title: "SAP Technology",
    description:
      "Access experienced SAP professionals and consultants to support enterprise technology initiatives and business transformation.",
    roles: [
      "SAP Consultants",
      "SAP Specialists",
      "SAP Professionals",
    ],
  },
  {
    name: "INFOR",
    title: "Infor Technology",
    description:
      "Connect with professionals experienced in enterprise resource planning and Infor technology environments.",
    roles: [
      "Infor Consultants",
      "ERP Specialists",
      "Technology Professionals",
    ],
  },
  {
    name: "ODOO",
    title: "Odoo Technology",
    description:
      "Build and scale technology teams with professionals experienced in Odoo and enterprise business applications.",
    roles: [
      "Odoo Developers",
      "Odoo Consultants",
      "ERP Professionals",
    ],
  },
  {
    name: "WEB",
    title: "Web Technology",
    description:
      "Find skilled professionals who can support modern web development and digital technology initiatives.",
    roles: [
      "Web Developers",
      "Full Stack Developers",
      "Software Engineers",
    ],
  },
  {
    name: "QA",
    title: "Quality Assurance",
    description:
      "Build quality-focused teams with professionals experienced in automated testing, regression testing, performance testing, and quality assurance.",
    roles: [
      "QA Engineers",
      "Automation Engineers",
      "Test Engineers",
    ],
  },
  {
    name: "CLOUD",
    title: "Cloud Technology",
    description:
      "Access cloud technology professionals to support scalable, modern, and globally distributed technology environments.",
    roles: [
      "Cloud Engineers",
      "Cloud Architects",
      "DevOps Professionals",
    ],
  },
];

export default function Expertise() {
  const [active, setActive] = useState(0);

  const current = expertise[active];

  return (
    <section
      id="expertise"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      {/* Header */}
      <div className="mb-20">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          Technology Expertise
        </p>

        <h2 className="max-w-5xl text-[11vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
          SPECIALIZED
          <br />
          TALENT
          <br />
          ACROSS DOMAINS
        </h2>
      </div>

      {/* Technology navigation */}
      <div className="grid border-t border-[#DEDCD2] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-[#DEDCD2] lg:border-b-0 lg:border-r">
          {expertise.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.name}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className="flex w-full items-center justify-between border-b border-[#DEDCD2] py-6 text-left md:py-8"
              >
                <span
                  className={`text-3xl font-medium tracking-[-0.04em] transition-all duration-300 md:text-5xl ${
                    isActive
                      ? "translate-x-3 text-[#171717]"
                      : "text-[#6B6B67]"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`text-lg transition-transform duration-300 ${
                    isActive ? "rotate-0" : "-rotate-45"
                  }`}
                >
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="min-h-[500px] p-8 md:p-12 lg:p-20">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-10 text-[7rem] font-medium leading-none tracking-[-0.08em] text-[#171717]/10 md:text-[10rem]">
              {String(active + 1).padStart(2, "0")}
            </div>

            <h3 className="mb-6 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              {current.title}
            </h3>

            <p className="mb-12 max-w-xl text-base leading-relaxed text-[#6B6B67] md:text-lg">
              {current.description}
            </p>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#6B6B67]">
                Key Roles We Fill
              </p>

              <div className="space-y-3">
                {current.roles.map((role) => (
                  <div
                    key={role}
                    className="border-b border-[#DEDCD2] pb-3 text-lg"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}