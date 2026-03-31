import { motion } from "framer-motion";
import { Globe, Smartphone, TrendingUp, Clock, Star, Zap, Shield, Award, Users, Target, CheckCircle, Sparkles, Heart, Eye, Briefcase, Building } from "lucide-react";
import type { NicheWhyPoint, NicheLabels, WhyLayout } from "@/types/niche";

const iconMap: Record<string, React.ElementType> = {
  globe: Globe, smartphone: Smartphone, trending: TrendingUp, clock: Clock,
  star: Star, zap: Zap, shield: Shield, award: Award, users: Users,
  target: Target, check: CheckCircle, sparkles: Sparkles, heart: Heart,
  eye: Eye, briefcase: Briefcase, building: Building,
};

interface NicheWhySectionProps {
  points: NicheWhyPoint[];
  labels: NicheLabels;
  layout?: WhyLayout;
}

const GridLayout = ({ points }: { points: NicheWhyPoint[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {points.map((point, i) => {
      const Icon = iconMap[point.icon] || Star;
      return (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/40 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 group-hover:bg-primary/15 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <h3 className="font-bold text-sm md:text-base mb-2">{point.title}</h3>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{point.desc}</p>
        </motion.div>
      );
    })}
  </div>
);

const AlternatingLayout = ({ points }: { points: NicheWhyPoint[] }) => (
  <div className="max-w-3xl mx-auto space-y-8 md:space-y-14">
    {points.map((point, i) => {
      const Icon = iconMap[point.icon] || Star;
      const isEven = i % 2 === 0;
      return (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-start gap-6 ${isEven ? "" : "flex-row-reverse text-right"}`}
        >
          <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <div>
            <h3 className="font-bold text-base md:text-lg mb-2">{point.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

const CenteredListLayout = ({ points }: { points: NicheWhyPoint[] }) => (
  <div className="max-w-2xl mx-auto space-y-5">
    {points.map((point, i) => {
      const Icon = iconMap[point.icon] || Star;
      return (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ x: 4 }}
          className="flex items-start gap-5 p-5 md:p-6 bg-card rounded-2xl border border-border/40 hover:border-primary/20 hover:shadow-lg transition-all duration-500"
        >
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm md:text-base mb-1">{point.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{point.desc}</p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

const IconRowLayout = ({ points }: { points: NicheWhyPoint[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14 text-center">
    {points.map((point, i) => {
      const Icon = iconMap[point.icon] || Star;
      return (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div whileHover={{ scale: 1.05 }} className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/10">
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
          </motion.div>
          <h3 className="font-bold text-base md:text-lg mb-2">{point.title}</h3>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-xs mx-auto">{point.desc}</p>
        </motion.div>
      );
    })}
  </div>
);

const layouts: Record<WhyLayout, React.FC<{ points: NicheWhyPoint[] }>> = {
  grid: GridLayout,
  alternating: AlternatingLayout,
  "centered-list": CenteredListLayout,
  "icon-row": IconRowLayout,
};

const NicheWhySection = ({ points, labels, layout = "grid" }: NicheWhySectionProps) => {
  const Layout = layouts[layout];
  return (
    <section className="py-16 md:py-32 bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-18"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            {labels.whyTitle} <span className="text-primary">{labels.whyHighlight}</span>?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-lg mx-auto">{labels.whySubtitle}</p>
        </motion.div>
        <Layout points={points} />
      </div>
    </section>
  );
};

export default NicheWhySection;
