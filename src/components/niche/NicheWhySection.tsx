import { motion } from "framer-motion";
import { Globe, Smartphone, TrendingUp, Clock, Star, Zap } from "lucide-react";
import type { NicheWhyPoint } from "@/types/niche";

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  smartphone: Smartphone,
  trending: TrendingUp,
  clock: Clock,
  star: Star,
  zap: Zap,
};

interface NicheWhySectionProps {
  points: NicheWhyPoint[];
}

const NicheWhySection = ({ points }: NicheWhySectionProps) => {
  return (
    <section className="py-14 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            Porquê ter um <span className="text-primary">site assim</span>?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-lg mx-auto">
            Mais que um cardápio — uma ferramenta de vendas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {points.map((point, i) => {
            const Icon = iconMap[point.icon] || Star;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border/40 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 group-hover:bg-primary/15 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NicheWhySection;
