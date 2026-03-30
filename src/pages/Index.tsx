import { NicheProvider, useNiche } from "@/contexts/NicheContext";
import Navbar from "@/components/Navbar";
import IntroHero from "@/components/IntroHero";
import NicheSelector from "@/components/NicheSelector";
import DynamicHero from "@/components/DynamicHero";
import DynamicMenu from "@/components/DynamicMenu";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const PageContent = () => {
  const { selectedNiche } = useNiche();

  return (
    <div className="min-h-screen">
      <Navbar />
      <IntroHero />
      <NicheSelector />
      {selectedNiche && (
        <>
          <DynamicHero />
          <DynamicMenu />
        </>
      )}
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <TestimonialsSection />
      <CtaSection />
      <div id="contacto">
        <ContactSection />
      </div>
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

const Index = () => {
  return (
    <NicheProvider>
      <PageContent />
    </NicheProvider>
  );
};

export default Index;
