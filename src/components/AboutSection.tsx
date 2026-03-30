import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Feito com paixão, servido com <span className="text-primary">sabor.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Somos mais do que uma lanchonete — somos uma experiência. Cada ingrediente é escolhido com cuidado, cada receita é preparada com dedicação e cada pedido é tratado com respeito.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nascemos da vontade de trazer sabor de qualidade com atendimento moderno. Do nosso forno para a sua mesa, a nossa missão é fazer cada refeição ser especial.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">5+</p>
                <p className="text-xs text-muted-foreground mt-1">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">10k+</p>
                <p className="text-xs text-muted-foreground mt-1">Pedidos entregues</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">4.9</p>
                <p className="text-xs text-muted-foreground mt-1">Avaliação média</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroBurger}
                alt="A nossa cozinha"
                loading="lazy"
                width={1920}
                height={1080}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
