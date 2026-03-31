import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { NicheTestimonial, NicheLabels } from "@/types/niche";

interface NicheTestimonialsProps {
  testimonials: NicheTestimonial[];
  labels: NicheLabels;
}

const NicheTestimonials = ({ testimonials, labels }: NicheTestimonialsProps) => {
  return (
    <section className="py-20 md:py-36 bg-secondary/30 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            {labels.testimonialsTitle} <span className="text-primary">{labels.testimonialsHighlight}</span>
          </h2>
        </motion.div>
        <div className="flex gap-5 md:gap-7 overflow-x-auto scrollbar-hide pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-auto bg-card rounded-2xl md:rounded-3xl p-7 md:p-9 border border-border/40 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 relative group"
            >
              {/* Large decorative quote */}
              <div className="absolute -top-3 -left-1 text-primary/[0.06] group-hover:text-primary/10 transition-colors duration-700">
                <Quote className="w-16 h-16 md:w-20 md:h-20" />
              </div>
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <motion.div key={j} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 + j * 0.05 + 0.3 }}>
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm md:text-base mb-8 leading-relaxed text-foreground/80 italic font-light">"{t.text}"</p>
                <div className="flex items-center gap-3.5 pt-5 border-t border-border/30">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-bold text-sm ring-2 ring-primary/10">{t.name.charAt(0)}</div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
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
