"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-[25px] px-[10px]">
      <div className="relative h-[90vh] overflow-hidden rounded-xl">

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt="Hero"
              fill
              priority
              className="object-cover will-change-transform"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* subtle brand glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(245,176,66,0.15),transparent_60%)] pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end p-8">
          <div className="max-w-xl overflow-hidden">

            {/* Title */}
            <motion.h1
              key={`title-${index}`}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Novus Cricket
            </motion.h1>

            {/* Description */}
            <motion.p
              key={`desc-${index}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-white/75 text-sm md:text-base"
            >
              Experience cricket like never before — fast, smart, and immersive.
            </motion.p>

            {/* Button */}
            <motion.button
              key={`btn-${index}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-6 px-6 py-3 bg-primary text-black font-semibold rounded-md transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(245,176,66,0.4)]"
            >
              Explore Matches
            </motion.button>

          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                h-[3px] rounded-full transition-all duration-500
                ${i === index 
                  ? "w-10 bg-primary shadow-[0_0_10px_rgba(245,176,66,0.6)]" 
                  : "w-6 bg-white/30"}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}