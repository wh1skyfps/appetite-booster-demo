import type { NicheConfig } from "@/types/niche";
const br = { navServices: "Serviços", navAbout: "Sobre", navContact: "Contato", navCta: "Orçamento", heroCtaPrimary: "Nossos Serviços", heroCtaSecondary: "Pedir Orçamento", servicesTitle: "Nossos", servicesHighlight: "Serviços", servicesSubtitle: "Proteção e beleza para o seu veículo.", servicesCta: "Orçar", whyTitle: "Por que ter um", whyHighlight: "site premium", whySubtitle: "Seu negócio merece uma presença online à altura.", testimonialsTitle: "O que dizem nossos", testimonialsHighlight: "clientes", locationTitle: "Onde", locationHighlight: "estamos", ctaButtonLabel: "Solicitar Orçamento", backLabel: "Voltar às Demos" };
export const esteticaAutomotivaConfig: NicheConfig = {
  id: "estetica-automotiva", name: "Black Diamond Auto", tagline: "Seu Carro Merece o Melhor",
  heroSubtitle: "Estética automotiva premium. Polimento técnico, vitrificação, PPF e detalhamento que transformam seu veículo.",
  heroImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=80",
  heroStyle: "bold", cardStyle: "bold",
  theme: { primary: "0 75% 45%", primaryForeground: "0 0% 100%", accent: "0 30% 20%", heroOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75))", sectionDark: "0 15% 7%", sectionDarkForeground: "0 0% 95%" },
  categories: [
    { name: "Polimento", emoji: "✨" }, { name: "Vitrificação", emoji: "🛡️" }, { name: "PPF", emoji: "🔒" },
    { name: "Higienização", emoji: "🧹" }, { name: "Rodas", emoji: "⚙️" }, { name: "Completo", emoji: "💎" },
  ],
  products: [
    { name: "Vitrificação 9H", desc: "Coating cerâmico profissional com proteção de até 3 anos.", price: "2.500", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80", tag: "Premium" },
    { name: "PPF Frente Completa", desc: "Película protetora transparente auto-regenerativa para capô, para-choque e faróis.", price: "5.000", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80", tag: "Ultimate" },
    { name: "Polimento Técnico", desc: "Correção de pintura em 3 etapas para remover riscos e hologramas.", price: "800", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80" },
    { name: "Higienização Interna", desc: "Limpeza profunda com ozônio, couro hidratado e tecidos higienizados.", price: "400", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" },
    { name: "Pacote Completo", desc: "Polimento + vitrificação + higienização interna. O tratamento definitivo.", price: "3.500", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", tag: "Mais Pedido" },
    { name: "Rodas e Pneus", desc: "Limpeza profunda de rodas, selante cerâmico e pretinho de pneu premium.", price: "250", image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Mostre seu Trabalho", desc: "Galeria antes e depois que vende melhor que qualquer texto.", icon: "sparkles" },
    { title: "Orçamentos Online", desc: "Clientes pedem orçamento direto pelo site.", icon: "zap" },
    { title: "Domine o Google Local", desc: "Apareça em primeiro para 'estética automotiva perto de mim'.", icon: "target" },
  ],
  testimonials: [
    { name: "Felipe Souza", text: "Meu BMW ficou melhor que zero km. Trabalho impecável!", role: "Dono de BMW" },
    { name: "André Costa", text: "A vitrificação é surreal. A água simplesmente escorre. Vale cada centavo.", role: "Dono de Mercedes" },
    { name: "Gustavo Ramos", text: "Melhor estética automotiva da cidade. Meu Porsche nunca esteve tão bonito.", role: "Dono de Porsche" },
  ],
  ctaText: "Quer um Orçamento?", ctaSubtext: "Conte-nos sobre seu veículo e montamos um pacote personalizado para você.",
  whatsappNumber: "5511966665555", location: { address: "Rua dos Pinheiros, 1500 - Pinheiros, São Paulo - SP", hours: "Seg-Sáb: 8h - 18h", phone: "(11) 96666-5555", mapQuery: "estetica automotiva Pinheiros Sao Paulo" },
  footerTagline: "Cuidado premium para veículos premium.", currency: "R$", backPath: "/brasil", labels: br,
};
