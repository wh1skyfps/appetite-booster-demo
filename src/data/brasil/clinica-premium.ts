import type { NicheConfig } from "@/types/niche";
export const clinicaPremiumConfig: NicheConfig = {
  id: "clinica-premium", name: "Clínica Vita Excellence", tagline: "Excelência em Saúde e Bem-estar",
  heroSubtitle: "Consultório médico de alto padrão com atendimento personalizado. Dermatologia, nutrologia, medicina preventiva e mais.",
  heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=85",
  heroStyle: "editorial", cardStyle: "elegant",
  whyLayout: "alternating",
  sectionOrder: ["hero", "stats", "categories", "services", "why", "process", "testimonials", "cta", "location"],
  theme: { primary: "175 55% 35%", primaryForeground: "0 0% 100%", accent: "175 30% 90%", heroOverlay: "linear-gradient(to bottom, rgba(0,30,35,0.5), rgba(0,0,0,0.6))", sectionDark: "175 25% 10%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "5000+", label: "Pacientes Atendidos" },
    { value: "20+", label: "Especialidades" },
    { value: "99%", label: "Satisfação" },
    { value: "10+", label: "Anos de Excelência" },
  ],
  processSteps: [
    { step: "1", title: "Agendamento Online", desc: "Marque sua consulta pelo site ou WhatsApp." },
    { step: "2", title: "Consulta Personalizada", desc: "Avaliação completa com nossos especialistas." },
    { step: "3", title: "Plano de Tratamento", desc: "Estratégia personalizada para seus objetivos." },
    { step: "4", title: "Acompanhamento Contínuo", desc: "Suporte e retornos para garantir resultados." },
  ],
  categories: [
    { name: "Dermatologia", emoji: "🌟" }, { name: "Nutrologia", emoji: "🥗" }, { name: "Cardiologia", emoji: "❤️" },
    { name: "Ortopedia", emoji: "🦴" }, { name: "Check-up", emoji: "🩺" }, { name: "Preventiva", emoji: "🛡️" },
  ],
  products: [
    { name: "Check-up Executivo", desc: "Avaliação completa com exames laboratoriais, cardíaco e nutricional.", price: "2.500", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80", tag: "Mais Pedido" },
    { name: "Dermatologia Estética", desc: "Tratamentos dermatológicos para rejuvenescimento e saúde da pele.", price: "500", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
    { name: "Consulta Nutrologista", desc: "Plano alimentar personalizado para performance e longevidade.", price: "600", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80" },
    { name: "Medicina Preventiva", desc: "Programa de prevenção com acompanhamento médico contínuo.", price: "1.800", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80", tag: "Premium" },
    { name: "Consulta Cardiológica", desc: "Avaliação cardíaca completa com eletrocardiograma.", price: "450", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80" },
    { name: "Fisioterapia Premium", desc: "Sessões individuais com fisioterapeuta especializado.", price: "250", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Credibilidade Instantânea", desc: "Um site premium transmite a excelência do seu atendimento.", icon: "shield" },
    { title: "Agendamento 24h", desc: "Pacientes marcam consultas a qualquer hora, de qualquer lugar.", icon: "clock" },
    { title: "Cresça com Estratégia", desc: "SEO médico e marketing de conteúdo para atrair pacientes.", icon: "trending" },
  ],
  testimonials: [
    { name: "Eduardo Nascimento", text: "Check-up completo e super detalhado. Atendimento de primeiro mundo.", role: "Paciente Executivo" },
    { name: "Isabela Rodrigues", text: "A Dra. Silva é incrível. Minha pele nunca esteve tão saudável.", role: "Paciente de Dermatologia" },
    { name: "Fernando Gomes", text: "Clínica impecável, equipe atenciosa. Virei paciente fiel.", role: "Paciente Regular" },
  ],
  ctaText: "Cuide da Sua Saúde", ctaSubtext: "Agende sua consulta com nossos especialistas e invista no que mais importa.",
  whatsappNumber: "5511933332222", location: { address: "Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP", hours: "Seg-Sex: 7h - 19h | Sáb: 8h - 13h", phone: "(11) 93333-2222", mapQuery: "clinica medica Cerqueira Cesar Sao Paulo" },
  footerTagline: "Medicina de excelência com atendimento humano.", currency: "R$", backPath: "/brasil",
  labels: { navServices: "Especialidades", navAbout: "Sobre", navContact: "Contato", navCta: "Agendar", heroCtaPrimary: "Especialidades", heroCtaSecondary: "Agendar Consulta", servicesTitle: "Nossas", servicesHighlight: "Especialidades", servicesSubtitle: "Medicina de excelência com atendimento humanizado.", servicesCta: "Agendar", whyTitle: "Por que ter um", whyHighlight: "site premium", whySubtitle: "Sua clínica merece uma presença online à altura.", testimonialsTitle: "O que dizem nossos", testimonialsHighlight: "pacientes", locationTitle: "Onde", locationHighlight: "estamos", ctaButtonLabel: "Agendar Consulta", backLabel: "Voltar às Demos", statsTitle: "Números de Excelência", processTitle: "Sua Jornada de", processHighlight: "Saúde" },
};
