import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, Clock, Star, ChevronRight, ChevronLeft,
  Instagram, Sparkles, Award, Heart, Shield, Scissors, Menu, X, ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// ─── TYPES ─────────────────────────────────────────
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
  heroImages: string[];
  salonInteriorImage: string;
  currency: string;
  nav: { services: string; pricing: string; results: string; about: string; contact: string; bookNow: string };
  trust: { icon: string; label: string }[];
  about: {
    subtitle: string;
    title: string;
    paragraphs: string[];
    cta: string;
  };
  services: { title: string; desc: string; category: string }[];
  serviceCategories: { key: string; label: string }[];
  carouselSlides: { image: string; title: string; subtitle: string; price: string; regular: string; detail: string }[];
  carouselSectionTitle: string;
  carouselSectionSubtitle: string;
  beforeAfter: { subtitle: string; title: string; desc: string; cta: string };
  whyChoose: {
    subtitle: string;
    title: string;
    reasons: { icon: string; title: string; desc: string }[];
  };
  pricing: {
    subtitle: string;
    title: string;
    note: string;
    lengths: string[];
    extensionServices: {
      name: string;
      lengths: Record<string, { qty: string; price: string }[]>;
    }[];
    beautyServices: {
      category: string;
      items: { name: string; price: string }[];
    }[];
    beautyTitle: string;
  };
  testimonials: {
    subtitle: string;
    title: string;
    ratingText: string;
    items: { name: string; text: string; rating: number }[];
  };
  instagramHandle: string;
  instagramUrl: string;
  bookingCta: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    desc: string;
    bookBtn: string;
  };
  contact: {
    subtitle: string;
    title: string;
    addressLabel: string;
    parkingLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string[];
    closed: string;
  };
  footer: {
    tagline: string;
    backLabel: string;
  };
}

// ─── ANIMATION WRAPPER ────────────────────────────
const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const iconMap: Record<string, any> = {
  sparkles: Sparkles, heart: Heart, award: Award, shield: Shield,
  scissors: Scissors, mapPin: MapPin, star: Star, clock: Clock,
};

// ─── NAVBAR ────────────────────────────────────────
const Navbar = ({ content }: { content: HairSalonContent }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: content.nav.services, href: "#services" },
    { label: content.nav.pricing, href: "#pricing" },
    { label: content.nav.results, href: "#results" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(260,15%,6%)]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to={content.backPath} className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 text-[hsl(338,35%,60%)] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
          <span className="font-heading text-xl md:text-2xl text-white tracking-wide">{content.salonName}</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-[hsl(338,35%,60%)] transition-colors font-body">
              {l.label}
            </a>
          ))}
          <a href={content.bookingUrl}>
            <Button size="sm" className="bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white font-body text-xs tracking-[0.15em] uppercase px-6">
              {content.nav.bookNow}
            </Button>
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[hsl(260,15%,6%)]/98 backdrop-blur-lg border-t border-white/5 px-6 pb-6"
        >
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm tracking-[0.1em] uppercase text-white/70 hover:text-[hsl(338,35%,60%)] transition-colors font-body border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href={content.bookingUrl} className="block mt-4">
            <Button className="w-full bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white font-body text-xs tracking-[0.15em] uppercase">
              {content.nav.bookNow}
            </Button>
          </a>
        </motion.div>
      )}
    </nav>
  );
};

// ─── HERO ──────────────────────────────────────────
const Hero = ({ content }: { content: HairSalonContent }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = content.carouselSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-[hsl(260,15%,6%)]">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[hsl(260,15%,6%)]" />
        </motion.div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="font-body text-sm md:text-base text-white/70 max-w-md mx-auto mb-8 tracking-wide">
            {slides[currentSlide].subtitle}
          </p>
        </motion.div>
        <div className="flex gap-4">
          <a href="#services">
            <Button size="lg" className="bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white font-body text-xs tracking-[0.15em] uppercase px-8 py-6">
              {content.nav.services}
            </Button>
          </a>
          <a href={content.bookingUrl}>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body text-xs tracking-[0.15em] uppercase px-8 py-6">
              {content.nav.bookNow}
            </Button>
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? "w-8 bg-[hsl(338,35%,60%)]" : "w-2 bg-white/30"}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 right-8 z-10 font-body text-xs text-white/50 tracking-[0.2em]">
        {String(currentSlide + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
};

// ─── TRUST STRIP ───────────────────────────────────
const TrustStrip = ({ content }: { content: HairSalonContent }) => (
  <section className="py-6 bg-[hsl(260,15%,8%)] border-y border-white/5 overflow-hidden">
    <div className="container">
      <div className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide md:justify-center">
        {content.trust.map((item, i) => {
          const Icon = iconMap[item.icon] || Sparkles;
          return (
            <div key={i} className="flex items-center gap-2.5 whitespace-nowrap flex-shrink-0">
              <Icon className="w-4 h-4 text-[hsl(338,35%,60%)]" />
              <span className="font-body text-xs tracking-[0.1em] uppercase text-white/60">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── ABOUT ─────────────────────────────────────────
const About = ({ content }: { content: HairSalonContent }) => (
  <section id="about" className="py-20 md:py-32 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeUp>
          <div className="relative">
            <img src={content.salonInteriorImage} alt={content.salonName}
              className="w-full aspect-[4/5] object-cover rounded-sm" />
            <div className="absolute inset-0 border border-[hsl(338,35%,60%)]/20 rounded-sm translate-x-4 translate-y-4 -z-10" />
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{content.about.subtitle}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)] mb-6 leading-tight">{content.about.title}</h2>
          {content.about.paragraphs.map((p, i) => (
            <p key={i} className="font-body text-sm leading-relaxed text-[hsl(260,15%,8%)]/70 mb-4">{p}</p>
          ))}
          <a href={content.bookingUrl}>
            <Button className="mt-4 bg-[hsl(260,15%,8%)] hover:bg-[hsl(260,15%,15%)] text-white font-body text-xs tracking-[0.15em] uppercase px-8 py-5">
              {content.about.cta}
            </Button>
          </a>
        </FadeUp>
      </div>
    </div>
  </section>
);

// ─── SERVICES CAROUSEL ─────────────────────────────
const ServicesCarousel = ({ content }: { content: HairSalonContent }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ playOnInit: true, delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    emblaApi.on("reInit", () => setScrollSnaps(emblaApi.scrollSnapList()));
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-32 bg-[hsl(260,15%,6%)]">
      <div className="container mb-12 text-center">
        <FadeUp>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{content.carouselSectionTitle}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-white">{content.carouselSectionSubtitle}</h2>
        </FadeUp>
      </div>
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {content.carouselSlides.map((slide, i) => (
              <div key={i} className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_40%] min-w-0 pl-4">
                <div className={`relative overflow-hidden rounded-lg transition-all duration-500 ${i === selectedIndex ? "scale-100 opacity-100" : "scale-95 opacity-50"}`}>
                  <img src={slide.image} alt={slide.title} className="w-full aspect-[3/4] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-body text-xs text-white/60 tracking-wide mb-1">{slide.subtitle}</p>
                    <h3 className="font-heading text-2xl text-white mb-2">{slide.title}</h3>
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-2xl text-[hsl(338,35%,60%)]">{slide.price}</span>
                      <span className="font-body text-xs text-white/40 line-through">Reg. {slide.regular}</span>
                    </div>
                    <p className="font-body text-xs text-white/50 mt-1">{slide.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation */}
        <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-[hsl(338,35%,60%)] w-6" : "bg-white/30 hover:bg-white/50 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICES ──────────────────────────────────────
const Services = ({ content }: { content: HairSalonContent }) => (
  <section id="services" className="py-20 md:py-32 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <FadeUp className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">
          {content.about.subtitle === "Our Story" ? "What We Offer" : "O Que Oferecemos"}
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)]">
          {content.nav.services}
        </h2>
      </FadeUp>
      {content.serviceCategories.map((cat) => (
        <div key={cat.key} className="mb-12">
          <h3 className="font-heading text-2xl text-[hsl(260,15%,8%)] mb-6 border-b border-[hsl(338,35%,60%)]/20 pb-2">{cat.label}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.services.filter(s => s.category === cat.key).map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.05}>
                <div className="p-6 rounded-lg bg-white hover:shadow-lg transition-all duration-300 border border-[hsl(300,10%,90%)] group">
                  <h4 className="font-heading text-xl text-[hsl(260,15%,8%)] mb-2 group-hover:text-[hsl(338,35%,60%)] transition-colors">{s.title}</h4>
                  <p className="font-body text-sm text-[hsl(260,15%,8%)]/60 leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── BEFORE & AFTER ────────────────────────────────
const BeforeAfter = ({ content }: { content: HairSalonContent }) => (
  <section id="results" className="py-20 md:py-32 bg-[hsl(260,15%,6%)]">
    <div className="container">
      <FadeUp className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{content.beforeAfter.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">{content.beforeAfter.title}</h2>
        <p className="font-body text-sm text-white/60 max-w-xl mx-auto">{content.beforeAfter.desc}</p>
      </FadeUp>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <FadeUp key={i} delay={i * 0.05}>
            <div className="aspect-square bg-[hsl(260,10%,14%)] rounded-lg overflow-hidden group relative">
              <img
                src={content.heroImages[i % content.heroImages.length]}
                alt="Transformation"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </FadeUp>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href={content.bookingUrl}>
          <Button size="lg" className="bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white font-body text-xs tracking-[0.15em] uppercase px-8 py-6">
            {content.beforeAfter.cta}
          </Button>
        </a>
      </div>
    </div>
  </section>
);

// ─── WHY CHOOSE US ─────────────────────────────────
const WhyChooseUs = ({ content }: { content: HairSalonContent }) => (
  <section className="py-20 md:py-32 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <FadeUp className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{content.whyChoose.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)]">{content.whyChoose.title}</h2>
      </FadeUp>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.whyChoose.reasons.map((r, i) => {
          const Icon = iconMap[r.icon] || Sparkles;
          return (
            <FadeUp key={r.title} delay={i * 0.08}>
              <div className="text-center p-8 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(338,25%,85%)] mb-5">
                  <Icon className="w-5 h-5 text-[hsl(338,35%,50%)]" />
                </div>
                <h3 className="font-heading text-xl text-[hsl(260,15%,8%)] mb-3">{r.title}</h3>
                <p className="font-body text-sm text-[hsl(260,15%,8%)]/60 leading-relaxed">{r.desc}</p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── PRICING ───────────────────────────────────────
const Pricing = ({ content }: { content: HairSalonContent }) => {
  const [selectedLength, setSelectedLength] = useState(content.pricing.lengths[0]);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[hsl(260,15%,6%)]">
      <div className="container">
        <FadeUp className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{content.pricing.subtitle}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">{content.pricing.title}</h2>
          <p className="font-body text-sm text-white/50 max-w-lg mx-auto">{content.pricing.note}</p>
        </FadeUp>

        {/* Length toggle */}
        <div className="flex justify-center gap-1 mb-12 bg-[hsl(260,10%,14%)] rounded-lg p-1 w-fit mx-auto">
          {content.pricing.lengths.map(len => (
            <button key={len} onClick={() => setSelectedLength(len)}
              className={`px-8 py-3 font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 rounded-md ${
                selectedLength === len ? "bg-[hsl(338,35%,60%)] text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {len}
            </button>
          ))}
        </div>

        {/* Extension pricing */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {content.pricing.extensionServices.map((service, i) => (
            <FadeUp key={service.name} delay={i * 0.1}>
              <div className="bg-[hsl(260,10%,10%)] rounded-lg p-6 border border-white/5 hover:border-[hsl(338,35%,60%)]/30 transition-all">
                <h3 className="font-heading text-xl text-white mb-6 pb-3 border-b border-white/10">{service.name}</h3>
                <div className="space-y-3">
                  {(service.lengths[selectedLength] || []).map((item) => (
                    <div key={item.qty} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="font-body text-sm text-white/70">{item.qty}</span>
                      <span className="font-heading text-lg text-[hsl(338,35%,60%)]">{item.price}</span>
                    </div>
                  ))}
                </div>
                <a href={content.bookingUrl} className="block mt-6">
                  <Button className="w-full bg-transparent border border-[hsl(338,35%,60%)]/30 text-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,60%)] hover:text-white font-body text-xs tracking-[0.15em] uppercase transition-all">
                    {content.nav.bookNow}
                  </Button>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Beauty services */}
        <FadeUp>
          <div className="bg-[hsl(260,10%,10%)] rounded-lg p-8 border border-white/5">
            <h3 className="font-heading text-2xl text-white mb-8 text-center">{content.pricing.beautyTitle}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {content.pricing.beautyServices.map((cat) => (
                <div key={cat.category}>
                  <h4 className="font-heading text-lg text-[hsl(338,35%,60%)] mb-4">{cat.category}</h4>
                  {cat.items.map(item => (
                    <div key={item.name} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="font-body text-sm text-white/70">{item.name}</span>
                      <span className="font-body text-sm text-white/90">{item.price}</span>
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

// ─── TESTIMONIALS ──────────────────────────────────
const Testimonials = ({ content }: { content: HairSalonContent }) => (
  <section className="py-20 md:py-32 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <FadeUp className="text-center mb-4">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{content.testimonials.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)] mb-3">{content.testimonials.title}</h2>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[hsl(338,35%,60%)] text-[hsl(338,35%,60%)]" />)}
        </div>
        <p className="font-body text-xs text-[hsl(260,15%,8%)]/50">{content.testimonials.ratingText}</p>
      </FadeUp>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {content.testimonials.items.map((t, i) => (
          <FadeUp key={t.name} delay={i * 0.08}>
            <div className="bg-white p-8 rounded-lg border border-[hsl(300,10%,90%)] hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[hsl(338,35%,60%)] text-[hsl(338,35%,60%)]" />)}
              </div>
              <p className="font-body text-sm text-[hsl(260,15%,8%)]/70 leading-relaxed mb-4 italic">"{t.text}"</p>
              <p className="font-heading text-base text-[hsl(260,15%,8%)]">{t.name}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ─── BOOKING CTA ───────────────────────────────────
const BookingCTA = ({ content }: { content: HairSalonContent }) => (
  <section className="py-20 md:py-32 bg-[hsl(260,15%,6%)] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(338,35%,60%)]/10 to-transparent" />
    <div className="container relative z-10 text-center">
      <FadeUp>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{content.bookingCta.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          {content.bookingCta.title} <br />
          <span className="text-[hsl(338,35%,60%)]">{content.bookingCta.titleHighlight}</span>
        </h2>
        <p className="font-body text-sm text-white/60 max-w-lg mx-auto mb-10">{content.bookingCta.desc}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={content.bookingUrl}>
            <Button size="lg" className="bg-[hsl(338,35%,60%)] hover:bg-[hsl(338,35%,50%)] text-white font-body text-xs tracking-[0.15em] uppercase px-10 py-6">
              {content.bookingCta.bookBtn}
            </Button>
          </a>
          <a href={content.phoneLink}>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body text-xs tracking-[0.15em] uppercase px-10 py-6">
              {content.phone}
            </Button>
          </a>
        </div>
      </FadeUp>
    </div>
  </section>
);

// ─── CONTACT ───────────────────────────────────────
const Contact = ({ content }: { content: HairSalonContent }) => (
  <section id="contact" className="py-20 md:py-32 bg-[hsl(300,5%,96%)]">
    <div className="container">
      <FadeUp className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-[hsl(338,35%,60%)] mb-3">{content.contact.subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-[hsl(260,15%,8%)]">{content.contact.title}</h2>
      </FadeUp>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <FadeUp delay={0}>
          <div className="text-center">
            <MapPin className="w-5 h-5 text-[hsl(338,35%,60%)] mx-auto mb-3" />
            <h4 className="font-heading text-lg text-[hsl(260,15%,8%)] mb-2">{content.contact.addressLabel}</h4>
            <p className="font-body text-sm text-[hsl(260,15%,8%)]/60">{content.address}</p>
            {content.parking && <p className="font-body text-xs text-[hsl(260,15%,8%)]/40 mt-1">{content.contact.parkingLabel}: {content.parking}</p>}
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="text-center">
            <Phone className="w-5 h-5 text-[hsl(338,35%,60%)] mx-auto mb-3" />
            <h4 className="font-heading text-lg text-[hsl(260,15%,8%)] mb-2">{content.contact.phoneLabel}</h4>
            <a href={content.phoneLink} className="font-body text-sm text-[hsl(338,35%,60%)] hover:underline">{content.phone}</a>
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="text-center">
            <Mail className="w-5 h-5 text-[hsl(338,35%,60%)] mx-auto mb-3" />
            <h4 className="font-heading text-lg text-[hsl(260,15%,8%)] mb-2">{content.contact.emailLabel}</h4>
            <a href={`mailto:${content.email}`} className="font-body text-sm text-[hsl(338,35%,60%)] hover:underline">{content.email}</a>
          </div>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="text-center">
            <Clock className="w-5 h-5 text-[hsl(338,35%,60%)] mx-auto mb-3" />
            <h4 className="font-heading text-lg text-[hsl(260,15%,8%)] mb-2">{content.contact.hoursLabel}</h4>
            {content.contact.hoursValue.map((h, i) => (
              <p key={i} className="font-body text-sm text-[hsl(260,15%,8%)]/60">{h}</p>
            ))}
            <p className="font-body text-xs text-[hsl(260,15%,8%)]/40 mt-1">{content.contact.closed}</p>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

// ─── FOOTER ────────────────────────────────────────
const Footer = ({ content }: { content: HairSalonContent }) => (
  <footer className="py-12 bg-[hsl(260,15%,6%)] border-t border-white/5">
    <div className="container text-center">
      <p className="font-heading text-xl text-white mb-1">{content.salonName}</p>
      <p className="font-body text-xs text-white/40 mb-6">{content.footer.tagline}</p>
      <Link to={content.backPath} className="inline-flex items-center gap-2 font-body text-xs text-white/30 hover:text-white/60 transition-colors group">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        {content.footer.backLabel}
      </Link>
    </div>
  </footer>
);

// ─── MAIN PAGE ─────────────────────────────────────
const HairSalonPage = ({ content }: { content: HairSalonContent }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-body" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navbar content={content} />
      <Hero content={content} />
      <TrustStrip content={content} />
      <About content={content} />
      <ServicesCarousel content={content} />
      <Services content={content} />
      <BeforeAfter content={content} />
      <WhyChooseUs content={content} />
      <Pricing content={content} />
      <Testimonials content={content} />
      <BookingCTA content={content} />
      <Contact content={content} />
      <Footer content={content} />
      <FloatingWhatsApp />
    </div>
  );
};

export default HairSalonPage;
