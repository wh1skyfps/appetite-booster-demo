import type { NicheConfig } from "@/types/niche";
export const advogadoConfig: NicheConfig = {
  id: "advogado", name: "Monteiro & Associados", tagline: "Justiça. Integridade. Resultados.",
  heroSubtitle: "Escritório de advocacia com mais de 15 anos de experiência. Atuamos em direito civil, trabalhista, empresarial e criminal.",
  heroImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80",
  heroStyle: "cinematic", cardStyle: "minimal-row",
  whyLayout: "centered-list",
  sectionOrder: ["hero", "stats", "services", "why", "process", "testimonials", "cta", "location"],
  theme: { primary: "225 50% 25%", primaryForeground: "0 0% 100%", accent: "40 50% 50%", heroOverlay: "linear-gradient(to right, rgba(10,15,30,0.9), rgba(10,15,30,0.3))", sectionDark: "225 25% 8%", sectionDarkForeground: "0 0% 95%" },
  stats: [
    { value: "800+", label: "Causas Ganhas" },
    { value: "97%", label: "Taxa de Sucesso" },
    { value: "15+", label: "Anos de Atuação" },
    { value: "R$30M+", label: "Recuperados para Clientes" },
  ],
  processSteps: [
    { step: "1", title: "Consulta Gratuita", desc: "Avaliação confidencial do seu caso, sem compromisso." },
    { step: "2", title: "Estratégia Jurídica", desc: "Montamos uma estratégia sob medida para sua situação." },
    { step: "3", title: "Representação", desc: "Nossos advogados lutam pelo melhor resultado possível." },
    { step: "4", title: "Resolução", desc: "Entregamos resultados e mantemos você informado em cada etapa." },
  ],
  categories: [
    { name: "Civil", emoji: "⚖️" }, { name: "Trabalhista", emoji: "👷" }, { name: "Empresarial", emoji: "🏢" },
    { name: "Criminal", emoji: "🛡️" }, { name: "Família", emoji: "👨‍👩‍👧" }, { name: "Imobiliário", emoji: "🏠" },
  ],
  products: [
    { name: "Consulta Inicial", desc: "Avaliação detalhada do seu caso com advogado especialista.", price: "Gratuita", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", tag: "Grátis" },
    { name: "Direito Trabalhista", desc: "Defesa dos seus direitos em ações trabalhistas e rescisões.", price: "A partir de R$3.000", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
    { name: "Direito Civil", desc: "Contratos, cobranças, indenizações e responsabilidade civil.", price: "A partir de R$2.500", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80" },
    { name: "Direito Empresarial", desc: "Abertura de empresas, contratos societários e consultoria.", price: "A partir de R$4.000", image: "https://images.unsplash.com/photo-1507679799987-c73b7651e199?w=600&q=80" },
    { name: "Direito de Família", desc: "Divórcio, guarda, pensão alimentícia e inventário.", price: "A partir de R$3.500", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
    { name: "Direito Criminal", desc: "Defesa criminal em todas as instâncias.", price: "A partir de R$5.000", image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=600&q=80" },
  ],
  whyPoints: [
    { title: "Transmita Autoridade", desc: "Um site profissional posiciona seu escritório como referência.", icon: "shield" },
    { title: "Captação Online", desc: "Receba consultas de potenciais clientes 24 horas por dia.", icon: "clock" },
    { title: "Destaque-se", desc: "Diferencie-se dos concorrentes com presença digital premium.", icon: "trending" },
  ],
  testimonials: [
    { name: "Roberto Silva", text: "Ganhamos a causa trabalhista graças à dedicação do Dr. Monteiro.", role: "Cliente Trabalhista" },
    { name: "Marcos Pereira", text: "Profissionalismo e ética em cada etapa do processo.", role: "Cliente Empresarial" },
    { name: "Helena Duarte", text: "Resolveram meu divórcio de forma rápida e humanizada.", role: "Cliente de Família" },
  ],
  ctaText: "Precisa de Ajuda Jurídica?", ctaSubtext: "Agende sua consulta gratuita com um de nossos advogados especializados.",
  whatsappNumber: "5521955554444", location: { address: "Av. Rio Branco, 100 - Centro, Rio de Janeiro - RJ", hours: "Seg-Sex: 8h - 18h | Sáb: Mediante agendamento", phone: "(21) 95555-4444", mapQuery: "escritorio advocacia Centro Rio de Janeiro" },
  footerTagline: "Advocacia séria e comprometida com resultados.", currency: "", backPath: "/brasil",
  labels: { navServices: "Áreas de Atuação", navAbout: "Sobre", navContact: "Contato", navCta: "Consulta Grátis", heroCtaPrimary: "Áreas de Atuação", heroCtaSecondary: "Consulta Gratuita", servicesTitle: "Áreas de", servicesHighlight: "Atuação", servicesSubtitle: "Advocacia especializada com resultados comprovados.", servicesCta: "Consultar", whyTitle: "Por que ter um", whyHighlight: "site premium", whySubtitle: "Sua reputação começa online.", testimonialsTitle: "O que dizem nossos", testimonialsHighlight: "clientes", locationTitle: "Nosso", locationHighlight: "Escritório", ctaButtonLabel: "Agendar Consulta", backLabel: "Voltar às Demos", statsTitle: "Resultados Comprovados", processTitle: "Como", processHighlight: "Trabalhamos" },
};
