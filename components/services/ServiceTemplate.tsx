import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
import CTA from "@/components/landingpage/CTA";
import StackedSection from "@/components/permanent-staffing/StackedSection";
import ServiceHero from "./ServiceHero";
import ServiceBenefits from "./ServiceBenefits";
import ServiceTechExpertise from "./ServiceTechExpertise";
import ServiceModelsOffered from "./ServiceModelsOffered";
import ServiceWhenToUse from "./ServiceWhenToUse";
import ServiceProcess from "./ServiceProcess";
import ServiceConversionProcess from "./ServiceConversionProcess";
import ServiceFAQ from "./ServiceFAQ";
import ServiceTextSections from "./ServiceTextSections";

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
          <ServiceBenefits 
            benefits={data.benefits} 
            title={data.benefitsTitle}
          />
        </StackedSection>
        
        {data.expertise && data.expertise.length > 0 && (
          <StackedSection index={2}>
            <ServiceTechExpertise 
              expertise={data.expertise} 
              title={data.expertiseTitle}
            />
          </StackedSection>
        )}
      </div>

      <div className="relative z-50 bg-[#faf9f6] rounded-t-[40px] shadow-[0_-15px_30px_rgba(0,0,0,0.05)] border-t border-black/5">
        {data.textSections && data.textSections.length > 0 && (
          <ServiceTextSections sections={data.textSections} />
        )}
        
        {data.modelsOffered && data.modelsOffered.length > 0 && (
          <ServiceModelsOffered models={data.modelsOffered} />
        )}
        
        {data.whenToUse && data.whenToUse.length > 0 && (
          <ServiceWhenToUse 
            whenToUse={data.whenToUse} 
            title={data.whenToUseTitle || (data.title.includes("Contract-to-Hire") ? "When Contract-to-Hire Works Best" : undefined)}
          />
        )}

        {data.process && data.process.length > 0 && (
          <ServiceProcess 
            steps={data.process} 
            title={data.processTitle || (data.title.includes("Contract-to-Hire") ? "TRIAL<br />PROCESS" : undefined)}
            subtitle={data.title.includes("Contract-to-Hire") ? "How the Trial Works" : undefined}
          />
        )}

        {data.conversionProcess && data.conversionProcess.length > 0 && (
          <ServiceConversionProcess 
            steps={data.conversionProcess} 
            title={data.processTitle}
            subtitle={data.processSubtitle}
          />
        )}

        {data.faqs && data.faqs.length > 0 && (
          <ServiceFAQ faqs={data.faqs} />
        )}
        <div className="bg-transparent rounded-t-[40px]">
          <CTA 
            title={data.cta?.title}
            description={data.cta?.description}
            buttonText={data.cta?.buttonText}
            buttonLink={data.cta?.buttonLink}
          />
          <Footer />
        </div>
      </div>
    </main>
  );
}
