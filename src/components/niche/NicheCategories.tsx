import { motion } from "framer-motion";
import type { NicheCategory } from "@/types/niche";

interface NicheCategoriesProps {
  categories: NicheCategory[];
}

const NicheCategories = ({ categories }: NicheCategoriesProps) => {
  return (
    <section className="py-8 md:py-14 bg-background">
      <div className="container">
        <div className="flex gap-2.5 sm:gap-3 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-4 md:overflow-visible">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
              className="flex-shrink-0 flex flex-col items-center gap-2 bg-secondary/60 hover:bg-primary/10 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 min-w-[90px] transition-all duration-300 cursor-pointer hover:shadow-md group"
            >
              <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <span className="text-[11px] sm:text-sm font-semibold whitespace-nowrap text-foreground/80 group-hover:text-foreground transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheCategories;
