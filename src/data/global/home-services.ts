import type { NicheConfig } from "@/types/niche";

export const homeServicesConfig: NicheConfig = {
  id: "home-services", name: "TrustHome Pro", tagline: "Your Home in Expert Hands",
  heroSubtitle: "Licensed, insured, and trusted home improvement professionals. From plumbing to renovations — we do it right.",
  heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=85",
  heroStyle: "centered", cardStyle: "horizontal",
  whyLayout: "grid",
  sectionOrder: ["hero", "categories", "stats", "services", "process", "testimonials", "why", "cta", "location"],
  theme: { primary: "220 80% 55%", primaryForeground: "0 0% 100%", accent: "25 80% 55%", heroOverlay: "linear-gradient(to bottom, rgba(0,20,60,0.5), rgba(0,0,0,0.65))", sectionDark: "220 30% 10%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "2000+", label: "Projects Completed" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "24/7", label: "Emergency Service" },
    { value: "4.9", label: "Average Rating" },
  ],
  processSteps: [
    { step: "1", title: "Request a Quote", desc: "Tell us about your project — we respond within 24 hours." },
    { step: "2", title: "On-Site Assessment", desc: "Our expert visits your home for a detailed evaluation." },
    { step: "3", title: "Professional Work", desc: "Licensed pros complete the job on time and on budget." },
    { step: "4", title: "Quality Guarantee", desc: "100% satisfaction guarantee on every project." },
  ],
  categories: [
    { name: "Plumbing", emoji: "🔧" }, { name: "Electrical", emoji: "⚡" }, { name: "HVAC", emoji: "❄️" },
    { name: "Painting", emoji: "🎨" }, { name: "Roofing", emoji: "🏠" }, { name: "Remodeling", emoji: "🔨" },
  ],
  products: [
    { name: "Full Home Inspection", desc: "Comprehensive inspection covering plumbing, electrical, HVAC, and structure.", price: "350", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", tag: "Popular" },
    { name: "Kitchen Remodel", desc: "Complete kitchen renovation from design to installation. Turnkey service.", price: "From 15K", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", tag: "Premium" },
    { name: "Bathroom Renovation", desc: "Modern bathroom makeover including fixtures, tile, and plumbing.", price: "From 8K", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80" },
    { name: "Emergency Plumbing", desc: "24/7 emergency plumbing services. Fast response, fair pricing.", price: "150", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80" },
    { name: "Interior Painting", desc: "Professional interior painting with premium paints and flawless finishes.", price: "From 2K", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80" },
    { name: "Roof Repair", desc: "Expert roof repair and maintenance to protect your biggest investment.", price: "From 500", image: "https://images.unsplash.com/photo-1632759145373-08b88f5a2cf1?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Get Found Locally", desc: "Rank for 'plumber near me', 'electrician near me' and similar searches.", icon: "target" },
    { title: "Free Quote Requests", desc: "Let homeowners request quotes directly from your site.", icon: "zap" },
    { title: "Build Trust Fast", desc: "Reviews, certifications, and portfolio on display 24/7.", icon: "shield" },
  ],
  testimonials: [
    { name: "Kevin Walsh", text: "They renovated our kitchen beautifully. On time, on budget, zero stress.", role: "Homeowner" },
    { name: "Linda Harper", text: "Emergency plumbing at midnight — they saved us. True professionals.", role: "Homeowner" },
    { name: "Greg Thompson", text: "Best contractor we've ever worked with. Quality work, fair prices.", role: "Property Manager" },
  ],
  ctaText: "Need a Quote?", ctaSubtext: "Tell us about your project and get a free, no-obligation estimate within 24 hours.",
  whatsappNumber: "15556667788",
  location: { address: "850 Tradecraft Dr, Dallas, TX 75201", hours: "Mon-Fri: 7AM - 6PM | Sat: 8AM - 2PM | Emergency: 24/7", phone: "+1 (555) 666-7788", mapQuery: "home services Dallas TX" },
  footerTagline: "Licensed. Insured. Trusted.", currency: "$", backPath: "/global",
  labels: { navServices: "Services", navAbout: "About", navContact: "Contact", navCta: "Free Quote", heroCtaPrimary: "Our Services", heroCtaSecondary: "Get Free Quote", servicesTitle: "Our", servicesHighlight: "Services", servicesSubtitle: "Professional home improvement services you can trust.", servicesCta: "Quote", whyTitle: "Why choose a", whyHighlight: "premium website", whySubtitle: "Your online presence builds trust before the first handshake.", testimonialsTitle: "What our", testimonialsHighlight: "clients say", locationTitle: "Find", locationHighlight: "us", ctaButtonLabel: "Request Free Quote", backLabel: "Back to Demos", statsTitle: "Why Homeowners Trust Us", processTitle: "How It", processHighlight: "Works" },
};
