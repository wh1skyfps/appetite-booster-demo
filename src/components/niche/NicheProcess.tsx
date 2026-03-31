import { motion } from "framer-motion";
import type { NicheProcessStep } from "@/types/niche";

interface NicheProcessProps {
  steps: NicheProcessStep[];
  title?: string;
  highlight?: string;
}

const NicheProcess = ({ steps, title, highlight }: NicheProcessProps) => (
  <section className="py-20 md:py-36 bg-background overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
          {title || "How It"} <span className="text-primary">{highlight || "Works"}</span>
        </h2>
      </motion.div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/15 via-primary/40 to-primary/15 origin-left"
        />
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center text-center px-5"
          >
            <motion.div
              whileHover={{ scale: 1.12, y: -4 }}
              className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black mb-7 relative z-10 shadow-xl shadow-primary/25 border-4 border-background"
            >
              {step.step}
            </motion.div>
            <h3 className="font-bold text-base mb-2.5">{step.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-0 relative ml-6">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent origin-top"
        />
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-6 pb-12"
          >
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-black flex-shrink-0 relative z-10 shadow-lg shadow-primary/20 border-2 border-background">
              {step.step}
            </div>
            <div className="pt-2">
              <h3 className="font-bold text-sm mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheProcess;
