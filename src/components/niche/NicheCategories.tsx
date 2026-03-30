import { motion } from "framer-motion";
import type { NicheCategory } from "@/types/niche";

interface NicheCategoriesProps {
  categories: NicheCategory[];
}

const NicheCategories = ({ categories }: NicheCategoriesProps) => {
  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-4 md:overflow-visible">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex-shrink-0 flex flex-col items-center gap-2 bg-secondary/60 rounded-2xl px-6 py-4 min-w-[100px] hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <span className="text-2xl md:text-3xl">{cat.emoji}</span>
              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheCategories;
