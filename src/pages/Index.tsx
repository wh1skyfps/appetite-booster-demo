import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CardFlip from "@/components/ui/flip-card";
import acaiCard from "@/assets/acai-card.jpeg";

const niches = [
  {
    path: "/restaurante-premium",
    name: "Restaurante Premium",
    emoji: "🍽️",
    subtitle: "Elegância e requinte para restaurantes de alta gastronomia.",
    desc: "Site sofisticado que transmite a experiência premium do seu restaurante, com cardápio visual e reservas pelo WhatsApp.",
    features: ["Visual elegante e refinado", "Cardápio com fotos premium", "Reservas por WhatsApp", "Presença digital de luxo"],
    color: "#8B6914",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    path: "/lanchonete",
    name: "Lanchonete",
    emoji: "🥪",
    subtitle: "Prático e rápido para snack bars e lanchonetes.",
    desc: "Site focado em velocidade e conversão, perfeito para lanchonetes que querem aumentar os pedidos rápidos.",
    features: ["Pedidos rápidos", "Combos em destaque", "CTA forte e direto", "Mobile otimizado"],
    color: "#DC2626",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80",
  },
  {
    path: "/hamburgueria-artesanal",
    name: "Hamburgueria Artesanal",
    emoji: "🍔",
    subtitle: "Dark e bold para hamburguerias premium.",
    desc: "Estilo escuro e impactante que reforça o posicionamento premium da sua hamburgueria artesanal.",
    features: ["Visual dark e bold", "Fotos que vendem", "Marca forte online", "SEO local otimizado"],
    color: "#B45309",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    path: "/pizzaria",
    name: "Pizzaria",
    emoji: "🍕",
    subtitle: "Quente e familiar para pizzarias tradicionais.",
    desc: "Layout acolhedor e irresistível, pensado para famílias e amantes de pizza.",
    features: ["Menu visual irresistível", "Pedidos diretos", "Promoções em destaque", "Ambiente familiar"],
    color: "#C2410C",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
  },
  {
    path: "/sorveteria",
    name: "Sorveteria",
    emoji: "🍦",
    subtitle: "Doce e fresco para geladerias artesanais.",
    desc: "Cores suaves e visuais frescos que transmitem a doçura dos seus gelados artesanais.",
    features: ["Cores frescas e doces", "Sabores em destaque", "Promoções sazonais", "Experiência playful"],
    color: "#DB2777",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80",
  },
  {
    path: "/acai-delivery",
    name: "Açaí & Delivery",
    emoji: "🫐",
    subtitle: "Moderno e prático para negócios de delivery.",
    desc: "Design focado em pedidos rápidos e delivery, com visual vibrante e energético.",
    features: ["Delivery otimizado", "Visual vibrante", "Pedidos instantâneos", "Mobile-first total"],
    color: "#7C3AED",
    image: acaiCard,
  },
  {
    path: "/cafeteria",
    name: "Cafeteria & Brunch",
    emoji: "☕",
    subtitle: "Acolhedor e editorial para cafeterias lifestyle.",
    desc: "Estética editorial e acolhedora, perfeita para cafeterias de especialidade e brunch.",
    features: ["Estética lifestyle", "Reservas para brunch", "Visual editorial", "Marca premium"],
    color: "#92400E",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
  {
    path: "/pastelaria-snacks",
    name: "Pastelaria & Snacks",
    emoji: "🥐",
    subtitle: "Dourado e convidativo para pastelarias.",
    desc: "Visual dourado e apetitoso, pensado para pastelarias e negócios de snacks rápidos.",
    features: ["Visual dourado e quente", "Pedidos rápidos", "Combos em destaque", "Catálogo crocante"],
    color: "#CA8A04",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(20,25%,6%)] text-white">
      {/* Hero */}
      <section className="py-16 md:py-28">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-white/40 mb-4">
              Demos de Websites para Restauração
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-5">
              Qual é o <span className="text-primary">seu nicho</span>?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Explore demos reais criadas para diferentes tipos de negócios de alimentação.
              Cada demo é única, responsiva e pronta para converter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Niche Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {niches.map((niche, i) => (
              <motion.div
                key={niche.path}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
              >
                <Link to={niche.path} className="block">
                  <CardFlip
                    title={niche.name}
                    subtitle={niche.subtitle}
                    description={niche.desc}
                    features={niche.features}
                    color={niche.color}
                    image={niche.image}
                    emoji={niche.emoji}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
