import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import type { NicheLabels } from "@/types/niche";

interface NicheWhatsAppCtaProps {
  ctaText: string;
  ctaSubtext: string;
  whatsappNumber: string;
  labels: NicheLabels;
}

const NicheWhatsAppCta = ({ ctaText, ctaSubtext, whatsappNumber, labels }: NicheWhatsAppCtaProps) => {
  return (
    <section className="py-24 md:py-40 section-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary rounded-full blur-[150px]"
        />
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <div className="container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 14 }}
            className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/10 relative"
          >
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.6], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-primary/30"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-white leading-tight"
          >
            {ctaText}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/45 text-sm md:text-lg mb-12 leading-relaxed"
          >
            {ctaSubtext}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-12 py-5 rounded-full text-base transition-all hover:brightness-110 min-h-[60px] shadow-2xl shadow-primary/25 group"
          >
            <MessageCircle className="w-5 h-5" />
            {labels.ctaButtonLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NicheWhatsAppCta;
