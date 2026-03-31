import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, Clock, Star, ChevronRight, ChevronLeft,
  Instagram, Sparkles, Award, Heart, Shield, Scissors, Menu, X, ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/* ─────────── TYPES ─────────── */
export interface HairSalonContent {
  salonName: string;
  phone: string;
  phoneLink: string;
  email: string;
  address: string;
  parking?: string;
  bookingUrl: string;
  whatsappNumber: string;
  backPath: string;
  currency: string;
  heroSlides: { image: string; title: string; subtitle: string; price: string; regularPrice: string; detail: string; pieces?: string }[];
  salonInteriorImage: string;
  nav: { services: string; pricing: string; results: string; about: string; contact: string; bookNow: string };
  trust: { icon: string; label: string }[];
  about: { subtitle: string; title: string; titleItalic: string; paragraphs: string[]; cta: string };
  services: { title: string; desc: string; category: string }[];
  serviceCategories: { key: string; label: string }[];
  servicesCarousel: { image: string; title: string; subtitle: string; price: string; regular: string; detail: string }[];
  carouselSection: { subtitle: string; title: string };
  beforeAfter: { subtitle: string; title: string; titleItalic: string; desc: string; cta: string };
  whyChoose: { subtitle: string; title: string; titleItalic: string; reasons: { icon: string; title: string; desc: string }[] };
  pricing: {
    subtitle: string; title: string; note: string; lengths: string[];
    extensionServices: { name: string; lengths: Record<string, { qty: string; price: string }[]> }[];
    beautyServices: { category: string; items: { name: string; price: string }[] }[];
    beautyTitle: string;
  };
  testimonials: { subtitle: string; title: string; titleItalic: string; ratingText: string; items: { name: string; text: string; rating: number }[] };
  bookingCta: { subtitle: string; title: string; titleHighlight: string; desc: string; bookBtn: string };
  contact: { subtitle: string; title: string; addressLabel: string; parkingLabel?: string; phoneLabel: string; emailLabel: string; hoursLabel: string; hoursValue: string[]; closed: string };
  footer: { tagline: string; backLabel: string; quickLinks: string; contactLabel: string; copyright: string };
  instagramHandle: string;
  instagramUrl: string;
}

/* ─────────── HELPERS ─────────── */
const iconMap: Record<string, any> = { sparkles: Sparkles, heart: Heart, award: Award, shield: Shield, scissors: Scissors, mapPin: MapPin, star: Star, clock: Clock };

const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
};

/* ═══════════ NAVBAR ═══════════ */
const Navbar = ({ c }: { c: HairSalonContent }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const links = [
    { label: c.nav.services, href: "#services" }, { label: c.nav.pricing, href: "#pricing" },
    { label: c.nav.results, href: "#results" }, { label: c.nav.about, href: "#about" },
    { label: c.nav.contact, href: "#contact" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(260,15%,6%)]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to={c.backPath} className="flex items-center gap-2 group">
          <span className="font-heading text-xl md:text-2xl text-white tracking-[0.15em] uppercase font-bold">{c.salonName}</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-[11px] tracking-[0.18em] uppercase text-white/60 hover:text-[hsl(338,35%,60%)] transition-colors duration-300">{l.label}</a>
          ))}
          <a href={c.bookingUrl}>
            <Button className="bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white text-[11px] tracking-[0.18em] uppercase px-7 py-5 rounded-none">{c.nav.bookNow}</Button>
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(260,15%,6%)]/98 backdrop-blur-lg border-t border-white/5 px-6 pb-6 overflow-hidden">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm tracking-[0.12em] uppercase text-white/60 hover:text-[hsl(338,35%,60%)] border-b border-white/5">{l.label}</a>
            ))}
            <a href={c.bookingUrl} className="block mt-4">
              <Button className="w-full bg-[hsl(338,35%,60%)] text-white text-[11px] tracking-[0.18em] uppercase rounded-none py-5">{c.nav.bookNow}</Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ═══════════ HERO — fullscreen slider with bottom-left text + bottom-right nav tabs ═══════════ */
const Hero = ({ c }: { c: HairSalonContent }) => {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const slides = c.heroSlides;
  const DURATION = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIdx(i => (i + 1) % slides.length);
          return 0;
        }
        return prev + (100 / (DURATION / 50));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goTo = (i: number) => { setIdx(i); setProgress(0); };

  return (
    <section className="relative h-screen overflow-hidden bg-[hsl(260,15%,6%)]">
      {/* Background images */}
      {slides.map((slide, i) => (
        <motion.div key={i} className="absolute inset-0"
          animate={{ opacity: i === idx ? 1 : 0, scale: i === idx ? 1 : 1.08 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(260,15%,6%)] via-black/20 to-black/30" />
        </motion.div>
      ))}

      {/* Center overlay — product info card */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
          {slides[idx].pieces && (
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-1">{slides[idx].pieces}</p>
          )}
          <h2 className="font-heading text-3xl md:text-5xl text-white/80 uppercase tracking-[0.08em] font-bold mb-1">{slides[idx].subtitle}</h2>
          <div className="flex items-baseline justify-center gap-4 mt-2">
            <span className="font-heading text-4xl md:text-6xl text-[hsl(338,35%,60%)] italic">{slides[idx].price}</span>
            <span className="text-white/40 text-xs tracking-[0.12em] uppercase">Regular Value {slides[idx].regularPrice}</span>
          </div>
          {slides[idx].detail && (
            <p className="text-white/40 text-xs tracking-[0.12em] uppercase mt-2">{slides[idx].detail}</p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom-left — counter + title + description */}
      <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 z-10 max-w-md">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-[hsl(338,35%,60%)] font-heading text-lg">{String(idx + 1).padStart(2, "0")}</span>
          <span className="text-white/30 text-sm">/</span>
          <span className="text-white/30 text-sm">{String(slides.length).padStart(2, "0")}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-3">{slides[idx].title}</h1>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">{slides[idx].detail}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom-right — navigation tabs with progress */}
      <div className="absolute bottom-12 md:bottom-16 right-6 md:right-12 z-10 hidden md:flex gap-6">
        {slides.map((slide, i) => (
          <button key={i} onClick={() => goTo(i)} className="text-left group">
            <div className={`h-[2px] w-24 mb-2 bg-white/10 overflow-hidden rounded-full`}>
              <div className={`h-full bg-[hsl(338,35%,60%)] transition-all duration-100 ${i === idx ? "" : "w-0"}`}
                style={i === idx ? { width: `${progress}%` } : { width: 0 }} />
            </div>
            <span className={`text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 ${i === idx ? "text-white" : "text-white/30 group-hover:text-white/60"}`}>
              {slide.title}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 md:hidden">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`h-1 rounded-full transition-all duration-500 ${i === idx ? "w-8 bg-[hsl(338,35%,60%)]" : "w-2 bg-white/30"}`} />
        ))}
      </div>
    </section>
  );
};

/* ═══════════ TRUST STRIP ═══════════ */
const TrustStrip = ({ c }: { c: HairSalonContent }) => (
  <section className="py-5 bg-[hsl(260,15%,8%)] border-y border-white/5">
    <div className="container">
      <div className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide md:justify-center">
        {c.trust.map((item, i) => {
          const Icon = iconMap[item.icon] || Sparkles;
          return (
            <div key={i} className="flex items-center gap-2.5 whitespace-nowrap flex-shrink-0">
              <Icon className="w-4 h-4 text-[hsl(338,35%,60%)]" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-white/50">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ═══════════ ABOUT ═══════════ */
const About = ({ c }: { c: HairSalonContent }) => (
  <section id="about" className="py-24 md:py-36 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <FadeUp>
          <div className="relative">
            <img src={c.salonInteriorImage} alt={c.salonName} className="w-full aspect-[4/5] object-cover" />
            <div className="absolute inset-0 border border-[hsl(338,35%,60%)]/20 translate-x-4 translate-y-4 -z-10" />
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-4">{c.about.subtitle}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)] mb-8 leading-tight">
            {c.about.title} <em className="italic">{c.about.titleItalic}</em>
          </h2>
          {c.about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[hsl(260,15%,8%)]/60 mb-5">{p}</p>
          ))}
          <a href={c.bookingUrl}>
            <Button className="mt-2 bg-[hsl(260,15%,8%)] hover:bg-[hsl(260,15%,15%)] text-white text-[11px] tracking-[0.18em] uppercase px-8 py-5 rounded-none">
              {c.about.cta}
            </Button>
          </a>
        </FadeUp>
      </div>
    </div>
  </section>
);

/* ═══════════ SERVICES CAROUSEL ═══════════ */
const ServicesCarousel = ({ c }: { c: HairSalonContent }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ playOnInit: true, delay: 4000, stopOnInteraction: false })]);
  const [sel, setSel] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSel = () => setSel(emblaApi.selectedScrollSnap());
    onSel(); emblaApi.on("select", onSel).on("reInit", onSel);
    emblaApi.on("reInit", () => setSnaps(emblaApi.scrollSnapList()));
  }, [emblaApi]);

  return (
    <section className="py-24 md:py-36 bg-[hsl(260,15%,6%)]">
      <div className="container mb-14 text-center">
        <FadeUp>
          <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{c.carouselSection.subtitle}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-white">{c.carouselSection.title}</h2>
        </FadeUp>
      </div>
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {c.servicesCarousel.map((slide, i) => (
              <div key={i} className="flex-[0_0_80%] sm:flex-[0_0_55%] md:flex-[0_0_38%] min-w-0 pl-4">
                <div className={`relative overflow-hidden transition-all duration-700 ${i === sel ? "scale-100 opacity-100" : "scale-[0.92] opacity-40"}`}>
                  <img src={slide.image} alt={slide.title} className="w-full aspect-[3/4] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] text-white/50 tracking-[0.12em] uppercase mb-1">{slide.subtitle}</p>
                    <h3 className="font-heading text-2xl text-white mb-3">{slide.title}</h3>
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-3xl text-[hsl(338,35%,60%)] italic">{slide.price}</span>
                      <span className="text-[10px] text-white/30 line-through tracking-wide">Reg. {slide.regular}</span>
                    </div>
                    <p className="text-[10px] text-white/40 tracking-wide mt-1.5">{slide.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={() => emblaApi?.scrollNext()} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
        <div className="flex justify-center gap-2 mt-8">
          {snaps.map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)}
              className={`h-[3px] rounded-full transition-all duration-300 ${i === sel ? "bg-[hsl(338,35%,60%)] w-8" : "bg-white/20 w-2 hover:bg-white/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ SERVICES ═══════════ */
const Services = ({ c }: { c: HairSalonContent }) => (
  <section id="services" className="py-24 md:py-36 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <FadeUp className="text-center mb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{c.carouselSection.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)]">{c.nav.services}</h2>
      </FadeUp>
      {c.serviceCategories.map(cat => (
        <div key={cat.key} className="mb-14">
          <h3 className="font-heading text-2xl text-[hsl(260,15%,8%)] mb-6 pb-3 border-b border-[hsl(338,35%,60%)]/15">{cat.label}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.services.filter(s => s.category === cat.key).map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.04}>
                <div className="p-6 bg-white hover:shadow-xl transition-all duration-500 border border-[hsl(300,10%,90%)] group">
                  <h4 className="font-heading text-xl text-[hsl(260,15%,8%)] mb-2 group-hover:text-[hsl(338,35%,60%)] transition-colors">{s.title}</h4>
                  <p className="text-[13px] text-[hsl(260,15%,8%)]/50 leading-relaxed">{s.desc}</p>
                  <a href={c.bookingUrl} className="inline-block mt-4 text-[10px] tracking-[0.18em] uppercase text-[hsl(338,35%,60%)] hover:text-[hsl(338,35%,50%)] transition-colors">
                    {c.nav.bookNow} →
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ═══════════ BEFORE & AFTER ═══════════ */
const BeforeAfter = ({ c }: { c: HairSalonContent }) => (
  <section id="results" className="py-24 md:py-36 bg-[hsl(260,15%,6%)]">
    <div className="container">
      <FadeUp className="text-center mb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{c.beforeAfter.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
          {c.beforeAfter.title} <em className="italic">{c.beforeAfter.titleItalic}</em>
        </h2>
        <p className="text-sm text-white/50 max-w-xl mx-auto">{c.beforeAfter.desc}</p>
      </FadeUp>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[0, 1, 2, 3, 4, 5].map(i => (
          <FadeUp key={i} delay={i * 0.05}>
            <div className="aspect-square bg-[hsl(260,10%,12%)] overflow-hidden group relative">
              <img src={c.heroSlides[i % c.heroSlides.length].image} alt="Transformation"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 bg-black/40 px-4 py-2 backdrop-blur-sm">Before & After</span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
      <div className="text-center mt-14">
        <a href={c.bookingUrl}>
          <Button className="bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white text-[11px] tracking-[0.18em] uppercase px-10 py-6 rounded-none">{c.beforeAfter.cta}</Button>
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════ WHY CHOOSE US ═══════════ */
const WhyChooseUs = ({ c }: { c: HairSalonContent }) => (
  <section className="py-24 md:py-36 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <FadeUp className="text-center mb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{c.whyChoose.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)]">
          {c.whyChoose.title} <em className="italic">{c.whyChoose.titleItalic}</em>
        </h2>
      </FadeUp>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {c.whyChoose.reasons.map((r, i) => {
          const Icon = iconMap[r.icon] || Sparkles;
          return (
            <FadeUp key={r.title} delay={i * 0.06}>
              <div className="text-center p-8 group hover:bg-white hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-[hsl(338,25%,90%)] flex items-center justify-center mx-auto mb-5 group-hover:bg-[hsl(338,25%,85%)] transition-colors">
                  <Icon className="w-6 h-6 text-[hsl(338,35%,50%)]" />
                </div>
                <h3 className="font-heading text-xl text-[hsl(260,15%,8%)] mb-3">{r.title}</h3>
                <p className="text-[13px] text-[hsl(260,15%,8%)]/50 leading-relaxed">{r.desc}</p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </div>
  </section>
);

/* ═══════════ PRICING ═══════════ */
const Pricing = ({ c }: { c: HairSalonContent }) => {
  const [len, setLen] = useState(c.pricing.lengths[0]);
  return (
    <section id="pricing" className="py-24 md:py-36 bg-[hsl(260,15%,6%)]">
      <div className="container">
        <FadeUp className="text-center mb-12">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{c.pricing.subtitle}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">{c.pricing.title}</h2>
          <p className="text-[13px] text-white/40 max-w-lg mx-auto">{c.pricing.note}</p>
        </FadeUp>

        <div className="flex justify-center gap-0 mb-14 w-fit mx-auto border border-white/10">
          {c.pricing.lengths.map(l => (
            <button key={l} onClick={() => setLen(l)}
              className={`px-8 py-3 text-[11px] tracking-[0.18em] uppercase transition-all duration-300 ${len === l ? "bg-[hsl(338,35%,60%)] text-white" : "text-white/40 hover:text-white/70"}`}>
              {l} Length
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {c.pricing.extensionServices.map((svc, i) => (
            <FadeUp key={svc.name} delay={i * 0.08}>
              <div className="bg-[hsl(260,10%,9%)] p-6 border border-white/5 hover:border-[hsl(338,35%,60%)]/20 transition-all">
                <h3 className="font-heading text-xl text-white mb-6 pb-3 border-b border-white/10">{svc.name}</h3>
                {(svc.lengths[len] || []).map(item => (
                  <div key={item.qty} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                    <span className="text-[13px] text-white/60">{item.qty}</span>
                    <span className="font-heading text-lg text-[hsl(338,35%,60%)]">{item.price}</span>
                  </div>
                ))}
                <a href={c.bookingUrl} className="block mt-6">
                  <Button className="w-full bg-transparent border border-[hsl(338,35%,60%)]/30 text-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,60%)] hover:text-white text-[10px] tracking-[0.18em] uppercase rounded-none py-4 transition-all">
                    {c.nav.bookNow}
                  </Button>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="bg-[hsl(260,10%,9%)] p-8 border border-white/5">
            <h3 className="font-heading text-2xl text-white mb-8 text-center">{c.pricing.beautyTitle}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {c.pricing.beautyServices.map(cat => (
                <div key={cat.category}>
                  <h4 className="font-heading text-lg text-[hsl(338,35%,60%)] mb-4">{cat.category}</h4>
                  {cat.items.map(item => (
                    <div key={item.name} className="flex justify-between py-2.5 border-b border-white/5 last:border-0">
                      <span className="text-[13px] text-white/60">{item.name}</span>
                      <span className="text-[13px] text-white/80">{item.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ TESTIMONIALS ═══════════ */
const Testimonials = ({ c }: { c: HairSalonContent }) => (
  <section className="py-24 md:py-36 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <FadeUp className="text-center mb-4">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{c.testimonials.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)] mb-3">
          {c.testimonials.title} <em className="italic">{c.testimonials.titleItalic}</em>
        </h2>
        <div className="flex justify-center gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[hsl(338,35%,60%)] text-[hsl(338,35%,60%)]" />)}</div>
        <p className="text-[11px] text-[hsl(260,15%,8%)]/40 tracking-wide">{c.testimonials.ratingText}</p>
      </FadeUp>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {c.testimonials.items.map((t, i) => (
          <FadeUp key={t.name} delay={i * 0.06}>
            <div className="bg-white p-8 border border-[hsl(300,10%,90%)] hover:shadow-lg transition-all duration-500">
              <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[hsl(338,35%,60%)] text-[hsl(338,35%,60%)]" />)}</div>
              <p className="text-[13px] text-[hsl(260,15%,8%)]/60 leading-relaxed mb-5 italic">"{t.text}"</p>
              <p className="font-heading text-base text-[hsl(260,15%,8%)]">{t.name}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════ BOOKING CTA ═══════════ */
const BookingCTA = ({ c }: { c: HairSalonContent }) => (
  <section className="py-24 md:py-36 bg-[hsl(260,15%,6%)] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(338,35%,60%)]/8 to-transparent" />
    <div className="container relative z-10 text-center">
      <FadeUp>
        <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{c.bookingCta.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          {c.bookingCta.title} <br /><span className="text-[hsl(338,35%,60%)] italic">{c.bookingCta.titleHighlight}</span>
        </h2>
        <p className="text-sm text-white/50 max-w-lg mx-auto mb-10">{c.bookingCta.desc}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={c.bookingUrl}><Button className="bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white text-[11px] tracking-[0.18em] uppercase px-10 py-6 rounded-none">{c.bookingCta.bookBtn}</Button></a>
          <a href={c.phoneLink}><Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-[11px] tracking-[0.18em] uppercase px-10 py-6 rounded-none">{c.phone}</Button></a>
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ═══════════ CONTACT ═══════════ */
const Contact = ({ c }: { c: HairSalonContent }) => (
  <section id="contact" className="py-24 md:py-36 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <FadeUp>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{c.contact.subtitle}</p>
            <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)] mb-10">{c.contact.title}</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="space-y-6">
              <div>
                <h4 className="font-heading text-lg text-[hsl(260,15%,8%)] mb-1">{c.contact.addressLabel}</h4>
                <p className="text-sm text-[hsl(260,15%,8%)]/50 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[hsl(338,35%,60%)]" />{c.address}</p>
                {c.parking && <p className="text-xs text-[hsl(260,15%,8%)]/35 ml-6 mt-1">{c.contact.parkingLabel}: {c.parking}</p>}
              </div>
              <div>
                <h4 className="font-heading text-lg text-[hsl(260,15%,8%)] mb-1">{c.contact.phoneLabel}</h4>
                <a href={c.phoneLink} className="text-sm text-[hsl(338,35%,60%)] hover:underline flex items-center gap-2"><Phone className="w-4 h-4" />{c.phone}</a>
              </div>
              <div>
                <h4 className="font-heading text-lg text-[hsl(260,15%,8%)] mb-1">{c.contact.emailLabel}</h4>
                <a href={`mailto:${c.email}`} className="text-sm text-[hsl(338,35%,60%)] hover:underline flex items-center gap-2"><Mail className="w-4 h-4" />{c.email}</a>
              </div>
              <div>
                <h4 className="font-heading text-lg text-[hsl(260,15%,8%)] mb-1">{c.contact.hoursLabel}</h4>
                {c.contact.hoursValue.map((h, i) => <p key={i} className="text-sm text-[hsl(260,15%,8%)]/50 flex items-center gap-2">{i === 0 && <Clock className="w-4 h-4 text-[hsl(338,35%,60%)]" />}{h}</p>)}
                <p className="text-xs text-[hsl(260,15%,8%)]/35 ml-6 mt-1">{c.contact.closed}</p>
              </div>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <div className="w-full h-full min-h-[300px] bg-[hsl(300,5%,90%)] rounded-sm overflow-hidden">
            <iframe
              title="Map"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(c.address)}`}
              className="w-full h-full min-h-[300px] border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

/* ═══════════ FOOTER ═══════════ */
const Footer = ({ c }: { c: HairSalonContent }) => (
  <footer className="py-16 bg-[hsl(260,15%,6%)] border-t border-white/5">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <p className="font-heading text-xl text-white tracking-[0.1em] uppercase font-bold mb-4">{c.salonName}</p>
          <p className="text-[13px] text-white/40 leading-relaxed mb-6">{c.footer.tagline}</p>
          <a href={c.instagramUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 border border-white/10 hover:border-[hsl(338,35%,60%)]/50 rounded-full transition-colors">
            <Instagram className="w-4 h-4 text-white/50" />
          </a>
        </div>
        <div>
          <h4 className="font-heading text-lg text-white mb-4">{c.footer.quickLinks}</h4>
          <div className="space-y-2">
            {[c.nav.services, c.nav.pricing, c.nav.results, c.nav.about, c.nav.contact].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-[13px] text-white/40 hover:text-[hsl(338,35%,60%)] transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg text-white mb-4">{c.footer.contactLabel}</h4>
          <p className="text-[13px] text-white/40 mb-2">{c.address}</p>
          <p className="text-[13px] text-white/40 mb-2">{c.phone}</p>
          <p className="text-[13px] text-white/40 mb-2">{c.email}</p>
          <p className="text-[13px] text-white/40 mb-4">{c.contact.hoursValue.join(" · ")}</p>
          <a href={c.bookingUrl}>
            <Button className="bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white text-[10px] tracking-[0.18em] uppercase px-6 py-4 rounded-none">{c.nav.bookNow}</Button>
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-white/25">{c.footer.copyright}</p>
        <Link to={c.backPath} className="inline-flex items-center gap-2 text-[11px] text-white/25 hover:text-white/50 transition-colors group">
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />{c.footer.backLabel}
        </Link>
      </div>
    </div>
  </footer>
);

/* ═══════════ MAIN PAGE ═══════════ */
const HairSalonPage = ({ content }: { content: HairSalonContent }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        body { font-family: 'Montserrat', sans-serif; }
      `}</style>
      <Navbar c={content} />
      <Hero c={content} />
      <TrustStrip c={content} />
      <About c={content} />
      <ServicesCarousel c={content} />
      <Services c={content} />
      <BeforeAfter c={content} />
      <WhyChooseUs c={content} />
      <Pricing c={content} />
      <Testimonials c={content} />
      <BookingCTA c={content} />
      <Contact c={content} />
      <Footer c={content} />
      <FloatingWhatsApp />
    </div>
  );
};

export default HairSalonPage;
