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
      { name: "Contract-to-Hire", href: "/services/staffing-services/contract-to-hire" },
      { name: "Direct Hire", href: "/services/staffing-services/direct-hire" },
      { name: "Statement of Work", href: "/services/staffing-services/statement-of-work" },
    ]
  },
  {
    title: "Technology",
    items: [
      { name: "AI & ML", href: "/services/technology/ai-ml" },
      { name: "Cloud", href: "/services/technology/cloud" },
      { name: "Cybersecurity", href: "/services/technology/cybersecurity" },
    ]
  },
  {
    title: "ERP Services",
    items: [
      { name: "SAP", href: "/services/erpservices/sap" },
      { name: "Infor", href: "/services/erpservices/infor" },
      { name: "Odoo", href: "/services/erpservices/odoo" },
      { name: "Oracle", href: "/services/erpservices/oracle" },
      { name: "Epicor", href: "/services/erpservices/epicor" },
      { name: "IFS", href: "/services/erpservices/ifs" },
    ]
  }
];

export default function Navbar() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          border-border
          bg-white/95
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
          className="flex items-center"
        >
          <div className="flex flex-col">
            <div className="flex items-start">
              <span className="text-[24px] font-bold tracking-tight text-navy lowercase leading-none">
                samaarav
              </span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-1.5 -mt-2.5 shrink-0"
              >
                <path
                  d="M12 4H20V12"
                  stroke="#18CB96"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 11H12V19"
                  stroke="#18CB96"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[9px] font-medium tracking-wide text-muted mt-[1px]">
              IT Services & Staffing Solutions
            </span>
          </div>
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
              className="text-sm text-muted transition-colors hover:text-navy flex items-center gap-1"
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
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-[600px] bg-white rounded-3xl border border-border shadow-2xl p-8 grid grid-cols-3 gap-8"
                >
                  {servicesMenu.map((category) => (
                    <div key={category.title}>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                        {category.title}
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="text-sm font-medium text-muted hover:text-primary transition-colors">
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
            className="text-sm text-muted transition-colors hover:text-navy"
          >
            Clients
          </Link>

          <Link
            href="/about"
            className="text-sm text-muted transition-colors hover:text-navy"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm text-muted transition-colors hover:text-navy"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle & CTA */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/contact"
            className="
              rounded-full
              bg-gradient-to-br from-primary to-secondary
              px-4
              py-2
              text-[11px] md:text-xs md:px-5 md:py-2.5
              font-medium
              text-white
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            Get Started ↗
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-full bg-foreground/5 hover:bg-primary-dark/10 transition-colors"
          >
            <div className={`w-4 h-[1.5px] bg-primary transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : '-translate-y-1'}`} />
            <div className={`w-4 h-[1.5px] bg-primary transition-opacity duration-300 my-[2px] ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`w-4 h-[1.5px] bg-primary transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : 'translate-y-1'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+10px)] left-0 w-full bg-white/95 backdrop-blur-xl rounded-3xl border border-border shadow-2xl p-6 md:hidden flex flex-col gap-6 max-h-[75vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              <Link href="#clients" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-semibold text-foreground">Clients</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-semibold text-foreground">About</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-semibold text-foreground">Contact</Link>
              
              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">Services</h4>
                <div className="flex flex-col gap-6 pl-2 border-l-2 border-border">
                  {servicesMenu.map((category) => (
                    <div key={category.title}>
                      <div className="text-xs font-bold text-muted uppercase mb-3 tracking-wider">{category.title}</div>
                      <div className="flex flex-col gap-3 pl-3">
                        {category.items.map((item) => (
                          <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-muted hover:text-foreground">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}