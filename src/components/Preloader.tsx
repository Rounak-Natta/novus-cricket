"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 5 + 2.5;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 500);
      }
      setProgress(Math.min(Math.floor(value), 100));
    }, 70);
    
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ 
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh"
          }}
        >
          {/* Solid background overlay - prevents homepage visibility */}
          <div className="absolute inset-0 bg-black" />
          
          {/* Background Image with subtle overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/prebg.jpg"
              alt=""
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          </div>

          <div className="relative flex flex-col items-center gap-10 px-6 z-10">
            {/* Logo with reveal animation */}
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
              className="relative"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                  src="/logo/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Progress percentage - minimalist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/80 text-sm font-light tracking-[0.15em] font-mono"
            >
              {progress.toString().padStart(2, '0')}%
            </motion.div>

            {/* Progress bar - MUCH THICKER */}
            <div className="w-64 md:w-96 h-1.5 bg-white/10 overflow-hidden rounded-full backdrop-blur-sm">
              <motion.div
                className="h-full bg-white origin-left rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Loading text with elegant animation */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 0.6, letterSpacing: "0.3em" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-light"
            >
              Loading Your Game
            </motion.div>

            {/* Minimal pulse dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-2"
            >
              {[0, 0.2, 0.4].map((delay, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-white/40 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}