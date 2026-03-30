import heroPremium from "@/assets/hero-premium.jpg";
import heroBurger from "@/assets/hero-burger.jpg";
import heroSorveteria from "@/assets/hero-sorveteria.jpg";
import heroCafe from "@/assets/hero-cafe.jpg";
import heroPastelaria from "@/assets/hero-pastelaria.jpg";
import burger1 from "@/assets/burger-1.jpg";
import combo1 from "@/assets/combo-1.jpg";
import porcao1 from "@/assets/porcao-1.jpg";
import bebidas1 from "@/assets/bebidas-1.jpg";
import sobremesa1 from "@/assets/sobremesa-1.jpg";
import acai1 from "@/assets/acai-1.jpg";
import pizza1 from "@/assets/pizza-1.jpg";
import prato1 from "@/assets/prato-1.jpg";
import sorvete1 from "@/assets/sorvete-1.jpg";
import cafe1 from "@/assets/cafe-1.jpg";
import pastel1 from "@/assets/pastel-1.jpg";

export interface Product {
  name: string;
  desc: string;
  price: string;
  image: string;
  tag?: string;
}

export interface NicheConfig {
  id: string;
  name: string;
  subtitle: string;
  emoji: string;
  accent: string; // HSL value for --primary override
  heroImage: string;
  heroHeadline: string;
  heroSub: string;
  brandName: string;
  products: Product[];
  categoryImages: { name: string; image: string }[];
}

export const niches: NicheConfig[] = [
  {
    id: "premium",
    name: "Restaurante Premium",
    subtitle: "Fine dining & experiências gastronómicas",
    emoji: "🍷",
    accent: "0 40% 40%",
    heroImage: heroPremium,
    heroHeadline: "Uma experiência que começa antes da primeira reserva.",
    heroSub: "Menu digital elegante, reservas online e uma presença digital à altura da sua cozinha.",
    brandName: "Alta Cozinha",
    products: [
      { name: "Salmão Grelhado", desc: "Com redução de balsâmico, microgreens e puré de batata-doce.", price: "28,90", image: prato1, tag: "Chef's Choice" },
      { name: "Risotto de Cogumelos", desc: "Arroz arbório, mix de cogumelos silvestres e parmesão.", price: "24,90", image: prato1 },
      { name: "Filé Mignon ao Molho", desc: "Corte premium 250g com molho de vinho tinto e legumes.", price: "34,90", image: prato1, tag: "Premium" },
      { name: "Sobremesa do Chef", desc: "Criação sazonal do nosso chef pâtissier.", price: "16,90", image: sobremesa1 },
    ],
    categoryImages: [
      { name: "Entradas", image: prato1 },
      { name: "Pratos Principais", image: heroPremium },
      { name: "Sobremesas", image: sobremesa1 },
      { name: "Carta de Vinhos", image: bebidas1 },
    ],
  },
  {
    id: "lanchonete",
    name: "Lanchonete",
    subtitle: "Lanches rápidos, combos e delivery",
    emoji: "🍔",
    accent: "0 85% 55%",
    heroImage: heroBurger,
    heroHeadline: "O sabor que conquista no primeiro clique.",
    heroSub: "Cardápio digital moderno, combos irresistíveis e pedidos rápidos pelo WhatsApp.",
    brandName: "Sabor Express",
    products: [
      { name: "X-Tudo Especial", desc: "Pão, hambúrguer, queijo, bacon, ovo, presunto e salada.", price: "19,90", image: burger1, tag: "Mais Pedido" },
      { name: "Combo Família", desc: "2 lanches, batata grande, 2 refrigerantes e sobremesa.", price: "54,90", image: combo1, tag: "Promoção" },
      { name: "Batata Loaded", desc: "Batata frita crocante com cheddar, bacon e cebolinha.", price: "16,90", image: porcao1 },
      { name: "Milk Shake 500ml", desc: "Chocolate, morango ou baunilha com chantilly.", price: "14,90", image: bebidas1 },
    ],
    categoryImages: [
      { name: "Lanches", image: burger1 },
      { name: "Combos", image: combo1 },
      { name: "Porções", image: porcao1 },
      { name: "Bebidas", image: bebidas1 },
    ],
  },
  {
    id: "hamburgueria",
    name: "Hamburgueria Artesanal",
    subtitle: "Smash burgers & craft burgers",
    emoji: "🔥",
    accent: "24 90% 50%",
    heroImage: heroBurger,
    heroHeadline: "Hambúrguer de verdade merece presença online de verdade.",
    heroSub: "Cardápio artesanal com fotos que dão água na boca e pedidos em um clique.",
    brandName: "Smash & Co.",
    products: [
      { name: "Smash Clássico", desc: "Pão brioche, blend 180g, cheddar, cebola caramelizada e molho especial.", price: "24,90", image: burger1, tag: "Mais Pedido" },
      { name: "Double Bacon", desc: "Dois blends 120g, bacon crocante, cheddar duplo e pickles.", price: "29,90", image: burger1, tag: "Favorito" },
      { name: "Truffle Burger", desc: "Blend angus 200g, queijo gruyère, aïoli de trufas.", price: "34,90", image: burger1 },
      { name: "Loaded Fries", desc: "Batata frita artesanal com cheddar, bacon e cebolinha.", price: "18,90", image: porcao1 },
    ],
    categoryImages: [
      { name: "Smash Burgers", image: burger1 },
      { name: "Burgers Premium", image: burger1 },
      { name: "Sides", image: porcao1 },
      { name: "Drinks", image: bebidas1 },
    ],
  },
  {
    id: "pizzaria",
    name: "Pizzaria",
    subtitle: "Pizzas artesanais & forno a lenha",
    emoji: "🍕",
    accent: "0 75% 50%",
    heroImage: pizza1,
    heroHeadline: "Mais fome, mais cliques, mais pedidos.",
    heroSub: "Cardápio visual de pizzas que faz o cliente pedir antes de pensar duas vezes.",
    brandName: "Forno & Massa",
    products: [
      { name: "Margherita", desc: "Molho de tomate San Marzano, mussarela de búfala e manjericão.", price: "32,90", image: pizza1, tag: "Clássica" },
      { name: "Pepperoni", desc: "Molho de tomate, mussarela, pepperoni artesanal e orégãos.", price: "36,90", image: pizza1, tag: "Favorita" },
      { name: "Quatro Queijos", desc: "Mussarela, gorgonzola, parmesão e provolone.", price: "38,90", image: pizza1 },
      { name: "Calzone Especial", desc: "Recheado com presunto, queijo, cogumelos e tomate.", price: "34,90", image: pizza1 },
    ],
    categoryImages: [
      { name: "Tradicionais", image: pizza1 },
      { name: "Especiais", image: pizza1 },
      { name: "Calzones", image: pizza1 },
      { name: "Bebidas", image: bebidas1 },
    ],
  },
  {
    id: "sorveteria",
    name: "Sorveteria",
    subtitle: "Gelatos, sundaes & sobremesas geladas",
    emoji: "🍦",
    accent: "340 70% 65%",
    heroImage: heroSorveteria,
    heroHeadline: "Uma marca doce também pode parecer irresistível online.",
    heroSub: "Mostre os seus sabores com um visual que derrete qualquer resistência.",
    brandName: "Dolce Gelato",
    products: [
      { name: "Gelato Artesanal 3 Bolas", desc: "Escolha entre 20+ sabores artesanais feitos diariamente.", price: "14,90", image: sorvete1, tag: "Favorito" },
      { name: "Sundae Especial", desc: "Sorvete, calda quente, chantilly, granulado e cereja.", price: "18,90", image: sorvete1 },
      { name: "Açaí Bowl 500ml", desc: "Açaí cremoso com granola, banana e leite condensado.", price: "22,90", image: acai1, tag: "Novidade" },
      { name: "Milk Shake Premium", desc: "Sorvete artesanal batido com leite e toppings à escolha.", price: "16,90", image: bebidas1 },
    ],
    categoryImages: [
      { name: "Gelatos", image: sorvete1 },
      { name: "Sundaes", image: sobremesa1 },
      { name: "Açaí", image: acai1 },
      { name: "Milk Shakes", image: bebidas1 },
    ],
  },
  {
    id: "acai",
    name: "Açaí / Delivery",
    subtitle: "Açaí, bowls & entregas rápidas",
    emoji: "🫐",
    accent: "280 60% 55%",
    heroImage: acai1,
    heroHeadline: "Mais prática, mais visual, mais pedidos.",
    heroSub: "Um cardápio de açaí tão bonito que o cliente já pede só de ver.",
    brandName: "Açaí Power",
    products: [
      { name: "Açaí Tradicional 500ml", desc: "Açaí puro com granola, banana e leite condensado.", price: "19,90", image: acai1, tag: "Mais Pedido" },
      { name: "Açaí Premium 700ml", desc: "Açaí, morango, kiwi, granola premium e mel.", price: "27,90", image: acai1, tag: "Premium" },
      { name: "Bowl Tropical", desc: "Açaí, manga, coco ralado, chia e calda de frutas.", price: "24,90", image: acai1 },
      { name: "Suco Detox 400ml", desc: "Couve, maçã verde, gengibre e limão.", price: "12,90", image: bebidas1 },
    ],
    categoryImages: [
      { name: "Açaí", image: acai1 },
      { name: "Bowls", image: acai1 },
      { name: "Sucos", image: bebidas1 },
      { name: "Complementos", image: porcao1 },
    ],
  },
  {
    id: "cafeteria",
    name: "Cafeteria",
    subtitle: "Cafés especiais, brunch & confeitaria",
    emoji: "☕",
    accent: "25 50% 40%",
    heroImage: heroCafe,
    heroHeadline: "Uma presença online tão bonita quanto a experiência da sua marca.",
    heroSub: "Cardápio visual para cafés que querem encantar antes mesmo do primeiro gole.",
    brandName: "Café & Arte",
    products: [
      { name: "Cappuccino Artesanal", desc: "Café espresso, leite vaporizado e arte latte.", price: "9,90", image: cafe1, tag: "Favorito" },
      { name: "Brunch Completo", desc: "Ovos, pão artesanal, frutas, granola e suco natural.", price: "32,90", image: prato1, tag: "Novidade" },
      { name: "Croissant Recheado", desc: "Croissant folhado com queijo e presunto ou chocolate.", price: "12,90", image: heroCafe },
      { name: "Bolo do Dia", desc: "Fatia generosa do bolo artesanal do dia.", price: "10,90", image: sobremesa1 },
    ],
    categoryImages: [
      { name: "Cafés", image: cafe1 },
      { name: "Brunch", image: prato1 },
      { name: "Doces", image: sobremesa1 },
      { name: "Bebidas", image: bebidas1 },
    ],
  },
  {
    id: "pastelaria",
    name: "Pastelaria / Snacks",
    subtitle: "Pastéis, salgados & snacks rápidos",
    emoji: "🥟",
    accent: "40 80% 50%",
    heroImage: heroPastelaria,
    heroHeadline: "Mais apetite, mais praticidade, mais clientes.",
    heroSub: "Um cardápio que faz os seus pastéis e salgados parecerem tão bons quanto são.",
    brandName: "Pastel & Cia",
    products: [
      { name: "Pastel de Carne", desc: "Massa crocante recheada com carne moída temperada.", price: "8,90", image: pastel1, tag: "Clássico" },
      { name: "Pastel de Queijo", desc: "Massa crocante com queijo mussarela derretido.", price: "7,90", image: pastel1 },
      { name: "Coxinha Premium", desc: "Coxinha de frango com catupiry, massa crocante.", price: "6,90", image: pastel1, tag: "Favorito" },
      { name: "Combo Família", desc: "10 salgados sortidos + 2 refrigerantes.", price: "39,90", image: combo1, tag: "Promoção" },
    ],
    categoryImages: [
      { name: "Pastéis", image: pastel1 },
      { name: "Salgados", image: pastel1 },
      { name: "Combos", image: combo1 },
      { name: "Bebidas", image: bebidas1 },
    ],
  },
];
