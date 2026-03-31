import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowLeft, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NicheLabels } from "@/types/niche";

interface NicheNavbarProps {
  name: string;
  whatsappNumber?: string;
  labels: NicheLabels;
  backPath: string;
}

const NicheNavbar = ({ name, whatsappNumber, labels, backPath }: NicheNavbarProps) => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: labels.navServices, href: "#services" },
    { label: labels.navAbout, href: "#about" },
    { label: labels.navContact, href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    if (href === "#") return window.scrollTo({ top: 0, behavior: "smooth" });
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2.5">
          <Link to={backPath} className="p-2 -ml-2 rounded-lg hover:bg-secondary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </Link>
          <button onClick={() => scrollTo("#")} className="font-extrabold text-base sm:text-lg tracking-tight truncate max-w-[160px] sm:max-w-none">
            {name}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5">
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.href)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </button>
          ))}
          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full text-xs transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              {labels.navCta}
            </a>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background"
          >
            <div className="container py-3 flex flex-col gap-1">
              {links.map(l => (
                <button key={l.label} onClick={() => scrollTo(l.href)} className="text-left py-3 px-4 rounded-lg font-medium hover:bg-secondary transition-colors min-h-[48px]">
                  {l.label}
                </button>
              ))}
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-lg text-sm mt-2 min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  {labels.navCta}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NicheNavbar;
