import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.jpg";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="text-primary font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3 block">Sobre Nós</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 leading-tight">
              Feito com paixão, servido com <span className="text-primary">sabor.</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              Somos mais do que uma lanchonete — somos uma experiência. Cada ingrediente é escolhido com cuidado, cada receita preparada com dedicação.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              Do nosso forno para a sua mesa, a nossa missão é fazer cada refeição ser especial.
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="text-center bg-secondary/80 rounded-xl py-3 md:py-4">
                <p className="text-2xl md:text-3xl font-extrabold text-primary">5+</p>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">Anos</p>
              </div>
              <div className="text-center bg-secondary/80 rounded-xl py-3 md:py-4">
                <p className="text-2xl md:text-3xl font-extrabold text-primary">10k+</p>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">Pedidos</p>
              </div>
              <div className="text-center bg-secondary/80 rounded-xl py-3 md:py-4">
                <p className="text-2xl md:text-3xl font-extrabold text-primary">4.9</p>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">Avaliação</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroBurger}
                alt="A nossa cozinha"
                loading="lazy"
                width={1920}
                height={1080}
                className="w-full h-56 sm:h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
