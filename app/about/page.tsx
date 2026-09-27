"use client";

import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
import CTA from "@/components/landingpage/CTA";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <main className="bg-[#faf9f6]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-5 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-[#171717] mb-6"
          >
            Empowering Global Businesses with <br className="hidden md:block" />
            <span className="text-black/40">Exceptional Talent</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-black/60 max-w-3xl mx-auto"
          >
            Connecting Visionary Companies with World-Class Technology and IT Professionals. 
            At Samaarav, we believe that the right talent can transform an organization.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-5 md:px-10 bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-[#171717] mb-8">
                Why Choose Samaarav?
              </h2>
              <p className="text-lg text-black/60 mb-6">
                We are more than just a staffing agency; we are your strategic growth partner. 
                With deep industry knowledge and a robust global network, we deliver precision in every placement.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-[#171717]">Specialized IT Focus</h4>
                    <p className="text-black/60">Our recruiters are domain experts in AI, Cloud, ERP, and Cybersecurity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-[#171717]">Global Reach & Precision</h4>
                    <p className="text-black/60">Access to a pre-vetted global talent pool matching your exact tech stack.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-[#171717]">Agility & Scale</h4>
                    <p className="text-black/60">From single niche hires to building entire engineering squads rapidly.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-[#f5f5f5] rounded-3xl p-10 h-full flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-5xl font-bold text-[#171717] mb-2">95%</h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-black/40">Client Retention</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-[#171717] mb-2">48h</h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-black/40">Avg Submittal Time</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-[#171717] mb-2">1k+</h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-black/40">Professionals Placed</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-[#171717] mb-2">Top 5%</h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-black/40">Vetted Talent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-5 md:px-10 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] mb-16 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Innovation & Excellence</h3>
              <p className="text-white/60">We continuously refine our sourcing strategies to find the modern tech talent others miss.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Transparency & Integrity</h3>
              <p className="text-white/60">Honest communication, transparent pricing, and ethical recruitment practices are our standard.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Client-Centric</h3>
              <p className="text-white/60">Your success is our success. We align our talent delivery with your strategic business goals.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Diversity focus</h3>
              <p className="text-white/60">We actively build diverse talent pipelines, believing varied perspectives drive innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-5 md:px-10 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-[#171717] mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 text-left">
              <h3 className="text-2xl font-bold text-[#171717] mb-4">Contract Staffing</h3>
              <p className="text-black/60">Flexible, project-based talent to help you scale your workforce quickly during peaks and critical deliverables.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 text-left">
              <h3 className="text-2xl font-bold text-[#171717] mb-4">Permanent Staffing</h3>
              <p className="text-black/60">End-to-end direct hire solutions to find committed, long-term technical talent that aligns with your culture.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 text-left">
              <h3 className="text-2xl font-bold text-[#171717] mb-4">Statement of Work (SOW)</h3>
              <p className="text-black/60">Outcome-based delivery models where we manage the project, team, and timelines for guaranteed results.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Build Your<br /><span class='ml-[8vw]'>Dream Team?</span>"
        description="Partner with Samaarav to find the exceptional talent that will drive your organization's future."
        buttonText="Get in Touch ↗"
        buttonLink="/contact"
      />
      
      <Footer />
    </main>
  );
}
