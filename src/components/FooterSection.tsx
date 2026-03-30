import { MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="section-dark py-10 md:py-16 border-t border-section-dark-foreground/10">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-extrabold text-primary mb-2">🔥 SaborDigital</h3>
            <p className="text-section-dark-foreground/60 text-xs md:text-sm leading-relaxed">
              Plataforma de demonstração para negócios de comida que querem vender mais.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm md:text-base mb-2">Links</h4>
            <ul className="space-y-1.5 text-xs md:text-sm text-section-dark-foreground/60">
              <li><a href="#nichos" className="hover:text-primary transition-colors py-1 inline-block">Nichos</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors py-1 inline-block">Cardápio</a></li>
              <li><a href="#beneficios" className="hover:text-primary transition-colors py-1 inline-block">Benefícios</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors py-1 inline-block">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm md:text-base mb-2">Contacto</h4>
            <ul className="space-y-1.5 text-xs md:text-sm text-section-dark-foreground/60">
              <li>+351 912 345 678</li>
              <li>contato@sabordigital.pt</li>
              <li>Lisboa, Portugal</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-sm md:text-base mb-2">Quero algo assim</h4>
            <a
              href="https://wa.me/351999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-whatsapp font-bold px-5 py-3 rounded-full text-xs md:text-sm active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-section-dark-foreground/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] md:text-xs text-section-dark-foreground/40">
          <p>© 2026 SaborDigital. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            {["Instagram", "Facebook", "TikTok"].map((s) => (
              <a key={s} href="#" className="hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
