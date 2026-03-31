import type { NicheConfig } from "@/types/niche";
export const clinicaEsteticaConfig: NicheConfig = {
  id: "clinica-estetica", name: "Clínica Essence", tagline: "Beleza que Transforma",
  heroSubtitle: "Tratamentos estéticos de alta performance em um ambiente premium. Harmonização facial, laser, skincare e muito mais.",
  heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
  heroStyle: "luxury", cardStyle: "soft",
  whyLayout: "icon-row",
  sectionOrder: ["hero", "stats", "categories", "services", "gallery", "why", "cta", "testimonials", "location"],
  theme: { primary: "340 75% 55%", primaryForeground: "0 0% 100%", accent: "340 50% 92%", heroOverlay: "linear-gradient(to bottom, rgba(60,0,30,0.5), rgba(0,0,0,0.6))", sectionDark: "340 25% 12%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "8000+", label: "Tratamentos Realizados" },
    { value: "98%", label: "Satisfação" },
    { value: "12+", label: "Anos de Experiência" },
    { value: "15", label: "Especialistas" },
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", alt: "Sala de Tratamento", span: "wide" },
    { src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80", alt: "Limpeza de Pele" },
    { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80", alt: "Laser", span: "tall" },
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbec6e?w=600&q=80", alt: "Ambiente Premium" },
    { src: "https://images.unsplash.com/photo-1519823551278-64ac92734314?w=600&q=80", alt: "Relaxamento" },
  ],
  categories: [
    { name: "Facial", emoji: "✨" }, { name: "Corporal", emoji: "💆‍♀️" }, { name: "Laser", emoji: "⚡" },
    { name: "Skincare", emoji: "🌸" }, { name: "Harmonização", emoji: "💉" }, { name: "Depilação", emoji: "🪷" },
  ],
  products: [
    { name: "Harmonização Facial", desc: "Preenchimento labial, bichectomia e contorno facial com ácido hialurônico.", price: "1.800", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", tag: "Mais Pedido" },
    { name: "Limpeza de Pele Premium", desc: "Limpeza profunda com extração, peeling e máscara revitalizante.", price: "350", image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80" },
    { name: "Depilação a Laser", desc: "Tecnologia de ponta para depilação definitiva, segura e indolor.", price: "250", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80" },
    { name: "Peeling Químico", desc: "Renovação celular para manchas, acne e rejuvenescimento.", price: "400", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
    { name: "Drenagem Linfática", desc: "Massagem especializada para reduzir inchaço e melhorar a circulação.", price: "200", image: "https://images.unsplash.com/photo-1519823551278-64ac92734314?w=600&q=80" },
    { name: "Botox", desc: "Aplicação de toxina botulínica para suavizar linhas de expressão.", price: "1.200", image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6e?w=600&q=80", tag: "Premium" },
  ],
  whyPoints: [
    { title: "Agendamento Online 24h", desc: "Seus clientes agendam a qualquer hora, sem precisar ligar.", icon: "clock" },
    { title: "Presença Premium", desc: "Um site que transmite a qualidade dos seus tratamentos.", icon: "sparkles" },
    { title: "Mais Clientes", desc: "Converta visitantes em pacientes com CTAs otimizados.", icon: "trending" },
  ],
  testimonials: [
    { name: "Fernanda Lima", text: "A harmonização ficou natural e linda. Equipe incrível!", role: "Cliente Regular" },
    { name: "Juliana Costa", text: "Melhor clínica de estética que já fui. Ambiente impecável.", role: "Cliente VIP" },
    { name: "Camila Santos", text: "Minha pele nunca esteve tão bonita. Super recomendo!", role: "Nova Cliente" },
  ],
  ctaText: "Pronta para Brilhar?", ctaSubtext: "Agende sua avaliação gratuita e descubra o tratamento ideal para você.",
  whatsappNumber: "5511999998888", location: { address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP", hours: "Seg-Sáb: 9h - 19h", phone: "(11) 99999-8888", mapQuery: "clinica estetica Av Paulista Sao Paulo" },
  footerTagline: "Beleza com ciência e sofisticação.", currency: "R$", backPath: "/brasil",
  labels: { navServices: "Tratamentos", navAbout: "Sobre", navContact: "Contato", navCta: "Agendar", heroCtaPrimary: "Nossos Tratamentos", heroCtaSecondary: "Agendar Avaliação", servicesTitle: "Nossos", servicesHighlight: "Tratamentos", servicesSubtitle: "Soluções premium pensadas para a sua beleza.", servicesCta: "Agendar", whyTitle: "Por que ter um", whyHighlight: "site premium", whySubtitle: "Mais que um site — uma máquina de vendas.", testimonialsTitle: "O que dizem nossas", testimonialsHighlight: "clientes", locationTitle: "Onde", locationHighlight: "estamos", ctaButtonLabel: "Fale Conosco", backLabel: "Voltar às Demos", statsTitle: "Números que Falam", galleryTitle: "Nosso", galleryHighlight: "Espaço" },
};
