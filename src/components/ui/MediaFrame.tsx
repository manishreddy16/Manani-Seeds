import { ImageOff, type LucideIcon } from "lucide-react";
import type { MediaAsset } from "@/data/media";
import { cn } from "@/lib/cn";

interface MediaFrameProps {
  asset: MediaAsset;
  className?: string;
  icon?: LucideIcon;
  tone?: "sky" | "lime" | "leaf" | "earth" | "neutral";
  rounded?: string;
  fit?: "cover" | "contain";
}

const toneMap: Record<NonNullable<MediaFrameProps["tone"]>, string> = {
  sky: "from-sky-100 via-sky-50 to-cream-100",
  lime: "from-lime-100 via-lime-50 to-cream-100",
  leaf: "from-lime-100 via-cream-100 to-sky-50",
  earth: "from-earth-100 via-cream-100 to-earth-50",
  neutral: "from-cream-200 via-cream-100 to-sky-50",
};

/**
 * Renders a real photograph when `asset.real` is true, otherwise a tasteful
 * gradient placeholder in the exact same aspect ratio/position — so swapping
 * in real media later never requires layout changes.
 */
export function MediaFrame({
  asset,
  className,
  icon: Icon = ImageOff,
  tone = "neutral",
  rounded = "rounded-3xl",
  fit = "cover",
}: MediaFrameProps) {
  if (asset.real) {
    return (
      <img
        src={asset.src}
        alt={asset.alt}
        loading="lazy"
        className={cn(
          rounded,
          fit === "contain" ? "object-contain" : "object-cover",
          className,
        )}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={asset.alt}
      className={cn(
        rounded,
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        toneMap[tone],
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,var(--color-ink-900)_1px,transparent_0)] bg-[length:16px_16px]" />
      <Icon className="relative h-8 w-8 text-ink-700/30" strokeWidth={1.5} />
    </div>
  );
}
