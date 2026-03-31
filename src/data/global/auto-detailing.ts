import type { NicheConfig } from "@/types/niche";

export const autoDetailingConfig: NicheConfig = {
  id: "auto-detailing", name: "Prestige Auto Detail", tagline: "Your Car Deserves the Best",
  heroSubtitle: "Premium auto detailing, ceramic coating, and paint protection. We treat every vehicle like a masterpiece.",
  heroImage: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1200&q=80",
  heroStyle: "bold", cardStyle: "bold",
  whyLayout: "grid",
  sectionOrder: ["hero", "categories", "services", "process", "stats", "gallery", "cta", "testimonials", "why", "location"],
  theme: { primary: "25 90% 50%", primaryForeground: "0 0% 100%", accent: "25 50% 20%", heroOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))", sectionDark: "25 15% 8%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "3000+", label: "Vehicles Detailed" },
    { value: "100%", label: "Satisfaction Guaranteed" },
    { value: "10+", label: "Years in Business" },
    { value: "50+", label: "5-Star Reviews" },
  ],
  processSteps: [
    { step: "01", title: "Request a Quote", desc: "Tell us your vehicle make, model, and desired service." },
    { step: "02", title: "Drop Off", desc: "Bring your vehicle to our studio or schedule a mobile visit." },
    { step: "03", title: "We Work Our Magic", desc: "Our detailers treat your car with premium products and techniques." },
    { step: "04", title: "Reveal", desc: "Pick up your vehicle looking better than showroom condition." },
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&q=80", alt: "Ceramic Coating Application", span: "wide" },
    { src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80", alt: "Paint Correction" },
    { src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80", alt: "PPF Installation", span: "tall" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", alt: "Interior Detail" },
    { src: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=600&q=80", alt: "Wheel Detail" },
  ],
  categories: [
    { name: "Exterior", emoji: "🚗" }, { name: "Interior", emoji: "🪑" }, { name: "Ceramic", emoji: "🛡️" },
    { name: "PPF", emoji: "🔒" }, { name: "Wheels", emoji: "⚙️" }, { name: "Full Detail", emoji: "💎" },
  ],
  products: [
    { name: "Full Detail Package", desc: "Complete interior and exterior detailing — your car, like new.", price: "350", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", tag: "Best Value" },
    { name: "Ceramic Coating", desc: "9H ceramic coating for ultimate paint protection and hydrophobic finish.", price: "800", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&q=80", tag: "Premium" },
    { name: "Paint Protection Film", desc: "Self-healing PPF that shields your paint from rocks, scratches, and UV.", price: "2500", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80", tag: "Ultimate" },
    { name: "Interior Deep Clean", desc: "Steam cleaning, leather conditioning, and odor elimination.", price: "200", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" },
    { name: "Exterior Polish", desc: "Multi-stage paint correction to remove swirls, scratches, and oxidation.", price: "450", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80" },
    { name: "Wheel & Tire Package", desc: "Deep wheel cleaning, tire dressing, and optional ceramic wheel coating.", price: "150", image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Showcase Your Work", desc: "Before-and-after galleries that sell your services better than words.", icon: "sparkles" },
    { title: "Instant Quotes", desc: "Let customers request quotes directly from your website.", icon: "zap" },
    { title: "Dominate Local Search", desc: "SEO-optimized website that ranks for 'auto detailing near me'.", icon: "target" },
  ],
  testimonials: [
    { name: "James Rodriguez", text: "My Tesla looks better than showroom condition. Absolutely incredible work.", role: "Tesla Owner" },
    { name: "Chris Anderson", text: "The ceramic coating is unreal. Water just beads right off. Worth every penny.", role: "BMW Owner" },
    { name: "Mark Stevens", text: "Best detailer in the city, period. My Porsche has never looked this good.", role: "Porsche Owner" },
  ],
  ctaText: "Get a Free Quote", ctaSubtext: "Tell us about your vehicle and we'll create a custom detailing package for you.",
  whatsappNumber: "15554445566",
  location: { address: "1200 Motor Way, Houston, TX 77001", hours: "Mon-Sat: 8AM - 6PM", phone: "+1 (555) 444-5566", mapQuery: "auto detailing Houston" },
  footerTagline: "Premium care for premium vehicles.", currency: "$", backPath: "/global",
  labels: { navServices: "Services", navAbout: "About", navContact: "Contact", navCta: "Get Quote", heroCtaPrimary: "Our Services", heroCtaSecondary: "Get a Quote", servicesTitle: "Our", servicesHighlight: "Services", servicesSubtitle: "Premium detailing packages for every vehicle.", servicesCta: "Quote", whyTitle: "Why choose a", whyHighlight: "premium website", whySubtitle: "Your detailing business deserves a premium online presence.", testimonialsTitle: "What our", testimonialsHighlight: "clients say", locationTitle: "Find", locationHighlight: "us", ctaButtonLabel: "Request a Quote", backLabel: "Back to Demos", statsTitle: "Our Track Record", processTitle: "How It", processHighlight: "Works", galleryTitle: "Recent", galleryHighlight: "Work" },
};
