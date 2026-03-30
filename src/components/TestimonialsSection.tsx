import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ana Oliveira", role: "Dona de Hamburgueria", text: "O site mudou completamente a imagem do meu negócio. Os pedidos pelo WhatsApp triplicaram!", stars: 5 },
  { name: "Carlos Santos", role: "Dono de Pizzaria", text: "O cardápio ficou tão bonito que os clientes dizem que dá mais fome só de ver o site.", stars: 5 },
  { name: "Maria Costa", role: "Dona de Lanchonete", text: "Nunca pensei que o meu negócio pudesse parecer tão profissional online. Estou impressionada!", stars: 5 },
  { name: "Pedro Almeida", role: "Dono de Cafeteria", text: "A experiência no telemóvel é perfeita. Os clientes adoram pedir pelo site.", stars: 5 },
  { name: "Sofia Ferreira", role: "Dona de Açaí", text: "O visual do site vende sozinho. Os novos clientes chegam já decididos a pedir.", stars: 5 },
  { name: "João Rodrigues", role: "Dono de Restaurante", text: "Profissionalismo total. O site elevou a percepção do meu restaurante.", stars: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            O que os donos <span className="text-primary">dizem</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            Negócios reais que transformaram a sua presença online.
          </p>
        </motion.div>

        <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide pb-2">
          <div className="flex gap-4 w-max">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-5 shadow-sm w-72 flex-shrink-0">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
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
