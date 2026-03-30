import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { NicheTestimonial } from "@/types/niche";

interface NicheTestimonialsProps {
  testimonials: NicheTestimonial[];
}

const NicheTestimonials = ({ testimonials }: NicheTestimonialsProps) => {
  return (
    <section className="py-12 md:py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            O que dizem os <span className="text-primary">clientes</span>
          </h2>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-[280px] md:w-auto bg-card rounded-2xl p-5 md:p-7 border border-border/50"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm md:text-base mb-4 leading-relaxed text-foreground/90">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheTestimonials;
