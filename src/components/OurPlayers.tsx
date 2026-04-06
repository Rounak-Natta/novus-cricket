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
    desc: "Mystery spinner and explosive opener.",
  },
  {
    name: "Rachin Ravindra",
    role: "All-rounder",
    image: "/players/7.webp",
    stats: { matches: 18, runs: 420, wickets: 12, strike: 136 },
    desc: "Promising all-rounder with strong technique.",
  },
  {
    name: "Cameron Green",
    role: "All-rounder",
    image: "/players/8.webp",
    stats: { matches: 32, runs: 720, wickets: 18, strike: 150 },
    desc: "Tall pace-bowling all-rounder with power hitting.",
  },
  {
    name: "Rinku Singh",
    role: "Batter",
    image: "/players/4.webp",
    stats: { matches: 45, runs: 893, wickets: 0, strike: 142 },
    desc: "Finisher with nerves of steel.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.45 },
};

const imageTransition = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.5 },
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
    <section className="w-full py-24 px-4 md:px-12 bg-gradient-to-br from-[#ffb85b] via-[#ffa63d] to-[#ff8c00]">

      {/* CARD */}
      <div className="relative max-w-7xl mx-auto rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden p-6 md:p-10">

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none" />

        {/* glow */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-[#ffb85b]/30 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-[#ff8c00]/20 rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-5">
            <span className="text-xs font-mono tracking-wider text-[#ff8c00] uppercase border-l-4 border-[#ff8c00] pl-3">
              Featured Player
            </span>

            <AnimatePresence mode="wait">
              <motion.div key={active} {...fadeUp} className="space-y-5">

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  {player.name}
                </h2>

                <span className="px-4 py-1.5 text-xs font-semibold bg-[#ffb85b]/20 text-[#ff8c00] rounded-full border border-[#ffb85b]/40">
                  {player.role}
                </span>

                {/* stats */}
                <div className="grid grid-cols-4 gap-5 pt-4">
                  {Object.entries(player.stats).map(([key, val]) => (
                    <div key={key}>
                      <p className="text-2xl md:text-3xl font-bold text-gray-900">
                        {val}
                      </p>
                      <p className="text-xs uppercase text-gray-500 mt-1">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 text-sm border-l-2 border-[#ffb85b] pl-4">
                  {player.desc}
                </p>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER */}
          <div className="relative flex justify-center items-center">

            <div className="absolute w-[320px] h-[320px] rounded-full bg-[#ffb85b]/20 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div key={player.image} {...imageTransition}
                className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] z-10">

                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-gray-900 shadow-md hover:bg-[#ffb85b] hover:text-white transition"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-gray-900 shadow-md hover:bg-[#ffb85b] hover:text-white transition"
            >
              →
            </button>

          </div>

          {/* RIGHT */}
          <div className="space-y-3">
            {players.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 p-3 rounded-xl transition ${
                  i === active
                    ? "bg-white border border-[#ffb85b]/50 shadow"
                    : "hover:bg-white/50 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>

                <div className="text-left flex-1">
                  <p className={`text-sm font-semibold ${i === active ? "text-[#ff8c00]" : "text-gray-800"}`}>
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-500">{p.role}</p>
                </div>

                {i === active && (
                  <div className="w-2 h-2 rounded-full bg-[#ff8c00]" />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}