import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { NicheLabels } from "@/types/niche";

interface NicheFooterProps {
  name: string;
  tagline: string;
  labels: NicheLabels;
  backPath: string;
}

const NicheFooter = ({ name, tagline, labels, backPath }: NicheFooterProps) => {
  return (
    <footer className="py-12 md:py-16 section-dark">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="font-extrabold text-xl text-white mb-1">{name}</p>
          <p className="text-white/50 text-sm mb-8 max-w-sm">{tagline}</p>
          <Link to={backPath} className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {labels.backLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default NicheFooter;
