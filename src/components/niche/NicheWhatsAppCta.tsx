import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import type { NicheLabels } from "@/types/niche";

interface NicheWhatsAppCtaProps {
  ctaText: string;
  ctaSubtext: string;
  whatsappNumber: string;
  labels: NicheLabels;
}

const NicheWhatsAppCta = ({ ctaText, ctaSubtext, whatsappNumber, labels }: NicheWhatsAppCtaProps) => {
  return (
    <section className="py-20 md:py-32 section-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.08] rounded-full blur-[120px]" />
      </div>
      <div className="container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-18 h-18 md:w-22 md:h-22 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/10"
          >
            <MessageCircle className="w-9 h-9 md:w-11 md:h-11 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-white leading-tight"
          >
            {ctaText}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/50 text-sm md:text-lg mb-10 leading-relaxed"
          >
            {ctaSubtext}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full text-base transition-colors hover:brightness-110 min-h-[56px] shadow-xl shadow-primary/20 group"
          >
            <MessageCircle className="w-5 h-5" />
            {labels.ctaButtonLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NicheWhatsAppCta;
