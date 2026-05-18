"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= DATA ================= */

const menPlayers = [
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

const womenPlayers = [
  {
    name: "Priya Sharma",
    role: "Captain / Batter",
    image: "/players/1.png",
    desc: "Elegant stroke‑player and inspirational leader.",
  },
  {
    name: "Anjali Verma",
    role: "Bowler",
    image: "/players/2.png",
    desc: "Accurate medium pace with sharp swing.",
  },
  {
    name: "Neha Patel",
    role: "All-rounder",
    image: "/players/3.png",
    desc: "Dynamic fielder and clean hitter.",
  },
  {
    name: "Ritu Singh",
    role: "Batter",
    image: "/players/4.png",
    desc: "Classical technique and calm temperament.",
  },
  {
    name: "Sneha Roy",
    role: "Wicketkeeper",
    image: "/players/5.png",
    desc: "Lightning reflexes and sharp presence.",
  },
  {
    name: "Kavya Reddy",
    role: "Bowler",
    image: "/players/6.png",
    desc: "Leg‑spin wizard with clever variations.",
  },
  {
    name: "Divya Kulkarni",
    role: "All-rounder",
    image: "/players/7.png",
    desc: "Powerful striker and useful off‑spin.",
  },
  {
    name: "Meera Nair",
    role: "Batter",
    image: "/players/8.png",
    desc: "Aggressive opener who dominates powerplays.",
  },
  {
    name: "Tanya Joshi",
    role: "Bowler",
    image: "/players/9.png",
    desc: "Death‑over specialist with yorkers.",
  },
  {
    name: "Swati Mishra",
    role: "All-rounder",
    image: "/players/10.png",
    desc: "Smart cricketer, bowls tight lines.",
  },
  {
    name: "Pooja Yadav",
    role: "Batter",
    image: "/players/11.png",
    desc: "Consistent run‑machine in middle order.",
  },
  {
    name: "Isha Desai",
    role: "Bowler",
    image: "/players/12.png",
    desc: "Left‑arm spinner with deceptive flight.",
  },
  {
    name: "Riya Ghosh",
    role: "All-rounder",
    image: "/players/13.png",
    desc: "Energetic and game‑changing cameos.",
  },
  {
    name: "Shreya Menon",
    role: "Wicketkeeper",
    image: "/players/14.png",
    desc: "Safe hands and smart DRS calls.",
  }
];

type TeamGender = "men" | "women";

/* ================= COMPONENT ================= */

export default function PlayersSection() {
  const [gender, setGender] = useState<TeamGender>("men");
  const [active, setActive] = useState(0);

  const currentPlayers = useMemo(
    () => (gender === "men" ? menPlayers : womenPlayers),
    [gender]
  );

  const handleGenderChange = useCallback((newGender: TeamGender) => {
    setGender(newGender);
    setActive(0);
  }, []);

  const player = useMemo(
    () => currentPlayers[active],
    [currentPlayers, active]
  );

  const nextPlayer = useCallback(() => {
    setActive((prev) => (prev + 1) % currentPlayers.length);
  }, [currentPlayers.length]);

  const prevPlayer = useCallback(() => {
    setActive((prev) => (prev - 1 + currentPlayers.length) % currentPlayers.length);
  }, [currentPlayers.length]);

  return (
    <section className="relative overflow-hidden py-8 md:py-10">
      {/* Background glows - unchanged premium style */}
      <div className="absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[90px]" />
      <div className="absolute left-0 bottom-20 h-[250px] w-[250px] rounded-full bg-white/30 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Main glassmorphic card */}
        <div
          className="relative overflow-hidden rounded-[2rem] border border-secondary/10 bg-white/[0.28] backdrop-blur-2xl transition-all duration-300"
          style={{
            boxShadow: "0 15px 45px rgba(96,25,29,0.08), inset 0 1px 0 rgba(255,255,255,0.22)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/[0.03]" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_320px]">
            {/* LEFT SIDE */}
            <div className="relative p-6 md:p-8 lg:p-10">
              {/* Top row with toggle */}
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                    Auction Squad
                  </span>
                  <div className="h-px w-12 bg-gradient-to-r from-secondary-light/30 to-transparent" />
                </div>

                {/* Premium gender toggle (spring animated) */}
                <div className="flex rounded-full bg-white/30 p-1 backdrop-blur-md">
                  <button
                    onClick={() => handleGenderChange("men")}
                    className={`relative px-5 py-1.5 text-sm font-semibold transition-colors duration-300 ${
                      gender === "men"
                        ? "text-secondary"
                        : "text-secondary-light/70 hover:text-secondary"
                    }`}
                  >
                    {gender === "men" && (
                      <motion.span
                        layoutId="activeGender"
                        className="absolute inset-0 rounded-full bg-white shadow-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    <span className="relative z-10">Men</span>
                  </button>
                  <button
                    onClick={() => handleGenderChange("women")}
                    className={`relative px-5 py-1.5 text-sm font-semibold transition-colors duration-300 ${
                      gender === "women"
                        ? "text-secondary"
                        : "text-secondary-light/70 hover:text-secondary"
                    }`}
                  >
                    {gender === "women" && (
                      <motion.span
                        layoutId="activeGender"
                        className="absolute inset-0 rounded-full bg-white shadow-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    <span className="relative z-10">Women</span>
                  </button>
                </div>
              </div>

              {/* Dynamic content with crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={gender}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
                    {/* Text content */}
                    <div className="max-w-xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={player.name}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.22 }}
                        >
                          <p className="mb-3 text-sm font-medium text-secondary-light">
                            Team 2026 • {gender === "men" ? "Men's" : "Women's"} Squad
                          </p>
                          <h2 className="text-5xl font-black leading-none tracking-tight text-secondary md:text-6xl">
                            {player.name}
                          </h2>
                          <div className="mt-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
                            {player.role}
                          </div>
                          <p className="mt-6 max-w-md border-l-2 border-primary pl-4 text-[15px] leading-7 text-secondary-light">
                            {player.desc}
                          </p>
                          <div className="mt-8 flex items-center gap-3">
                            <button
                              onClick={prevPlayer}
                              aria-label="Previous Player"
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/10 bg-white/20 text-secondary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                            >
                              <ChevronLeft size={18} strokeWidth={2.4} />
                            </button>
                            <button
                              onClick={nextPlayer}
                              aria-label="Next Player"
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/10 bg-white/20 text-secondary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                            >
                              <ChevronRight size={18} strokeWidth={2.4} />
                            </button>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Player image */}
                    <div className="relative flex items-center justify-center">
                      <div className="absolute h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                      <div className="absolute h-48 w-48 rounded-full bg-white/30 blur-2xl" />
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={player.image}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.22 }}
                          className="relative z-10 h-[300px] w-[240px] md:h-[360px] md:w-[280px]"
                        >
                          <Image
                            src={player.image}
                            alt={player.name}
                            fill
                            priority={active === 0 && gender === "men"}
                            loading={
                              active === 0 && gender === "men" ? "eager" : "lazy"
                            }
                            fetchPriority={
                              active === 0 && gender === "men" ? "high" : "auto"
                            }
                            quality={85}
                            sizes="(max-width: 768px) 240px, (max-width: 1200px) 280px, 320px"
                            className="object-contain drop-shadow-[0_20px_50px_rgba(96,25,29,0.25)]"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* SIDEBAR - player list with gender fade */}
            <div className="border-l border-secondary/10 bg-white/[0.15] backdrop-blur-sm">
              <div className="no-scrollbar max-h-[520px] space-y-2 overflow-y-auto p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={gender}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    {currentPlayers.map((p, i) => {
                      const isActive = active === i;
                      return (
                        <button
                          key={`${gender}-${p.name}`}
                          onClick={() => setActive(i)}
                          className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-300 ${
                            isActive
                              ? "border-primary/25 bg-primary/5 backdrop-blur-sm"
                              : "border-transparent bg-white/10 hover:border-secondary/10 hover:bg-white/20"
                          }`}
                        >
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white/20">
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
                          <div className="min-w-0 flex-1">
                            <h3
                              className={`truncate text-[15px] font-semibold transition-colors ${
                                isActive ? "text-primary" : "text-secondary"
                              }`}
                            >
                              {p.name}
                            </h3>
                            <p className="mt-0.5 text-xs text-secondary-light">
                              {p.role}
                            </p>
                          </div>
                          <div
                            className={`h-2.5 w-2.5 rounded-full transition-all ${
                              isActive
                                ? "scale-100 bg-primary"
                                : "scale-75 bg-secondary/20"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}