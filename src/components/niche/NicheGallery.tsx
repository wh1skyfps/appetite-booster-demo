import { motion } from "framer-motion";
import type { NicheGalleryImage } from "@/types/niche";

interface NicheGalleryProps {
  images: NicheGalleryImage[];
  title?: string;
  highlight?: string;
}

const NicheGallery = ({ images, title, highlight }: NicheGalleryProps) => (
  <section className="py-14 md:py-28 bg-secondary/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
          {title || "Our"} <span className="text-primary">{highlight || "Portfolio"}</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
              img.span === "wide" ? "col-span-2" : img.span === "tall" ? "row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-xs md:text-sm font-medium">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheGallery;
