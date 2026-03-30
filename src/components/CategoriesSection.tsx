import { motion } from "framer-motion";
import burger1 from "@/assets/burger-1.jpg";
import combo1 from "@/assets/combo-1.jpg";
import porcao1 from "@/assets/porcao-1.jpg";
import bebidas1 from "@/assets/bebidas-1.jpg";
import sobremesa1 from "@/assets/sobremesa-1.jpg";
import acai1 from "@/assets/acai-1.jpg";
import pizza1 from "@/assets/pizza-1.jpg";
import prato1 from "@/assets/prato-1.jpg";

const categories = [
  { name: "Hambúrgueres", image: burger1, count: 12 },
  { name: "Combos", image: combo1, count: 8 },
  { name: "Porções", image: porcao1, count: 10 },
  { name: "Bebidas", image: bebidas1, count: 15 },
  { name: "Sobremesas", image: sobremesa1, count: 6 },
  { name: "Açaí", image: acai1, count: 8 },
  { name: "Pizzas", image: pizza1, count: 10 },
  { name: "Pratos", image: prato1, count: 9 },
];

const CategoriesSection = () => {
  return (
    <section id="cardapio" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Explore o <span className="text-primary">Cardápio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Navegue pelas categorias e encontre o que mais te dá água na boca.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#cardapio"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-lg text-section-dark-foreground">{cat.name}</h3>
                <p className="text-sm text-section-dark-foreground/70">{cat.count} itens</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
