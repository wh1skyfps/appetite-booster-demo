import { motion } from "framer-motion";
import { Clock, FileText, MessageCircle, Truck } from "lucide-react";
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";
import burger1 from "@/assets/burger-1.jpg";
import acai1 from "@/assets/acai-1.jpg";
import pizza1 from "@/assets/pizza-1.jpg";

const trustItems = [
  { icon: Truck, label: "Entrega rápida" },
  { icon: FileText, label: "Cardápio atualizado" },
  { icon: MessageCircle, label: "Pedido fácil" },
  { icon: Clock, label: "WhatsApp direto" },
];

const menuItems = [
  { num: "01", name: "Smash Burgers", clipId: "clip-original", image: burger1 },
  { num: "02", name: "Açaí Premium", clipId: "clip-hexagons", image: acai1 },
  { num: "03", name: "Pizzas Artesanais", clipId: "clip-pixels", image: pizza1 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center section-dark overflow-hidden pt-16">
      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 text-section-dark-foreground">
              O sabor que conquista{" "}
              <span className="text-primary">no primeiro clique.</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-section-dark-foreground/70 max-w-lg leading-relaxed">
              Um cardápio digital moderno, bonito e fácil de pedir — pensado para lanchonetes e restaurantes que querem vender mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
              className="grid grid-cols-2 gap-3"
            >
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-xl px-4 py-3"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-section-dark-foreground/80">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Interactive component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden md:flex items-center justify-center"
          >
            <ConnoisseurStackInteractor items={menuItems} className="flex-col-reverse md:flex-col" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
