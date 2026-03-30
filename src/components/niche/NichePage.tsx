import { useEffect } from "react";
import type { NicheConfig } from "@/types/niche";
import NicheNavbar from "./NicheNavbar";
import NicheHero from "./NicheHero";
import NicheCategories from "./NicheCategories";
import NicheProducts from "./NicheProducts";
import NicheWhySection from "./NicheWhySection";
import NicheWhatsAppCta from "./NicheWhatsAppCta";
import NicheTestimonials from "./NicheTestimonials";
import NicheLocation from "./NicheLocation";
import NicheFooter from "./NicheFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

interface NichePageProps {
  config: NicheConfig;
}

const NichePage = ({ config }: NichePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Apply niche theme
    const root = document.documentElement;
    root.style.setProperty("--primary", config.theme.primary);
    root.style.setProperty("--primary-foreground", config.theme.primaryForeground);
    root.style.setProperty("--accent", config.theme.accent);
    root.style.setProperty("--ring", config.theme.primary);
    root.style.setProperty("--section-dark", config.theme.sectionDark);
    root.style.setProperty("--section-dark-foreground", config.theme.sectionDarkForeground);

    return () => {
      // Reset to defaults
      root.style.removeProperty("--primary");
      root.style.removeProperty("--primary-foreground");
      root.style.removeProperty("--accent");
      root.style.removeProperty("--ring");
      root.style.removeProperty("--section-dark");
      root.style.removeProperty("--section-dark-foreground");
    };
  }, [config]);

  return (
    <div className="min-h-screen">
      <NicheNavbar name={config.name} />
      <NicheHero
        name={config.name}
        tagline={config.tagline}
        subtitle={config.heroSubtitle}
        image={config.heroImage}
        overlay={config.theme.heroOverlay}
        whatsappNumber={config.whatsappNumber}
      />
      <NicheCategories categories={config.categories} />
      <NicheProducts products={config.products} whatsappNumber={config.whatsappNumber} />
      <NicheWhySection points={config.whyPoints} />
      <NicheWhatsAppCta
        ctaText={config.ctaText}
        ctaSubtext={config.ctaSubtext}
        whatsappNumber={config.whatsappNumber}
      />
      <NicheTestimonials testimonials={config.testimonials} />
      <div id="sobre">
        <NicheLocation location={config.location} />
      </div>
      <NicheFooter name={config.name} tagline={config.footerTagline} />
      <FloatingWhatsApp />
    </div>
  );
};

export default NichePage;
