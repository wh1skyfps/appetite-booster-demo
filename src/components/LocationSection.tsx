import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Onde <span className="text-primary">estamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">Venha nos visitar ou peça para entrega!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Morada</h3>
                <p className="text-muted-foreground text-sm">Rua do Sabor, 123 — Centro<br />Lisboa, Portugal</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm">Seg – Sex: 11h00 – 23h00<br />Sáb – Dom: 12h00 – 00h00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Telefone</h3>
                <p className="text-muted-foreground text-sm">+351 912 345 678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">+351 912 345 678</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a key={s} href="#" className="bg-primary/10 text-primary font-bold text-sm px-4 py-2 rounded-full hover:bg-primary/20 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center"
          >
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground font-medium">Mapa interativo</p>
              <p className="text-muted-foreground/60 text-sm">Integração Google Maps disponível</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
