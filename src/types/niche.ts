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

export interface NicheConfig {
  id: string;
  name: string;
  tagline: string;
  heroSubtitle: string;
  heroImage: string;
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
}
