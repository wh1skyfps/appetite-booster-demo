import type { NicheConfig } from "@/types/niche";

const config: NicheConfig = {
  id: "restaurante-premium",
  name: "Restaurante Premium",
  tagline: "Uma experiência gastronómica de excelência",
  heroSubtitle: "Pratos refinados, ingredientes selecionados e um ambiente que convida a saborear cada momento.",
  heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
  theme: {
    primary: "30 60% 40%",
    primaryForeground: "0 0% 100%",
    accent: "30 60% 40%",
    heroOverlay: "linear-gradient(135deg, hsla(20, 30%, 5%, 0.85), hsla(30, 40%, 10%, 0.7))",
    sectionDark: "20 30% 8%",
    sectionDarkForeground: "30 20% 95%",
  },
  categories: [
    { name: "Entradas", emoji: "🥗" },
    { name: "Peixes", emoji: "🐟" },
    { name: "Carnes", emoji: "🥩" },
    { name: "Massas", emoji: "🍝" },
    { name: "Vinhos", emoji: "🍷" },
    { name: "Sobremesas", emoji: "🍮" },
  ],
  products: [
    { name: "Risotto de Camarão", desc: "Risotto cremoso com camarão selvagem, açafrão e parmesão envelhecido.", price: "24,90", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80", tag: "Chef's Choice" },
    { name: "Filé Mignon ao Molho", desc: "Filé mignon grelhado com molho de vinho tinto, batata trufada e legumes.", price: "32,90", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80" },
    { name: "Salmão Grelhado", desc: "Salmão fresco grelhado com crosta de ervas, purê de batata doce.", price: "28,90", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80", tag: "Popular" },
    { name: "Carpaccio de Polvo", desc: "Polvo tenro em azeite trufado, alcaparras e rúcula selvagem.", price: "18,90", image: "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=600&q=80" },
    { name: "Massa al Tartufo", desc: "Tagliatelle fresco com creme de trufa negra e parmesão.", price: "26,90", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80", tag: "Novidade" },
    { name: "Tiramisù Clássico", desc: "Tiramisù artesanal com mascarpone, café espresso e cacau.", price: "9,90", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Presença Digital Elegante", desc: "Um site que reflete a sofisticação do seu restaurante.", icon: "globe" },
    { title: "Reservas Instantâneas", desc: "Clientes reservam mesa diretamente pelo WhatsApp.", icon: "smartphone" },
    { title: "Cardápio Visual Premium", desc: "Fotos profissionais que abrem o apetite.", icon: "star" },
    { title: "Mais Reservas", desc: "Aumente a ocupação com presença online forte.", icon: "trending" },
    { title: "Atualizações Fáceis", desc: "Mude pratos e preços em minutos.", icon: "zap" },
    { title: "Experiência Refinada", desc: "Navegação fluida em qualquer dispositivo.", icon: "clock" },
  ],
  testimonials: [
    { name: "Ana Rodrigues", text: "O site transmite exatamente a elegância do nosso restaurante. Os clientes adoram ver o menu antes de reservar.", role: "Proprietária" },
    { name: "Carlos Mendes", text: "As reservas pelo WhatsApp aumentaram 40% desde que temos este site. Incrível!", role: "Gerente" },
    { name: "Sofia Almeida", text: "Finalmente um site à altura da nossa gastronomia. Moderno e sofisticado.", role: "Chef Executiva" },
  ],
  ctaText: "Reserve a sua experiência",
  ctaSubtext: "Faça a sua reserva ou encomenda especial diretamente pelo WhatsApp.",
  whatsappNumber: "351999999999",
  location: {
    address: "Avenida da Liberdade, 120 — Lisboa",
    hours: "Terça a Domingo: 12h–15h / 19h–23h",
    phone: "+351 999 999 999",
    mapQuery: "Avenida da Liberdade Lisboa",
  },
  footerTagline: "Gastronomia de excelência em cada detalhe.",
};

export default config;
