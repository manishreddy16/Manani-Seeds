import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  TrendingUp,
  FlaskConical,
  CloudSun,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { whyUsPoints } from "@/data/site";
import { media } from "@/data/media";
import { MediaFrame } from "@/components/ui/MediaFrame";

const icons: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  users: Users,
  "trending-up": TrendingUp,
  "flask-conical": FlaskConical,
  "cloud-sun": CloudSun,
  handshake: Handshake,
};

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center rounded-full bg-lime-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-800">
            Why Manani Seeds
          </span>
          <h2 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-900 leading-tight mb-10">
            Trusted where it matters most — in the field.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyUsPoints.map((point, i) => {
              const Icon = icons[point.icon] ?? ShieldCheck;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-lime-100 text-sky-700">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{point.title}</h3>
                    <p className="mt-1 text-sm text-ink-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative"
        >
          <MediaFrame
            asset={media.farmers[1]}
            tone="sky"
            className="aspect-[27/34] h-auto w-full shadow-soft"
          />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-lime-300/40 to-sky-300/40 blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
