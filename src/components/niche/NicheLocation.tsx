import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

interface NicheLocationProps {
  location: {
    address: string;
    hours: string;
    phone: string;
    mapQuery: string;
  };
}

const NicheLocation = ({ location }: NicheLocationProps) => {
  return (
    <section id="contacto" className="py-14 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            Onde <span className="text-primary">estamos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: MapPin, label: "Morada", value: location.address },
              { icon: Clock, label: "Horário", value: location.hours },
              { icon: Phone, label: "Telefone", value: location.phone },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5">{item.label}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline ml-4 mt-2"
            >
              <Navigation className="w-4 h-4" />
              Abrir no Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted shadow-lg"
          >
            <iframe
              title="Localização"
              src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NicheLocation;
