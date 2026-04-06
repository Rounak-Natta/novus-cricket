"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { title: "Match Preview vs RCB | IPL 2026", image: "/images/1.png" },
  { title: "Kings Clash at Home", image: "/images/2.png" },
  { title: "The Making of Rising Star", image: "/images/3.png" },
  { title: "Season 2 Documentary", image: "/images/4.png" },
  { title: "Post Match Analysis", image: "/images/5.png" },
  { title: "Chapter One: Journey Begins", image: "/images/6.png" },
  { title: "Chapter One: Journey Begins", image: "/images/1.png" },
];

export default function PremiumNewsGrid() {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
        N R P Updates & News
      </h2>

      {/* MOBILE */}
      <div className="flex md:hidden gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2">
        {videos.map((item, i) => (
          <div key={i} className="min-w-[85%] snap-center">
            <Card item={item} large />
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.slice(0, 2).map((item, i) => (
            <Card key={i} item={item} large />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-3">
          {videos.slice(2).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item, large = false }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.035 }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
        large ? "h-[220px] md:h-[300px]" : "h-[170px] md:h-[190px]"
      }`}
    >
      {/* IMAGE */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* 🔥 PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition duration-300">
          <Play className="text-white w-5 h-5 md:w-6 md:h-6 fill-white" />
        </div>
      </div>

      {/* TITLE */}
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="text-white text-sm md:text-base font-semibold leading-snug">
          {item.title}
        </h3>
      </div>

      {/* BORDER */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition" />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute w-24 h-24 bg-white/10 blur-2xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </motion.div>
  );
}