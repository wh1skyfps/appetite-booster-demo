import type { NicheConfig } from "@/types/niche";

const config: NicheConfig = {
  id: "pastelaria-snacks",
  name: "Pastelaria & Snacks",
  tagline: "Crocante por fora, irresistível por dentro",
  heroSubtitle: "Pastéis frescos, salgados dourados e snacks rápidos para qualquer hora do dia.",
  heroImage: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=1400&q=80",
  heroStyle: "minimal",
  cardStyle: "compact",
  theme: {
    primary: "40 85% 50%",
    primaryForeground: "0 0% 8%",
    accent: "40 85% 50%",
    heroOverlay: "linear-gradient(135deg, hsla(35, 40%, 6%, 0.87), hsla(40, 45%, 12%, 0.65))",
    sectionDark: "35 30% 8%",
    sectionDarkForeground: "40 15% 95%",
  },
  categories: [
    { name: "Pastéis", emoji: "🥧" },
    { name: "Salgados", emoji: "🥐" },
    { name: "Doces", emoji: "🍰" },
    { name: "Combos", emoji: "🎯" },
    { name: "Cafés", emoji: "☕" },
    { name: "Sumos", emoji: "🧃" },
  ],
  products: [
    { name: "Pastel de Nata", desc: "Pastel de nata artesanal com canela e açúcar em pó. Crocante e cremoso.", price: "1,50", image: "https://images.unsplash.com/photo-1580910365203-285f61e45a28?w=600&q=80", tag: "Clássico" },
    { name: "Rissol de Camarão", desc: "Massa crocante recheada com camarão cremoso e bechamel.", price: "2,90", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80", tag: "Popular" },
    { name: "Coxinha Especial", desc: "Coxinha jumbo de frango com catupiry, empanada e frita na hora.", price: "3,90", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80" },
    { name: "Bola de Berlim", desc: "Bola de Berlim recheada com creme pasteleiro, açúcar por fora.", price: "2,50", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80", tag: "Doce" },
    { name: "Combo Lanche", desc: "2 salgados + 1 café ou sumo natural.", price: "6,90", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80", tag: "Promoção" },
    { name: "Tábua de Snacks", desc: "Mix de 6 salgados variados para partilhar.", price: "9,90", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Pedidos Rápidos", desc: "Cliente vê, escolhe e pede em segundos.", icon: "zap" },
    { title: "Cardápio Dourado", desc: "Fotos que mostram o crocante de cada salgado.", icon: "star" },
    { title: "WhatsApp Direto", desc: "Sem filas, sem apps. Peça e levante.", icon: "smartphone" },
    { title: "Promoções do Dia", desc: "Destaque combos e ofertas especiais.", icon: "clock" },
    { title: "Mais Clientes", desc: "Apareça para quem procura snacks na zona.", icon: "globe" },
    { title: "Conversão Alta", desc: "Site pensado para gerar pedidos.", icon: "trending" },
  ],
  testimonials: [
    { name: "Helena Vieira", text: "Desde que temos o site, os pedidos de catering e festas aumentaram imenso!", role: "Proprietária" },
    { name: "Fernando Neves", text: "Os clientes veem as fotos e já chegam sabendo o que querem. Eficiente!", role: "Gerente" },
    { name: "Teresa Gomes", text: "Um site bonito e prático. Perfeito para o nosso tipo de negócio.", role: "Pasteleira" },
  ],
  ctaText: "Peça os seus favoritos!",
  ctaSubtext: "Salgados frescos e doces irresistíveis pelo WhatsApp.",
  whatsappNumber: "351999999999",
  location: {
    address: "Praça do Comércio, 15 — Lisboa",
    hours: "Segunda a Sábado: 7h–20h",
    phone: "+351 999 999 999",
    mapQuery: "Praça do Comércio Lisboa",
  },
  footerTagline: "Pastéis frescos. Salgados crocantes. Sabor português.",
};

export default config;
