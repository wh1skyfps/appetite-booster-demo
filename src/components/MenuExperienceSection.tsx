import { motion } from "framer-motion";
import { Search, ShoppingBag, Send, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Explore o cardápio", desc: "Navegue pelas categorias e descubra todas as opções disponíveis." },
  { icon: ShoppingBag, step: "02", title: "Escolha os seus favoritos", desc: "Veja fotos, descrições e preços de cada item do menu." },
  { icon: Send, step: "03", title: "Peça pelo WhatsApp", desc: "Com um clique, envie o pedido diretamente pelo WhatsApp." },
  { icon: CheckCircle, step: "04", title: "Receba e aproveite", desc: "Rápido, prático e sem complicação. Bom apetite!" },
];

const MenuExperienceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Pedir nunca foi tão <span className="text-primary">fácil</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Uma experiência simples, rápida e moderna — do cardápio ao prato.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Passo {s.step}</span>
              <h3 className="font-bold text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuExperienceSection;
