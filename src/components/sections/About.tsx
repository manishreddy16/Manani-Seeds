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
          <div className="relative grid grid-cols-5 gap-4">
            <MediaFrame
              asset={media.farmers[0]}
              tone="leaf"
              className="col-span-3 h-72 sm:h-96 shadow-soft"
            />
            <MediaFrame
              asset={media.fields[1]}
              tone="sky"
              className="col-span-2 h-40 sm:h-52 self-end shadow-soft"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl glass border border-ink-900/5 shadow-soft px-5 py-4 max-w-[220px]"
          >
            <p className="lang-te text-sm text-ink-800">
              {aboutContent.teluguLine}
            </p>
          </motion.div>
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
