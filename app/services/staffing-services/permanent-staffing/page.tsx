import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
import CTA from "@/components/landingpage/CTA";

import Hero from "@/components/permanent-staffing/Hero";
import Benefits from "@/components/permanent-staffing/Benefits";
import TechExpertise from "@/components/permanent-staffing/TechExpertise";
import Process from "@/components/permanent-staffing/Process";
import FAQ from "@/components/permanent-staffing/FAQ";

export default function PermanentStaffingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <TechExpertise />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
