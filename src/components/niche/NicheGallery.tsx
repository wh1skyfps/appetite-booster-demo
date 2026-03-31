import { motion } from "framer-motion";
import type { NicheGalleryImage } from "@/types/niche";

interface NicheGalleryProps {
  images: NicheGalleryImage[];
  title?: string;
  highlight?: string;
}

const NicheGallery = ({ images, title, highlight }: NicheGalleryProps) => (
  <section className="py-20 md:py-36 bg-secondary/30 overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14 md:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3">
          {title || "Our"} <span className="text-primary">{highlight || "Portfolio"}</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] sm:auto-rows-[240px] md:auto-rows-[320px]">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, y: 40, clipPath: "inset(15% 0 15% 0)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0% 0)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer ${
              img.span === "wide" ? "col-span-2" : img.span === "tall" ? "row-span-2" : ""
            }`}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110"
            />
            {/* Hover overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Caption slide-up */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <p className="text-white text-xs md:text-sm font-semibold tracking-wide">{img.alt}</p>
            </div>
            {/* Corner accent on hover */}
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary/60 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheGallery;
