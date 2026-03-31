import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CardFlip from "@/components/ui/flip-card";

const niches = [
  { path: "/brasil/clinica-estetica", name: "Clínica de Estética", subtitle: "Clínicas de estética e beleza premium", description: "Demos de clínicas estéticas com foco em tratamentos faciais, corporais e bem-estar de alto padrão.", features: ["Harmonização", "Laser", "Corporal", "Skincare"], image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80", color: "#E11D48" },
  { path: "/brasil/salao-cabeleireiro", name: "Salão / Cabeleireiro", subtitle: "Salões de beleza e cabelo premium", description: "Demos de salões de beleza com agendamento online, portfólio de profissionais e galeria de transformações.", features: ["Agendamento", "Portfólio", "Transformações", "Produtos"], image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", color: "#9333EA" },
  { path: "/brasil/dentista", name: "Dentista", subtitle: "Consultórios odontológicos modernos", description: "Demos para consultórios de odontologia com foco em lentes, implantes e tratamentos estéticos.", features: ["Lentes", "Implantes", "Ortodontia", "Emergência"], image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80", color: "#0EA5E9" },
  { path: "/brasil/estetica-automotiva", name: "Estética Automotiva", subtitle: "Detalhamento e proteção automotiva premium", description: "Demos de estética automotiva com serviços de vitrificação, PPF e higienização premium.", features: ["Vitrificação", "PPF", "Polimento", "Higienização"], image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80", color: "#EF4444" },
  { path: "/brasil/advogado", name: "Advogado", subtitle: "Escritórios de advocacia de alto padrão", description: "Demos para escritórios de advocacia com áreas de atuação, perfis dos advogados e resultados de casos.", features: ["Áreas de Atuação", "Equipe", "Resultados", "Consulta Grátis"], image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80", color: "#1E40AF" },
  { path: "/brasil/imobiliaria", name: "Imobiliária", subtitle: "Imobiliárias e corretores de alto padrão", description: "Demos imobiliárias com listagem de imóveis, tours virtuais e perfis de corretores especializados.", features: ["Imóveis", "Tour Virtual", "Corretores", "Avaliação"], image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", color: "#059669" },
  { path: "/brasil/clinica-premium", name: "Clínica Premium", subtitle: "Consultórios médicos de alto padrão", description: "Demos de clínicas médicas premium com especialidades, corpo clínico e agendamento integrado.", features: ["Especialidades", "Corpo Clínico", "Agendamento", "Convênios"], image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", color: "#0D9488" },
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
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-4">
            Demos
          </h1>
          <p className="text-sm sm:text-base text-white/35 max-w-xl mb-14 md:mb-20">
            Demos premium para nichos de alto valor no mercado brasileiro. Cada demo é única, responsiva e feita para converter.
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

export default BrasilHub;
