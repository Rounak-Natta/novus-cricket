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

        setTimeout(() => setDone(true), 600);
      }

      setProgress(Math.floor(value));
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <motion.div
            animate={{ scale: [1.05, 1.1] }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/bg.png"
              alt="bg"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-10">

            {/* LOGO + RING */}
            <div className="relative flex items-center justify-center">

              {/* rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-40 h-40 rounded-full border border-[var(--brand)]/30"
              />

              {/* glowing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute w-32 h-32 rounded-full border border-[var(--brand)]/60"
              />

              {/* Logo */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2 }}
                className="relative w-20 h-20 md:w-24 md:h-24"
              >
                <Image
                  src="/logo/logo.png"
                  alt="logo"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(245,176,66,0.6)]"
                />
              </motion.div>

            </div>

            {/* PERCENTAGE (center focus now) */}
            <motion.div
              key={progress}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-mono text-lg tracking-widest"
            >
              {progress}%
            </motion.div>

            {/* subtle text */}
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/50 text-xs tracking-[0.3em] uppercase"
            >
              Loading Experience
            </motion.p>

          </div>

          {/* exit zoom */}
          {done && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}