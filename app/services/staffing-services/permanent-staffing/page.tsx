import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
import CTA from "@/components/landingpage/CTA";

import Hero from "@/components/permanent-staffing/Hero";
import Benefits from "@/components/permanent-staffing/Benefits";
import TechExpertise from "@/components/permanent-staffing/TechExpertise";
import Process from "@/components/permanent-staffing/Process";
import FAQ from "@/components/permanent-staffing/FAQ";
import StackedSection from "@/components/permanent-staffing/StackedSection";

export default function PermanentStaffingPage() {
  return (
    <main className="bg-[#faf9f6]">
      <Navbar />
      <Hero />
      
      <div className="relative">
        <StackedSection index={1}>
          <Benefits />
        </StackedSection>
        
        <StackedSection index={2}>
          <TechExpertise />
        </StackedSection>
      </div>

      <div className="relative z-50 bg-[#faf9f6] rounded-t-[40px] shadow-[0_-15px_30px_rgba(0,0,0,0.05)] border-t border-black/5">
        <Process />
        <FAQ />
        <div className="bg-transparent rounded-t-[40px]">
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
