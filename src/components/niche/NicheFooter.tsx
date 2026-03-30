import { Link } from "react-router-dom";

interface NicheFooterProps {
  name: string;
  tagline: string;
}

const NicheFooter = ({ name, tagline }: NicheFooterProps) => {
  return (
    <footer className="py-10 md:py-14 section-dark">
      <div className="container text-center">
        <p className="font-extrabold text-lg text-white mb-1">{name}</p>
        <p className="text-white/60 text-sm mb-6">{tagline}</p>
        <div className="flex items-center justify-center gap-4 text-sm text-white/40">
          <Link to="/" className="hover:text-white/70 transition-colors">
            ← Voltar ao Hub
          </Link>
          <span>•</span>
          <span>Demo by Lovable</span>
        </div>
      </div>
    </footer>
  );
};

export default NicheFooter;
