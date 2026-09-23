import {
  BadgeCheck,
  Lightbulb,
  TrendingUp,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Premium Quality Seeds", icon: BadgeCheck },
  { label: "Built for Indian Farms", icon: Wheat },
  { label: "Strong Crop Potential", icon: TrendingUp },
  { label: "Farmer-Focused Innovation", icon: Lightbulb },
];

function FeatureGroup() {
  return (
    <div className="feature-marquee__group" aria-hidden="true">
      {features.map(({ label, icon: Icon }) => (
        <span className="feature-marquee__item" key={label}>
          <Icon aria-hidden="true" size={14} strokeWidth={1.8} />
          <span>{label}</span>
          <span className="feature-marquee__separator" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function FeatureMarquee() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [floating, setFloating] = useState(true);

  useEffect(() => {
    const updatePosition = () => {
      const anchor = anchorRef.current;
      if (!anchor) return;

      const marqueeHeight = anchor.getBoundingClientRect().height;
      const settleLine = window.innerHeight - marqueeHeight - 16;
      setFloating(anchor.getBoundingClientRect().top > settleLine);
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div ref={anchorRef} className="feature-marquee__anchor">
      <section
        className={`feature-marquee${floating ? " feature-marquee--floating" : ""}`}
        aria-label="Manani Seeds features"
      >
        <div className="feature-marquee__track">
          <FeatureGroup />
          <FeatureGroup />
        </div>
      </section>
    </div>
  );
}
