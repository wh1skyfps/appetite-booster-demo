import type { NicheConfig } from "@/types/niche";

const config: NicheConfig = {
  id: "pizzaria",
  name: "Pizzaria Artesanal",
  tagline: "Massa artesanal, sabor autêntico",
  heroSubtitle: "Pizzas feitas no forno a lenha, com ingredientes frescos e receitas que aquecem a alma.",
  heroImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&q=80",
  theme: {
    primary: "12 80% 50%",
    primaryForeground: "0 0% 100%",
    accent: "12 80% 50%",
    heroOverlay: "linear-gradient(135deg, hsla(10, 40%, 6%, 0.87), hsla(12, 50%, 12%, 0.7))",
    sectionDark: "10 30% 8%",
    sectionDarkForeground: "12 20% 95%",
  },
  categories: [
    { name: "Tradicionais", emoji: "🍕" },
    { name: "Especiais", emoji: "⭐" },
    { name: "Calzones", emoji: "🥟" },
    { name: "Entradas", emoji: "🥖" },
    { name: "Bebidas", emoji: "🍷" },
    { name: "Sobremesas", emoji: "🍰" },
  ],
  products: [
    { name: "Margherita DOP", desc: "Molho San Marzano, mussarela de búfala DOP, manjericão fresco e azeite.", price: "14,90", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", tag: "Clássica" },
    { name: "Pepperoni Supreme", desc: "Pepperoni artesanal, mussarela, molho de tomate e orégãos.", price: "16,90", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80", tag: "Mais Pedida" },
    { name: "Quatro Queijos", desc: "Mussarela, gorgonzola, parmesão e provolone com mel de trufa.", price: "18,90", image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=600&q=80" },
    { name: "Parma e Rúcula", desc: "Presunto de Parma, rúcula, lascas de parmesão e redução de balsâmico.", price: "19,90", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", tag: "Premium" },
    { name: "Calzone Recheado", desc: "Massa folhada recheada com presunto, queijo, cogumelos e molho.", price: "15,90", image: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=600&q=80" },
    { name: "Combo Família", desc: "2 pizzas grandes + 1 entrada + jarro de limonada.", price: "42,90", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80", tag: "Oferta" },
  ],
  whyPoints: [
    { title: "Cardápio Irresistível", desc: "Fotos que fazem o cliente escolher antes de chegar.", icon: "star" },
    { title: "Pedidos Diretos", desc: "WhatsApp sem intermediários e sem taxas.", icon: "smartphone" },
    { title: "Presença Local", desc: "Apareça para famílias que procuram pizza na zona.", icon: "globe" },
    { title: "Menu Atualizado", desc: "Pizza do dia, promoções e novidades em tempo real.", icon: "clock" },
    { title: "Conversão Alta", desc: "Layout pensado para transformar visitantes em pedidos.", icon: "trending" },
    { title: "Experiência Rápida", desc: "Site que carrega rápido e facilita a escolha.", icon: "zap" },
  ],
  testimonials: [
    { name: "Giuseppe Rossi", text: "O site captura perfeitamente o espírito da nossa pizzaria. As reservas de fim de semana aumentaram muito.", role: "Proprietário" },
    { name: "Mariana Lima", text: "Vejo o cardápio no telemóvel, escolho a pizza e peço pelo WhatsApp. Perfeito!", role: "Cliente" },
    { name: "António Costa", text: "Investimento que se pagou no primeiro mês. Os pedidos online dispararam.", role: "Sócio-Gerente" },
  ],
  ctaText: "A sua pizza está a um clique",
  ctaSubtext: "Escolha a sua favorita e peça agora pelo WhatsApp.",
  whatsappNumber: "351999999999",
  location: {
    address: "Travessa do Forno, 12 — Lisboa",
    hours: "Todos os dias: 12h–23h",
    phone: "+351 999 999 999",
    mapQuery: "Travessa do Forno Lisboa",
  },
  footerTagline: "Forno a lenha. Massa artesanal. Sabor italiano.",
};

export default config;
