"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const HERO_SLIDES = [
  "/hero-carousel/hero-1.png",
  "/hero-carousel/hero-2.png",
  "/hero-carousel/hero-3.png",
  "/hero-carousel/hero-4.png",
  "/hero-carousel/hero-5.png",
  "/hero-carousel/hero-6.png",
  "/hero-carousel/hero-7.png",
] as const;

const AUTOPLAY_MS = 5_000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex((i) => {
      const n = HERO_SLIDES.length;
      return (i + (next % n) + n) % n;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [goTo]);

  return (
    <div className="relative w-full max-w-lg lg:ml-auto lg:max-w-none">
      <div className="group relative aspect-4/3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
            }}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={`Hero slide ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 512px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      {/* <button
        type="button"
        onClick={() => goTo(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5 text-gray-700" />
      </button> */}
      {/* <button
        type="button"
        onClick={() => goTo(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5 text-gray-700" />
      </button> */}

      {/* Dots (commented out)
      <div className="mt-3 flex justify-center gap-1.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              i === index ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
      */}

      {/* Decorative back splash */}
      <div className="absolute -inset-4 -z-10 rounded-xl bg-linear-to-tr from-primary/20 to-primary-accent/30 opacity-60 blur-2xl" />
    </div>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
