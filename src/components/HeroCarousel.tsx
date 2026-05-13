"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ================= SLIDES ================= */

const SLIDES = [
  "/images/1.webp",

];

/* ================= COMPONENT ================= */

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* PRELOAD NEXT IMAGE */
  useEffect(() => {
    const nextIndex = (index + 1) % SLIDES.length;

    const img = new window.Image();
    img.src = SLIDES[nextIndex];
  }, [index]);

  /* ACTIVE IMAGE */
  const currentSlide = useMemo(() => SLIDES[index], [index]);

  return (
    <section className="relative mt-0 w-full px-0 md:mt-3.5 md:px-1.5">

      <div className="relative h-screen overflow-hidden md:h-[97vh] md:rounded-[2rem]">

        {/* IMAGE */}
        <AnimatePresence mode="wait">

          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.96 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={currentSlide}
              alt={`Hero slide ${index + 1}`}
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              quality={82}
              sizes="100vw"
              placeholder="empty"
              className="object-cover will-change-transform"
            />
          </motion.div>

        </AnimatePresence>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end px-6 pb-12 md:px-12 md:pb-14">

          <div className="max-w-2xl">

            <AnimatePresence mode="wait">

              <motion.h1
                key={index}
                className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] md:text-6xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                FEEL THE HEAT,
                <br />
                FEAR THE FIRE
              </motion.h1>

            </AnimatePresence>

          </div>
        </div>

        {/* INDICATORS */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">

          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                i === index
                  ? "h-[3px] w-8 bg-white shadow-[0_0_18px_rgba(255,255,255,0.7)]"
                  : "h-[3px] w-4 bg-white/30"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}