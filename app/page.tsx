import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Impact from "@/components/Impact";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <Expertise />
      <Impact />
      <WhyUs />
      <Process/>
    </main>
  );
}