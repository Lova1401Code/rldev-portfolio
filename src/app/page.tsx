import { Hero } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySection } from "@/components/sections/WhySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechSection } from "@/components/sections/TechSection";
import { ClientSection } from "@/components/sections/ClientSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <ProjectsSection />
      <AboutSection />
      <TechSection />
      <ClientSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
    </>
  );
}