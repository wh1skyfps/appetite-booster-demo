import type { HairSalonContent } from "@/components/hair-salon/HairSalonPage";

export const hairSalonEnContent: HairSalonContent = {
  salonName: "SIUTSE",
  phone: "(305) 456-2989",
  phoneLink: "tel:+13054562989",
  email: "miami@siutse.com",
  address: "210 Aragón Ave, Coral Gables, FL 33134",
  parking: "220 Aragón Ave, Coral Gables, FL 33134",
  bookingUrl: "#booking",
  whatsappNumber: "13054562989",
  backPath: "/global",
  currency: "$",
  heroImages: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&q=80",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80",
  ],
  salonInteriorImage: "https://images.unsplash.com/photo-1521590832167-7228fcb2c1b1?w=800&q=80",
  nav: {
    services: "Services",
    pricing: "Pricing",
    results: "Results",
    about: "About",
    contact: "Contact",
    bookNow: "Book Now",
  },
  trust: [
    { icon: "sparkles", label: "Premium Extensions" },
    { icon: "heart", label: "Natural Results" },
    { icon: "award", label: "12+ Years Experience" },
    { icon: "shield", label: "Non-Damaging Techniques" },
    { icon: "scissors", label: "Expert Installation" },
    { icon: "mapPin", label: "Coral Gables, Miami" },
  ],
  about: {
    subtitle: "Our Story",
    title: "Where Beauty Becomes Art",
    paragraphs: [
      "For over twelve years, SIUTSE Hair Extensions has been Miami's destination for women seeking natural-looking, luxurious hair transformations. We specialize in premium 100% human Remy hair extensions that seamlessly blend with your natural hair — undetectable, lightweight, and stunningly beautiful.",
      "Our expert stylists use invisible, non-damaging application techniques tailored to your unique hair type, desired length, and lifestyle. Every appointment includes a personalized consultation, professional color matching, precision cut, and flawless blending.",
      "Visit our Coral Gables salon and store, where we carry an extensive collection of colors, lengths, and textures — ready for same-day transformation. Because you deserve hair that makes you feel extraordinary.",
    ],
    cta: "Book a Consultation",
  },
  services: [
    { title: "Tape-In Extensions", desc: "Lightweight, seamless panels that lie flat against the scalp for a natural, undetectable finish. Quick application with lasting results.", category: "extensions" },
    { title: "Keratin Fusion", desc: "Individual strand bonding for the most natural movement and versatility. Perfect for fine to medium hair seeking volume and length.", category: "extensions" },
    { title: "Micro Beads", desc: "Gentle, heat-free attachment using tiny silicone-lined beads. Zero damage, maximum comfort, beautiful results.", category: "extensions" },
    { title: "Braid-Less Sew In", desc: "Revolutionary flat-weft technique — no braids, no tension, no damage. Achieve incredible fullness with a comfortable, secure fit.", category: "extensions" },
    { title: "Clip-In Extensions", desc: "Instant transformation for special occasions. Premium quality clip-ins for volume, length, or both — no commitment required.", category: "extensions" },
    { title: "Balayage", desc: "Hand-painted, sun-kissed dimension that grows out beautifully. The most coveted coloring technique for effortless, natural highlights.", category: "color" },
    { title: "Highlights", desc: "Precision-placed highlights to add depth, movement, and radiance. Customized to complement your skin tone and personal style.", category: "color" },
    { title: "Hair Coloring", desc: "Full-spectrum color services from subtle toning to dramatic transformation. Expert formulation for rich, lasting, healthy-looking color.", category: "color" },
    { title: "Hair Botox", desc: "Deep restoration treatment that repairs damage, eliminates frizz, and restores mirror-like shine. Hair feels reborn.", category: "treatment" },
    { title: "Keratin Treatment", desc: "Smoothing treatment that transforms frizzy, unmanageable hair into sleek, silky perfection for months.", category: "treatment" },
    { title: "Deep Hair Treatment", desc: "Intensive moisture and repair therapy for dry, damaged, or over-processed hair. Restores softness, elasticity, and vitality.", category: "treatment" },
  ],
  serviceCategories: [
    { key: "extensions", label: "Hair Extensions" },
    { key: "color", label: "Color Services" },
    { key: "treatment", label: "Treatments" },
  ],
  carouselSlides: [
    { image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", title: "Beaded Weft", subtitle: "Braid Less Sew In 20\"", price: "$795", regular: "$815", detail: "Two Rows · Hair and Install Included" },
    { image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80", title: "Keratin Fusion", subtitle: "100 Pieces · 20\"", price: "$1,090", regular: "$1,280", detail: "Hair and Install Included" },
    { image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80", title: "Micro Beads", subtitle: "100 Pieces · 20\"", price: "$1,090", regular: "$1,280", detail: "Hair and Install Included" },
    { image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", title: "Tape In Hair", subtitle: "40 Pieces · 20\"", price: "$685", regular: "$790", detail: "Hair and Install Included" },
  ],
  carouselSectionTitle: "Our Specialties",
  carouselSectionSubtitle: "Signature Services",
  beforeAfter: {
    subtitle: "Real Results",
    title: "Stunning Transformations",
    desc: "Every woman deserves to feel extraordinary. See the life-changing results our clients experience.",
    cta: "Start Your Transformation",
  },
  whyChoose: {
    subtitle: "The Siutse Difference",
    title: "Why Women Choose Us",
    reasons: [
      { icon: "sparkles", title: "Natural & Seamless Finish", desc: "Our extensions blend so perfectly, no one will know they're not your natural hair." },
      { icon: "heart", title: "Personalized Color Matching", desc: "Custom color blending to achieve a flawless, indistinguishable match with your own hair." },
      { icon: "award", title: "100% Human Remy Hair", desc: "Only the finest quality hair with cuticles intact for unmatched softness and longevity." },
      { icon: "shield", title: "Invisible Application", desc: "Advanced techniques that are gentle on your natural hair with zero visible attachment points." },
      { icon: "scissors", title: "Expert Blending & Styling", desc: "Every set is precision-cut and styled to frame your face and complement your features." },
      { icon: "star", title: "Luxury Salon Experience", desc: "A serene, welcoming space designed to make you feel pampered from the moment you arrive." },
    ],
  },
  pricing: {
    subtitle: "Investment",
    title: "Service Pricing",
    note: "All hair extensions services include shampoo, blow dry, extensions, installation, cut and style.",
    lengths: ['20"', '24"'],
    extensionServices: [
      {
        name: "Braid-Less Sew In",
        lengths: {
          '20"': [
            { qty: "1 Weft", price: "$495" }, { qty: "2 Wefts", price: "$795" },
            { qty: "3 Wefts", price: "$1,085" }, { qty: "4 Wefts", price: "$1,365" },
            { qty: "5 Wefts", price: "$1,595" },
          ],
          '24"': [
            { qty: "1 Weft", price: "$570" }, { qty: "2 Wefts", price: "$955" },
            { qty: "3 Wefts", price: "$1,300" }, { qty: "4 Wefts", price: "$1,640" },
            { qty: "5 Wefts", price: "$1,920" },
          ],
        },
      },
      {
        name: "Tape-In",
        lengths: {
          '20"': [
            { qty: "20 Pieces", price: "$455" }, { qty: "40 Pieces", price: "$685" },
            { qty: "60 Pieces", price: "$930" }, { qty: "80 Pieces", price: "$1,225" },
            { qty: "100 Pieces", price: "$1,530" },
          ],
          '24"': [
            { qty: "20 Pieces", price: "$500" }, { qty: "40 Pieces", price: "$830" },
            { qty: "60 Pieces", price: "$1,115" }, { qty: "80 Pieces", price: "$1,370" },
            { qty: "100 Pieces", price: "$1,640" },
          ],
        },
      },
      {
        name: "Micro Beads & Keratin",
        lengths: {
          '20"': [
            { qty: "20 Pieces", price: "$450" }, { qty: "40 Pieces", price: "$625" },
            { qty: "60 Pieces", price: "$835" }, { qty: "80 Pieces", price: "$960" },
            { qty: "100 Pieces", price: "$1,090" },
          ],
          '24"': [
            { qty: "20 Pieces", price: "$540" }, { qty: "40 Pieces", price: "$750" },
            { qty: "60 Pieces", price: "$990" }, { qty: "80 Pieces", price: "$1,150" },
            { qty: "100 Pieces", price: "$1,300" },
          ],
        },
      },
    ],
    beautyServices: [
      {
        category: "Highlights & Balayage",
        items: [
          { name: "Money Piece", price: "$150 – $250" },
          { name: "Partial", price: "$250 – $350" },
          { name: "Half", price: "$350 – $500" },
          { name: "Full", price: "$500 – $700" },
        ],
      },
      {
        category: "Hair Coloring",
        items: [
          { name: "Single Process", price: "$105 – $185" },
          { name: "Toner", price: "$105 – $250" },
          { name: "Full Color", price: "$150 – $300" },
        ],
      },
      {
        category: "Smoothing Treatments",
        items: [
          { name: "Hair Botox", price: "$150 – $350" },
          { name: "Deep Hair Treatment", price: "$85 – $120" },
          { name: "Keratin Treatment", price: "$250 – $450" },
        ],
      },
    ],
    beautyTitle: "Color & Treatment Services",
  },
  testimonials: {
    subtitle: "Client Love",
    title: "What Our Clients Say",
    ratingText: "4.9 out of 5 · Based on 1,000+ reviews",
    items: [
      { name: "Victoria M.", text: "I've never felt more confident. My extensions look completely natural — even my friends can't tell. SIUTSE changed my life.", rating: 5 },
      { name: "Isabella R.", text: "The level of professionalism and attention to detail is unmatched. From the consultation to the final style, every step was perfection.", rating: 5 },
      { name: "Sophia L.", text: "I drove from Fort Lauderdale because everyone told me SIUTSE is the best. They were right. My tape-ins are flawless.", rating: 5 },
      { name: "Camila D.", text: "The color matching was absolutely perfect. You genuinely cannot see where my hair ends and the extensions begin. Pure artistry.", rating: 5 },
      { name: "Andrea P.", text: "I've been coming here for three years. The quality never drops. My hair always looks magazine-ready. I won't go anywhere else.", rating: 5 },
      { name: "Maria G.", text: "Walking out of SIUTSE I felt like a completely different woman. The transformation was beyond anything I imagined.", rating: 5 },
    ],
  },
  instagramHandle: "@siutsemiami",
  instagramUrl: "https://www.instagram.com/siutsemiami/",
  bookingCta: {
    subtitle: "Your Transformation Awaits",
    title: "Ready for the Hair",
    titleHighlight: "You've Always Wanted?",
    desc: "Book your personalized consultation today and discover why thousands of women trust SIUTSE for their most beautiful hair transformation.",
    bookBtn: "Book Appointment",
  },
  contact: {
    subtitle: "Visit Us",
    title: "Find Us",
    addressLabel: "Salon Address",
    parkingLabel: "Parking",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Hours",
    hoursValue: ["Tuesday – Saturday", "10:30 AM – 6:00 PM"],
    closed: "Sunday & Monday — Closed",
  },
  footer: {
    tagline: "Where beauty becomes art.",
    backLabel: "Back to Demos",
  },
};
