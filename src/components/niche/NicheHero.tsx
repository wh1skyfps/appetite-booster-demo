import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ChevronDown, ArrowRight, Play } from "lucide-react";
import type { HeroStyle, NicheLabels } from "@/types/niche";
import { useRef } from "react";

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
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const primaryBtn = (cls: string) => (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="#services"
      onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
      className={cls}
    >
      {labels.heroCtaPrimary}
    </motion.a>
  );

  const secondaryBtn = (cls: string) => (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
    >
      <MessageCircle className="w-5 h-5" />
      {labels.heroCtaSecondary}
    </motion.a>
  );

  if (heroStyle === "cinematic") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <motion.div className="container relative z-10 py-20" style={{ opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
            <motion.div initial={{ width: 0 }} animate={{ width: "5rem" }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="h-1 bg-primary mb-8 rounded-full" />
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-4 text-primary/80">{name}</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1] tracking-tight">{tagline}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="text-base sm:text-lg text-white/60 mb-10 leading-relaxed max-w-lg">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex flex-col sm:flex-row items-start gap-4">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full text-sm transition-colors hover:brightness-110 min-h-[52px] shadow-lg shadow-primary/25")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-10 py-4 rounded-full text-sm transition-colors hover:bg-white/10 min-h-[52px] backdrop-blur-sm")}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-5 h-5 text-white/30 animate-bounce" />
        </motion.div>
      </section>
    );
  }

  if (heroStyle === "luxury") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <motion.div className="container relative z-10 py-20 text-center" style={{ opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="max-w-3xl mx-auto">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mb-8" />
            <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="inline-block text-[10px] sm:text-xs font-medium tracking-[0.5em] uppercase mb-6 text-white/40">{name}</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }} className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">{tagline}</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.7 }} className="text-sm sm:text-base text-white/50 mb-12 max-w-lg mx-auto leading-relaxed">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-14 py-4 text-sm tracking-[0.15em] uppercase transition-colors hover:brightness-110 min-h-[52px] shadow-lg shadow-primary/20")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-14 py-4 text-sm tracking-[0.15em] uppercase transition-colors hover:bg-white/10 min-h-[52px] backdrop-blur-sm")}
            </motion.div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.3, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mt-14" />
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-5 h-5 text-white/25 animate-bounce" />
        </motion.div>
      </section>
    );
  }

  if (heroStyle === "split") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-stretch overflow-hidden pt-16">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-1 flex items-center justify-center px-6 py-16 lg:py-0 lg:px-16 bg-card order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-lg">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 text-primary/70 border border-primary/20 px-3 py-1.5 rounded-full">{name}</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-5 leading-[1.05] text-foreground">{tagline}</motion.h1>
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">{subtitle}</motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex flex-col sm:flex-row items-start gap-3">
                {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-colors hover:brightness-110 min-h-[52px] shadow-lg shadow-primary/20")}
                {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary/30 text-foreground font-bold px-8 py-4 rounded-full text-sm transition-colors hover:bg-primary/5 min-h-[52px]")}
              </motion.div>
            </motion.div>
          </div>
          <div className="relative flex-1 min-h-[45vh] lg:min-h-full order-1 lg:order-2 overflow-hidden">
            <motion.img initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-card/30 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </section>
    );
  }

  if (heroStyle === "bold") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden pt-16">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <motion.div className="container relative z-10 pb-14 md:pb-24 pt-20" style={{ opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <motion.div initial={{ width: 0 }} animate={{ width: "5rem" }} transition={{ delay: 0.3, duration: 0.6 }} className="h-1.5 bg-primary mb-8 rounded-full" />
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 leading-[0.95] uppercase tracking-tight">{tagline}</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="text-base sm:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex flex-col sm:flex-row items-start gap-4">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-extrabold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-colors hover:brightness-110 min-h-[52px] shadow-lg shadow-primary/25")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-full text-sm transition-colors hover:bg-white/10 min-h-[52px] backdrop-blur-sm")}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  if (heroStyle === "editorial") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <motion.div className="container relative z-10 py-20" style={{ opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-20 h-[1px] bg-white/40 mx-auto mb-8" />
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="inline-block text-[10px] sm:text-xs font-medium tracking-[0.4em] uppercase mb-6 text-white/50">{name}</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.15] italic">{tagline}</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-sm sm:text-lg text-white/60 mb-12 max-w-md mx-auto leading-relaxed font-light">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-10 py-4 rounded-full text-sm transition-all hover:bg-white/10 hover:border-white/50 min-h-[52px] backdrop-blur-sm")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full text-sm transition-colors hover:brightness-110 min-h-[52px] shadow-lg shadow-primary/20")}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-20">
              <ChevronDown className="w-5 h-5 text-white/25 mx-auto animate-bounce" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  if (heroStyle === "minimal") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <motion.div className="container relative z-10 py-20" style={{ opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-xl">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 text-primary">{name}</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-[1.1]">{tagline}</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row items-start gap-3">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-colors hover:brightness-110 min-h-[52px] shadow-lg shadow-primary/20")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm transition-colors hover:bg-white/10 min-h-[52px] backdrop-blur-sm")}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  if (heroStyle === "playful") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 blur-3xl" initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 20, 0], y: [0, -15, 0] }} transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }} style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%` }} />
          ))}
        </div>
        <motion.div className="container relative z-10 py-12 text-center" style={{ opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl mx-auto">
            {heroEmoji && <motion.span initial={{ opacity: 0, scale: 0.5, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="inline-block text-5xl mb-6">{heroEmoji}</motion.span>}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-5 leading-[1.05]">{tagline}</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-base sm:text-lg text-white/75 mb-10 max-w-md mx-auto leading-relaxed">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-foreground font-bold px-8 py-4 rounded-full text-sm transition-colors hover:bg-white/90 min-h-[52px] shadow-xl")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-colors hover:brightness-110 min-h-[52px] shadow-lg shadow-primary/25")}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  // Default: centered
  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: overlay }} />
      <motion.div className="container relative z-10 py-12 md:py-20 text-center" style={{ opacity: contentOpacity }}>
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-5 text-white/70">{name}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-5 md:mb-6 leading-[1.1]">{tagline}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="text-base sm:text-lg md:text-xl text-white/80 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">{subtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {primaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-colors hover:brightness-110 min-h-[52px] shadow-lg shadow-primary/20")}
            {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-colors hover:bg-white/10 min-h-[52px] backdrop-blur-sm")}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-5 h-5 text-white/25 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default NicheHero;
