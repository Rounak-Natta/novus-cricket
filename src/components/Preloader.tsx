"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 6 + 3;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 500);
      }
      setProgress(Math.floor(value));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
        >
          {/* Subtle background image with dark overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/prebg.jpg"
              alt=""
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6">
            {/* Logo with subtle scale animation */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-16 h-16 md:w-20 md:h-20"
            >
              <Image
                src="/logo/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Thin progress ring and percentage */}
            <div className="relative flex items-center justify-center">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 0.1 }}
                />
              </svg>
              <div className="absolute text-white/80 text-lg font-light tracking-wide">
                {progress}
              </div>
            </div>

            {/* Loading label */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-light"
            >
              Loading
            </motion.div>

            {/* Minimal decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-12 h-px bg-white/20 origin-left"
            />
          </div>

          {/* Smooth exit fade */}
          {done && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-black pointer-events-none"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}