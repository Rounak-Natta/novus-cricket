"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= DATA ================= */

const players = [
  {
    name: "Aakash Singh",
    role: "All-rounder",
    image: "/players/aakashsingh.webp",
    desc: "Strong temperament and confidence.",
  },
  {
    name: "Ankur Paul",
    role: "Batter",
    image: "/players/ankurpaul.webp",
    desc: "Disciplined and consistent performer.",
  },
  {
    name: "Gourab Dutta",
    role: "Bowler",
    image: "/players/gourabdutta.webp",
    desc: "Calm and composed under pressure.",
  },
  {
    name: "Harsh Dev Gautam",
    role: "All-rounder",
    image: "/players/harshdevgautam.webp",
    desc: "Brings fresh energy to the squad.",
  },
  {
    name: "Lokesh",
    role: "All-rounder",
    image: "/players/lokesh.webp",
    desc: "Excellent game awareness.",
  },
  {
    name: "Mithilesh Das",
    role: "Bowler",
    image: "/players/mithileshdas.webp",
    desc: "Focused on team contribution.",
  },
  {
    name: "Pradipta Pramanik",
    role: "Batter",
    image: "/players/pradiptapramanik.webp",
    desc: "Fearless attacking mindset.",
  },
  {
    name: "Pritam Chakraborty",
    role: "Captain",
    image: "/players/pritamchakraborty.webp",
    desc: "Natural leadership qualities.",
  },
  {
    name: "Priyam Sarkar",
    role: "Batter",
    image: "/players/priyamsarkar.webp",
    desc: "Exciting young talent.",
  },
  {
    name: "Purab Jain",
    role: "All-rounder",
    image: "/players/purabjain.webp",
    desc: "Composed and disciplined.",
  },
  {
    name: "Ravi Kumar",
    role: "Bowler",
    image: "/players/ravikumar.webp",
    desc: "Reliable and committed.",
  },
  {
    name: "Rohit",
    role: "Batter",
    image: "/players/rohit.webp",
    desc: "Strong on-field presence.",
  },
  {
    name: "Sayan Sekhar Mondal",
    role: "Bowler",
    image: "/players/sayansekharmondal.webp",
    desc: "Sharp tactical awareness.",
  },
  {
    name: "Sudip Gharami",
    role: "All-rounder",
    image: "/players/sudipgharami.webp",
    desc: "Momentum-changing performer.",
  },
  {
    name: "Tanmoy Pramanik",
    role: "All-rounder",
    image: "/players/tanmoypramanik.webp",
    desc: "Balanced and athletic.",
  },
  {
    name: "Yuvraj Keswani",
    role: "Batter",
    image: "/players/yuvrajkeswani.webp",
    desc: "Excellent composure.",
  },
];

/* ================= COMPONENT ================= */

export default function PlayersSection() {
  const [active, setActive] = useState(0);

  const player = useMemo(() => players[active], [active]);

  const nextPlayer = useCallback(() => {
    setActive((prev) => (prev + 1) % players.length);
  }, []);

  const prevPlayer = useCallback(() => {
    setActive((prev) => (prev - 1 + players.length) % players.length);
  }, []);

  return (
    <section className="py-8 md:py-10">

      <div className="mx-auto max-w-7xl px-4">

        <div
          className="overflow-hidden rounded-[2rem] border border-secondary/10"
          style={{
            boxShadow:
              "0 10px 30px rgba(96,25,29,0.05)",
          }}
        >

          <div className="grid lg:grid-cols-[1fr_320px]">

            {/* LEFT */}
            <div className="relative p-6 md:p-8 lg:p-10">

              {/* TOP */}
              <div className="mb-8 flex items-center gap-4">

                <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                  Auction Squad
                </span>

                <div className="h-px flex-1 bg-gradient-to-r from-secondary-light/30 to-transparent" />
              </div>

              <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">

                {/* CONTENT */}
                <div className="max-w-xl">

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={player.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.22,
                      }}
                    >

                      <p className="mb-3 text-sm font-medium text-secondary-light">
                        Team 2026
                      </p>

                      <h2 className="text-5xl font-black leading-none tracking-tight text-secondary md:text-6xl">
                        {player.name}
                      </h2>

                      <div className="mt-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                        {player.role}
                      </div>

                      <p className="mt-6 max-w-md border-l-2 border-primary pl-4 text-[15px] leading-7 text-secondary-light">
                        {player.desc}
                      </p>

                      {/* CONTROLS */}
                      <div className="mt-8 flex items-center gap-3">

                        <button
                          onClick={prevPlayer}
                          aria-label="Previous Player"
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/10 text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
                        >
                          <ChevronLeft
                            size={18}
                            strokeWidth={2.4}
                          />
                        </button>

                        <button
                          onClick={nextPlayer}
                          aria-label="Next Player"
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/10 text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
                        >
                          <ChevronRight
                            size={18}
                            strokeWidth={2.4}
                          />
                        </button>

                      </div>
                    </motion.div>

                  </AnimatePresence>
                </div>

                {/* IMAGE */}
                <div className="relative flex items-center justify-center">

                  {/* GLOW */}
                  <div className="absolute h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={player.image}
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.22,
                      }}
                      className="relative z-10 h-[300px] w-[240px] md:h-[360px] md:w-[280px]"
                    >

                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        priority={active === 0}
                        loading={active === 0 ? "eager" : "lazy"}
                        fetchPriority={active === 0 ? "high" : "auto"}
                        quality={85}
                        sizes="(max-width: 768px) 240px, (max-width: 1200px) 280px, 320px"
                        className="object-contain drop-shadow-[0_18px_40px_rgba(96,25,29,0.18)]"
                      />

                    </motion.div>

                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="border-l border-secondary/10 p-4">

              <div className="no-scrollbar max-h-[520px] space-y-2 overflow-y-auto pr-1">

                {players.map((p, i) => {
                  const isActive = active === i;

                  return (
                    <button
                      key={p.name}
                      onClick={() => setActive(i)}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-300 ${
                        isActive
                          ? "border-primary/25 bg-primary/5"
                          : "border-transparent hover:border-secondary/10"
                      }`}
                    >

                      {/* IMAGE */}
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">

                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="56px"
                          className="object-cover"
                        />

                      </div>

                      {/* TEXT */}
                      <div className="min-w-0 flex-1">

                        <h3
                          className={`truncate text-[15px] font-semibold transition-colors ${
                            isActive
                              ? "text-primary"
                              : "text-secondary"
                          }`}
                        >
                          {p.name}
                        </h3>

                        <p className="mt-0.5 text-xs text-secondary-light">
                          {p.role}
                        </p>

                      </div>

                      {/* DOT */}
                      <div
                        className={`h-2.5 w-2.5 rounded-full transition-all ${
                          isActive
                            ? "bg-primary"
                            : "bg-secondary/20"
                        }`}
                      />
                    </button>
                  );
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}