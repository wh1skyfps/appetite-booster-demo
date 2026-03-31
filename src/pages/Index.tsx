import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, MapPin, Sparkles } from "lucide-react";
import CardFlip from "@/components/ui/flip-card";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(220,15%,3%)] text-white selection:bg-white/10">
      {/* Subtle grid texture */}
      <div className="fixed inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <section className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.03] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
        </div>

        {/* Top bar */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.06] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white/60" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/50">NICHE DEMOS</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-white/20 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
            Premium Showcase
          </div>
        </motion.header>

        {/* Hero */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="container max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-14 md:mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] mb-8"
              >
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40">
                  Selecione o mercado
                </span>
              </motion.div>

              <h1 className="text-[clamp(2.2rem,6vw,5.5rem)] font-extrabold leading-[1.05] mb-5 tracking-tight">
                
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Demos
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400/60 via-violet-400/60 to-fuchsia-400/60 origin-left"
                  />
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/30 max-w-xl mx-auto leading-relaxed font-light">
                Uma vitrine premium de sites pensados para fechar contratos em nichos de alto valor.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {/* Global Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/global" className="block">
                  <CardFlip
                    title="Global Market"
                    subtitle="Premium demos for US, UK & Portugal"
                    description="Law firms, med spas, real estate, dental clinics & more — designed to convert high-value clients worldwide."
                    features={["Law Firms", "Med Spas", "Real Estate", "Dental Clinics"]}
                    color="#3b82f6"
                    icon={<Globe className="w-5 h-5 text-blue-400" />}
                    image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
                  />
                </Link>
              </motion.div>

              {/* Brasil Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/brasil" className="block">
                  <CardFlip
                    title="Mercado Brasileiro"
                    subtitle="Demos premium para nichos de alto valor"
                    description="Advogados, dentistas, clínicas estéticas, imobiliárias & mais — sites que fecham contratos no Brasil."
                    features={["Advogados", "Dentistas", "Clínicas", "Imobiliárias"]}
                    color="#10b981"
                    icon={<MapPin className="w-5 h-5 text-emerald-400" />}
                    image="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=900&q=80"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Bottom subtle indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex justify-center mt-14 md:mt-20"
            >
              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white/15 font-medium">
                <span className="w-8 h-px bg-white/10" />
                2 mercados · 14+ nichos · demos ao vivo
                <span className="w-8 h-px bg-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
