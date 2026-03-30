import type { NicheConfig } from "@/types/niche";

const config: NicheConfig = {
  id: "sorveteria",
  name: "Sorveteria Artesanal",
  tagline: "Doçura em cada colherada",
  heroSubtitle: "Gelados artesanais feitos com frutas frescas, cremes naturais e muito carinho.",
  heroImage: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1400&q=80",
  heroStyle: "playful",
  cardStyle: "soft",
  theme: {
    primary: "330 70% 60%",
    primaryForeground: "0 0% 100%",
    accent: "170 50% 55%",
    heroOverlay: "linear-gradient(135deg, hsla(330, 30%, 10%, 0.8), hsla(280, 30%, 15%, 0.65))",
    sectionDark: "330 25% 10%",
    sectionDarkForeground: "330 20% 95%",
  },
  categories: [
    { name: "Gelados", emoji: "🍦" },
    { name: "Sundaes", emoji: "🍨" },
    { name: "Milkshakes", emoji: "🥤" },
    { name: "Waffles", emoji: "🧇" },
    { name: "Toppings", emoji: "🍫" },
    { name: "Frutas", emoji: "🍓" },
  ],
  products: [
    { name: "Sundae de Chocolate", desc: "3 bolas de gelado de chocolate, calda quente, chantilly e granulado.", price: "9,90", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80", tag: "Favorito" },
    { name: "Gelado de Pistáchio", desc: "Gelado artesanal de pistáchio siciliano com pedaços crocantes.", price: "6,90", image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&q=80", tag: "Premium" },
    { name: "Milkshake Morango", desc: "Milkshake cremoso de morango com gelado de baunilha e chantilly.", price: "8,90", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80" },
    { name: "Waffle Belga", desc: "Waffle crocante com gelado, frutas frescas, Nutella e açúcar em pó.", price: "11,90", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80", tag: "Novidade" },
    { name: "Taça de Frutas", desc: "Mix de frutas frescas com sorbet de manga e granola crocante.", price: "7,90", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80" },
    { name: "Combo Família", desc: "4 gelados + 2 toppings + 1 waffle para partilhar.", price: "24,90", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80", tag: "Oferta" },
  ],
  whyPoints: [
    { title: "Visual Doce", desc: "Cores e fotos que transmitem frescura e alegria.", icon: "star" },
    { title: "Pedidos Fáceis", desc: "Escolha o sabor e peça pelo WhatsApp.", icon: "smartphone" },
    { title: "Destaque Local", desc: "Apareça para quem procura gelados na sua zona.", icon: "globe" },
    { title: "Promoções Rápidas", desc: "Lance novos sabores e combos instantaneamente.", icon: "zap" },
    { title: "Experiência Mobile", desc: "Perfeito no telemóvel de cada cliente.", icon: "clock" },
    { title: "Mais Clientes", desc: "Converta curiosos em clientes fiéis.", icon: "trending" },
  ],
  testimonials: [
    { name: "Inês Pereira", text: "O site é tão bonito quanto os nossos gelados! Os clientes adoram ver os sabores online.", role: "Proprietária" },
    { name: "Miguel Sousa", text: "Perfeito para o verão — os pedidos pelo WhatsApp aumentaram imenso.", role: "Gerente" },
    { name: "Clara Nunes", text: "Finalmente uma presença online digna da qualidade dos nossos produtos.", role: "Sócia" },
  ],
  ctaText: "Refresque o seu dia!",
  ctaSubtext: "Peça gelados artesanais pelo WhatsApp e receba com frescura.",
  whatsappNumber: "351999999999",
  location: {
    address: "Rua das Flores, 33 — Porto",
    hours: "Todos os dias: 10h–22h",
    phone: "+351 999 999 999",
    mapQuery: "Rua das Flores Porto",
  },
  footerTagline: "Gelados artesanais feitos com amor.",
};

export default config;
