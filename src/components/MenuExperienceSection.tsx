import { motion } from "framer-motion";
import { Search, ShoppingBag, Send, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Explore o cardápio", desc: "Navegue pelas categorias e descubra as opções." },
  { icon: ShoppingBag, step: "02", title: "Escolha os favoritos", desc: "Veja fotos, descrições e preços de cada item." },
  { icon: Send, step: "03", title: "Peça pelo WhatsApp", desc: "Envie o pedido diretamente pelo WhatsApp." },
  { icon: CheckCircle, step: "04", title: "Receba e aproveite", desc: "Rápido, prático e sem complicação!" },
];

const MenuExperienceSection = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            Pedir nunca foi tão <span className="text-primary">fácil</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
            Uma experiência simples, rápida e moderna — do cardápio ao prato.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-5">
                <s.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-primary tracking-widest uppercase">Passo {s.step}</span>
              <h3 className="font-bold text-sm md:text-lg mt-1.5 md:mt-2 mb-1 md:mb-2 leading-tight">{s.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuExperienceSection;
