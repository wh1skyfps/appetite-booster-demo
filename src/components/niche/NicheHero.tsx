import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
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

/* Shared film-grain + vignette overlay */
const CinematicOverlays = () => (
  <>
    {/* Film grain */}
    <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.035] mix-blend-overlay"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
    />
    {/* Vignette */}
    <div className="absolute inset-0 z-[2] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }}
    />
  </>
);

/* Staggered word reveal for taglines */
const TaglineReveal = ({ text, className, delay = 0.4 }: { text: string; className: string; delay?: number }) => {
  const words = text.split(" ");
  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: delay + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

/* Scroll indicator */
const ScrollIndicator = ({ delay = 2 }: { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
    />
    <ChevronDown className="w-4 h-4 text-white/25" />
  </motion.div>
);

const NicheHero = ({ name, tagline, subtitle, image, overlay, whatsappNumber, heroStyle, heroEmoji, labels }: NicheHeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.25]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  const primaryBtn = (cls: string) => (
    <motion.a
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      href="#services"
      onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
      className={cls}
    >
      {labels.heroCtaPrimary}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );

  const secondaryBtn = (cls: string) => (
    <motion.a
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
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
      <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <CinematicOverlays />
        <motion.div className="container relative z-10 py-20" style={{ opacity: contentOpacity, y: contentY }}>
          <div className="max-w-2xl">
            <motion.div initial={{ width: 0 }} animate={{ width: "6rem" }} transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="h-[3px] bg-gradient-to-r from-primary to-primary/40 mb-10 rounded-full" />
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase mb-5 text-primary/90">{name}</motion.span>
            <TaglineReveal text={tagline} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-7 leading-[0.95] tracking-tight" />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="text-base sm:text-lg text-white/55 mb-12 leading-relaxed max-w-lg">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="flex flex-col sm:flex-row items-start gap-4">
              {primaryBtn("group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full text-sm transition-all hover:brightness-110 min-h-[56px] shadow-2xl shadow-primary/30")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/15 text-white font-medium px-10 py-4 rounded-full text-sm transition-all hover:bg-white/10 hover:border-white/25 min-h-[56px] backdrop-blur-md")}
            </motion.div>
          </div>
        </motion.div>
        <ScrollIndicator />
      </section>
    );
  }

  if (heroStyle === "luxury") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <CinematicOverlays />
        <motion.div className="container relative z-10 py-20 text-center" style={{ opacity: contentOpacity, y: contentY }}>
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-10" />
            <motion.span initial={{ opacity: 0, y: 15, letterSpacing: "0.2em" }} animate={{ opacity: 1, y: 0, letterSpacing: "0.6em" }} transition={{ delay: 0.4, duration: 1 }} className="inline-block text-[10px] sm:text-xs font-medium uppercase mb-8 text-white/35">{name}</motion.span>
            <TaglineReveal text={tagline} className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-7 leading-[1.08]" delay={0.5} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="text-sm sm:text-base text-white/45 mb-14 max-w-lg mx-auto leading-relaxed font-light">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryBtn("group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-bold px-14 py-4 text-sm tracking-[0.15em] uppercase transition-all hover:brightness-110 min-h-[56px] shadow-2xl shadow-primary/25")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/20 text-white font-medium px-14 py-4 text-sm tracking-[0.15em] uppercase transition-all hover:bg-white/10 hover:border-white/30 min-h-[56px] backdrop-blur-md")}
            </motion.div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.6, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-16" />
          </div>
        </motion.div>
        <ScrollIndicator delay={2.5} />
      </section>
    );
  }

  if (heroStyle === "split") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-stretch overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-1 flex items-center justify-center px-6 py-20 lg:py-0 lg:px-16 xl:px-24 bg-card order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="max-w-lg">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-5 text-primary/70 border border-primary/20 px-4 py-1.5 rounded-full">{name}</motion.span>
              <TaglineReveal text={tagline} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-[1.05] text-foreground" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">{subtitle}</motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="flex flex-col sm:flex-row items-start gap-3">
                {primaryBtn("group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:brightness-110 min-h-[56px] shadow-xl shadow-primary/20")}
                {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary/25 text-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:bg-primary/5 min-h-[56px]")}
              </motion.div>
            </motion.div>
          </div>
          <div className="relative flex-1 min-h-[50vh] lg:min-h-full order-1 lg:order-2 overflow-hidden">
            <motion.img initial={{ opacity: 0, scale: 1.15 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-card/40 lg:via-transparent lg:to-transparent" />
            <CinematicOverlays />
          </div>
        </div>
      </section>
    );
  }

  if (heroStyle === "bold") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
        <CinematicOverlays />
        <motion.div className="container relative z-10 pb-16 md:pb-28 pt-20" style={{ opacity: contentOpacity, y: contentY }}>
          <div className="max-w-3xl">
            <motion.div initial={{ width: 0 }} animate={{ width: "6rem" }} transition={{ delay: 0.2, duration: 0.8 }} className="h-2 bg-primary mb-10 rounded-full" />
            <TaglineReveal text={tagline} className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-5 leading-[0.9] uppercase tracking-tighter" delay={0.3} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.7 }} className="text-base sm:text-xl text-white/65 mb-12 max-w-lg leading-relaxed">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="flex flex-col sm:flex-row items-start gap-4">
              {primaryBtn("group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-extrabold px-10 py-5 rounded-full text-sm uppercase tracking-wider transition-all hover:brightness-110 min-h-[56px] shadow-2xl shadow-primary/30")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-white/15 text-white font-bold px-10 py-5 rounded-full text-sm transition-all hover:bg-white/10 hover:border-white/25 min-h-[56px] backdrop-blur-md")}
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  }

  if (heroStyle === "editorial") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <CinematicOverlays />
        <motion.div className="container relative z-10 py-20" style={{ opacity: contentOpacity, y: contentY }}>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="w-24 h-[1px] bg-white/30 mx-auto mb-10" />
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-block text-[10px] sm:text-xs font-medium tracking-[0.5em] uppercase mb-8 text-white/45">{name}</motion.span>
            <TaglineReveal text={tagline} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-7 leading-[1.1] italic" delay={0.4} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="text-sm sm:text-lg text-white/55 mb-14 max-w-md mx-auto leading-relaxed font-light">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryBtn("group w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-10 py-4 rounded-full text-sm transition-all hover:bg-white/10 hover:border-white/40 min-h-[56px] backdrop-blur-md")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-full text-sm transition-all hover:brightness-110 min-h-[56px] shadow-2xl shadow-primary/25")}
            </motion.div>
            <ScrollIndicator delay={2} />
          </div>
        </motion.div>
      </section>
    );
  }

  if (heroStyle === "minimal") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <CinematicOverlays />
        <motion.div className="container relative z-10 py-20" style={{ opacity: contentOpacity, y: contentY }}>
          <div className="max-w-xl">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-5 text-primary">{name}</motion.span>
            <TaglineReveal text={tagline} className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.08]" />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-sm sm:text-base text-white/65 mb-10 leading-relaxed">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row items-start gap-3">
              {primaryBtn("group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:brightness-110 min-h-[56px] shadow-xl shadow-primary/20")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/15 text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:bg-white/10 hover:border-white/25 min-h-[56px] backdrop-blur-md")}
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  }

  if (heroStyle === "playful") {
    return (
      <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <CinematicOverlays />
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full bg-primary/8 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2], x: [0, 25, 0], y: [0, -20, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.7 }}
              style={{ left: `${10 + i * 20}%`, top: `${15 + (i % 3) * 28}%` }}
            />
          ))}
        </div>
        <motion.div className="container relative z-10 py-12 text-center" style={{ opacity: contentOpacity, y: contentY }}>
          <div className="max-w-2xl mx-auto">
            {heroEmoji && (
              <motion.span initial={{ opacity: 0, scale: 0.3, rotate: -30 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 12 }} className="inline-block text-5xl md:text-6xl mb-8">{heroEmoji}</motion.span>
            )}
            <TaglineReveal text={tagline} className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.05]" delay={0.3} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-base sm:text-lg text-white/70 mb-12 max-w-md mx-auto leading-relaxed">{subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {primaryBtn("group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:bg-white/90 min-h-[56px] shadow-2xl")}
              {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm transition-all hover:brightness-110 min-h-[56px] shadow-xl shadow-primary/30")}
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  }

  // Default: centered
  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img src={image} alt={name} className="w-full h-full object-cover" loading="eager" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: overlay }} />
      <CinematicOverlays />
      <motion.div className="container relative z-10 py-12 md:py-20 text-center" style={{ opacity: contentOpacity, y: contentY }}>
        <div className="max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-6 text-white/65">{name}</motion.span>
          <TaglineReveal text={tagline} className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 md:mb-8 leading-[1.08]" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.7 }} className="text-base sm:text-lg md:text-xl text-white/70 mb-12 md:mb-14 max-w-xl mx-auto leading-relaxed">{subtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {primaryBtn("group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all hover:brightness-110 min-h-[56px] shadow-2xl shadow-primary/25")}
            {secondaryBtn("w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-white/15 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all hover:bg-white/10 hover:border-white/25 min-h-[56px] backdrop-blur-md")}
          </motion.div>
        </div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
};

export default NicheHero;
