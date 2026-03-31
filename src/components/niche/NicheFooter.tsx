import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { NicheLabels } from "@/types/niche";

interface NicheFooterProps {
  name: string;
  tagline: string;
  labels: NicheLabels;
  backPath: string;
}

const NicheFooter = ({ name, tagline, labels, backPath }: NicheFooterProps) => (
  <footer id="contact" className="section-dark py-16 md:py-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="text-center md:text-left">
          <h3 className="font-extrabold text-xl md:text-2xl text-white mb-2">{name}</h3>
          <p className="text-white/35 text-sm max-w-sm">{tagline}</p>
        </div>
        <div className="flex items-center gap-4">
          <Link to={backPath} className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {labels.backLabel}
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3"
      >
        <p className="text-white/20 text-xs">© {new Date().getFullYear()} {name}. Demo by Lovable.</p>
        <p className="text-white/20 text-xs flex items-center gap-1">Made with <Heart className="w-3 h-3 text-primary/50" /> precision</p>
      </motion.div>
    </div>
  </footer>
);

export default NicheFooter;
