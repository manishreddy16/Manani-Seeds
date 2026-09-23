import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ImageCorridor } from "@/components/hero/ImageCorridor";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-corridor relative flex min-h-svh w-full items-center overflow-hidden"
    >
      <ImageCorridor />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content relative z-10 mx-auto w-full max-w-4xl translate-y-12 px-6 text-center sm:translate-y-0 sm:px-8">
        <div className="hero-eyebrow" aria-label="Premium agricultural seeds">
          <span aria-hidden="true">✦</span>
          Premium Agricultural Seeds
        </div>

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
          <span className="brand-gradient-text bg-linear-to-r from-sky-300 to-lime-300 bg-clip-text text-transparent">
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
            <WhatsAppIcon size={18} />
            Enquire on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mobile-hero-sticker"
          aria-hidden="true"
        >
          <img
            src="/media/farmers/farmer-couple.png"
            alt=""
            onError={(event) => {
              event.currentTarget.parentElement?.setAttribute("hidden", "true");
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
