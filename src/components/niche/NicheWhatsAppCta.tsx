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
    <section className="py-14 md:py-24 section-dark">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-white">{ctaText}</h2>
          <p className="text-white/60 text-sm md:text-lg mb-8 leading-relaxed">{ctaSubtext}</p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full text-base transition-all hover:scale-105 active:scale-95 min-h-[56px] shadow-lg group"
          >
            <MessageCircle className="w-5 h-5" />
            {labels.ctaButtonLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NicheWhatsAppCta;
