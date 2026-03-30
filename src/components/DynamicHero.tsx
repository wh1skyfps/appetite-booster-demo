import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { useNiche } from "@/contexts/NicheContext";

const DynamicHero = () => {
  const { selectedNiche } = useNiche();
  if (!selectedNiche) return null;

  return (
    <section id="demo" className="relative min-h-[70svh] md:min-h-[80svh] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedNiche.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={selectedNiche.heroImage}
            alt={selectedNiche.name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(135deg, hsla(${selectedNiche.accent.split(' ')[0]}, 20%, 5%, 0.88), hsla(${selectedNiche.accent.split(' ')[0]}, 30%, 8%, 0.72))`
          }} />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNiche.id + "-content"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm">{selectedNiche.emoji}</span>
              <span className="text-xs md:text-sm font-medium text-white/70">{selectedNiche.name}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5 text-white">
              {selectedNiche.heroHeadline}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/70 max-w-lg leading-relaxed">
              {selectedNiche.heroSub}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full text-base md:text-lg active:scale-[0.97] transition-all shadow-lg text-white"
                style={{ backgroundColor: `hsl(${selectedNiche.accent})` }}
              >
                <ArrowDown className="w-5 h-5" />
                Ver Cardápio
              </a>
              <a
                href="https://wa.me/351999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 btn-whatsapp font-bold px-8 py-4 rounded-full text-base md:text-lg active:scale-[0.97] transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir no WhatsApp
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DynamicHero;
