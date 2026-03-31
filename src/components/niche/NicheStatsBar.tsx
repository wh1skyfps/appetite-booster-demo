import { motion, useInView } from "framer-motion";
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
    const duration = 2000;
    const steps = 50;
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
  <section className="py-14 md:py-24 section-dark relative overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
      backgroundSize: '40px 40px',
    }} />
    <div className="container relative z-10">
      {title && (
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-xs uppercase tracking-[0.25em] text-white/25 font-bold mb-12">
          {title}
        </motion.p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">
              <AnimatedNumber value={stat.value} />
            </p>
            <p className="text-white/40 text-xs sm:text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheStatsBar;
