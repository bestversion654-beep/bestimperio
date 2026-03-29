import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://customer-assets.emergentagent.com/job_imperio-luxury/artifacts/ooypb31c_bc1f036e726111e799540a4cef95d023.jpg";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Best Western Imperio Hotel"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#0A0A0A] z-10" />

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center gap-6 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overline"
        >
          Best Western Imperio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight leading-none text-white max-w-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Experience Luxury
          <br />
          <span className="text-[#D4AF37]">Stay in Hisar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg font-light text-neutral-400 max-w-xl leading-relaxed"
        >
          Discover unparalleled comfort and elegance at the heart of Hisar
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <button
            data-testid="hero-book-now-btn"
            onClick={() => scrollTo("#booking")}
            className="bg-[#D4AF37] text-black px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[#FDE047] transition-all duration-300"
          >
            Book Now
          </button>
          <button
            data-testid="hero-explore-rooms-btn"
            onClick={() => scrollTo("#rooms")}
            className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Explore Rooms
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 z-20 pointer-events-none"
      >
        <ChevronDown size={24} className="text-[#D4AF37]/60" />
      </motion.div>
    </section>
  );
}
