import type { NicheConfig } from "@/types/niche";

export const dentalClinicConfig: NicheConfig = {
  id: "dental-clinic", name: "Bright Smile Dental", tagline: "Your Confidence Starts With Your Smile",
  heroSubtitle: "State-of-the-art dental care with a gentle touch. From routine checkups to complete smile makeovers.",
  heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=85",
  heroStyle: "centered", cardStyle: "elegant",
  whyLayout: "centered-list",
  sectionOrder: ["hero", "stats", "categories", "services", "process", "why", "testimonials", "cta", "location"],
  theme: { primary: "200 90% 50%", primaryForeground: "0 0% 100%", accent: "200 50% 92%", heroOverlay: "linear-gradient(to bottom, rgba(0,30,60,0.5), rgba(0,0,0,0.6))", sectionDark: "200 40% 10%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "15000+", label: "Happy Patients" },
    { value: "25+", label: "Years of Practice" },
    { value: "99%", label: "Success Rate" },
    { value: "8", label: "Specialist Dentists" },
  ],
  processSteps: [
    { step: "1", title: "Book Online", desc: "Schedule your appointment in just a few clicks." },
    { step: "2", title: "Consultation", desc: "Comprehensive exam and personalized treatment plan." },
    { step: "3", title: "Treatment", desc: "State-of-the-art procedures with your comfort as priority." },
    { step: "4", title: "Follow Up", desc: "Ongoing care to maintain your perfect smile." },
  ],
  categories: [
    { name: "General", emoji: "🦷" }, { name: "Cosmetic", emoji: "✨" }, { name: "Implants", emoji: "🔩" },
    { name: "Orthodontics", emoji: "😁" }, { name: "Whitening", emoji: "⚡" }, { name: "Emergency", emoji: "🚨" },
  ],
  products: [
    { name: "Teeth Whitening", desc: "Professional in-office whitening for a brighter, more confident smile.", price: "450", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80", tag: "Most Popular" },
    { name: "Dental Implants", desc: "Permanent tooth replacement that looks, feels, and functions like natural teeth.", price: "2500", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", tag: "Premium" },
    { name: "Invisalign", desc: "Clear aligners for a straighter smile without traditional metal braces.", price: "4500", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80" },
    { name: "Veneers", desc: "Custom porcelain veneers for a picture-perfect Hollywood smile.", price: "1200", image: "https://images.unsplash.com/photo-1445527815956-dfc6cb648cd1?w=600&q=80" },
    { name: "Routine Checkup", desc: "Comprehensive exam, cleaning, and X-rays for optimal oral health.", price: "150", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80" },
    { name: "Root Canal", desc: "Painless root canal therapy with advanced techniques and sedation options.", price: "800", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Build Patient Trust", desc: "A professional website instantly builds credibility and trust with new patients.", icon: "shield" },
    { title: "Online Appointments", desc: "Let patients book appointments 24/7 without phone calls.", icon: "clock" },
    { title: "Grow Your Practice", desc: "Attract new patients with SEO-optimized content and strong CTAs.", icon: "trending" },
  ],
  testimonials: [
    { name: "Michael Torres", text: "Dr. Chen and team made my implant procedure completely painless. Amazing results!", role: "Implant Patient" },
    { name: "Laura Bennett", text: "My Invisalign journey was so smooth. I smile with confidence now.", role: "Orthodontics Patient" },
    { name: "David Park", text: "Best dental experience I've ever had. The office is stunning and staff is wonderful.", role: "Regular Patient" },
  ],
  ctaText: "Ready for Your Best Smile?", ctaSubtext: "Schedule your consultation today. New patients welcome.",
  whatsappNumber: "15551112233",
  location: { address: "321 Dental Plaza, Suite 100, Miami, FL 33101", hours: "Mon-Fri: 8AM - 6PM | Sat: 9AM - 2PM", phone: "+1 (555) 111-2233", mapQuery: "dental clinic Miami" },
  footerTagline: "Modern dentistry. Exceptional care.", currency: "$", backPath: "/global",
  labels: { navServices: "Services", navAbout: "About", navContact: "Contact", navCta: "Schedule", heroCtaPrimary: "Our Services", heroCtaSecondary: "Schedule Visit", servicesTitle: "Our", servicesHighlight: "Services", servicesSubtitle: "Comprehensive dental care for the whole family.", servicesCta: "Book", whyTitle: "Why choose a", whyHighlight: "premium website", whySubtitle: "Your online presence is your first impression.", testimonialsTitle: "What our", testimonialsHighlight: "patients say", locationTitle: "Find", locationHighlight: "us", ctaButtonLabel: "Schedule Appointment", backLabel: "Back to Demos", statsTitle: "Numbers That Speak", processTitle: "Your Journey to a", processHighlight: "Perfect Smile" },
};
