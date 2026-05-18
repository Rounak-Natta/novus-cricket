"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ================= TYPES ================= */

type Slide = {
  image: string;
  title?: string;
  subtitle?: string;
};

type HeroCarouselProps = {
  slides: Slide[];

  autoPlay?: boolean;
  interval?: number;
  overlay?: boolean;
  indicators?: boolean;
  className?: string;
};

/* ================= COMPONENT ================= */

function HeroCarousel({
  slides,

  autoPlay = true,
  interval = 5000,
  overlay = true,
  indicators = true,
  className = "",
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlay, interval]);

  /* ================= PRELOAD NEXT ================= */

  useEffect(() => {
    if (slides.length <= 1) return;

    const next = (index + 1) % slides.length;

    const img = new window.Image();
    img.src = slides[next].image;
  }, [index, slides]);

  /* ================= EMPTY ================= */

  if (!slides?.length) return null;

  const currentSlide = slides[index];

  /* ================= JSX ================= */

  return (
    <section
      className={`relative mt-0 w-full px-0 md:mt-3.5 md:px-1.5 ${className}`}
    >
      <div className="relative h-screen overflow-hidden md:h-[97vh] md:rounded-[2rem]">

        {/* ================= IMAGE ================= */}

        <AnimatePresence initial={false} mode="sync">

          <motion.div
            key={currentSlide.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 6,
                ease: "linear",
              }}
            >
             <Image
  src={currentSlide.image}
  alt={currentSlide.title || "Hero Slide"}
  fill
  priority={index === 0}
  quality={75}
  sizes="100vw"
  loading={index === 0 ? "eager" : "lazy"}
  fetchPriority={index === 0 ? "high" : "auto"}
  draggable={false}
  className="
    object-cover
    select-none
    transform-gpu
    will-change-transform
  "
  style={{ backfaceVisibility: "hidden" }}
/>
            </motion.div>
          </motion.div>

        </AnimatePresence>

        {/* ================= OVERLAY ================= */}

        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />
        )}

        {/* ================= CONTENT ================= */}

        {(currentSlide.title || currentSlide.subtitle) && (
          <div className="absolute inset-0 flex items-end px-6 pb-12 md:px-12 md:pb-14">

            <AnimatePresence mode="wait">

              <motion.div
                key={index}
                className="max-w-2xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {currentSlide.title && (
                  <h1
                    className="
                      whitespace-pre-line
                      text-4xl
                      font-extrabold
                      leading-[1.02]
                      tracking-tight
                      text-white
                      drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                      md:text-6xl
                    "
                  >
                    {currentSlide.title}
                  </h1>
                )}

                {currentSlide.subtitle && (
                  <p
                    className="
                      mt-4
                      max-w-lg
                      text-sm
                      leading-relaxed
                      text-white/80
                      md:text-base
                    "
                  >
                    {currentSlide.subtitle}
                  </p>
                )}

              </motion.div>

            </AnimatePresence>

          </div>
        )}

        {/* ================= INDICATORS ================= */}

        {indicators && slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">

            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    i === index
                      ? "h-[3px] w-8 bg-white shadow-[0_0_14px_rgba(255,255,255,0.7)]"
                      : "h-[3px] w-4 bg-white/30 hover:bg-white/50"
                  }
                `}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default memo(HeroCarousel);