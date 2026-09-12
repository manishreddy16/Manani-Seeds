import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { media } from "@/data/media";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ImageCorridor } from "@/components/hero/ImageCorridor";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-corridor relative min-h-[100svh] w-full overflow-hidden flex items-center"
    >
      <ImageCorridor />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <MediaFrame
            asset={media.logo}
            tone="sky"
            rounded="rounded-2xl"
            className="h-14 w-14 shadow-glow-sky sm:h-16 sm:w-16"
          />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700 sm:text-sm">
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
          className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] text-ink-900 sm:text-6xl lg:text-7xl"
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
          className="mx-auto mt-6 max-w-xl text-base text-ink-700 sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#products"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 font-semibold text-white shadow-soft transition-transform hover:scale-[1.03]"
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
            className="glass inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/10 px-7 py-3.5 font-semibold text-ink-900 transition-colors hover:bg-white/80"
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
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-700/60 sm:flex"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
