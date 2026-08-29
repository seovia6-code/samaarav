"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    number: "01",
    title: "Specialized SAP Recruiters",
    description:
      "Deep expertise in identifying and connecting businesses with specialized technology and SAP professionals.",
  },
  {
    number: "02",
    title: "Extensive Talent Network",
    description:
      "Access to a broad network of skilled technology professionals across multiple domains and industries.",
  },
  {
    number: "03",
    title: "Fast Turnaround",
    description:
      "Quick access to qualified candidates helps organizations reduce hiring timelines and keep projects moving.",
  },
  {
    number: "04",
    title: "Global Reach",
    description:
      "Connect with technology talent across countries and build teams without geographic limitations.",
  },
  {
    number: "05",
    title: "Flexible Engagement Models",
    description:
      "Choose from permanent staffing, contract staffing, direct hire, contract-to-hire, and project-based engagements.",
  },
  {
    number: "06",
    title: "Dedicated Account Management",
    description:
      "Dedicated support throughout the hiring process helps create a smoother and more responsive experience.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      {/* Header */}
      <div className="mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
            Why Kapil Tech
          </p>

          <h2 className="max-w-4xl text-[12vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
            WHY
            <br />
            US?
          </h2>
        </div>

        <p className="max-w-md text-base leading-relaxed text-[#6B6B67] md:text-lg">
          We combine technology expertise, a global talent network, and
          flexible engagement models to help businesses build stronger
          technology teams.
        </p>
      </div>

      {/* Advantages */}
      <div className="border-t border-[#DEDCD2]">
        {advantages.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            className="group grid border-b border-[#DEDCD2] py-8 md:grid-cols-[80px_1fr_1fr] md:items-center md:gap-10 md:py-10"
          >
            {/* Number */}
            <span className="mb-4 text-xs text-[#6B6B67] md:mb-0">
              {item.number}
            </span>

            {/* Title */}
            <h3 className="mb-4 text-2xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 md:mb-0 md:text-3xl">
              {item.title}
            </h3>

            {/* Description */}
            <p className="max-w-lg text-sm leading-relaxed text-[#6B6B67] md:text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom statement */}
      <div className="mt-20 grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
            Built Around Your Needs
          </p>
        </div>

        <p className="max-w-xl text-2xl leading-tight tracking-[-0.04em] md:text-4xl">
          From finding specialized talent to scaling complete technology
          teams, we make hiring simpler, faster, and more flexible.
        </p>
      </div>
    </section>
  );
}