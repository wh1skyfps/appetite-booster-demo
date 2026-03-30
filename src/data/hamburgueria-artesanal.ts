import type { NicheConfig } from "@/types/niche";

const config: NicheConfig = {
  id: "hamburgueria-artesanal",
  name: "Hamburgueria Artesanal",
  tagline: "Burgers feitos com alma e fogo",
  heroSubtitle: "Blend artesanal, pão brioche, ingredientes premium. Cada mordida conta uma história.",
  heroImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1400&q=80",
  heroStyle: "bold",
  cardStyle: "bold",
  theme: {
    primary: "35 90% 50%",
    primaryForeground: "0 0% 5%",
    accent: "35 90% 50%",
    heroOverlay: "linear-gradient(135deg, hsla(0, 0%, 3%, 0.88), hsla(30, 30%, 8%, 0.7))",
    sectionDark: "0 0% 6%",
    sectionDarkForeground: "35 20% 95%",
  },
  categories: [
    { name: "Smash", emoji: "🔥" },
    { name: "Clássicos", emoji: "🍔" },
    { name: "Combos", emoji: "🍟" },
    { name: "Batatas", emoji: "🥔" },
    { name: "Molhos", emoji: "🫙" },
    { name: "Bebidas", emoji: "🍺" },
  ],
  products: [
    { name: "Smash Duplo Cheddar", desc: "Dois blends 90g smashados, cheddar derretido, cebola caramelizada, picles e molho da casa.", price: "18,90", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", tag: "Best Seller" },
    { name: "Bacon Beast", desc: "Blend 180g, bacon crocante em camadas, queijo americano e barbecue defumado.", price: "22,90", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80", tag: "Novo" },
    { name: "Truffle Burger", desc: "Blend angus, cogumelos salteados, maionese trufada e rúcula.", price: "26,90", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80" },
    { name: "Batata Loaded", desc: "Batata frita crocante coberta com cheddar, bacon, cebolinha e sour cream.", price: "14,90", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80", tag: "Popular" },
    { name: "Combo Duo", desc: "2 smash burgers + batata média + 2 refrigerantes.", price: "34,90", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80", tag: "Promoção" },
    { name: "Milkshake Oreo", desc: "Milkshake cremoso de baunilha com Oreo triturado e chantilly.", price: "12,90", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Marca Forte Online", desc: "Um site que reforça o posicionamento da sua hamburgueria.", icon: "star" },
    { title: "Pedidos por WhatsApp", desc: "Sem app, sem taxa. Direto com o cliente.", icon: "smartphone" },
    { title: "Fotos que Vendem", desc: "Cardápio visual que converte olhares em pedidos.", icon: "trending" },
    { title: "Rápido e Responsivo", desc: "Carrega em segundos, funciona em qualquer tela.", icon: "zap" },
    { title: "Fácil de Atualizar", desc: "Adicione novos burgers e promoções a qualquer momento.", icon: "clock" },
    { title: "SEO Local", desc: "Apareça quando procurarem 'hamburgueria perto de mim'.", icon: "globe" },
  ],
  testimonials: [
    { name: "Ricardo Oliveira", text: "Desde que lançámos o site, os pedidos noturnos triplicaram. O visual dos burgers faz toda a diferença.", role: "Fundador" },
    { name: "Beatriz Ferreira", text: "Os clientes compartilham o link do site como se fosse o cardápio oficial. Adoram!", role: "Marketing" },
    { name: "Tiago Martins", text: "Finalmente um site que tem a cara da nossa hamburgueria. Dark, bold, premium.", role: "Chef" },
  ],
  ctaText: "Peça o seu burger agora",
  ctaSubtext: "Escolha o seu favorito e faça o pedido direto pelo WhatsApp.",
  whatsappNumber: "351999999999",
  location: {
    address: "Rua do Carmo, 78 — Lisboa",
    hours: "Terça a Domingo: 12h–23h",
    phone: "+351 999 999 999",
    mapQuery: "Rua do Carmo Lisboa",
  },
  footerTagline: "Burgers artesanais. Alma na grelha.",
};

export default config;
