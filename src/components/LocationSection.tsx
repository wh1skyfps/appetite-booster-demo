import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Morada", text: "Rua do Sabor, 123 — Centro\nLisboa, Portugal" },
  { icon: Clock, title: "Horário", text: "Seg – Sex: 11h – 23h\nSáb – Dom: 12h – 00h" },
  { icon: Phone, title: "Telefone", text: "+351 912 345 678" },
  { icon: MessageCircle, title: "WhatsApp", text: "+351 912 345 678" },
];

const LocationSection = () => {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            Onde <span className="text-primary">estamos</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">Venha nos visitar ou peça para entrega!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base mb-0.5">{item.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-2 pt-1">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="bg-primary/10 text-primary font-bold text-xs md:text-sm px-4 py-2.5 rounded-full hover:bg-primary/20 active:scale-95 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl overflow-hidden min-h-[240px] md:min-h-[300px] flex items-center justify-center"
          >
            <div className="text-center p-6">
              <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground font-medium text-sm md:text-base">Mapa interativo</p>
              <p className="text-muted-foreground/60 text-xs md:text-sm">Integração Google Maps disponível</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
