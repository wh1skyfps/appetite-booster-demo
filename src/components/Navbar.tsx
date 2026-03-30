import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { useNiche } from "@/contexts/NicheContext";

const links = [
  { label: "Nichos", href: "#nichos" },
  { label: "Cardápio", href: "#menu" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { selectedNiche, clearNiche } = useNiche();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-section-dark/90 backdrop-blur-md border-b border-section-dark-foreground/10">
      <div className="container flex items-center justify-between h-14 md:h-16">
        <button onClick={clearNiche} className="text-lg md:text-xl font-extrabold text-primary">
          🔥 SaborDigital
        </button>

        {selectedNiche && (
          <div className="hidden lg:flex items-center gap-1.5 bg-section-dark-foreground/5 rounded-full px-3 py-1">
            <span className="text-sm">{selectedNiche.emoji}</span>
            <span className="text-xs font-medium text-section-dark-foreground/60">{selectedNiche.name}</span>
          </div>
        )}

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-section-dark-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/351999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp font-bold px-5 py-2.5 rounded-full text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-section-dark-foreground p-3 -mr-3 min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-section-dark/98 border-t border-section-dark-foreground/10"
          >
            <div className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-section-dark-foreground/80 font-medium py-3.5 px-2 text-base hover:text-primary active:bg-section-dark-foreground/5 rounded-xl transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/351999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 btn-whatsapp font-bold px-6 py-4 rounded-full text-base mt-3"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
