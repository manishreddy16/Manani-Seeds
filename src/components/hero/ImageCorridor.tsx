import type { CSSProperties } from "react";
import { media } from "@/data/media";
import { MediaFrame } from "@/components/ui/MediaFrame";

const panelPositions = [
  { travel: "clamp(23rem, 31vw, 38rem)", size: "0.76", rotate: "-8deg", curve: "-4rem" },
  { travel: "clamp(33rem, 43vw, 54rem)", size: "0.94", rotate: "-5deg", curve: "-2.5rem" },
  { travel: "clamp(43rem, 56vw, 70rem)", size: "1.14", rotate: "-3deg", curve: "-1rem" },
  { travel: "clamp(53rem, 69vw, 86rem)", size: "1.34", rotate: "-1deg", curve: "0.5rem" },
  { travel: "clamp(63rem, 82vw, 102rem)", size: "1.52", rotate: "2deg", curve: "2rem" },
  { travel: "clamp(73rem, 95vw, 118rem)", size: "1.7", rotate: "5deg", curve: "3.5rem" },
] as const;

export function ImageCorridor() {
  return (
    <div className="image-corridor" aria-hidden="true">
      <div className="image-corridor__wash" />
      <div className="image-corridor__track">
        {[...panelPositions, ...panelPositions].map((position, index) => {
          const isRight = index >= panelPositions.length;
          const asset = media.hero.corridor[index % media.hero.corridor.length];

          return (
            <div
              key={`${isRight ? "right" : "left"}-${index % panelPositions.length}`}
              className={`image-corridor__panel ${isRight ? "image-corridor__panel--right" : "image-corridor__panel--left"}`}
              style={{
                "--corridor-travel": position.travel,
                "--corridor-size": position.size,
                "--corridor-rotate": position.rotate,
                "--corridor-curve": isRight ? `calc(${position.curve} * -1)` : position.curve,
                "--corridor-delay": `${-(index % panelPositions.length) * 1.35}s`,
              } as CSSProperties}
            >
              <MediaFrame
                asset={asset}
                tone={index % 3 === 0 ? "sky" : index % 3 === 1 ? "lime" : "earth"}
                rounded="rounded-[1.25rem]"
                className="h-full w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}