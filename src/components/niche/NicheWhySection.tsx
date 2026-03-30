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
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            Porquê ter um <span className="text-primary">site assim</span>?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
            Mais que um cardápio — uma ferramenta de vendas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {points.map((point, i) => {
            const Icon = iconMap[point.icon] || Star;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl p-5 md:p-7 border border-border/50"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-1 md:mb-2">{point.title}</h3>
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
