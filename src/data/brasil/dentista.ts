import type { NicheConfig } from "@/types/niche";
export const dentistaConfig: NicheConfig = {
  id: "dentista", name: "Sorriso Premium", tagline: "Seu Sorriso Merece o Melhor",
  heroSubtitle: "Odontologia de alto padrão com tecnologia de ponta. Implantes, lentes de contato dental, ortodontia invisível e mais.",
  heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=85",
  heroStyle: "centered", cardStyle: "elegant",
  whyLayout: "centered-list",
  sectionOrder: ["hero", "stats", "categories", "services", "process", "why", "testimonials", "cta", "location"],
  theme: { primary: "180 70% 40%", primaryForeground: "0 0% 100%", accent: "180 40% 92%", heroOverlay: "linear-gradient(to bottom, rgba(0,40,50,0.5), rgba(0,0,0,0.65))", sectionDark: "180 30% 10%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "10000+", label: "Pacientes Atendidos" },
    { value: "99%", label: "Taxa de Sucesso" },
    { value: "20+", label: "Anos de Experiência" },
    { value: "6", label: "Dentistas Especialistas" },
  ],
  processSteps: [
    { step: "1", title: "Agendamento", desc: "Marque online em poucos cliques." },
    { step: "2", title: "Avaliação", desc: "Exame completo com radiografia e plano personalizado." },
    { step: "3", title: "Tratamento", desc: "Procedimento com tecnologia de ponta e conforto total." },
    { step: "4", title: "Acompanhamento", desc: "Retornos para garantir resultado perfeito." },
  ],
  categories: [
    { name: "Implantes", emoji: "🦷" }, { name: "Lentes", emoji: "✨" }, { name: "Ortodontia", emoji: "😁" },
    { name: "Clareamento", emoji: "⚡" }, { name: "Check-up", emoji: "🩺" }, { name: "Próteses", emoji: "🔧" },
  ],
  products: [
    { name: "Lentes de Contato Dental", desc: "Facetas ultrafinas para um sorriso de Hollywood.", price: "2.500", image: "https://images.unsplash.com/photo-1445527815956-dfc6cb648cd1?w=600&q=80", tag: "Mais Pedido" },
    { name: "Implante Dentário", desc: "Implantes de titânio com técnica minimamente invasiva.", price: "3.500", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", tag: "Premium" },
    { name: "Alinhadores Invisíveis", desc: "Alinhamento dental discreto sem aparelho metálico.", price: "5.000", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80" },
    { name: "Clareamento a Laser", desc: "Dentes até 8 tons mais brancos em uma única sessão.", price: "800", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80" },
    { name: "Check-up Completo", desc: "Avaliação completa com radiografia panorâmica e limpeza.", price: "350", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80" },
    { name: "Prótese sobre Implante", desc: "Prótese fixa de porcelana sobre implantes para resultado natural.", price: "4.500", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Confiança Imediata", desc: "Um site profissional gera credibilidade antes da primeira consulta.", icon: "shield" },
    { title: "Agenda Online", desc: "Pacientes agendam consultas 24h sem precisar ligar.", icon: "clock" },
    { title: "Cresça sua Clínica", desc: "Atraia novos pacientes com SEO local e CTAs otimizados.", icon: "trending" },
  ],
  testimonials: [
    { name: "Ricardo Almeida", text: "As lentes ficaram incríveis! Melhor investimento que já fiz.", role: "Paciente de Lentes" },
    { name: "Patrícia Ferreira", text: "Implante sem dor e resultado perfeito. Equipe nota 10.", role: "Paciente de Implante" },
    { name: "Lucas Martins", text: "Consultório moderno e atendimento impecável. Super recomendo.", role: "Paciente Regular" },
  ],
  ctaText: "Quer o Sorriso dos Sonhos?", ctaSubtext: "Agende sua avaliação e descubra o melhor tratamento para você.",
  whatsappNumber: "5511977776666", location: { address: "Av. Brasil, 2000 - Centro, Rio de Janeiro - RJ", hours: "Seg-Sex: 8h - 18h | Sáb: 9h - 13h", phone: "(21) 97777-6666", mapQuery: "dentista centro Rio de Janeiro" },
  footerTagline: "Odontologia moderna. Cuidado excepcional.", currency: "R$", backPath: "/brasil",
  labels: { navServices: "Serviços", navAbout: "Sobre", navContact: "Contato", navCta: "Agendar", heroCtaPrimary: "Nossos Serviços", heroCtaSecondary: "Agendar Consulta", servicesTitle: "Nossos", servicesHighlight: "Serviços", servicesSubtitle: "Odontologia moderna com tecnologia de ponta.", servicesCta: "Agendar", whyTitle: "Por que ter um", whyHighlight: "site premium", whySubtitle: "Sua presença online é o primeiro contato com o paciente.", testimonialsTitle: "O que dizem nossos", testimonialsHighlight: "pacientes", locationTitle: "Onde", locationHighlight: "estamos", ctaButtonLabel: "Agendar Consulta", backLabel: "Voltar às Demos", statsTitle: "Números que Inspiram Confiança", processTitle: "Sua Jornada até o", processHighlight: "Sorriso Perfeito" },
};
