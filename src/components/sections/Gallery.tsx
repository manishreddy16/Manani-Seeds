import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { media } from "@/data/media";
import { MediaFrame } from "@/components/ui/MediaFrame";

const tones = ["sky", "lime", "leaf", "earth", "neutral"] as const;

// Varying row spans create the masonry rhythm without a masonry library.
const spanPattern = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-1",
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const items = media.gallery;

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-800">
            Gallery
          </span>
          <h2 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-900">
            Life in the field, in every frame.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] gap-4">
          {items.map((item, i) => (
            <motion.button
              key={item.src}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-2xl group text-left ${spanPattern[i % spanPattern.length]}`}
            >
              <MediaFrame
                asset={item}
                tone={tones[i % tones.length]}
                rounded="rounded-2xl"
                className="h-full w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/20 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-ink-900/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              aria-label="Close gallery image"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <MediaFrame
                asset={items[active]}
                tone={tones[active % tones.length]}
                className="h-[60vh] w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
