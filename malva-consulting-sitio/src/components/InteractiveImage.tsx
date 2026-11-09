import { useEffect, useRef, useState, type PointerEvent } from "react";

import { cn } from "@/lib/utils";

type InteractiveImageProps = {
  src: string;
  alt: string;
  /** Classes for the outer frame (size, radius, margins, shadow). */
  className?: string;
  /** Classes for the <img> itself (aspect ratio, object position). */
  imgClassName?: string;
  /** Short text that slides up over the image on hover. */
  caption?: string | undefined;
  /** Maximum tilt in degrees while the pointer moves over the image. */
  tilt?: number;
  /** Fade the image in when it scrolls into view. */
  reveal?: boolean;
  loading?: "lazy" | "eager";
};

/**
 * Image with pointer-follow 3D tilt, hover zoom, a light shine that follows the
 * cursor, an optional sliding caption and a scroll-in reveal. Motion is disabled
 * for visitors who prefer reduced motion.
 */
export function InteractiveImage({
  src,
  alt,
  className,
  imgClassName,
  caption,
  tilt = 6,
  reveal = true,
  loading = "lazy",
}: InteractiveImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!reveal);

  useEffect(() => {
    if (!reveal) return;
    const el = frameRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reveal]);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el || e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - y) * tilt}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * tilt}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={frameRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn(
        "group/img relative isolate overflow-hidden [transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] transition-[transform,opacity,translate,scale,box-shadow] duration-700 ease-out will-change-transform hover:shadow-gold motion-reduce:transition-none",
        visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.97] opacity-0",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn(
          "block w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100",
          imgClassName,
        )}
      />

      {/* Shine that follows the cursor */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--gold-soft)_55%,transparent),transparent_55%)] opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover/img:opacity-100"
      />

      {/* Gold frame that draws in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-2 rounded-[inherit] border border-gold/0 transition-colors duration-500 group-hover/img:border-gold/70"
      />

      {caption && (
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/40 to-transparent px-5 pb-4 pt-10 font-display text-lg italic text-navy-foreground opacity-0 translate-y-3 transition-all duration-500 group-hover/img:translate-y-0 group-hover/img:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
          <span className="text-gold">✦ </span>
          {caption}
        </span>
      )}
    </div>
  );
}
