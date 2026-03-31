import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { NicheProcessStep } from "@/types/niche";

interface NicheProcessProps {
  steps: NicheProcessStep[];
  title?: string;
  highlight?: string;
}

const NicheProcess = ({ steps, title, highlight }: NicheProcessProps) => (
  <section className="py-14 md:py-28 bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
          {title || "How It"} <span className="text-primary">{highlight || "Works"}</span>
        </h2>
      </motion.div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
        {/* Connecting line */}
        <div className="absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-border" />
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative flex flex-col items-center text-center px-4"
          >
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-black mb-6 relative z-10 shadow-lg shadow-primary/20">
              {step.step}
            </div>
            <h3 className="font-bold text-base mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-0 relative ml-6">
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-border" />
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex gap-5 pb-8"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-black flex-shrink-0 relative z-10 shadow-md">
              {step.step}
            </div>
            <div className="pt-1.5">
              <h3 className="font-bold text-sm mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheProcess;
