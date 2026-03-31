import type { NicheConfig } from "@/types/niche";
const br = { navServices: "Serviços", navAbout: "Sobre", navContact: "Contato", navCta: "Agendar", heroCtaPrimary: "Nossos Serviços", heroCtaSecondary: "Agendar Horário", servicesTitle: "Nossos", servicesHighlight: "Serviços", servicesSubtitle: "Transformações que elevam sua autoestima.", servicesCta: "Agendar", whyTitle: "Por que ter um", whyHighlight: "site premium", whySubtitle: "Mais que um site — uma vitrine da sua arte.", testimonialsTitle: "O que dizem nossos", testimonialsHighlight: "clientes", locationTitle: "Onde", locationHighlight: "estamos", ctaButtonLabel: "Agendar Agora", backLabel: "Voltar às Demos" };
export const salaoCabeleireiroConfig: NicheConfig = {
  id: "salao-cabeleireiro", name: "Studio Luxe Hair", tagline: "Seu Cabelo, Nossa Arte",
  heroSubtitle: "Cortes, coloração, extensões e tratamentos capilares com os melhores profissionais. Transforme seu visual.",
  heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroStyle: "split", cardStyle: "overlay",
  theme: { primary: "290 60% 45%", primaryForeground: "0 0% 100%", accent: "40 70% 55%", heroOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))", sectionDark: "290 25% 10%", sectionDarkForeground: "0 0% 95%" },
  categories: [
    { name: "Cortes", emoji: "✂️" }, { name: "Coloração", emoji: "🎨" }, { name: "Extensões", emoji: "💇‍♀️" },
    { name: "Tratamentos", emoji: "🧴" }, { name: "Penteados", emoji: "💫" }, { name: "Noivas", emoji: "👰" },
  ],
  products: [
    { name: "Corte + Escova", desc: "Corte personalizado com escova modelada pelo nosso time sênior.", price: "180", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" },
    { name: "Mechas Balayage", desc: "Iluminação natural e sofisticada pintada à mão.", price: "450", image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80", tag: "Tendência" },
    { name: "Mega Hair", desc: "Extensões de cabelo natural para volume e comprimento imediatos.", price: "1.200", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", tag: "Premium" },
    { name: "Botox Capilar", desc: "Tratamento intensivo de hidratação e reconstrução dos fios.", price: "280", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80" },
    { name: "Pacote Noiva", desc: "Dia da noiva completo: prova, penteado, maquiagem e retoques.", price: "800", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80", tag: "Noivas" },
    { name: "Cauterização", desc: "Selamento das cutículas para fios mais brilhantes e saudáveis.", price: "150", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Agenda Online", desc: "Clientes escolhem horário e profissional sem precisar ligar.", icon: "clock" },
    { title: "Portfólio Visual", desc: "Mostre antes e depois das transformações.", icon: "sparkles" },
    { title: "Fortaleça sua Marca", desc: "Um site premium que eleva a reputação do seu salão.", icon: "award" },
  ],
  testimonials: [
    { name: "Beatriz Oliveira", text: "Melhor balayage que já fiz! Ficou perfeito e natural.", role: "Cliente Fiel" },
    { name: "Ana Paula Mendes", text: "As extensões ficaram incríveis. Recebo elogios todo dia!", role: "Cliente de Mega Hair" },
    { name: "Mariana Silva", text: "Fizeram meu cabelo de noiva e foi pura perfeição.", role: "Noiva" },
  ],
  ctaText: "Pronta pra Transformação?", ctaSubtext: "Agende seu horário e deixe nossos especialistas cuidarem do seu visual.",
  whatsappNumber: "5511988887777", location: { address: "Rua Oscar Freire, 500 - Jardins, São Paulo - SP", hours: "Ter-Sáb: 9h - 20h | Dom: 10h - 16h", phone: "(11) 98888-7777", mapQuery: "salao de beleza Jardins Sao Paulo" },
  footerTagline: "Onde cada fio conta uma história.", currency: "R$", backPath: "/brasil", labels: br,
};
