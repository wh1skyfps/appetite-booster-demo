import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
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
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="relative rounded-2xl md:rounded-3xl overflow-hidden group aspect-[3/4] sm:aspect-[4/5]">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        {product.tag && <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-lg">{product.tag}</motion.span>}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <h3 className="font-bold text-white text-base sm:text-lg mb-1">{product.name}</h3>
          <p className="text-white/60 text-xs sm:text-sm mb-4 line-clamp-2">{product.desc}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-primary">{currency}{product.price}</span>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-full text-xs transition-colors hover:brightness-110 min-h-[44px] shadow-lg shadow-primary/20">
              <MessageCircle className="w-4 h-4" />{cta}
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "bold") {
    return (
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-border/20">
        <div className="relative aspect-square overflow-hidden">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {product.tag && <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-lg">{product.tag}</span>}
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="font-black text-base sm:text-lg mb-1.5 uppercase tracking-tight">{product.name}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">{product.desc}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-2xl sm:text-3xl font-black text-primary">{currency}{product.price}</span>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-black px-5 py-3 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-colors hover:brightness-110 min-h-[44px] shadow-lg shadow-primary/20">
              <MessageCircle className="w-4 h-4" />{cta}
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "horizontal") {
    return (
      <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-row border border-border/30">
        <div className="relative w-32 sm:w-44 aspect-square overflow-hidden flex-shrink-0">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          {product.tag && <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">{product.tag}</span>}
        </div>
        <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-1">{product.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">{product.desc}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-lg sm:text-2xl font-extrabold text-primary">{currency}{product.price}</span>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-full text-xs sm:text-sm transition-colors hover:brightness-110 min-h-[44px]">
              <MessageCircle className="w-4 h-4" />{cta}
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "soft") {
    return (
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
        <div className="relative aspect-square overflow-hidden rounded-3xl m-3">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          {product.tag && <span className="absolute top-3 left-3 bg-white/90 text-foreground text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-md">{product.tag}</span>}
        </div>
        <div className="px-5 pb-5 pt-2">
          <h3 className="font-bold text-base sm:text-lg mb-1">{product.name}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">{product.desc}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-primary">{currency}{product.price}</span>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 py-2.5 rounded-full text-xs sm:text-sm transition-colors hover:brightness-110 min-h-[44px]">
              <MessageCircle className="w-4 h-4" />{cta}
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.06, duration: 0.5 }} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-row">
        <div className="relative w-28 sm:w-32 aspect-square overflow-hidden flex-shrink-0">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          {product.tag && <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[9px] font-bold px-2 py-0.5 rounded-full">{product.tag}</span>}
        </div>
        <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-0.5 truncate">{product.name}</h3>
            <p className="text-muted-foreground text-xs mb-2 leading-relaxed line-clamp-2">{product.desc}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-lg sm:text-xl font-extrabold text-primary">{currency}{product.price}</span>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-bold px-3 py-2 rounded-full text-[11px] sm:text-xs transition-colors min-h-[40px]">
              <MessageCircle className="w-3.5 h-3.5" />{cta}
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "glass") {
    return (
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.07, duration: 0.6 }} className="relative rounded-2xl md:rounded-3xl overflow-hidden group aspect-[4/3]">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/5" />
        {product.tag && <span className="absolute top-3 right-3 bg-white/15 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-white/10">{product.tag}</span>}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 backdrop-blur-sm bg-white/5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg mb-0.5">{product.name}</h3>
              <p className="text-white/50 text-xs line-clamp-1">{product.desc}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-lg sm:text-xl font-extrabold text-primary block">{currency}{product.price}</span>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-[10px] font-medium mt-1 transition-colors">
                {cta} <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "minimal-row") {
    return (
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex items-center gap-5 py-5 border-b border-border/40 last:border-0 group hover:bg-secondary/30 -mx-4 px-4 rounded-xl transition-all duration-300">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-sm sm:text-base">{product.name}</h3>
              <p className="text-muted-foreground text-xs line-clamp-1 mt-0.5">{product.desc}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-lg font-extrabold text-primary">{currency}{product.price}</span>
              {product.tag && <span className="block text-[9px] font-bold text-primary/70 mt-0.5">{product.tag}</span>}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default: elegant
  return (
    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="bg-card rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-border/30 hover:border-primary/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {product.tag && <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-md">{product.tag}</span>}
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-bold text-base sm:text-lg mb-1.5">{product.name}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">{product.desc}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xl sm:text-2xl font-extrabold text-primary">{currency}{product.price}</span>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-colors hover:brightness-110 min-h-[44px] shadow-lg shadow-primary/15">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">{cta}</span>
          </motion.a>
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
  glass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
  "minimal-row": "max-w-3xl mx-auto",
};

const NicheProducts = ({ products, whatsappNumber, cardStyle = "elegant", labels, currency }: NicheProductsProps) => {
  return (
    <section id="services" className="py-16 md:py-32 bg-secondary/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
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
