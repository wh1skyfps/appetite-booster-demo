import { motion } from "framer-motion";
import type { NicheCategory } from "@/types/niche";

interface NicheCategoriesProps {
  categories: NicheCategory[];
}

const NicheCategories = ({ categories }: NicheCategoriesProps) => {
  return (
    <section className="py-10 md:py-16 bg-background overflow-hidden">
      <div className="container">
        <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-4 md:overflow-visible">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex-shrink-0 flex flex-col items-center gap-2.5 bg-secondary/60 hover:bg-primary/10 rounded-2xl px-6 sm:px-7 py-5 sm:py-6 min-w-[100px] transition-colors duration-300 cursor-pointer group border border-transparent hover:border-primary/10"
            >
              <span className="text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110">{cat.emoji}</span>
              <span className="text-[11px] sm:text-sm font-semibold whitespace-nowrap text-foreground/80 group-hover:text-foreground transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheCategories;
