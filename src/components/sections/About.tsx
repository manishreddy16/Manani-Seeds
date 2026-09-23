import { motion } from "framer-motion";
import { aboutContent } from "@/data/site";
import { media } from "@/data/media";
import { MediaFrame } from "@/components/ui/MediaFrame";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <MediaFrame
            asset={media.farmers[0]}
            tone="leaf"
            className="h-[420px] w-full sm:h-[520px] shadow-soft"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center rounded-full bg-lime-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-800">
            {aboutContent.eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-900 leading-tight">
            {aboutContent.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
