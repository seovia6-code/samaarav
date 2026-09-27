"use client";

import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("United Kingdom");

  const offices = [
    {
      name: "United Kingdom",
      company: "Samaarav UK (Registered Office)",
      address: "Registered Office: London, UK | Branch: 44 Widnell Lane, Edinburgh, Scotland, UK",
    }
  ];

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
            Contact <span className="text-black/40">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto"
          >
            Reach out to our team by sending us an email—we're here to assist you with your inquiries.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32 px-5 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Office Details */}
          <div>
            <h2 className="text-3xl font-bold text-[#171717] mb-8">Our Offices</h2>
            
            {/* Quick Contact Info */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 mb-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-black/40 uppercase tracking-wider mb-2">Email</h4>
                  <a href="mailto:info@samaarav.co.uk" className="text-lg font-medium text-blue-600 hover:underline">
                    info@samaarav.co.uk
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black/40 uppercase tracking-wider mb-2">Phone</h4>
                  <div className="space-y-2 text-black/80">
                    <p><span className="font-medium w-24 inline-block">Phone:</span> +44 7550051466</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Tabs */}
            <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden">
              <div className="flex border-b border-black/5 overflow-x-auto">
                {offices.map((office) => (
                  <button
                    key={office.name}
                    onClick={() => setActiveTab(office.name)}
                    className={`flex-1 py-4 px-4 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === office.name 
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' 
                        : 'text-black/60 hover:bg-black/5'
                    }`}
                  >
                    {office.name.split(' ')[0]}
                  </button>
                ))}
              </div>
              <div className="p-8">
                {offices.map((office) => (
                  <div key={office.name} className={`${activeTab === office.name ? 'block' : 'hidden'}`}>
                    <h3 className="text-2xl font-bold text-[#171717] mb-2">{office.company}</h3>
                    <p className="text-black/60 text-lg">{office.address}</p>
                    <a href="mailto:info@samaarav.com" className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                      info@samaarav.com
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#171717] mb-8">Let's Connect</h2>
            <form className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-black/5 shadow-blue-900/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="name">Full Name *</label>
                  <input type="text" id="name" required placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="company">Company Name *</label>
                  <input type="text" id="company" required placeholder="Enter your company" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="email">Work Email *</label>
                  <input type="email" id="email" required placeholder="Enter your work email" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="jobtitle">Job Title</label>
                  <input type="text" id="jobtitle" placeholder="Enter your job title" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="country">Country</label>
                  <select id="country" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]">
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="in">India</option>
                    <option value="sg">Singapore</option>
                    <option value="id">Indonesia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="mobilenumber">Mobile Number</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="+1" className="w-20 px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]" />
                    <input type="text" id="mobilenumber" placeholder="Mobile number" className="flex-1 px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="nicheindustry">Niche Industry</label>
                  <input type="text" id="nicheindustry" placeholder="Your niche industry" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="hearus">How did you hear about us?</label>
                  <select id="hearus" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6]">
                    <option value="">Select Option</option>
                    <option value="search">Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-black/70 mb-2" htmlFor="message">How can we help? *</label>
                <textarea id="message" required rows={4} placeholder="Tell us what you need support with..." className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-600/50 bg-[#faf9f6] resize-none"></textarea>
              </div>

              <div className="mb-8 flex items-start gap-3">
                <input type="checkbox" id="agreement" required className="mt-1.5 w-4 h-4 rounded border-black/20 text-blue-600 focus:ring-blue-600/50" />
                <label htmlFor="agreement" className="text-xs text-black/60 leading-relaxed">
                  By submitting this form, you acknowledge that Samaarav may use your personal information for marketing communications as outlined in its privacy policy.
                </label>
              </div>

              <button 
                type="button" 
                className="w-full bg-[#171717] hover:bg-black text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
              >
                Submit Inquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="bg-transparent rounded-t-[40px] relative z-20">
        <Footer />
      </div>
    </main>
  );
}
