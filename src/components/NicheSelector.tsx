import { motion } from "framer-motion";
import { niches } from "@/lib/nicheData";
import { useNiche } from "@/contexts/NicheContext";

const NicheSelector = () => {
  const { setNiche, selectedNiche } = useNiche();

  const handleSelect = (id: string) => {
    setNiche(id);
    setTimeout(() => {
      document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="nichos" className="py-12 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            Qual é o seu <span className="text-primary">tipo de negócio?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
            Selecione o nicho e veja instantaneamente como ficaria o seu site profissional.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {niches.map((niche, i) => {
            const isActive = selectedNiche?.id === niche.id;
            return (
              <motion.button
                key={niche.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleSelect(niche.id)}
                className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-300 active:scale-[0.97] ${
                  isActive
                    ? "ring-2 ring-primary shadow-xl shadow-primary/20 scale-[1.02]"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={niche.heroImage}
                    alt={niche.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {isActive && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <span className="text-lg md:text-xl mb-1 block">{niche.emoji}</span>
                  <h3 className="font-bold text-sm md:text-base text-white leading-tight">{niche.name}</h3>
                  <p className="text-white/50 text-[10px] md:text-xs mt-0.5 line-clamp-1">{niche.subtitle}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NicheSelector;
