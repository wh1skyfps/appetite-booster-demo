import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { NicheProduct, CardStyle, NicheLabels } from "@/types/niche";

interface NicheProductsProps {
  products: NicheProduct[];
  whatsappNumber: string;
  cardStyle?: CardStyle;
  labels: NicheLabels;
  currency: string;
}

const ServiceCard = ({ product, whatsappNumber, i, cta, currency, variant }: { product: NicheProduct; whatsappNumber: string; i: number; cta: string; currency: string; variant: CardStyle }) => {
  if (variant === "overlay") {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="relative rounded-2xl overflow-hidden group aspect-[3/4] sm:aspect-[4/5]">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        {product.tag && <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">{product.tag}</span>}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3 className="font-bold text-white text-base sm:text-lg mb-1">{product.name}</h3>
          <p className="text-white/60 text-xs sm:text-sm mb-3 line-clamp-2">{product.desc}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-primary">{currency}{product.price}</span>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-full text-xs transition-all hover:scale-105 active:scale-95 min-h-[44px]">
              <MessageCircle className="w-4 h-4" />{cta}
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "bold") {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-border/20">
        <div className="relative aspect-square overflow-hidden">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          {product.tag && <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">{product.tag}</span>}
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="font-black text-base sm:text-lg mb-1 uppercase tracking-tight">{product.name}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">{product.desc}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-2xl sm:text-3xl font-black text-primary">{currency}{product.price}</span>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-black px-5 py-3 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 min-h-[44px]">
              <MessageCircle className="w-4 h-4" />{cta}
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "horizontal") {
    return (
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-row border border-border/30">
        <div className="relative w-32 sm:w-44 aspect-square overflow-hidden flex-shrink-0">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          {product.tag && <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">{product.tag}</span>}
        </div>
        <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-1">{product.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">{product.desc}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-lg sm:text-2xl font-extrabold text-primary">{currency}{product.price}</span>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-full text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 min-h-[44px]">
              <MessageCircle className="w-4 h-4" />{cta}
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "soft") {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
        <div className="relative aspect-square overflow-hidden rounded-3xl m-3">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          {product.tag && <span className="absolute top-3 left-3 bg-white/90 text-foreground text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{product.tag}</span>}
        </div>
        <div className="px-5 pb-5 pt-2">
          <h3 className="font-bold text-base sm:text-lg mb-1">{product.name}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">{product.desc}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-primary">{currency}{product.price}</span>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-full text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 min-h-[44px]">
              <MessageCircle className="w-4 h-4" />{cta}
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-row">
        <div className="relative w-28 sm:w-32 aspect-square overflow-hidden flex-shrink-0">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          {product.tag && <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[9px] font-bold px-2 py-0.5 rounded-full">{product.tag}</span>}
        </div>
        <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-0.5 truncate">{product.name}</h3>
            <p className="text-muted-foreground text-xs mb-2 leading-relaxed line-clamp-2">{product.desc}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-lg sm:text-xl font-extrabold text-primary">{currency}{product.price}</span>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-bold px-3 py-2 rounded-full text-[11px] sm:text-xs transition-all active:scale-95 min-h-[40px]">
              <MessageCircle className="w-3.5 h-3.5" />{cta}
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default: elegant
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-border/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {product.tag && <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{product.tag}</span>}
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-bold text-base sm:text-lg mb-1.5">{product.name}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">{product.desc}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xl sm:text-2xl font-extrabold text-primary">{currency}{product.price}</span>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 min-h-[44px]">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">{cta}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const gridStyles: Record<CardStyle, string> = {
  elegant: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7",
  overlay: "grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5",
  bold: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
  soft: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
  compact: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
  horizontal: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5",
};

const NicheProducts = ({ products, whatsappNumber, cardStyle = "elegant", labels, currency }: NicheProductsProps) => {
  return (
    <section id="services" className="py-14 md:py-28 bg-secondary/40">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            {labels.servicesTitle} <span className="text-primary">{labels.servicesHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-md mx-auto">{labels.servicesSubtitle}</p>
        </motion.div>
        <div className={gridStyles[cardStyle]}>
          {products.map((product, i) => (
            <ServiceCard key={product.name} product={product} whatsappNumber={whatsappNumber} i={i} cta={labels.servicesCta} currency={currency} variant={cardStyle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheProducts;
