import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, ExternalLink } from "lucide-react";
import type { NicheLabels } from "@/types/niche";

interface NicheLocationProps {
  location: { address: string; hours: string; phone: string; mapQuery: string };
  labels: NicheLabels;
}

const NicheLocation = ({ location, labels }: NicheLocationProps) => (
  <section id="contact" className="py-20 md:py-36 bg-background overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 md:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
          {labels.locationTitle} <span className="text-primary">{labels.locationHighlight}</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          {[
            { icon: MapPin, label: "Address", value: location.address },
            { icon: Clock, label: "Hours", value: location.hours },
            { icon: Phone, label: "Phone", value: location.phone },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              whileHover={{ x: 5 }}
              className="flex items-start gap-5 p-5 bg-card rounded-2xl border border-border/40 hover:border-primary/15 hover:shadow-lg transition-all duration-500 group"
            >
              <div className="w-11 h-11 bg-primary/10 group-hover:bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium leading-relaxed">{item.value}</p>
              </div>
            </motion.div>
          ))}
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ x: 4 }}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline ml-5 mt-2"
          >
            <Navigation className="w-4 h-4" />
            Google Maps
            <ExternalLink className="w-3 h-3" />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] bg-muted shadow-2xl border border-border/20"
        >
          <iframe title="Location" src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`} className="w-full h-full border-0" loading="lazy" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default NicheLocation;
