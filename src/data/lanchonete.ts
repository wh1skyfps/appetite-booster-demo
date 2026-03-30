import type { NicheConfig } from "@/types/niche";

const config: NicheConfig = {
  id: "lanchonete",
  name: "Lanchonete Express",
  tagline: "Rápido, saboroso e no ponto certo",
  heroSubtitle: "Lanches frescos, combos irresistíveis e atendimento rápido para matar a fome a qualquer hora.",
  heroImage: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1400&q=80",
  heroStyle: "minimal",
  cardStyle: "compact",
  theme: {
    primary: "0 85% 55%",
    primaryForeground: "0 0% 100%",
    accent: "45 95% 55%",
    heroOverlay: "linear-gradient(135deg, hsla(0, 40%, 8%, 0.85), hsla(0, 50%, 15%, 0.7))",
    sectionDark: "0 30% 10%",
    sectionDarkForeground: "0 0% 95%",
  },
  categories: [
    { name: "Lanches", emoji: "🥪" },
    { name: "Combos", emoji: "🍟" },
    { name: "Bebidas", emoji: "🥤" },
    { name: "Salgados", emoji: "🥐" },
    { name: "Sucos", emoji: "🧃" },
    { name: "Doces", emoji: "🍩" },
  ],
  products: [
    { name: "Misto Quente Especial", desc: "Pão crocante, presunto, queijo derretido e orégãos.", price: "6,90", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80", tag: "Mais Pedido" },
    { name: "Combo Lanche + Suco", desc: "Qualquer lanche do menu + suco natural 300ml.", price: "12,90", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80", tag: "Promoção" },
    { name: "Hot Dog Completo", desc: "Salsicha premium, vinagrete, batata palha, maionese e ketchup.", price: "8,90", image: "https://images.unsplash.com/photo-1612392062126-85a8a28ba7e4?w=600&q=80" },
    { name: "Coxinha de Frango", desc: "Coxinha cremosa de frango com catupiry, frita na hora.", price: "4,90", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80", tag: "Novidade" },
    { name: "Suco Natural Laranja", desc: "Suco de laranja espremido na hora, gelado e sem açúcar.", price: "5,90", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80" },
    { name: "Combo Família", desc: "4 lanches + 4 bebidas + porção de batata frita grande.", price: "39,90", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80", tag: "Oferta" },
  ],
  whyPoints: [
    { title: "Pedidos Rápidos", desc: "Clientes pedem pelo WhatsApp sem fila.", icon: "zap" },
    { title: "Cardápio Atualizado", desc: "Mude preços e itens quando quiser.", icon: "clock" },
    { title: "Visual Apetitoso", desc: "Fotos que dão água na boca.", icon: "star" },
    { title: "Mais Vendas", desc: "Presença online que converte.", icon: "trending" },
    { title: "Mobile First", desc: "Perfeito no telemóvel do cliente.", icon: "smartphone" },
    { title: "Alcance Local", desc: "Apareça para quem está perto.", icon: "globe" },
  ],
  testimonials: [
    { name: "João Silva", text: "O site trouxe muitos clientes novos. Pedidos pelo WhatsApp dobraram!", role: "Proprietário" },
    { name: "Maria Costa", text: "Adoro ver as fotos dos lanches no site. Fica impossível não pedir!", role: "Cliente Fiel" },
    { name: "Pedro Santos", text: "Prático, bonito e funcional. Exatamente o que precisávamos.", role: "Sócio" },
  ],
  ctaText: "Peça agora mesmo!",
  ctaSubtext: "Escolha o seu lanche favorito e receba rapidinho.",
  whatsappNumber: "351999999999",
  location: {
    address: "Rua Augusta, 45 — Lisboa",
    hours: "Segunda a Sábado: 8h–22h",
    phone: "+351 999 999 999",
    mapQuery: "Rua Augusta Lisboa",
  },
  footerTagline: "O sabor que não pode esperar.",
};

export default config;
