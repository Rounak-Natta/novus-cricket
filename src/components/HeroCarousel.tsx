"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/images/2.png",
  "/images/1.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // slightly slower = premium feel
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full mt-0 md:mt-[15px] px-0 md:px-[6px]">

      {/* HERO CONTAINER */}
      <div className="relative h-[100vh] md:h-[97vh] overflow-hidden rounded-none md:rounded-4xl">

        {/* SLIDES */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt={`Hero ${index + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM OVERLAY ONLY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end px-6 md:px-12 pb-12">
          <div className="max-w-2xl">

            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                FEEL THE HEAT, <br /> FEAR THE FIRE
              </motion.h1>
            </AnimatePresence>

          </div>
        </div>

        {/* MINIMAL INDICATORS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 bg-white"
                  : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}