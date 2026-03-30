import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface NicheWhatsAppCtaProps {
  ctaText: string;
  ctaSubtext: string;
  whatsappNumber: string;
}

const NicheWhatsAppCta = ({ ctaText, ctaSubtext, whatsappNumber }: NicheWhatsAppCtaProps) => {
  return (
    <section className="py-12 md:py-20 section-dark">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-whatsapp/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-whatsapp" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-white">
            {ctaText}
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8">
            {ctaSubtext}
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 active:scale-95 min-h-[52px]"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NicheWhatsAppCta;
