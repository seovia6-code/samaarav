"use client";

export default function Footer() {
  return (
    <footer className="bg-navy px-6 pt-20 md:px-10 md:pt-28 lg:px-14">
      {/* Top section */}
      <div className="grid gap-16 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-5">
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl text-white">
            SAMAARAV
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
            Connecting exceptional technology talent with businesses that are
            building what's next.
          </p>
        </div>

        {/* Registered Office */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white">
            Registered Office
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-300 mb-8 lg:mb-0">
            <p>Branch 1: 124 City Road, London, EC1V 2NX</p>
            <p>Branch 2: 44 Widnell Lane, Edinburgh, Scotland, UK</p>
            <p className="mt-2 text-slate-300">
              <a href="tel:+447550051466" className="transition-colors hover:text-accent">+44 7550051466</a>
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white">
            Company
          </p>

          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <a
              href="#services"
              className="w-fit transition-colors hover:text-accent"
            >
              Services
            </a>

            <a
              href="#clients"
              className="w-fit transition-colors hover:text-accent"
            >
              Clients
            </a>

            <a
              href="#about"
              className="w-fit transition-colors hover:text-accent"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="w-fit transition-colors hover:text-accent"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Connect */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white">
            Connect
          </p>

          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <a
              href="#"
              className="w-fit transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:info@samaarav.co.uk"
              className="w-fit transition-colors hover:text-accent"
            >
              Email ↗
            </a>

            <a
              href="#contact"
              className="w-fit transition-colors hover:text-accent"
            >
              Get in Touch ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bottom info section */}
      <div className="flex flex-col gap-4 pt-12 pb-4 text-xs text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Samaarav. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-accent">
            Privacy
          </a>

          <a href="#" className="transition-colors hover:text-accent">
            Terms
          </a>
        </div>

        <p>Technology • Talent • Growth</p>
      </div>

      {/* Big footer text */}
      <div className="overflow-hidden pt-4 md:pt-8 flex justify-center items-end leading-none opacity-50">
        <h2 className="whitespace-nowrap text-[18vw] font-medium leading-[0.75] tracking-[-0.09em] text-white translate-y-[10%]">
          SAMAARAV
        </h2>
      </div>
    </footer>
  );
}