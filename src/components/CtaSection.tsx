import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-12 md:py-24 section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
            Receba pedidos de forma mais <span className="text-primary">profissional</span>, prática e bonita.
          </h2>
          <p className="text-section-dark-foreground/70 text-base md:text-lg mb-8 md:mb-10 max-w-lg mx-auto">
            Mostre aos seus clientes que o seu negócio é moderno, organizado e fácil de pedir.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/351999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-whatsapp font-bold px-8 py-4 rounded-full text-base md:text-lg active:scale-[0.97] transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir no WhatsApp
            </a>
            <a
              href="#nichos"
              className="inline-flex items-center justify-center gap-2 border-2 border-section-dark-foreground/15 text-section-dark-foreground font-bold px-8 py-4 rounded-full text-base md:text-lg hover:bg-section-dark-foreground/5 active:scale-[0.97] transition-all"
            >
              Quero Algo Assim
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
