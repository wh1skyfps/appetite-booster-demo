import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const niches = [
  { path: "/restaurante-premium", name: "Restaurante Premium", emoji: "🍽️", desc: "Elegância e requinte para restaurantes de alta gastronomia.", color: "from-amber-900/30 to-amber-800/10" },
  { path: "/lanchonete", name: "Lanchonete", emoji: "🥪", desc: "Prático e rápido para snack bars e lanchonetes.", color: "from-red-900/30 to-red-800/10" },
  { path: "/hamburgueria-artesanal", name: "Hamburgueria Artesanal", emoji: "🍔", desc: "Dark e bold para hamburguerias premium.", color: "from-yellow-900/30 to-yellow-800/10" },
  { path: "/pizzaria", name: "Pizzaria", emoji: "🍕", desc: "Quente e familiar para pizzarias tradicionais.", color: "from-orange-900/30 to-orange-800/10" },
  { path: "/sorveteria", name: "Sorveteria", emoji: "🍦", desc: "Doce e fresco para geladerias artesanais.", color: "from-pink-900/30 to-pink-800/10" },
  { path: "/acai-delivery", name: "Açaí & Delivery", emoji: "🫐", desc: "Moderno e prático para negócios de delivery.", color: "from-purple-900/30 to-purple-800/10" },
  { path: "/cafeteria", name: "Cafeteria & Brunch", emoji: "☕", desc: "Acolhedor e editorial para cafeterias lifestyle.", color: "from-stone-900/30 to-stone-800/10" },
  { path: "/pastelaria-snacks", name: "Pastelaria & Snacks", emoji: "🥐", desc: "Dourado e convidativo para pastelarias.", color: "from-amber-900/30 to-amber-700/10" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(20,25%,6%)] text-white">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-white/50 mb-4">
              Demos de Websites para Restauração
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-5">
              Qual é o <span className="text-primary">seu nicho</span>?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Explore demos reais criadas para diferentes tipos de negócios de alimentação.
              Cada demo é única, responsiva e pronta para converter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Niche Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {niches.map((niche, i) => (
              <motion.div
                key={niche.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
              >
                <Link
                  to={niche.path}
                  className={`group block rounded-2xl border border-white/10 bg-gradient-to-br ${niche.color} p-6 md:p-7 hover:border-white/25 hover:scale-[1.02] transition-all duration-300 min-h-[180px] flex flex-col justify-between`}
                >
                  <div>
                    <span className="text-3xl md:text-4xl mb-3 block">{niche.emoji}</span>
                    <h2 className="font-extrabold text-lg md:text-xl mb-2 text-white group-hover:text-primary transition-colors">
                      {niche.name}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {niche.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver demo <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="container text-center">
          <p className="text-white/30 text-sm">
            Demos criadas com Lovable · Cada site é totalmente personalizável
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
