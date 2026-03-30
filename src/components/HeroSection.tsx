import { motion } from "framer-motion";
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";
import burger1 from "@/assets/burger-1.jpg";
import acai1 from "@/assets/acai-1.jpg";
import pizza1 from "@/assets/pizza-1.jpg";

const menuItems = [
  { num: "01", name: "Smash Burgers", clipId: "clip-original", image: burger1 },
  { num: "02", name: "Açaí Premium", clipId: "clip-hexagons", image: acai1 },
  { num: "03", name: "Pizzas Artesanais", clipId: "clip-pixels", image: pizza1 },
];

const HeroSection = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center section-dark pt-16">
      <div className="container py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          <ConnoisseurStackInteractor items={menuItems} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
