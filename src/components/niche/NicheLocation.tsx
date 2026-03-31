import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import type { NicheLabels } from "@/types/niche";

interface NicheLocationProps {
  location: { address: string; hours: string; phone: string; mapQuery: string };
  labels: NicheLabels;
}

const NicheLocation = ({ location, labels }: NicheLocationProps) => {
  return (
    <section id="contact" className="py-14 md:py-28 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
            {labels.locationTitle} <span className="text-primary">{labels.locationHighlight}</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            {[
              { icon: MapPin, label: "Address", value: location.address },
              { icon: Clock, label: "Hours", value: location.hours },
              { icon: Phone, label: "Phone", value: location.phone },
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
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline ml-4 mt-2">
              <Navigation className="w-4 h-4" />Google Maps
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted shadow-lg">
            <iframe title="Location" src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`} className="w-full h-full border-0" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NicheLocation;
