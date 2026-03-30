import type { NicheConfig } from "@/types/niche";

const config: NicheConfig = {
  id: "acai-delivery",
  name: "Açaí Delivery",
  tagline: "Frescura e energia na sua porta",
  heroSubtitle: "Açaí premium, bowls personalizados e entrega rápida para o seu dia a dia.",
  heroImage: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1400&q=80",
  theme: {
    primary: "280 65% 50%",
    primaryForeground: "0 0% 100%",
    accent: "145 60% 45%",
    heroOverlay: "linear-gradient(135deg, hsla(280, 40%, 8%, 0.85), hsla(280, 50%, 15%, 0.65))",
    sectionDark: "280 30% 8%",
    sectionDarkForeground: "280 15% 95%",
  },
  categories: [
    { name: "Açaí", emoji: "🫐" },
    { name: "Bowls", emoji: "🥣" },
    { name: "Smoothies", emoji: "🥤" },
    { name: "Toppings", emoji: "🥜" },
    { name: "Sumos", emoji: "🍊" },
    { name: "Combos", emoji: "🎯" },
  ],
  products: [
    { name: "Açaí Premium 500ml", desc: "Açaí puro da Amazónia com granola, banana, morango e leite condensado.", price: "12,90", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80", tag: "Best Seller" },
    { name: "Bowl Tropical", desc: "Açaí com manga, coco ralado, kiwi, chia e mel.", price: "14,90", image: "https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=600&q=80", tag: "Novidade" },
    { name: "Smoothie Verde", desc: "Espinafre, banana, abacaxi, gengibre e leite de coco.", price: "8,90", image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=600&q=80" },
    { name: "Açaí Fitness 300ml", desc: "Açaí com whey protein, banana, aveia e pasta de amendoim.", price: "10,90", image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=600&q=80", tag: "Fitness" },
    { name: "Bowl Pitaya", desc: "Pitaya rosa com morangos, granola, coco e mel de agave.", price: "13,90", image: "https://images.unsplash.com/photo-1546039907-7b3a4b4e58b9?w=600&q=80" },
    { name: "Combo Duplo", desc: "2 açaís 500ml com toppings à escolha + 2 sumos naturais.", price: "28,90", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80", tag: "Promoção" },
  ],
  whyPoints: [
    { title: "Delivery Otimizado", desc: "Cardápio pensado para pedidos rápidos e práticos.", icon: "zap" },
    { title: "Visual Fresco", desc: "Fotos vibrantes que abrem o apetite.", icon: "star" },
    { title: "Pedidos no WhatsApp", desc: "Sem app, sem taxa. Direto e eficiente.", icon: "smartphone" },
    { title: "Mais Pedidos", desc: "Presença online que converte visitantes em clientes.", icon: "trending" },
    { title: "Alcance Delivery", desc: "Destaque-se na sua zona de entrega.", icon: "globe" },
    { title: "Atualização Fácil", desc: "Novos sabores e promoções em minutos.", icon: "clock" },
  ],
  testimonials: [
    { name: "Lucas Ferreira", text: "O site captura a energia do nosso açaí. Os pedidos pelo WhatsApp dispararam!", role: "Fundador" },
    { name: "Amanda Lima", text: "Adoro poder ver as fotos dos bowls antes de pedir. Incrível!", role: "Cliente Fitness" },
    { name: "Rafael Costa", text: "Melhor investimento que fizemos. Retorno no primeiro mês.", role: "Sócio" },
  ],
  ctaText: "Peça o seu açaí agora!",
  ctaSubtext: "Escolha o bowl perfeito e receba na sua porta.",
  whatsappNumber: "351999999999",
  location: {
    address: "Rua de Santa Catarina, 200 — Porto",
    hours: "Segunda a Domingo: 9h–21h",
    phone: "+351 999 999 999",
    mapQuery: "Rua de Santa Catarina Porto",
  },
  footerTagline: "Açaí premium. Entrega rápida. Energia pura.",
};

export default config;
