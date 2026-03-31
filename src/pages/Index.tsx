import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, MapPin, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(220,20%,4%)] text-white">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-white/25 mb-6">
              Premium Demo Showcase
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-[1.05] mb-6">
              Escolha o seu{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">mercado</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/35 max-w-2xl mx-auto leading-relaxed">
              Uma vitrine premium de demonstrações pensadas para nichos que realmente compram presença online profissional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              <Link to="/global" className="block group">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/4] border border-white/5 hover:border-white/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="International" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-blue-400" />
                      <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-blue-400">International</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">Global Market</h2>
                    <p className="text-white/45 text-xs sm:text-sm md:text-base mb-5 max-w-sm">Premium website demos for high-ticket niches in the US, UK & Portugal markets.</p>
                    <div className="inline-flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-sm font-medium">
                      Explore demos <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>
              <Link to="/brasil" className="block group">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/4] border border-white/5 hover:border-white/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80" alt="Brasil" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-green-400">Brasil</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">Mercado Brasileiro</h2>
                    <p className="text-white/45 text-xs sm:text-sm md:text-base mb-5 max-w-sm">Demos premium para nichos de alto valor no mercado brasileiro.</p>
                    <div className="inline-flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-sm font-medium">
                      Explorar demos <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
