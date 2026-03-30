import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface NicheHeroProps {
  name: string;
  tagline: string;
  subtitle: string;
  image: string;
  overlay: string;
  whatsappNumber: string;
}

const NicheHero = ({ name, tagline, subtitle, image, overlay, whatsappNumber }: NicheHeroProps) => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ background: overlay }} />
      </div>

      <div className="container relative z-10 py-12 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 text-white/70"
          >
            {name}
          </motion.span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-[1.1]">
            {tagline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#cardapio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#cardapio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all hover:scale-105 active:scale-95 min-h-[48px]"
            >
              Ver Cardápio
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-whatsapp font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all hover:scale-105 active:scale-95 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NicheHero;
