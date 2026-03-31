import type { NicheConfig } from "@/types/niche";

export const medSpaConfig: NicheConfig = {
  id: "med-spa", name: "Glow Aesthetics", tagline: "Where Science Meets Beauty",
  heroSubtitle: "Premium med spa treatments in a luxury setting. Botox, fillers, laser, and more — all performed by board-certified professionals.",
  heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=85",
  heroStyle: "luxury", cardStyle: "soft",
  whyLayout: "icon-row",
  sectionOrder: ["hero", "stats", "categories", "services", "gallery", "why", "cta", "testimonials", "location"],
  theme: { primary: "350 80% 55%", primaryForeground: "0 0% 100%", accent: "350 60% 92%", heroOverlay: "linear-gradient(to bottom, rgba(80,0,40,0.5), rgba(0,0,0,0.6))", sectionDark: "350 30% 12%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "5000+", label: "Treatments Performed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years of Experience" },
    { value: "12", label: "Board-Certified Experts" },
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", alt: "Facial Treatment", span: "wide" },
    { src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80", alt: "Skin Analysis" },
    { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80", alt: "Laser Room", span: "tall" },
    { src: "https://images.unsplash.com/photo-1519823551278-64ac92734314?w=600&q=80", alt: "Relaxation Suite" },
    { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", alt: "Consultation Room" },
  ],
  categories: [
    { name: "Botox", emoji: "💉" }, { name: "Fillers", emoji: "✨" }, { name: "Laser", emoji: "⚡" },
    { name: "Facials", emoji: "🧖‍♀️" }, { name: "Body", emoji: "💆‍♀️" }, { name: "Skin Care", emoji: "🌸" },
  ],
  products: [
    { name: "Botox Treatment", desc: "Smooth fine lines and wrinkles with precision botulinum toxin injections.", price: "350", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", tag: "Most Popular" },
    { name: "Dermal Fillers", desc: "Restore volume and contour with premium hyaluronic acid fillers.", price: "500", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
    { name: "Laser Skin Resurfacing", desc: "Advanced laser technology for younger, smoother, more radiant skin.", price: "800", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", tag: "Premium" },
    { name: "HydraFacial", desc: "Deep cleansing, exfoliation, and hydration in one luxurious treatment.", price: "250", image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80" },
    { name: "Chemical Peel", desc: "Professional-grade peels for improved texture, tone, and clarity.", price: "300", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80" },
    { name: "Body Contouring", desc: "Non-invasive body sculpting for a slimmer, more defined silhouette.", price: "1200", image: "https://images.unsplash.com/photo-1519823551278-64ac92734314?w=600&q=80", tag: "Exclusive" },
  ],
  whyPoints: [
    { title: "24/7 Online Booking", desc: "Clients book treatments anytime, reducing phone calls and admin work.", icon: "clock" },
    { title: "Premium First Impression", desc: "A luxury website that matches the quality of your treatments.", icon: "sparkles" },
    { title: "More Bookings, Less Effort", desc: "Convert website visitors into paying clients with optimized CTAs.", icon: "trending" },
  ],
  testimonials: [
    { name: "Sarah Mitchell", text: "The best med spa experience I've ever had. The results speak for themselves.", role: "Regular Client" },
    { name: "Emily Watson", text: "Professional, luxurious, and incredibly effective. I won't go anywhere else.", role: "VIP Member" },
    { name: "Jessica Park", text: "My skin has never looked better. The team is exceptional.", role: "New Client" },
  ],
  ctaText: "Ready to Glow?", ctaSubtext: "Book your free consultation today and discover the perfect treatment plan for you.",
  whatsappNumber: "15551234567",
  location: { address: "456 Beauty Lane, Beverly Hills, CA 90210", hours: "Mon-Sat: 9AM - 7PM | Sun: 10AM - 4PM", phone: "+1 (555) 123-4567", mapQuery: "Beverly Hills med spa" },
  footerTagline: "Science-backed beauty in a luxury setting.", currency: "$", backPath: "/global",
  labels: { navServices: "Treatments", navAbout: "About", navContact: "Contact", navCta: "Book Now", heroCtaPrimary: "View Treatments", heroCtaSecondary: "Book Consultation", servicesTitle: "Our", servicesHighlight: "Treatments", servicesSubtitle: "Premium solutions tailored to your beauty goals.", servicesCta: "Book", whyTitle: "Why choose a", whyHighlight: "premium website", whySubtitle: "More than a website — a client acquisition engine.", testimonialsTitle: "What our", testimonialsHighlight: "clients say", locationTitle: "Find", locationHighlight: "us", ctaButtonLabel: "Book a Consultation", backLabel: "Back to Demos", statsTitle: "Trusted by Thousands", galleryTitle: "Inside Our", galleryHighlight: "Clinic" },
};
