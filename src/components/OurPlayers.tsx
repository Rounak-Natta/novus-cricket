"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const players = [
  {
    name: "Venkatesh Iyer",
    role: "All-rounder",
    image: "/players/1.webp",
    stats: { matches: 36, runs: 956, wickets: 5, strike: 137 },
    desc: "A dynamic top-order all-rounder known for explosive batting and useful medium pace. Delivers in high-pressure situations with both bat and ball.",
  },
  {
    name: "Sunil Narine",
    role: "All-rounder",
    image: "/players/3.webp",
    stats: { matches: 162, runs: 1046, wickets: 163, strike: 165 },
    desc: "Mystery spinner and explosive opener. Revolutionized T20 bowling with his carrom ball.",
  },
  {
    name: "Rachin Ravindra",
    role: "All-rounder",
    image: "/players/7.webp",
    stats: { matches: 18, runs: 420, wickets: 12, strike: 136 },
    desc: "Promising all-rounder with strong technique and composure. A future star with elegant strokeplay.",
  },
  {
    name: "Cameron Green",
    role: "All-rounder",
    image: "/players/8.webp",
    stats: { matches: 32, runs: 720, wickets: 18, strike: 150 },
    desc: "Tall pace-bowling all-rounder with immense power-hitting ability. Combines raw pace with clean striking.",
  },
  {
    name: "Rinku Singh",
    role: "Batter",
    image: "/players/4.webp",
    stats: { matches: 45, runs: 893, wickets: 0, strike: 142 },
    desc: "Finisher with nerves of steel. Known for his six-hitting prowess and ability to chase down improbable targets.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
};

const imageTransition = {
  initial: { opacity: 0, scale: 0.92, filter: "blur(4px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.96, filter: "blur(2px)" },
  transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
};

export default function PlayersSection() {
  const [active, setActive] = useState(0);
  const player = players[active];

  const handlePrevious = useCallback(() => {
    setActive((prev) => (prev - 1 + players.length) % players.length);
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % players.length);
  }, []);

  return (
    <section className="w-70% py-12 px-4 md:px-12 relative overflow-hidden">
      {/* Decorative arc - top left */}
      <svg
        className="absolute top-6 left-6 w-56 h-56 text-white/30 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M0,200 C40,160 60,100 100,80 C140,60 180,70 200,50"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="6 8"
          fill="none"
        />
        <path
          d="M0,180 C50,140 70,80 110,60 C150,40 190,50 200,30"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeDasharray="3 6"
          fill="none"
        />
      </svg>

      {/* Decorative arc - bottom right */}
      <svg
        className="absolute bottom-6 right-6 w-72 h-72 text-white/25 pointer-events-none"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M300,0 C260,40 240,100 200,120 C160,140 120,130 100,150"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="6 10"
          fill="none"
        />
        <path
          d="M300,20 C250,60 220,120 180,140 C140,160 100,150 80,170"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeDasharray="3 8"
          fill="none"
        />
        <circle cx="80" cy="170" r="3" fill="currentColor" />
        <circle cx="100" cy="150" r="2" fill="currentColor" />
      </svg>

      {/* MAIN CARD */}
      <div className="relative max-w-7xl mx-auto rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-white/50 shadow-2xl overflow-hidden p-6 md:p-10 transition-all duration-300">
        {/* Inner dashed border */}
        <div className="absolute inset-5 rounded-[2rem] border-2 border-dashed border-white/40 pointer-events-none" />

        {/* Subtle arc inside card - top right */}
        <svg
          className="absolute top-3 right-3 w-36 h-36 text-white/30 pointer-events-none"
          viewBox="0 0 150 150"
          fill="none"
        >
          <path
            d="M150,0 C120,20 100,60 80,80 C60,100 30,110 0,130"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 6"
            fill="none"
          />
        </svg>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none" />

        {/* Soft glow behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffb85b]/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* LEFT SECTION */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-wider text-[#e07a00] uppercase border-l-4 border-[#e07a00] pl-3 font-semibold">
                Featured Player
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#ffb85b]/60 to-transparent" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-5"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {player.name}
                </h2>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 text-xs font-semibold bg-[#ffb85b]/30 text-[#cc7700] rounded-full border border-[#ffb85b]/60 backdrop-blur-sm">
                    {player.role}
                  </span>
                </div>

                {/* stats grid with dotted top border */}
                <div className="grid grid-cols-4 gap-5 pt-4 border-t border-dashed border-white/50">
                  {Object.entries(player.stats).map(([key, val]) => (
                    <div key={key} className="text-center md:text-left">
                      <p className="text-2xl md:text-3xl font-bold text-gray-900">
                        {val}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-gray-600 mt-1 font-medium">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-800 text-sm leading-relaxed border-l-2 border-[#ffb85b] pl-4">
                  {player.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER: HERO IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* Decorative dashed ring behind image */}
            <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-dashed border-white/40" />
            <div className="absolute w-[320px] h-[320px] rounded-full bg-[#ffb85b]/20 blur-2xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={player.image}
                variants={imageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] z-10"
              >
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm hover:bg-[#ffb85b] hover:text-white transition-all duration-300 flex items-center justify-center z-20"
              aria-label="Previous"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm hover:bg-[#ffb85b] hover:text-white transition-all duration-300 flex items-center justify-center z-20"
              aria-label="Next"
            >
              →
            </button>
          </div>

          {/* RIGHT: THUMBNAIL LIST */}
          <div className="space-y-3 relative">
            {/* small accent above list */}
            <div className="absolute -top-4 right-0 w-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            {players.map((p, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                  i === active
                    ? "bg-white/90 shadow-md border border-[#ffb85b]/70 backdrop-blur-sm"
                    : "bg-white/40 hover:bg-white/60 opacity-80 hover:opacity-100 border border-transparent"
                }`}
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 ring-2 ring-offset-2 ring-offset-white/60 ring-[#ffb85b]/50">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div className="text-left flex-1">
                  <p
                    className={`text-sm font-semibold ${
                      i === active ? "text-[#cc7700]" : "text-gray-800"
                    }`}
                  >
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-600">{p.role}</p>
                </div>

                {i === active && (
                  <motion.div
                    layoutId="activeDot"
                    className="w-2 h-2 rounded-full bg-[#cc7700]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom subtle decorative line */}
        <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
    </section>
  );
}