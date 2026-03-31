import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CardFlip from "@/components/ui/flip-card";

const niches = [
  { path: "/global/med-spa", name: "Med Spa", subtitle: "Luxury wellness & aesthetic clinics", description: "High-end medical spa demos designed to attract premium clients seeking aesthetic treatments and wellness services.", features: ["Botox & Fillers", "Laser Treatments", "Body Contouring", "Membership Plans"], image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80", color: "#E11D48" },
  { path: "/global/hair-salon", name: "Hair Salon", subtitle: "Premium hair & beauty studios", description: "Showcase cutting-edge hair salon demos with booking integration, gallery, and stylist portfolios.", features: ["Stylist Profiles", "Online Booking", "Before & After", "Product Shop"], image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", color: "#9333EA" },
  { path: "/global/dental-clinic", name: "Dental Clinic", subtitle: "Modern dental practices & smile design", description: "Professional dental practice demos featuring smile design galleries, treatment info, and patient testimonials.", features: ["Smile Design", "Implants", "Orthodontics", "Emergency Care"], image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80", color: "#0EA5E9" },
  { path: "/global/auto-detailing", name: "Auto Detailing", subtitle: "Premium car care & detailing studios", description: "Luxury auto detailing demos showcasing paint correction, ceramic coating, and premium car care services.", features: ["Ceramic Coating", "Paint Correction", "Interior Detail", "PPF Protection"], image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=80", color: "#F97316" },
  { path: "/global/law-firm", name: "Law Firm", subtitle: "Prestigious legal practices & attorneys", description: "Authoritative law firm demos built to establish trust, showcase expertise, and convert high-value clients.", features: ["Practice Areas", "Attorney Profiles", "Case Results", "Free Consultation"], image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80", color: "#1E40AF" },
  { path: "/global/real-estate", name: "Real Estate", subtitle: "Luxury property & real estate agencies", description: "Stunning real estate demos with property listings, virtual tours, and agent showcases for luxury markets.", features: ["Property Listings", "Virtual Tours", "Agent Profiles", "Market Reports"], image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", color: "#059669" },
  { path: "/global/home-services", name: "Home Services", subtitle: "Trusted home improvement professionals", description: "Professional home service demos for contractors, plumbers, electricians, and renovation specialists.", features: ["Service Areas", "Project Gallery", "Free Estimates", "Certifications"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", color: "#2563EB" },
];

const GlobalHub = () => (
  <div className="min-h-screen bg-[hsl(220,20%,4%)] text-white">
    <section className="py-16 md:py-24">
      <div className="container">
        <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-sm mb-10 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Markets
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-blue-400/50 mb-4">International</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-4">
            Global <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Demos</span>
          </h1>
          <p className="text-sm sm:text-base text-white/35 max-w-xl mb-14 md:mb-20">
            Premium website demos for high-ticket international niches. Each demo is unique, responsive, and built to convert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {niches.map((niche, i) => (
            <motion.div key={niche.path} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}>
              <Link to={niche.path} className="block">
                <CardFlip
                  title={niche.name}
                  subtitle={niche.subtitle}
                  description={niche.description}
                  features={niche.features}
                  color={niche.color}
                  image={niche.image}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default GlobalHub;
