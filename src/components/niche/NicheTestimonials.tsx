import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { NicheTestimonial } from "@/types/niche";

interface NicheTestimonialsProps {
  testimonials: NicheTestimonial[];
}

const NicheTestimonials = ({ testimonials }: NicheTestimonialsProps) => {
  return (
    <section className="py-14 md:py-28 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            O que dizem os <span className="text-primary">clientes</span>
          </h2>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-[300px] md:w-auto bg-card rounded-2xl p-6 md:p-8 border border-border/40 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/10" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm md:text-base mb-5 leading-relaxed text-foreground/85">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheTestimonials;
