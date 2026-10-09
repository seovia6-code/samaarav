"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const orbitalItems = [
  // Inner circle
  { text: "AI & ML", radius: 140, duration: 40, startAngle: 0, color: "text-[#0d9488]", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
  { text: "IT Consulting", radius: 140, duration: 40, startAngle: 90, color: "text-[#9333ea]", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { text: "App Dev", radius: 140, duration: 40, startAngle: 180, color: "text-[#e11d48]", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { text: "Cloud Solutions", radius: 140, duration: 40, startAngle: 270, color: "text-[#ea580c]", icon: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" },
  
  // Middle circle
  { text: "DevOps", radius: 200, duration: 50, startAngle: 45, color: "text-[#0d9488]", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
  { text: "Cybersecurity", radius: 200, duration: 50, startAngle: 135, color: "text-[#9333ea]", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { text: "Data Science", radius: 200, duration: 50, startAngle: 225, color: "text-[#e11d48]", icon: "M18 20V10M12 20V4M6 20v-4" },
  { text: "Staffing", radius: 200, duration: 50, startAngle: 315, color: "text-[#ea580c]", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16.5 7.5A3.5 3.5 0 1 1 13 4a3.5 3.5 0 0 1 3.5 3.5z" },

  // Outer circle
  { text: "UI/UX Design", radius: 260, duration: 60, startAngle: 0, color: "text-[#0d9488]", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
  { text: "Blockchain", radius: 260, duration: 60, startAngle: 90, color: "text-[#9333ea]", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
  { text: "Web Development", radius: 260, duration: 60, startAngle: 180, color: "text-[#e11d48]", icon: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" },
  { text: "QA Testing", radius: 260, duration: 60, startAngle: 270, color: "text-[#ea580c]", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
];

const orbitalRadii = [140, 200, 260];


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-[#1E293B] text-white pt-28 md:pt-32 pb-16 px-4"
    >
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: ["0%", "15%", "-15%", "0%"],
            y: ["0%", "15%", "-15%", "0%"],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#60a5fa] blur-[100px] md:blur-[120px] opacity-50"
        />
        <motion.div 
          animate={{ 
            x: ["0%", "-15%", "15%", "0%"],
            y: ["0%", "-15%", "15%", "0%"],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#fb923c] blur-[100px] md:blur-[120px] opacity-40"
        />
        <motion.div 
          animate={{ 
            x: ["0%", "15%", "-15%", "0%"],
            y: ["0%", "10%", "-20%", "0%"],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#fdba74] blur-[100px] md:blur-[120px] opacity-40"
        />
      </div>
      {/* Orbiting Circles Animation */}
      <div 
        className="relative z-10 w-[1000px] h-[600px] scale-[0.7] sm:scale-80 md:scale-100 pointer-events-none mb-4 md:mb-8 flex-shrink-0"
        style={{ WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 90%)", maskImage: "linear-gradient(to bottom, black 40%, transparent 90%)" }}
      >
        {/* Center Graphic */}
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 md:h-16 md:w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#0a0a1a] shadow-xl pointer-events-auto overflow-hidden border-[3px] border-white/60">
          <Image src="/hero-image-dark.jpg" alt="Staffing and Consultancy" fill className="object-cover" />
        </div>

        {/* Circular Tracks */}
        {orbitalRadii.map((r, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-white/20"
            style={{
              width: r * 2,
              height: r * 2,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Orbiting Items */}
        {orbitalItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute left-1/2 top-1/2"
            style={{
              width: item.radius * 2,
              height: item.radius * 2,
              x: "-50%",
              y: "-50%",
            }}
            animate={{ rotate: [item.startAngle, item.startAngle + 360] }}
            transition={{ repeat: Infinity, duration: item.duration, ease: "linear" }}
          >
            <motion.div
              className="absolute left-1/2 top-0"
              style={{ x: "-50%", y: "-50%" }}
              animate={{ rotate: [-item.startAngle, -(item.startAngle + 360)] }}
              transition={{ repeat: Infinity, duration: item.duration, ease: "linear" }}
            >
              <a href="#" className={`flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-2 py-1 md:px-3 md:py-1.5 text-[9px] md:text-xs font-bold shadow-[0_4px_12px_rgba(0,0,0,0.1)] pointer-events-auto transition-all hover:scale-110 scale-[1.2] sm:scale-100 ${item.color}`}>
                <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon}></path>
                </svg>
                {item.text}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[-100px] md:mt-[-150px] w-full px-2">
        <h1 className="w-full text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4 drop-shadow-sm whitespace-nowrap">
          Talent. Technology. Transformation.
        </h1>
        <p className="max-w-2xl text-white/90 text-sm md:text-base lg:text-lg mb-8 font-medium">
          Staffing & Consultancy Services, get AI-powered solutions, and connect with verified professionals.
        </p>
        
        {/* Actions imitating the search bar style */}
        <div className="flex items-center w-full max-w-3xl mx-auto bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/30 shadow-lg">
          <div className="flex-1 flex items-center px-4 border-r border-white/20">
             <span className="text-white/70 mr-3 text-lg font-light">↗</span>
             <a href="#contact" className="w-full text-left text-white/90 font-medium bg-transparent focus:outline-none">
                Find Talent
             </a>
          </div>
          <div className="flex-1 flex items-center px-4">
             <span className="text-white/70 mr-3 text-lg font-light">↗</span>
             <a href="#services" className="w-full text-left text-white/90 font-medium bg-transparent focus:outline-none">
                Our Services
             </a>
          </div>
          <a href="#contact" className="hidden sm:block ml-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-[#598cff] transition-transform duration-300 hover:scale-105 shadow-md">
            Connect
          </a>
        </div>
        <p className="mt-4 text-xs text-white/70 font-medium">
          Find top talent by skill, or explore our consulting services.
        </p>
      </div>
    </section>
  );
}