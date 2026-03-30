import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";

const HeroCta = () => {
  return (
    <section className="section-dark py-10 md:py-14 border-t border-section-dark-foreground/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-section-dark-foreground">
            O sabor que conquista{" "}
            <span className="text-primary">no primeiro clique.</span>
          </h2>
          <p className="text-base md:text-lg text-section-dark-foreground/60 mb-8 max-w-lg mx-auto">
            Cardápio digital moderno e fácil de pedir — pensado para vender mais.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-base md:text-lg hover:brightness-110 active:scale-[0.97] transition-all shadow-lg shadow-primary/25"
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
      </div>
    </section>
  );
};

export default HeroCta;
