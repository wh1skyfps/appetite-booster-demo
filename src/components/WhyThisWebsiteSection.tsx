import { motion } from "framer-motion";
import { LayoutGrid, Smartphone, Star, ThumbsUp, MessageSquare, Eye } from "lucide-react";

const benefits = [
  { icon: LayoutGrid, title: "Cardápio bonito e organizado", desc: "Apresente os seus produtos de forma moderna e atrativa." },
  { icon: ThumbsUp, title: "Mais facilidade para o cliente pedir", desc: "Navegação intuitiva que converte visitas em pedidos." },
  { icon: Eye, title: "Melhor imagem online", desc: "Transmita profissionalismo e conquiste novos clientes." },
  { icon: Star, title: "Mais confiança para novos clientes", desc: "Um site bonito passa credibilidade e segurança." },
  { icon: MessageSquare, title: "Mais praticidade no WhatsApp", desc: "Pedidos diretos pelo WhatsApp, sem complicação." },
  { icon: Smartphone, title: "Melhor experiência no telemóvel", desc: "100% responsivo e otimizado para mobile." },
];

const WhyThisWebsiteSection = () => {
  return (
    <section className="py-16 md:py-24 section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Por que ter um site <span className="text-primary">assim?</span>
          </h2>
          <p className="text-section-dark-foreground/70 text-lg max-w-lg mx-auto">
            Um site moderno transforma a forma como o seu negócio é visto e como os clientes pedem.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-2xl p-6 hover:bg-section-dark-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-section-dark-foreground/60 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisWebsiteSection;
