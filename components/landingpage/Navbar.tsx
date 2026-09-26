"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const servicesMenu = [
  {
    title: "Staffing Services",
    items: [
      { name: "Permanent Staffing", href: "/services/staffing-services/permanent-staffing" },
      { name: "Contract Staffing", href: "/services/staffing-services/contract-staffing" },
    ]
  },
  {
    title: "Technology",
    items: [
      { name: "AI & ML", href: "/services/technology/ai-ml" },
      { name: "Cloud", href: "/services/technology/cloud" },
    ]
  },
  {
    title: "ERP Services",
    items: [
      { name: "SAP", href: "/services/erpservices/sap" },
      { name: "Infor", href: "/services/erpservices/infor" },
      { name: "Odoo", href: "/services/erpservices/odoo" },
    ]
  }
];

export default function Navbar() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2">
      <nav
        className="
          flex
          h-16
          items-center
          justify-between
          rounded-full
          border
          border-black/10
          bg-[#FFFDF3]/95
          px-5
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
          md:px-7
          relative
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.04em]"
        >
          SAMAARAV
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Services with Megamenu */}
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <Link
              href="#"
              className="text-sm text-black/60 transition-colors hover:text-black flex items-center gap-1"
            >
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isServicesHovered ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>

            <AnimatePresence>
              {isServicesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-[600px] bg-white rounded-3xl border border-black/10 shadow-2xl p-8 grid grid-cols-3 gap-8"
                >
                  {servicesMenu.map((category) => (
                    <div key={category.title}>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-4">
                        {category.title}
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="text-sm font-medium text-black/70 hover:text-blue-600 transition-colors">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="#clients"
            className="text-sm text-black/60 transition-colors hover:text-black"
          >
            Clients
          </Link>

          <Link
            href="#about"
            className="text-sm text-black/60 transition-colors hover:text-black"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="text-sm text-black/60 transition-colors hover:text-black"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="
            rounded-full
            bg-black
            px-5
            py-2.5
            text-xs
            font-medium
            text-white
            transition-transform
            duration-300
            hover:scale-105
          "
        >
          Get Started ↗
        </Link>
      </nav>
    </header>
  );
}