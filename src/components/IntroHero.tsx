import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const IntroHero = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center section-dark relative overflow-hidden pt-14">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-section-dark-foreground/60">
              Demonstração interativa para negócios de comida
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-section-dark-foreground">
            Escolha o estilo ideal{" "}
            <span className="text-primary">para o seu negócio.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-section-dark-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Visualize como o seu restaurante, lanchonete ou marca de comida pode parecer muito mais profissional online.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16">
            <a
              href="#nichos"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-base md:text-lg hover:brightness-110 active:scale-[0.97] transition-all shadow-lg shadow-primary/25"
            >
              Escolher Nicho
            </a>
            <a
              href="#nichos"
              className="inline-flex items-center justify-center gap-2 border-2 border-section-dark-foreground/15 text-section-dark-foreground/80 font-bold px-8 py-4 rounded-full text-base md:text-lg hover:bg-section-dark-foreground/5 active:scale-[0.97] transition-all"
            >
              Ver Demonstração
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center"
          >
            <a href="#nichos" className="text-section-dark-foreground/30 animate-bounce">
              <ChevronDown className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroHero;
