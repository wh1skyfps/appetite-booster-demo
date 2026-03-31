import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { NicheLabels } from "@/types/niche";

interface NicheFooterProps {
  name: string;
  tagline: string;
  labels: NicheLabels;
  backPath: string;
}

const NicheFooter = ({ name, tagline, labels, backPath }: NicheFooterProps) => {
  return (
    <footer className="py-14 md:py-20 section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/[0.04] rounded-full blur-[80px]" />
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-extrabold text-xl md:text-2xl text-white mb-2">{name}</p>
            <p className="text-white/40 text-sm mb-10 max-w-sm leading-relaxed">{tagline}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to={backPath} className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              {labels.backLabel}
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10 pt-8 border-t border-white/[0.06] w-full max-w-xs">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium">Demo Showcase</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default NicheFooter;
