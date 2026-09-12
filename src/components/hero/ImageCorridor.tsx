import { useEffect, useRef } from "react";
import { media, type MediaAsset } from "@/data/media";

const trackPanels = 5;
const trackDuration = 18_000;

const corridorSlots = [
  { depth: 0, x: 3, y: -5, z: -2600, scale: 0.34, opacity: 0.34 },
  { depth: 0.12, x: 7, y: -3, z: -1900, scale: 0.46, opacity: 0.56 },
  { depth: 0.32, x: 17, y: -1, z: -1150, scale: 0.64, opacity: 0.8 },
  { depth: 0.55, x: 32, y: 2, z: -550, scale: 0.84, opacity: 0.96 },
  { depth: 0.76, x: 50, y: 6, z: -120, scale: 1.1, opacity: 1 },
  { depth: 0.93, x: 74, y: 11, z: 250, scale: 1.42, opacity: 1 },
  { depth: 1, x: 98, y: 14, z: 450, scale: 1.6, opacity: 0 },
] as const;

function interpolateSlot(depth: number) {
  const nextIndex = corridorSlots.findIndex((slot) => slot.depth >= depth);
  const index = Math.max(1, nextIndex);
  const from = corridorSlots[index - 1];
  const to = corridorSlots[index];
  const amount = (depth - from.depth) / (to.depth - from.depth);

  return {
    x: from.x + (to.x - from.x) * amount,
    y: from.y + (to.y - from.y) * amount,
    z: from.z + (to.z - from.z) * amount,
    scale: from.scale + (to.scale - from.scale) * amount,
    opacity: from.opacity + (to.opacity - from.opacity) * amount,
  };
}

function setPanelPosition(
  panel: HTMLElement,
  direction: -1 | 1,
  depth: number,
) {
  const slot = interpolateSlot(depth);
  panel.style.opacity = `${slot.opacity}`;
  panel.style.transform = `translate(-50%, -50%) translate3d(${direction * slot.x}vw, ${slot.y}vh, ${slot.z}px) rotateY(${direction * -14}deg) scale(${slot.scale})`;
}

interface ImageCorridorProps {
  assets?: MediaAsset[];
}

export function ImageCorridor({ assets = media.hero.corridor }: ImageCorridorProps) {
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;
    let startedAt = 0;

    const render = (timestamp: number) => {
      if (!startedAt) startedAt = timestamp;
      const progress = prefersReducedMotion
        ? 0.5
        : ((timestamp - startedAt) % trackDuration) / trackDuration;

      panelRefs.current.forEach((panel, index) => {
        if (!panel) return;
        const direction: -1 | 1 = index < trackPanels ? -1 : 1;
        const trackIndex = index % trackPanels;
        const depth = (progress + trackIndex / trackPanels) % 1;
        setPanelPosition(panel, direction, depth);
      });

      if (!prefersReducedMotion) frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="image-corridor" aria-hidden="true">
      <div className="image-corridor__wash" />
      <div className="image-corridor__track">
        {[-1, 1].flatMap((direction) =>
          Array.from({ length: trackPanels }, (_, index) => {
            const asset = assets[index % assets.length];

            return (
              <div
                key={`${direction}-${index}`}
                className="image-corridor__panel"
                ref={(panel) => {
                  panelRefs.current[direction === -1 ? index : trackPanels + index] = panel;
                }}
              >
                <img
                  src={asset.src}
                  alt=""
                  className="h-full w-full rounded-[1.25rem] object-cover"
                  loading="eager"
                  onError={(event) => {
                    const panel = event.currentTarget.parentElement;
                    if (panel) panel.style.display = "none";
                  }}
                />
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}