import { motion } from "framer-motion";
import type { NicheGalleryImage } from "@/types/niche";

interface NicheGalleryProps {
  images: NicheGalleryImage[];
  title?: string;
  highlight?: string;
}

const NicheGallery = ({ images, title, highlight }: NicheGalleryProps) => (
  <section className="py-16 md:py-32 bg-secondary/30 overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
          {title || "Our"} <span className="text-primary">{highlight || "Portfolio"}</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[300px]">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer ${
              img.span === "wide" ? "col-span-2" : img.span === "tall" ? "row-span-2" : ""
            }`}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <p className="text-white text-xs md:text-sm font-semibold">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheGallery;
