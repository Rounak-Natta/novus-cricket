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
    }, 3500);
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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
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

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

        {/* GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(245,176,66,0.12),transparent_60%)] pointer-events-none" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end px-6 md:px-10 pb-10">
          <div className="max-w-xl">

            <motion.h1
              key={`title-${index}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              Novus Cricket
            </motion.h1>

            <motion.p
              key={`desc-${index}`}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-white/75 text-sm md:text-base"
            >
              Experience cricket like never before — fast, smart, and immersive.
            </motion.p>

            <motion.button
              key={`btn-${index}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 px-6 py-3 bg-primary text-black font-semibold rounded-md transition hover:bg-primary-dark"
            >
              Explore Matches
            </motion.button>

          </div>
        </div>

        {/* INDICATORS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === index
                  ? "w-10 bg-primary shadow-[0_0_8px_rgba(245,176,66,0.6)]"
                  : "w-5 bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}