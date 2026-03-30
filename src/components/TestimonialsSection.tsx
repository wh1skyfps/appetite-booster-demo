import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ana Oliveira", role: "Cliente habitual", text: "O atendimento é super rápido e a comida chega sempre quentinha. O site facilita muito na hora de escolher!", stars: 5 },
  { name: "Carlos Santos", role: "Primeira compra", text: "Fiquei impressionado com o site! Muito bonito e fácil de usar. A pizza chegou perfeita. Vou repetir com certeza.", stars: 5 },
  { name: "Maria Costa", role: "Cliente há 2 anos", text: "Pedir pelo WhatsApp é muito prático. O cardápio é lindo e bem organizado. Melhor lanchonete da zona!", stars: 5 },
  { name: "Pedro Almeida", role: "Cliente delivery", text: "A experiência no telemóvel é excelente. Consigo ver tudo, escolher e pedir em menos de 2 minutos.", stars: 5 },
  { name: "Sofia Ferreira", role: "Cliente nova", text: "Encontrei pelo Instagram e o site me convenceu. Muito profissional! O hambúrguer é incrível.", stars: 5 },
  { name: "João Rodrigues", role: "Cliente fiel", text: "Melhor combo da cidade e o site torna tudo mais fácil. Recomendo a todos os meus amigos.", stars: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            O que os clientes <span className="text-primary">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A opinião de quem já experimentou fala por si.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card rounded-2xl p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
