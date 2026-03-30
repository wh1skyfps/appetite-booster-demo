import type { NicheConfig } from "@/types/niche";

const config: NicheConfig = {
  id: "cafeteria",
  name: "Cafeteria & Brunch",
  tagline: "Onde cada manhã é especial",
  heroSubtitle: "Café de especialidade, brunch criativo e um ambiente acolhedor para começar bem o dia.",
  heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80",
  heroStyle: "editorial",
  cardStyle: "horizontal",
  theme: {
    primary: "25 55% 42%",
    primaryForeground: "0 0% 100%",
    accent: "25 55% 42%",
    heroOverlay: "linear-gradient(135deg, hsla(25, 35%, 6%, 0.85), hsla(25, 40%, 12%, 0.65))",
    sectionDark: "25 30% 8%",
    sectionDarkForeground: "25 15% 95%",
  },
  categories: [
    { name: "Cafés", emoji: "☕" },
    { name: "Brunch", emoji: "🍳" },
    { name: "Doces", emoji: "🥐" },
    { name: "Tostas", emoji: "🍞" },
    { name: "Sumos", emoji: "🥤" },
    { name: "Chás", emoji: "🍵" },
  ],
  products: [
    { name: "Flat White", desc: "Espresso duplo com leite vaporizado aveludado e latte art.", price: "3,90", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80", tag: "Especialidade" },
    { name: "Brunch Completo", desc: "Ovos benedict, abacate, salmão fumado, croissant e sumo natural.", price: "16,90", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80", tag: "Best Seller" },
    { name: "Tosta de Abacate", desc: "Pão sourdough com abacate, ovo poché, sementes e azeite trufado.", price: "9,90", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80" },
    { name: "Croissant Recheado", desc: "Croissant folhado com creme de pistáchio e frutas vermelhas.", price: "5,90", image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&q=80", tag: "Novidade" },
    { name: "Granola Bowl", desc: "Iogurte grego com granola artesanal, mel, frutas e chia.", price: "7,90", image: "https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=600&q=80" },
    { name: "Combo Morning", desc: "Café especialidade + croissant ou tosta + sumo natural.", price: "11,90", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", tag: "Promoção" },
  ],
  whyPoints: [
    { title: "Atmosfera Online", desc: "Um site que transmite o aconchego da sua cafeteria.", icon: "star" },
    { title: "Reservas Fáceis", desc: "Mesa para brunch? Um clique no WhatsApp.", icon: "smartphone" },
    { title: "Cardápio Visual", desc: "Fotos editoriais que atraem o público certo.", icon: "trending" },
    { title: "Lifestyle Brand", desc: "Posicione-se como destino, não apenas cafeteria.", icon: "globe" },
    { title: "Promoções Matinais", desc: "Destaque combos e horários especiais.", icon: "clock" },
    { title: "Presença Forte", desc: "Seja encontrado por quem procura brunch na zona.", icon: "zap" },
  ],
  testimonials: [
    { name: "Carolina Duarte", text: "O site transmite exatamente a nossa vibe. Os clientes de brunch adoram reservar pelo WhatsApp.", role: "Proprietária" },
    { name: "Francisco Reis", text: "As fotos do menu no site são tão bonitas que os clientes pedem 'aquele que vi no site'.", role: "Barista Chefe" },
    { name: "Margarida Pinto", text: "Um investimento que trouxe um público novo e sofisticado. Recomendo!", role: "Sócia" },
  ],
  ctaText: "Reserve o seu brunch",
  ctaSubtext: "Garanta a sua mesa ou peça take-away pelo WhatsApp.",
  whatsappNumber: "351999999999",
  location: {
    address: "Rua de Cedofeita, 88 — Porto",
    hours: "Terça a Domingo: 8h–18h",
    phone: "+351 999 999 999",
    mapQuery: "Rua de Cedofeita Porto",
  },
  footerTagline: "Café de especialidade. Brunch criativo. Manhãs perfeitas.",
};

export default config;
