"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-14">
      {/* Logo */}
      <div className="text-xl font-semibold tracking-tight">
        KAPIL<span className="font-light">TECH</span>
      </div>

      {/* Navigation */}
      <div className="hidden items-center gap-10 text-sm md:flex">
        <a href="#services" className="transition-opacity hover:opacity-50">
          Services
        </a>

        <a href="#expertise" className="transition-opacity hover:opacity-50">
          Expertise
        </a>

        <a href="#about" className="transition-opacity hover:opacity-50">
          About
        </a>

        <a
          href="#contact"
          className="rounded-full border border-black px-5 py-2.5 transition-all hover:bg-black hover:text-white"
        >
          Contact ↗
        </a>
      </div>

      {/* Mobile menu */}
      <button className="text-sm md:hidden">
        Menu
      </button>
    </nav>
  );
}