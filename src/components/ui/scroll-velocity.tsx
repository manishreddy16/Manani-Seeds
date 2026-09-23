import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface ScrollVelocityProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[] | string;
  velocity?: number;
  direction?: 1 | -1;
  movable?: boolean;
}

const BASE_GALLERY_LOOP_SECONDS = 72;

const ScrollVelocity = React.forwardRef<HTMLDivElement, ScrollVelocityProps>(
  ({
    children,
    velocity = 6,
    direction = 1,
    movable = true,
    className,
    ...props
  }, ref) => {
    const speedFactor = Math.max(velocity, 1);
    const duration = BASE_GALLERY_LOOP_SECONDS * (12 / speedFactor);

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <motion.div
          className={cn(
            "marquee-track flex w-max min-w-max items-center gap-4 md:gap-5",
            direction === -1 && "reverse",
            movable && "motion-reduce:animate-none",
          )}
          style={{
            animationDuration: `${duration}s`,
            animationDirection: direction === -1 ? "reverse" : "normal",
          }}
        >
          {typeof children === "string" ? (
            <>
              {Array.from({ length: 2 }).map((_, index) => (
                <span key={index}>{children}</span>
              ))}
            </>
          ) : (
            <>
              {children}
              {children}
            </>
          )}
        </motion.div>
      </div>
    );
  },
);

ScrollVelocity.displayName = "ScrollVelocity";

export { ScrollVelocity, type ScrollVelocityProps };
