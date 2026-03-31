import type { NicheConfig } from "@/types/niche";

export const realEstateConfig: NicheConfig = {
  id: "real-estate", name: "Prestige Properties", tagline: "Find Your Dream Home",
  heroSubtitle: "Luxury real estate services with a personal touch. From penthouses to estates — we find the perfect property for you.",
  heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  heroStyle: "split", cardStyle: "elegant",
  theme: { primary: "160 70% 40%", primaryForeground: "0 0% 100%", accent: "160 30% 92%", heroOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))", sectionDark: "160 30% 8%", sectionDarkForeground: "0 0% 95%" },
  categories: [
    { name: "Houses", emoji: "🏠" }, { name: "Apartments", emoji: "🏢" }, { name: "Penthouses", emoji: "🌆" },
    { name: "Villas", emoji: "🏡" }, { name: "Commercial", emoji: "🏗️" }, { name: "Land", emoji: "🌳" },
  ],
  products: [
    { name: "Luxury Penthouse", desc: "Stunning downtown penthouse with panoramic city views and private terrace.", price: "2.5M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", tag: "Featured" },
    { name: "Modern Family Home", desc: "4-bedroom contemporary home in a prime school district with pool.", price: "850K", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
    { name: "Waterfront Villa", desc: "Mediterranean-style villa with private dock and breathtaking water views.", price: "3.8M", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", tag: "Exclusive" },
    { name: "Downtown Loft", desc: "Industrial-chic loft in the heart of the arts district. Recently renovated.", price: "425K", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80" },
    { name: "Suburban Estate", desc: "Sprawling 6-bedroom estate on 2 acres with guest house and gardens.", price: "1.9M", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" },
    { name: "Commercial Space", desc: "Prime retail or office space in a high-traffic downtown location.", price: "1.2M", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Showcase Listings", desc: "Beautiful property galleries that make buyers fall in love at first sight.", icon: "sparkles" },
    { title: "Generate Leads 24/7", desc: "Capture buyer interest with contact forms and virtual tour requests.", icon: "clock" },
    { title: "Build Market Authority", desc: "Position yourself as the go-to agent in your local market.", icon: "award" },
  ],
  testimonials: [
    { name: "Jennifer Adams", text: "They found our dream home in just 2 weeks. The team is phenomenal.", role: "Home Buyer" },
    { name: "Richard Moore", text: "Sold our property above asking price. Their marketing is next level.", role: "Seller" },
    { name: "Sarah Johnson", text: "Best real estate experience we've ever had. True luxury service.", role: "Investor" },
  ],
  ctaText: "Find Your Perfect Property", ctaSubtext: "Schedule a private viewing or let us know what you're looking for.",
  whatsappNumber: "15553334455",
  location: { address: "500 Luxury Row, Malibu, CA 90265", hours: "Mon-Sat: 9AM - 7PM | Sun: 10AM - 4PM", phone: "+1 (555) 333-4455", mapQuery: "luxury real estate Malibu" },
  footerTagline: "Where luxury meets lifestyle.", currency: "$", backPath: "/global",
  labels: { navServices: "Listings", navAbout: "About", navContact: "Contact", navCta: "Schedule Tour", heroCtaPrimary: "View Listings", heroCtaSecondary: "Schedule a Tour", servicesTitle: "Featured", servicesHighlight: "Properties", servicesSubtitle: "Handpicked properties for discerning buyers.", servicesCta: "Inquire", whyTitle: "Why choose a", whyHighlight: "premium website", whySubtitle: "Your listings deserve a luxury showcase.", testimonialsTitle: "What our", testimonialsHighlight: "clients say", locationTitle: "Our", locationHighlight: "Office", ctaButtonLabel: "Contact Us", backLabel: "Back to Demos" },
};
