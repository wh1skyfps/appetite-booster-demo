import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { NicheProduct } from "@/types/niche";

interface NicheProductsProps {
  products: NicheProduct[];
  whatsappNumber: string;
}

const NicheProducts = ({ products, whatsappNumber }: NicheProductsProps) => {
  return (
    <section id="cardapio" className="py-12 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            Destaques do <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            Os favoritos dos nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-row sm:flex-col"
            >
              <div className="relative w-28 sm:w-full aspect-square sm:aspect-[4/3] overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1 truncate">{product.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">{product.desc}</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-primary whitespace-nowrap">€{product.price}</span>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 btn-whatsapp font-bold px-3 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all active:scale-95 whitespace-nowrap min-h-[44px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Pedir Agora</span>
                    <span className="sm:hidden">Pedir</span>
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

export default NicheProducts;
