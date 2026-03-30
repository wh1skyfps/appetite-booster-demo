import { motion } from "framer-motion";
import { Clock, FileText, MessageCircle, Truck } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

const trustItems = [
  { icon: Truck, label: "Entrega rápida" },
  { icon: FileText, label: "Cardápio atualizado" },
  { icon: MessageCircle, label: "Pedido fácil" },
  { icon: Clock, label: "WhatsApp direto" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Hambúrguer gourmet artesanal"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(20,30%,5%,0.88), hsla(24,50%,8%,0.72))" }} />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-section-dark-foreground">
            O sabor que conquista{" "}
            <span className="text-primary">no primeiro clique.</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-section-dark-foreground/80 max-w-lg leading-relaxed">
            Um cardápio digital moderno, bonito e fácil de pedir — pensado para lanchonetes e restaurantes que querem vender mais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/30"
            >
              Ver Cardápio
            </a>
            <a
              href="https://wa.me/351999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-whatsapp font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir no WhatsApp
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-section-dark-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-section-dark-foreground/90">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
