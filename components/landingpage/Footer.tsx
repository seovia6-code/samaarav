"use client";

export default function Footer() {
  return (
    <footer className="bg-[#FFFDF3] px-6 pb-8 pt-20 md:px-10 md:pt-28 lg:px-14">
      {/* Top section */}
      <div className="grid gap-16 border-b border-[#171717]/15 pb-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            SAMAARAV
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#171717]/60 md:text-base">
            Connecting exceptional technology talent with businesses that are
            building what's next.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171717]/40">
            Company
          </p>

          <div className="flex flex-col gap-4 text-sm">
            <a
              href="#services"
              className="w-fit transition-opacity hover:opacity-50"
            >
              Services
            </a>

            <a
              href="#clients"
              className="w-fit transition-opacity hover:opacity-50"
            >
              Clients
            </a>

            <a
              href="#about"
              className="w-fit transition-opacity hover:opacity-50"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="w-fit transition-opacity hover:opacity-50"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Connect */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171717]/40">
            Connect
          </p>

          <div className="flex flex-col gap-4 text-sm">
            <a
              href="#"
              className="w-fit transition-opacity hover:opacity-50"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:info@samaarav.com"
              className="w-fit transition-opacity hover:opacity-50"
            >
              Email ↗
            </a>

            <a
              href="#contact"
              className="w-fit transition-opacity hover:opacity-50"
            >
              Get in Touch ↗
            </a>
          </div>
        </div>
      </div>

      {/* Big footer text */}
      <div className="overflow-hidden py-12 md:py-20">
        <h2 className="whitespace-nowrap text-[18vw] font-medium leading-none tracking-[-0.09em] text-[#171717]">
          SAMAARAV
        </h2>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-4 border-t border-[#171717]/15 pt-6 text-xs text-[#171717]/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Samaarav. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="transition-opacity hover:opacity-100">
            Privacy
          </a>

          <a href="#" className="transition-opacity hover:opacity-100">
            Terms
          </a>
        </div>

        <p>Technology • Talent • Growth</p>
      </div>
    </footer>
  );
}