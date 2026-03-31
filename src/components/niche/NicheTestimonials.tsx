import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { NicheTestimonial, NicheLabels } from "@/types/niche";

interface NicheTestimonialsProps {
  testimonials: NicheTestimonial[];
  labels: NicheLabels;
}

const NicheTestimonials = ({ testimonials, labels }: NicheTestimonialsProps) => {
  return (
    <section className="py-16 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            {labels.testimonialsTitle} <span className="text-primary">{labels.testimonialsHighlight}</span>
          </h2>
        </motion.div>
        <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-auto bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/40 hover:border-primary/15 hover:shadow-xl transition-all duration-500 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/[0.06] group-hover:text-primary/10 transition-colors duration-500" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm md:text-base mb-6 leading-relaxed text-foreground/85 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{t.name.charAt(0)}</div>
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
