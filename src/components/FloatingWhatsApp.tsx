import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/351999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 btn-whatsapp rounded-full flex items-center justify-center shadow-2xl shadow-whatsapp/40 hover:scale-110 active:scale-95 transition-transform"
      aria-label="Pedir no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
