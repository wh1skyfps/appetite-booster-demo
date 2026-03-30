import { MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="section-dark py-12 md:py-16 border-t border-section-dark-foreground/10">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-extrabold text-primary mb-3">🔥 SaborDigital</h3>
            <p className="text-section-dark-foreground/60 text-sm leading-relaxed">
              O sabor que conquista, agora com a experiência digital que o seu negócio merece.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Menu</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/60">
              <li><a href="#cardapio" className="hover:text-primary transition-colors">Cardápio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Promoções</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/60">
              <li>+351 912 345 678</li>
              <li>contato@sabordigital.pt</li>
              <li>Rua do Sabor, 123 — Lisboa</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Faça já o seu pedido</h4>
            <a
              href="https://wa.me/351999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-whatsapp font-bold px-6 py-3 rounded-full text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-section-dark-foreground/40">
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
