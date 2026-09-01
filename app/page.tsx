import Loader from "@/components/landingpage/Loader";
import Navbar from "@/components/landingpage/Navbar";
import Hero from "@/components/landingpage/Hero";
import TechMarquee from "@/components/landingpage/TechMarquee";
import Services from "@/components/landingpage/Services";
import Expertise from "@/components/landingpage/Expertise";
import Impact from "@/components/landingpage/Impact";
import WhyUs from "@/components/landingpage/WhyUs";
import Process from "@/components/landingpage/Process";
import Clients from "@/components/landingpage/Clients";
import CTA from "@/components/landingpage/CTA";
import Footer from "@/components/landingpage/Footer";

export default function Home() {
  return (
    <main>
      <Loader />
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <Expertise />
      <Impact />
      <WhyUs />
      <Process />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}