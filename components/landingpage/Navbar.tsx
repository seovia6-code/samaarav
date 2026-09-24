"use client";

export default function Navbar() {
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
        "
      >
        {/* Logo */}
        <a
          href="/"
          className="text-lg font-semibold tracking-[-0.04em]"
        >
          SAMAARAV
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm text-black/60 transition-colors hover:text-black"
          >
            Services
          </a>

          <a
            href="#clients"
            className="text-sm text-black/60 transition-colors hover:text-black"
          >
            Clients
          </a>

          <a
            href="#about"
            className="text-sm text-black/60 transition-colors hover:text-black"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-black/60 transition-colors hover:text-black"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
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
        </a>
      </nav>
    </header>
  );
}