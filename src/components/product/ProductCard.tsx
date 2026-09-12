import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Product } from "@/data/products";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/lib/cn";

const accentMap = {
  sky: "from-sky-400 to-sky-600",
  lime: "from-lime-400 to-lime-600",
  leaf: "from-leaf-500 to-leaf-700",
  earth: "from-earth-300 to-earth-400",
} as const;

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const comingSoon = product.status === "coming-soon";

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link to={`/products/${product.slug}`} className="block group">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          whileHover={{ y: -8 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 22,
          }}
          className="relative rounded-3xl border border-ink-900/5 bg-white/70 backdrop-blur-sm shadow-soft overflow-visible h-full"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(320px circle at ${glow.x}% ${glow.y}%, rgb(0 176 244 / 0.12), transparent 60%)`,
            }}
          />

          {comingSoon && (
            <span className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-ink-900/85 text-white text-[11px] font-semibold px-3 py-1.5 backdrop-blur">
              <Clock size={12} /> Coming Soon
            </span>
          )}

          <div className="relative h-64 sm:h-80 p-6 overflow-visible">
            <MediaFrame
              asset={product.images.field}
              tone={product.accent === "earth" ? "earth" : product.accent}
              rounded="rounded-2xl"
              className={cn(
                "h-full w-full transition-all duration-500",
                comingSoon
                  ? "blur-[2px] saturate-75"
                  : "group-hover:scale-[1.03]",
              )}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-48 h-64 sm:w-56 sm:h-72 z-10"
            >
              <MediaFrame
                asset={product.images.pack}
                tone={product.accent === "earth" ? "earth" : product.accent}
                rounded="rounded-xl"
                className="h-full w-full shadow-soft border border-white/60"
              />
            </motion.div>
          </div>

          <div className="relative p-6 pt-2">
            <div
              className={cn(
                "h-1 w-10 rounded-full bg-gradient-to-r mb-4",
                accentMap[product.accent],
              )}
            />

            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900">
                  {product.name}
                </h3>

                <p className="text-xs uppercase tracking-wide text-ink-500 mt-0.5">
                  {product.crop}
                </p>
              </div>

              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-900/10 text-ink-600 group-hover:bg-ink-900 group-hover:text-white transition-colors">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <p className="mt-3 text-sm text-ink-600 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
