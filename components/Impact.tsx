"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "95%",
    label: "Client Retention",
  },
  {
    value: "10+",
    label: "Countries Served",
  },
  {
    value: "500+",
    label: "Consultants Placed",
  },
  {
    value: "100+",
    label: "Training Programs",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      {/* Heading */}
      <div className="mb-20">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          Our Impact
        </p>

        <h2 className="max-w-5xl text-[12vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
          NUMBERS
          <br />
          THAT
          <br />
          MATTER
        </h2>
      </div>

      {/* Statistics */}
      <div className="grid border-t border-[#DEDCD2] md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="border-b border-[#DEDCD2] py-10 md:border-r md:px-8 lg:min-h-[320px] lg:px-10"
          >
            <div className="flex h-full flex-col justify-between">
              <span className="text-xs text-[#6B6B67]">
                0{index + 1}
              </span>

              <div>
                <div className="mb-4 text-[17vw] font-medium leading-none tracking-[-0.09em] md:text-[9vw] lg:text-[6vw]">
                  {stat.value}
                </div>

                <p className="text-sm uppercase tracking-[0.12em] text-[#6B6B67]">
                  {stat.label}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom statement */}
      <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          Global Reach
        </p>

        <p className="max-w-xl text-xl leading-relaxed tracking-[-0.02em] md:text-2xl">
          Helping businesses build high-performing technology teams
          through a global network of skilled professionals.
        </p>
      </div>
    </section>
  );
}