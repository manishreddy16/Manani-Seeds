import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { media } from "@/data/media";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { whatsappLink } from "@/lib/whatsapp";

const SeedField = lazy(() =>
  import("@/components/three/SeedField").then((m) => ({
    default: m.SeedField,
  })),
);

export function Hero() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isSmall = window.innerWidth < 640;

    if (!prefersReduced) {
      const timer = setTimeout(() => setShow3D(!isSmall), 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-end sm:items-center"
    >
      {/* Layered atmospheric background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src="/media/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/30 to-ink-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/40 via-transparent to-sky-900/20" />
      </div>

      

      {/* Floating leaf/seed decorative elements (CSS-only fallback layer) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[8%] h-3 w-3 rounded-full bg-lime-300/70 animate-float" />
        <div className="absolute top-[30%] right-[15%] h-2 w-2 rounded-full bg-sky-300/70 animate-float-slow" />
        <div className="absolute bottom-[35%] left-[20%] h-2.5 w-2.5 rounded-full bg-lime-200/60 animate-float" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-16 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3 mb-6"
        >
          <MediaFrame
            asset={media.logo}
            tone="sky"
            rounded="rounded-2xl"
            className="h-14 w-14 sm:h-16 sm:w-16 shadow-glow-sky"
          />

          <span className="text-white/90 font-medium tracking-[0.2em] text-xs sm:text-sm uppercase">
            Manani Seeds
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-balance text-4xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] max-w-3xl"
        >
          Seeds with a{" "}
          <span className="brand-gradient-text bg-gradient-to-r from-sky-300 to-lime-300 bg-clip-text text-transparent">
            New Skill
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-white/85"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink-900 px-7 py-3.5 font-semibold shadow-soft hover:scale-[1.03] transition-transform"
          >
            Explore Our Seeds
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full glass border border-white/30 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/70"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
