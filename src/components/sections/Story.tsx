import { motion } from "framer-motion";
import { storySteps } from "@/data/site";
import { media } from "@/data/media";
import { MediaFrame } from "@/components/ui/MediaFrame";

const stepMedia = [
  media.crops.paddy,
  media.fields[0],
  media.crops.paddy,
  media.farmers[2],
  media.fields[2],
  media.hero.field,
];

const tones = ["lime", "earth", "leaf", "sky", "earth", "sky"] as const;

export function Story() {
  return (
    <section className="journey-section relative py-24 sm:py-32 overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgb(0_176_244_/_0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300">
            Our Journey
          </span>
          <h2 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            From a single seed to a farmer's future.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {storySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden group h-72"
            >
              <MediaFrame
                asset={stepMedia[i]}
                tone={tones[i]}
                rounded="rounded-none"
                className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-semibold text-lime-300 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="lang-te text-sm text-white/70">{step.telugu}</p>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
