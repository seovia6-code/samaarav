"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const expertise = [
  {
    name: "AI",
    title: "AI & Data Engineering",
    description: "Transform raw data into actionable intelligence with AI solutions, machine learning models, predictive analytics, computer vision, generative AI, recommendation engines, and real-time analytics.",
    roles: ["AI/ML Engineers", "Data Engineers", "QA Engineers"],
    color: "#ffffff",
    textColor: "#171717",
  },
  {
    name: "SAP",
    title: "SAP Technology",
    description: "Access experienced SAP professionals and consultants to support enterprise technology initiatives and business transformation.",
    roles: ["SAP Consultants", "SAP Specialists", "SAP Professionals"],
    color: "#f5f5f5",
    textColor: "#171717",
  },
  {
    name: "INFOR",
    title: "Infor Technology",
    description: "Connect with professionals experienced in enterprise resource planning and Infor technology environments.",
    roles: ["Infor Consultants", "ERP Specialists", "Technology Professionals"],
    color: "#eaeaea",
    textColor: "#171717",
  },
  {
    name: "ODOO",
    title: "Odoo Technology",
    description: "Build and scale technology teams with professionals experienced in Odoo and enterprise business applications.",
    roles: ["Odoo Developers", "Odoo Consultants", "ERP Professionals"],
    color: "#dedede",
    textColor: "#171717",
  },
  {
    name: "WEB",
    title: "Web Technology",
    description: "Find skilled professionals who can support modern web development and digital technology initiatives.",
    roles: ["Web Developers", "Full Stack Developers", "Software Engineers"],
    color: "#d4d4d4",
    textColor: "#171717",
  },
  {
    name: "QA",
    title: "Quality Assurance",
    description: "Build quality-focused teams with professionals experienced in automated testing, regression testing, performance testing, and quality assurance.",
    roles: ["QA Engineers", "Automation Engineers", "Test Engineers"],
    color: "#cbcbcb",
    textColor: "#171717",
  },
  {
    name: "CLOUD",
    title: "Cloud Technology",
    description: "Access cloud technology professionals to support scalable, modern, and globally distributed technology environments.",
    roles: ["Cloud Engineers", "Cloud Architects", "DevOps Professionals"],
    color: "#171717",
    textColor: "#ffffff",
  },
];

function Card({ item, index, progress, targetScale }: { item: any, index: number, progress: any, targetScale: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scale = useTransform(progress, [index * (1/expertise.length), 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="sticky top-0 flex h-screen items-center justify-center pt-24 md:pt-32">
      <motion.div 
        style={{ backgroundColor: item.color, color: item.textColor, scale, top: `calc(-5vh + ${index * 15}px)` }} 
        className="relative flex h-[500px] w-full max-w-5xl flex-col justify-between overflow-hidden rounded-3xl border border-black/10 p-10 shadow-lg md:h-[600px] md:p-16"
      >
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex items-end justify-between">
            <div className="text-[5rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[7rem]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="text-2xl font-medium tracking-tight opacity-40 md:text-4xl">
              {item.name}
            </div>
          </div>
          
          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h3 className="mb-4 text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed opacity-70 md:text-lg">
                {item.description}
              </p>
            </div>
            
            <div className="min-w-[200px]">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] opacity-50">
                Key Roles We Fill
              </p>
              <div className="space-y-2">
                {item.roles.map((role: string) => (
                  <div key={role} className="border-b border-current pb-2 text-sm md:text-base opacity-90">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="expertise" className="relative px-6 pb-24 md:px-10 lg:px-14">
      {/* Header */}
      <div className="sticky top-10 mb-20 pt-24">
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

      <div className="relative w-full">
        {expertise.map((item, index) => {
          const targetScale = 1 - ((expertise.length - index) * 0.03);
          return (
            <Card 
              key={item.name} 
              index={index} 
              item={item} 
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}