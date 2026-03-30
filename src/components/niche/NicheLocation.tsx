import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

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
    <section id="contacto" className="py-12 md:py-24 bg-background">
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Morada", value: location.address },
              { icon: Clock, label: "Horário", value: location.hours },
              { icon: Phone, label: "Telefone", value: location.phone },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
            <iframe
              title="Localização"
              src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicheLocation;
