export interface NicheProduct {
  name: string;
  desc: string;
  price: string;
  image: string;
  tag?: string;
}

export interface NicheCategory {
  name: string;
  emoji: string;
}

export interface NicheTestimonial {
  name: string;
  text: string;
  role: string;
}

export interface NicheWhyPoint {
  title: string;
  desc: string;
  icon: string;
}

export interface NicheStat {
  value: string;
  label: string;
}

export interface NicheProcessStep {
  step: string;
  title: string;
  desc: string;
  icon?: string;
}

export interface NicheGalleryImage {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

export type HeroStyle = "centered" | "split" | "editorial" | "bold" | "minimal" | "playful" | "cinematic" | "luxury";
export type CardStyle = "elegant" | "overlay" | "horizontal" | "bold" | "soft" | "compact" | "glass" | "minimal-row";
export type WhyLayout = "grid" | "alternating" | "centered-list" | "icon-row";

export interface NicheLabels {
  navServices: string;
  navAbout: string;
  navContact: string;
  navCta: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  servicesTitle: string;
  servicesHighlight: string;
  servicesSubtitle: string;
  servicesCta: string;
  whyTitle: string;
  whyHighlight: string;
  whySubtitle: string;
  testimonialsTitle: string;
  testimonialsHighlight: string;
  locationTitle: string;
  locationHighlight: string;
  ctaButtonLabel: string;
  backLabel: string;
  statsTitle?: string;
  processTitle?: string;
  processHighlight?: string;
  galleryTitle?: string;
  galleryHighlight?: string;
}

export interface NicheConfig {
  id: string;
  name: string;
  tagline: string;
  heroSubtitle: string;
  heroImage: string;
  heroStyle: HeroStyle;
  heroEmoji?: string;
  cardStyle: CardStyle;
  whyLayout?: WhyLayout;
  theme: {
    primary: string;
    primaryForeground: string;
    accent: string;
    heroOverlay: string;
    sectionDark: string;
    sectionDarkForeground: string;
  };
  categories: NicheCategory[];
  products: NicheProduct[];
  whyPoints: NicheWhyPoint[];
  testimonials: NicheTestimonial[];
  stats?: NicheStat[];
  processSteps?: NicheProcessStep[];
  gallery?: NicheGalleryImage[];
  sectionOrder?: string[];
  ctaText: string;
  ctaSubtext: string;
  whatsappNumber: string;
  location: {
    address: string;
    hours: string;
    phone: string;
    mapQuery: string;
  };
  footerTagline: string;
  currency: string;
  backPath: string;
  labels: NicheLabels;
}
