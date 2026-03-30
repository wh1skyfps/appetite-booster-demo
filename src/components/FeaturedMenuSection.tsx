import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import burger1 from "@/assets/burger-1.jpg";
import combo1 from "@/assets/combo-1.jpg";
import porcao1 from "@/assets/porcao-1.jpg";
import acai1 from "@/assets/acai-1.jpg";
import pizza1 from "@/assets/pizza-1.jpg";
import sobremesa1 from "@/assets/sobremesa-1.jpg";

const products = [
  { name: "Smash Burger Clássico", desc: "Pão brioche, blend 180g, cheddar, cebola caramelizada e molho especial.", price: "22,90", image: burger1, tag: "Mais Pedido" },
  { name: "Combo Família", desc: "2 burgers, batata grande, 2 refrigerantes e sobremesa.", price: "59,90", image: combo1, tag: "Promoção" },
  { name: "Batata Loaded", desc: "Batata frita crocante coberta com cheddar cremoso, bacon e cebolinha.", price: "18,90", image: porcao1 },
  { name: "Açaí Premium 500ml", desc: "Açaí puro com granola, banana, morango e leite condensado.", price: "24,90", image: acai1, tag: "Novidade" },
  { name: "Pizza Margherita", desc: "Massa artesanal, molho de tomate, mussarela de búfala e manjericão.", price: "34,90", image: pizza1 },
  { name: "Brownie com Sorvete", desc: "Brownie quente de chocolate belga com bola de sorvete de baunilha.", price: "16,90", image: sobremesa1 },
];

const FeaturedMenuSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Destaques do <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Os favoritos dos nossos clientes, preparados com ingredientes selecionados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-primary">€{product.price}</span>
                  <a
                    href="https://wa.me/351999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-whatsapp font-bold px-5 py-2.5 rounded-full text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pedir Agora
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenuSection;
