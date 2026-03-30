import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "Destaques", href: "#destaques" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-section-dark/90 backdrop-blur-md border-b border-section-dark-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-extrabold text-primary">🔥 SaborDigital</a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-section-dark-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/351999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp font-bold px-5 py-2 rounded-full text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-section-dark-foreground p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-section-dark/95 border-t border-section-dark-foreground/10"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-section-dark-foreground/80 font-medium py-2 hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/351999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 btn-whatsapp font-bold px-6 py-3 rounded-full text-sm mt-2"
              >
                <MessageCircle className="w-4 h-4" />
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
