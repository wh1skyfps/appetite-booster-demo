import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, MapPin, ArrowRight, Sparkles } from "lucide-react";

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
                <Link to="/global" className="block group">
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 bg-white/[0.02]">
                    <div className="aspect-[16/10] md:aspect-[4/3] relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
                        alt="International market"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,3%)] via-[hsl(220,15%,3%)]/60 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-md bg-blue-500/15 flex items-center justify-center">
                          <Globe className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400/80">International</span>
                      </div>
                      <h2 className="text-xl md:text-3xl font-extrabold text-white/95 mb-1.5 tracking-tight">Global Market</h2>
                      <p className="text-white/35 text-xs sm:text-sm mb-5 max-w-xs leading-relaxed">
                        Premium demos for US, UK & Portugal — law firms, med spas, real estate & more.
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/30 group-hover:text-white/70 transition-all duration-300 tracking-wide uppercase">
                        Explore demos
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>

                    {/* Hover shine */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-blue-500/[0.05] via-transparent to-transparent" />
                  </div>
                </Link>
              </motion.div>

              {/* Brasil Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/brasil" className="block group">
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 bg-white/[0.02]">
                    <div className="aspect-[16/10] md:aspect-[4/3] relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=900&q=80"
                        alt="Brasil market"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,3%)] via-[hsl(220,15%,3%)]/60 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-md bg-emerald-500/15 flex items-center justify-center">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400/80">Brasil</span>
                      </div>
                      <h2 className="text-xl md:text-3xl font-extrabold text-white/95 mb-1.5 tracking-tight">Mercado Brasileiro</h2>
                      <p className="text-white/35 text-xs sm:text-sm mb-5 max-w-xs leading-relaxed">
                        Demos premium para advogados, dentistas, clínicas, imobiliárias & mais.
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/30 group-hover:text-white/70 transition-all duration-300 tracking-wide uppercase">
                        Explorar demos
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-emerald-500/[0.05] via-transparent to-transparent" />
                  </div>
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
