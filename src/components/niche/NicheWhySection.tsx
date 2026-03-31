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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
    {points.map((point, i) => {
      const Icon = iconMap[point.icon] || Star;
      return (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="bg-card rounded-2xl md:rounded-3xl p-7 md:p-9 border border-border/40 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
        >
          {/* Subtle corner glow on hover */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <div className="w-13 h-13 md:w-15 md:h-15 bg-primary/10 group-hover:bg-primary/15 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/10">
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <h3 className="font-bold text-base md:text-lg mb-2.5">{point.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

const AlternatingLayout = ({ points }: { points: NicheWhyPoint[] }) => (
  <div className="max-w-3xl mx-auto space-y-10 md:space-y-16">
    {points.map((point, i) => {
      const Icon = iconMap[point.icon] || Star;
      const isEven = i % 2 === 0;
      return (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-start gap-7 ${isEven ? "" : "flex-row-reverse text-right"}`}
        >
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/5">
            <Icon className="w-7 h-7 text-primary" />
          </motion.div>
          <div>
            <h3 className="font-bold text-lg md:text-xl mb-2.5">{point.title}</h3>
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ x: 6, transition: { duration: 0.3 } }}
          className="flex items-start gap-5 p-6 md:p-7 bg-card rounded-2xl border border-border/40 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group"
        >
          <div className="w-11 h-11 bg-primary text-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm md:text-base mb-1.5">{point.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{point.desc}</p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

const IconRowLayout = ({ points }: { points: NicheWhyPoint[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 text-center">
    {points.map((point, i) => {
      const Icon = iconMap[point.icon] || Star;
      return (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div whileHover={{ scale: 1.08, y: -4 }} className="w-18 h-18 md:w-22 md:h-22 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-7 border border-primary/10 shadow-lg shadow-primary/5 transition-shadow hover:shadow-primary/15">
            <Icon className="w-8 h-8 md:w-9 md:h-9 text-primary" />
          </motion.div>
          <h3 className="font-bold text-base md:text-lg mb-2.5">{point.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{point.desc}</p>
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
    <section className="py-20 md:py-36 bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-20"
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
