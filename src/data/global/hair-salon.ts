import type { NicheConfig } from "@/types/niche";

export const hairSalonConfig: NicheConfig = {
  id: "hair-salon", name: "Luxe Hair Studio", tagline: "Your Hair, Our Masterpiece",
  heroSubtitle: "Premium hair styling, extensions, and color services by award-winning stylists. Walk in beautiful, walk out unforgettable.",
  heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=85",
  heroStyle: "split", cardStyle: "overlay",
  whyLayout: "alternating",
  sectionOrder: ["hero", "categories", "gallery", "services", "why", "testimonials", "cta", "location"],
  theme: { primary: "280 70% 50%", primaryForeground: "0 0% 100%", accent: "40 80% 60%", heroOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))", sectionDark: "280 30% 10%", sectionDarkForeground: "0 0% 95%" },
  gallery: [
    { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", alt: "Balayage Transformation", span: "tall" },
    { src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80", alt: "Color Work" },
    { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", alt: "Extensions" },
    { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", alt: "Styling Session", span: "wide" },
    { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80", alt: "Bridal Hair" },
  ],
  categories: [
    { name: "Cuts", emoji: "✂️" }, { name: "Color", emoji: "🎨" }, { name: "Extensions", emoji: "💇‍♀️" },
    { name: "Styling", emoji: "💫" }, { name: "Treatments", emoji: "🧴" }, { name: "Bridal", emoji: "👰" },
  ],
  products: [
    { name: "Signature Haircut", desc: "Precision cut and style by our senior stylists, tailored to your face shape.", price: "85", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { name: "Balayage Color", desc: "Hand-painted highlights for a natural, sun-kissed glow.", price: "250", image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80", tag: "Trending" },
    { name: "Hair Extensions", desc: "Premium tape-in or keratin bond extensions for instant volume and length.", price: "400", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", tag: "Premium" },
    { name: "Keratin Treatment", desc: "Smooth, frizz-free hair for up to 3 months with our keratin smoothing treatment.", price: "300", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80" },
    { name: "Bridal Package", desc: "Complete bridal hair styling including trial, day-of styling, and touch-ups.", price: "500", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80", tag: "Bridal" },
    { name: "Scalp Treatment", desc: "Deep cleansing and nourishing scalp therapy for healthier hair growth.", price: "120", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Online Booking System", desc: "Let clients book their favorite stylist online, 24/7.", icon: "clock" },
    { title: "Showcase Your Portfolio", desc: "Display stunning before-and-after transformations.", icon: "sparkles" },
    { title: "Build Your Brand", desc: "A premium website that elevates your salon's reputation.", icon: "award" },
  ],
  testimonials: [
    { name: "Amanda Lee", text: "Best salon experience ever! My balayage looks absolutely stunning.", role: "Regular Client" },
    { name: "Nicole Rivera", text: "The extensions look so natural. I get compliments everywhere I go.", role: "Extensions Client" },
    { name: "Rachel Kim", text: "They did my bridal hair and it was perfection. Every detail was flawless.", role: "Bride" },
  ],
  ctaText: "Ready for a New Look?", ctaSubtext: "Book your appointment today and let our master stylists create your perfect look.",
  whatsappNumber: "15559876543",
  location: { address: "789 Glamour Ave, New York, NY 10001", hours: "Tue-Sat: 10AM - 8PM | Sun: 11AM - 5PM", phone: "+1 (555) 987-6543", mapQuery: "luxury hair salon New York" },
  footerTagline: "Where every strand tells a story.", currency: "$", backPath: "/global",
  labels: { navServices: "Services", navAbout: "About", navContact: "Contact", navCta: "Book Now", heroCtaPrimary: "Our Services", heroCtaSecondary: "Book Appointment", servicesTitle: "Our", servicesHighlight: "Services", servicesSubtitle: "Expert styling services for every occasion.", servicesCta: "Book", whyTitle: "Why choose a", whyHighlight: "premium website", whySubtitle: "More than a website — a client magnet.", testimonialsTitle: "What our", testimonialsHighlight: "clients say", locationTitle: "Find", locationHighlight: "us", ctaButtonLabel: "Book Now", backLabel: "Back to Demos", galleryTitle: "Our", galleryHighlight: "Portfolio" },
};
