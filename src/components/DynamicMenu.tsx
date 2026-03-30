import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useNiche } from "@/contexts/NicheContext";

const DynamicMenu = () => {
  const { selectedNiche } = useNiche();
  if (!selectedNiche) return null;

  return (
    <section id="menu" className="py-12 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            Cardápio{" "}
            <span style={{ color: `hsl(${selectedNiche.accent})` }}>
              {selectedNiche.brandName}
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            Veja como os seus produtos podem brilhar num cardápio digital profissional.
          </p>
        </motion.div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6 md:mb-8 -mx-6 px-6 md:mx-0 md:px-0 md:justify-center md:flex-wrap">
          {selectedNiche.categoryImages.map((cat) => (
            <button
              key={cat.name}
              className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold border border-border hover:border-primary/50 active:scale-95 transition-all bg-card"
              style={{ color: `hsl(${selectedNiche.accent})` }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNiche.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {selectedNiche.products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.tag && (
                    <span
                      className="absolute top-3 left-3 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `hsl(${selectedNiche.accent})` }}
                    >
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="font-bold text-base md:text-lg mb-1 truncate">{product.name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 leading-relaxed line-clamp-2">{product.desc}</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xl md:text-2xl font-extrabold" style={{ color: `hsl(${selectedNiche.accent})` }}>
                      €{product.price}
                    </span>
                    <a
                      href="https://wa.me/351999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 btn-whatsapp font-bold px-3.5 py-2.5 rounded-full text-xs active:scale-95 transition-all whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Pedir
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DynamicMenu;
