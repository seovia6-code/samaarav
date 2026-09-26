import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
import CTA from "@/components/landingpage/CTA";
import StackedSection from "@/components/permanent-staffing/StackedSection";
import ServiceHero from "./ServiceHero";
import ServiceBenefits from "./ServiceBenefits";
import ServiceTechExpertise from "./ServiceTechExpertise";
import ServiceProcess from "./ServiceProcess";
import ServiceFAQ from "./ServiceFAQ";

export default function ServiceTemplate({ data }: { data: any }) {
  return (
    <main className="bg-[#faf9f6]">
      <Navbar />
      <ServiceHero 
        title={data.title} 
        subtitle={data.subtitle} 
        description={data.description} 
        stats={data.stats} 
      />
      
      <div className="relative">
        <StackedSection index={1}>
          <ServiceBenefits benefits={data.benefits} />
        </StackedSection>
        
        {data.expertise && data.expertise.length > 0 && (
          <StackedSection index={2}>
            <ServiceTechExpertise expertise={data.expertise} />
          </StackedSection>
        )}
      </div>

      <div className="relative z-50 bg-[#faf9f6] rounded-t-[40px] shadow-[0_-15px_30px_rgba(0,0,0,0.05)] border-t border-black/5">
        <ServiceProcess steps={data.process} />
        <ServiceFAQ faqs={data.faqs} />
        <div className="bg-transparent rounded-t-[40px]">
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
