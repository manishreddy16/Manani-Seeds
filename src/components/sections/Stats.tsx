import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Sprout,
  Leaf,
  MapPin,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { impactStats } from "@/data/site";
import { useCountUp } from "@/hooks/useCountUp";

const icons: Record<string, LucideIcon> = {
  users: Users,
  sprout: Sprout,
  leaf: Leaf,
  "map-pin": MapPin,
  calendar: Calendar,
};

function StatCard({
  value,
  suffix,
  label,
  icon,
  inView,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  inView: boolean;
  index: number;
}) {
  const count = useCountUp(value, inView);
  const Icon = icons[icon] ?? Leaf;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative rounded-3xl glass border border-ink-900/5 shadow-soft p-6 sm:p-8 overflow-hidden"
    >
      <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gradient-to-br from-sky-200/40 to-lime-200/40 blur-xl" />

      <div className="relative flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-lime-100 text-sky-700">
          <Icon size={20} strokeWidth={1.8} />
        </div>
      </div>

      <div className="relative font-display text-3xl sm:text-4xl font-semibold text-ink-900 tabular-nums">
        {count.toLocaleString("en-IN")}
        <span className="brand-gradient-text">{suffix}</span>
      </div>

      <p className="relative mt-2 text-sm text-ink-600">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  return (
    <section className="relative -mt-12 sm:-mt-20 z-20">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {impactStats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} inView={inView} index={i} />
        ))}
      </div>
    </section>
  );
}
