import { motion } from "framer-motion";
import { media } from "@/data/media";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

// ScrollVelocity already renders its children twice internally (for a
// seamless -50% loop), so we only need enough source width here to cover
// very wide viewports before that internal duplication kicks in. Repeats
// of 3 (→ 6x total DOM nodes per row once doubled) was excessive; 2 keeps
// the loop seamless on ultrawide screens with a third fewer image nodes.
const buildInfiniteTrack = <T,>(items: T[], repeats = 2): T[] =>
  Array.from({ length: repeats }, () => items).flat();

const sourceImages = media.gallery;
const rowOneItems = buildInfiniteTrack(sourceImages);
const rowTwoItems = buildInfiniteTrack([...sourceImages].reverse());

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(169, 213, 52, 0.12), transparent 32%), radial-gradient(circle at bottom right, rgba(0, 176, 244, 0.08), transparent 28%), rgba(251, 247, 236, 0.9)",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-800">
            Gallery
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
            Life in the field, in every frame.
          </h2>
        </motion.div>

        <div className="space-y-14 sm:space-y-16 md:space-y-20">
          <ScrollVelocity
            velocity={6}
            direction={1}
            className="-mx-2 w-[calc(100%+1rem)] md:-mx-4 md:w-[calc(100%+2rem)]"
          >
            {rowOneItems.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className="relative shrink-0 overflow-hidden rounded-[1.5rem] border border-ink-900/5 bg-white/60 shadow-[0_18px_45px_-24px_rgba(22,36,31,0.32)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-[7.5rem] w-[11.5rem] object-cover sm:h-[10rem] sm:w-[15rem] md:h-[13.5rem] md:w-[20.5rem] lg:h-[14rem] lg:w-[22rem]"
                  loading="lazy"
                />
              </div>
            ))}
          </ScrollVelocity>

          <ScrollVelocity
            velocity={6}
            direction={-1}
            className="-mx-2 w-[calc(100%+1rem)] md:-mx-4 md:w-[calc(100%+2rem)]"
          >
            {rowTwoItems.map((item, index) => (
              <div
                key={`${item.src}-reverse-${index}`}
                className="relative shrink-0 overflow-hidden rounded-[1.5rem] border border-ink-900/5 bg-white/60 shadow-[0_18px_45px_-24px_rgba(22,36,31,0.32)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-[7.5rem] w-[11.5rem] object-cover sm:h-[10rem] sm:w-[15rem] md:h-[13.5rem] md:w-[20.5rem] lg:h-[14rem] lg:w-[22rem]"
                  loading="lazy"
                />
              </div>
            ))}
          </ScrollVelocity>
        </div>
      </div>
    </section>
  );
}
