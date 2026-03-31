import type { NicheConfig } from "@/types/niche";
export const imobiliariaConfig: NicheConfig = {
  id: "imobiliaria", name: "Prime Imóveis", tagline: "Encontre Seu Lar dos Sonhos",
  heroSubtitle: "Imobiliária de alto padrão com os melhores imóveis da região. Apartamentos, casas, coberturas e terrenos exclusivos.",
  heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85",
  heroStyle: "split", cardStyle: "glass",
  whyLayout: "icon-row",
  sectionOrder: ["hero", "stats", "categories", "services", "why", "gallery", "testimonials", "cta", "location"],
  theme: { primary: "150 60% 40%", primaryForeground: "0 0% 100%", accent: "150 30% 90%", heroOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))", sectionDark: "150 25% 8%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "R$1.5B+", label: "em Vendas" },
    { value: "500+", label: "Imóveis Vendidos" },
    { value: "18+", label: "Anos no Mercado" },
    { value: "96%", label: "Retenção de Clientes" },
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Cobertura Duplex", span: "wide" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Casa em Condomínio" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", alt: "Vista Panorâmica", span: "tall" },
    { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80", alt: "Mansão Alphaville" },
    { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80", alt: "Loft Moderno" },
  ],
  categories: [
    { name: "Apartamentos", emoji: "🏢" }, { name: "Casas", emoji: "🏠" }, { name: "Coberturas", emoji: "🌆" },
    { name: "Terrenos", emoji: "🌳" }, { name: "Comercial", emoji: "🏗️" }, { name: "Lançamentos", emoji: "✨" },
  ],
  products: [
    { name: "Cobertura Duplex", desc: "Cobertura duplex com vista panorâmica, 4 suítes e piscina privativa.", price: "2.8M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", tag: "Destaque" },
    { name: "Casa em Condomínio", desc: "Casa de 5 suítes em condomínio fechado com área gourmet.", price: "1.9M", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
    { name: "Apto Alto Padrão", desc: "3 suítes, varanda gourmet, 3 vagas. Lazer completo.", price: "1.2M", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80" },
    { name: "Studio Moderno", desc: "Studio de 45m² no coração de Pinheiros. Ideal para investimento.", price: "550K", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
    { name: "Mansão Alphaville", desc: "Mansão de 800m² com cinema e spa.", price: "4.5M", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80", tag: "Exclusivo" },
    { name: "Sala Comercial", desc: "Sala comercial de 120m² em edifício corporativo AAA.", price: "890K", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Vitrine de Imóveis", desc: "Galerias profissionais que fazem compradores se apaixonarem.", icon: "sparkles" },
    { title: "Leads Qualificados", desc: "Capture interesse com formulários e agendamento de visitas.", icon: "target" },
    { title: "Autoridade no Mercado", desc: "Posicione-se como a referência na sua região.", icon: "award" },
  ],
  testimonials: [
    { name: "Carlos Eduardo", text: "Encontraram nosso apartamento ideal em apenas 2 semanas!", role: "Comprador" },
    { name: "Daniela Fonseca", text: "Venderam nosso imóvel acima do valor pedido.", role: "Vendedora" },
    { name: "Paulo Henrique", text: "Melhor experiência imobiliária. Serviço de luxo.", role: "Investidor" },
  ],
  ctaText: "Encontre Seu Imóvel Ideal", ctaSubtext: "Fale com um de nossos corretores e agende uma visita.",
  whatsappNumber: "5511944443333", location: { address: "Av. Faria Lima, 3000 - Itaim Bibi, São Paulo - SP", hours: "Seg-Sáb: 9h - 19h | Dom: 10h - 15h", phone: "(11) 94444-3333", mapQuery: "imobiliaria Itaim Bibi Sao Paulo" },
  footerTagline: "Onde luxo encontra estilo de vida.", currency: "R$", backPath: "/brasil",
  labels: { navServices: "Imóveis", navAbout: "Sobre", navContact: "Contato", navCta: "Agendar Visita", heroCtaPrimary: "Ver Imóveis", heroCtaSecondary: "Agendar Visita", servicesTitle: "Imóveis em", servicesHighlight: "Destaque", servicesSubtitle: "Seleção exclusiva de imóveis de alto padrão.", servicesCta: "Ver", whyTitle: "Por que ter um", whyHighlight: "site premium", whySubtitle: "Seus imóveis merecem uma vitrine à altura.", testimonialsTitle: "O que dizem nossos", testimonialsHighlight: "clientes", locationTitle: "Nosso", locationHighlight: "Escritório", ctaButtonLabel: "Fale com um Corretor", backLabel: "Voltar às Demos", statsTitle: "Líderes de Mercado", galleryTitle: "Imóveis em", galleryHighlight: "Destaque" },
};
