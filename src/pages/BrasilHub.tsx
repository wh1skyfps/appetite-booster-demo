import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const niches = [
  { path: "/brasil/clinica-estetica", name: "Clínica de Estética", subtitle: "Clínicas de estética e beleza premium", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80", color: "#E11D48" },
  { path: "/brasil/salao-cabeleireiro", name: "Salão / Cabeleireiro", subtitle: "Salões de beleza e cabelo premium", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", color: "#9333EA" },
  { path: "/brasil/dentista", name: "Dentista", subtitle: "Consultórios odontológicos modernos", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80", color: "#0EA5E9" },
  { path: "/brasil/estetica-automotiva", name: "Estética Automotiva", subtitle: "Detalhamento e proteção automotiva premium", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80", color: "#EF4444" },
  { path: "/brasil/advogado", name: "Advogado", subtitle: "Escritórios de advocacia de alto padrão", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80", color: "#1E40AF" },
  { path: "/brasil/imobiliaria", name: "Imobiliária", subtitle: "Imobiliárias e corretores de alto padrão", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", color: "#059669" },
  { path: "/brasil/clinica-premium", name: "Clínica Premium", subtitle: "Consultórios médicos de alto padrão", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", color: "#0D9488" },
];

const BrasilHub = () => (
  <div className="min-h-screen bg-[hsl(220,20%,4%)] text-white">
    <section className="py-16 md:py-24">
      <div className="container">
        <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-sm mb-10 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Voltar aos Mercados
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-green-400/50 mb-4">Brasil</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-4">
            Demos <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Brasil</span>
          </h1>
          <p className="text-sm sm:text-base text-white/35 max-w-xl mb-14 md:mb-20">
            Demos premium para nichos de alto valor no mercado brasileiro. Cada demo é única, responsiva e feita para converter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {niches.map((niche, i) => (
            <motion.div key={niche.path} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}>
              <Link to={niche.path} className="block group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 hover:border-white/10 transition-colors">
                  <img src={niche.image} alt={niche.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-extrabold text-white mb-1">{niche.name}</h3>
                    <p className="text-white/45 text-xs md:text-sm mb-3">{niche.subtitle}</p>
                    <div className="inline-flex items-center gap-1.5 text-white/40 group-hover:text-white transition-colors text-xs font-medium">
                      Ver demo <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ backgroundColor: niche.color }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default BrasilHub;
