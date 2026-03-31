import type { NicheConfig } from "@/types/niche";

export const lawFirmConfig: NicheConfig = {
  id: "law-firm", name: "Sterling & Associates", tagline: "Justice. Integrity. Results.",
  heroSubtitle: "Award-winning attorneys dedicated to protecting your rights and securing the best possible outcome for your case.",
  heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  heroStyle: "minimal", cardStyle: "horizontal",
  theme: { primary: "220 60% 30%", primaryForeground: "0 0% 100%", accent: "40 60% 50%", heroOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))", sectionDark: "220 30% 8%", sectionDarkForeground: "0 0% 95%" },
  categories: [
    { name: "Personal Injury", emoji: "⚖️" }, { name: "Business Law", emoji: "🏢" }, { name: "Family Law", emoji: "👨‍👩‍👧" },
    { name: "Criminal Defense", emoji: "🛡️" }, { name: "Estate Planning", emoji: "📋" }, { name: "Immigration", emoji: "🌍" },
  ],
  products: [
    { name: "Free Consultation", desc: "Confidential case evaluation with an experienced attorney. No obligation.", price: "0", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", tag: "Free" },
    { name: "Personal Injury", desc: "Aggressive representation for accident victims. No fee unless we win.", price: "Consultation", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&q=80" },
    { name: "Business Formation", desc: "LLC, corporation, and partnership formation with full legal guidance.", price: "1,500", image: "https://images.unsplash.com/photo-1507679799987-c73b7651e199?w=600&q=80" },
    { name: "Family Law", desc: "Compassionate representation for divorce, custody, and support matters.", price: "From 2,000", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
    { name: "Estate Planning", desc: "Wills, trusts, and powers of attorney to protect your family's future.", price: "800", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
    { name: "Criminal Defense", desc: "Vigorous defense of your rights in state and federal court.", price: "From 3,000", image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Establish Authority", desc: "A professional website positions your firm as the trusted choice.", icon: "shield" },
    { title: "Client Intake Online", desc: "Streamline consultations with online booking and intake forms.", icon: "clock" },
    { title: "Win More Cases", desc: "Attract qualified leads with compelling content and testimonials.", icon: "trending" },
  ],
  testimonials: [
    { name: "Robert Chen", text: "Sterling & Associates won my personal injury case and got me the compensation I deserved.", role: "Personal Injury Client" },
    { name: "Maria Santos", text: "They handled my immigration case with incredible care and professionalism.", role: "Immigration Client" },
    { name: "Thomas Wright", text: "Best business attorney I've worked with. Set up my LLC flawlessly.", role: "Business Client" },
  ],
  ctaText: "Need Legal Help?", ctaSubtext: "Schedule your free, confidential consultation with one of our experienced attorneys.",
  whatsappNumber: "15557778899",
  location: { address: "100 Legal Center Blvd, Suite 500, Chicago, IL 60601", hours: "Mon-Fri: 8AM - 6PM | Sat: By Appointment", phone: "+1 (555) 777-8899", mapQuery: "law firm Chicago" },
  footerTagline: "Trusted counsel when it matters most.", currency: "$", backPath: "/global",
  labels: { navServices: "Practice Areas", navAbout: "About", navContact: "Contact", navCta: "Free Consult", heroCtaPrimary: "Practice Areas", heroCtaSecondary: "Free Consultation", servicesTitle: "Our", servicesHighlight: "Practice Areas", servicesSubtitle: "Experienced attorneys across multiple areas of law.", servicesCta: "Consult", whyTitle: "Why choose a", whyHighlight: "premium website", whySubtitle: "Your reputation starts online.", testimonialsTitle: "What our", testimonialsHighlight: "clients say", locationTitle: "Our", locationHighlight: "Office", ctaButtonLabel: "Schedule Consultation", backLabel: "Back to Demos" },
};
