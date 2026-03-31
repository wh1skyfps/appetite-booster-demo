import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import type { HeroStyle, NicheLabels } from "@/types/niche";

interface NicheHeroProps {
  name: string;
  tagline: string;
  subtitle: string;
  image: string;
  overlay: string;
  whatsappNumber: string;
  heroStyle: HeroStyle;
  heroEmoji?: string;
  labels: NicheLabels;
}

const NicheHero = ({ name, tagline, subtitle, image, overlay, whatsappNumber, heroStyle, heroEmoji, labels }: NicheHeroProps) => {
  const primaryBtn = (cls: string) => (
    <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }} className={cls}>
      {labels.heroCtaPrimary}
    </a>
  );
  const secondaryBtn = (cls: string) => (
    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className={cls}>
      <MessageCircle className="w-5 h-5" />
      {labels.heroCtaSecondary}
    </a>
  );

  if (heroStyle === "cinematic") {
    return (
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={image} alt={name} className="w-full h-full object-cover scale-105" loading="eager" />
          <div className="absolute inset-0" style={{ background: overlay }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="max-w-2xl">
            <motion.div initial={{ width: 0 }} animate={{ width: "5rem" }} transition={{ delay: 0.5, duration: 0.6 }} className="h-1 bg-primary mb-8 rounded-full" />
            <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-4 text-primary">{name}</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1] tracking-tight">{tagline}</h1>
            <p className="text-base sm:text-lg text-white/60 mb-10 leading-relaxed max-w-lg">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full text-sm transition-all hover:scale-105 active:scale-95 min-h-[52px]")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-10 py-4 rounded-full text-sm transition-all hover:bg-white/10 active:scale-95 min-h-[52px]")}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (heroStyle === "luxury") {
    return (
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: overlay }} />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="max-w-3xl mx-auto">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-20 h-[1px] bg-primary/60 mx-auto mb-6" />
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="inline-block text-[10px] sm:text-xs font-medium tracking-[0.4em] uppercase mb-6 text-white/40">{name}</motion.span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">{tagline}</h1>
            <p className="text-sm sm:text-base text-white/50 mb-10 max-w-lg mx-auto leading-relaxed">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-12 py-4 rounded-none text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 min-h-[52px]")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-12 py-4 rounded-none text-sm tracking-widest uppercase transition-all hover:bg-white/10 active:scale-95 min-h-[52px]")}
            </div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="w-20 h-[1px] bg-primary/60 mx-auto mt-12" />
          </motion.div>
        </div>
      </section>
    );
  }

  if (heroStyle === "split") {
    return (
      <section className="relative min-h-[100svh] flex items-stretch overflow-hidden pt-16">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-1 flex items-center justify-center px-6 py-16 lg:py-0 lg:px-16 bg-card order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-lg">
              <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 text-primary/70 border border-primary/20 px-3 py-1 rounded-full">{name}</span>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-5 leading-[1.05] text-foreground">{tagline}</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">{subtitle}</p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 active:scale-95 min-h-[52px]")}
                {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary/30 text-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:bg-primary/5 active:scale-95 min-h-[52px]")}
              </div>
            </motion.div>
          </div>
          <div className="relative flex-1 min-h-[45vh] lg:min-h-full order-1 lg:order-2">
            <motion.img initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-card/30 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </section>
    );
  }

  if (heroStyle === "bold") {
    return (
      <section className="relative min-h-[100svh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: overlay }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10 pb-12 md:pb-20 pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <motion.div initial={{ width: 0 }} animate={{ width: "4rem" }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-primary mb-6 rounded-full" />
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 leading-[0.95] uppercase tracking-tight">{tagline}</h1>
            <p className="text-base sm:text-xl text-white/70 mb-8 max-w-lg leading-relaxed">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-start gap-3">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-extrabold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 min-h-[52px]")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-full text-sm transition-all hover:bg-white/10 active:scale-95 min-h-[52px]")}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (heroStyle === "editorial") {
    return (
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: overlay }} />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-16 h-[1px] bg-white/40 mx-auto mb-8" />
            <span className="inline-block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase mb-6 text-white/50">{name}</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.15] italic">{tagline}</h1>
            <p className="text-sm sm:text-lg text-white/60 mb-10 max-w-md mx-auto leading-relaxed font-light">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-medium px-10 py-4 rounded-full text-sm transition-all hover:bg-white/10 hover:border-white/50 active:scale-95 min-h-[52px] backdrop-blur-sm")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full text-sm transition-all hover:scale-105 active:scale-95 min-h-[52px]")}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16">
              <ChevronDown className="w-5 h-5 text-white/30 mx-auto animate-bounce" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (heroStyle === "minimal") {
    return (
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: overlay }} />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
            <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 text-primary">{name}</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-[1.1]">{tagline}</h1>
            <p className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-start gap-3">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 active:scale-95 min-h-[52px]")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:bg-white/10 active:scale-95 min-h-[52px]")}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (heroStyle === "playful") {
    return (
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: overlay }} />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 blur-3xl" initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 20, 0], y: [0, -15, 0] }} transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }} style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%` }} />
          ))}
        </div>
        <div className="container relative z-10 py-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto">
            {heroEmoji && <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="inline-block text-4xl mb-4">{heroEmoji}</motion.span>}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 leading-[1.05]">{tagline}</h1>
            <p className="text-base sm:text-lg text-white/75 mb-8 max-w-md mx-auto leading-relaxed">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 active:scale-95 min-h-[52px] shadow-lg")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 active:scale-95 min-h-[52px]")}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default: centered
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ background: overlay }} />
      </div>
      <div className="container relative z-10 py-12 md:py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 text-white/70">{name}</motion.span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-[1.1]">{tagline}</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all hover:scale-105 active:scale-95 min-h-[52px]")}
            {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all hover:bg-white/10 active:scale-95 min-h-[52px]")}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NicheHero;
