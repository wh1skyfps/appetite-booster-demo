import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedMenuSection from "@/components/FeaturedMenuSection";
import WhyThisWebsiteSection from "@/components/WhyThisWebsiteSection";
import MenuExperienceSection from "@/components/MenuExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppCtaSection from "@/components/WhatsAppCtaSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <div id="destaques">
        <FeaturedMenuSection />
      </div>
      <WhyThisWebsiteSection />
      <MenuExperienceSection />
      <TestimonialsSection />
      <WhatsAppCtaSection />
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="contacto">
        <LocationSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
