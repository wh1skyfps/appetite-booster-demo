import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { NicheStat } from "@/types/niche";

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const numericPart = value.replace(/[^0-9]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    if (!inView || !numericPart) { setDisplay(value); return; }
    const target = parseInt(numericPart);
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value, numericPart, prefix, suffix]);

  return <span ref={ref}>{numericPart ? display : value}</span>;
};

interface NicheStatsBarProps {
  stats: NicheStat[];
  title?: string;
}

const NicheStatsBar = ({ stats, title }: NicheStatsBarProps) => (
  <section className="py-12 md:py-20 section-dark">
    <div className="container">
      {title && (
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm uppercase tracking-[0.2em] text-white/30 font-bold mb-10">
          {title}
        </motion.p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
              <AnimatedNumber value={stat.value} />
            </p>
            <p className="text-white/50 text-xs sm:text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheStatsBar;
