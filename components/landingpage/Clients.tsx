"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/app/data/clients";

export default function Clients() {
  const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
  const secondRow = clients.slice(Math.ceil(clients.length / 2));

  return (
    <section
      id="clients"
      className="relative overflow-hidden border-y border-black/10 py-24"
    >
      {/* Heading */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="px-6 md:px-10 lg:px-14"
      >
        <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="mb-4 text-xs uppercase tracking-[0.25em] text-black/40"
            >
              Trusted Enterprises
            </motion.p>

            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="max-w-4xl text-[11vw] font-medium leading-[0.85] tracking-[-0.07em] md:text-[7vw] lg:text-[6vw]"
            >
              TRUSTED
              <br />
              BY INDUSTRY.
            </motion.h2>
          </div>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="max-w-sm text-sm leading-relaxed text-black/50 md:text-base"
          >
            We connect exceptional technology talent with organizations building
            what comes next.
          </motion.p>
        </div>
      </motion.div>

      {/* First row */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-7 overflow-hidden"
      >
        <motion.div
          className="flex w-max items-center gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...firstRow, ...firstRow].map((client, index) => (
            <LogoCard key={`row-one-${client.name}-${index}`} client={client} />
          ))}
        </motion.div>
      </motion.div>

      {/* Second row */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden"
      >
        <motion.div
          className="flex w-max items-center gap-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...secondRow, ...secondRow].map((client, index) => (
            <LogoCard key={`row-two-${client.name}-${index}`} client={client} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function LogoCard({
  client,
}: {
  client: {
    name: string;
    logo: string;
  };
}) {
  return (
    <div className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-white/35 px-7 transition-transform duration-300 hover:scale-[1.03] md:h-28 md:w-56">
      <Image
        src={client.logo}
        alt={`${client.name} logo`}
        width={180}
        height={80}
        className="h-auto max-h-16 w-auto max-w-[170px] object-contain"
        unoptimized
      />
    </div>
  );
}
