"use client";

import Image from "next/image";

/* ================= PLAYERS ================= */

const players = [
  {
    name: "Pritam Chakraborty",
    role: "Captain",
    image: "/players/pritamchakraborty.webp",
    tag: "Leading From Front",
  },
  {
    name: "Sudip Gharami",
    role: "All-rounder",
    image: "/players/sudipgharami.webp",
    tag: "Match Changer",
  },
  {
    name: "Yuvraj Keswani",
    role: "Batter",
    image: "/players/yuvrajkeswani.webp",
    tag: "Top Order Power",
  },
  {
    name: "Gourab Dutta",
    role: "Bowler",
    image: "/players/gourabdutta.webp",
    tag: "Death Overs Specialist",
  },
];

/* ================= TEAM METRICS ================= */

const teamStats = [
  {
    value: "16",
    label: "Squad Players",
  },
  {
    value: "6",
    label: "All-Rounders",
  },
  {
    value: "4",
    label: "Power Batters",
  },
  {
    value: "5",
    label: "Strike Bowlers",
  },
];

const highlights = [
  {
    title: "Strong Core",
    desc: "Balanced squad with experienced all-rounders and batting depth.",
  },
  {
    title: "Young Energy",
    desc: "Emerging talents bringing fearless intent and athletic fielding.",
  },
  {
    title: "Leadership",
    desc: "Calm captaincy with strong communication and composure.",
  },
];

/* ================= METRIC CARD ================= */

function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[1.4rem] border border-secondary/10 bg-white/[0.32] p-4 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
      style={{
        boxShadow:
          "0 10px 25px rgba(96,25,29,0.05), inset 0 1px 0 rgba(255,255,255,0.25)",
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/[0.03]" />

      <div className="relative z-10">
        <h3 className="text-3xl font-black tracking-tight text-secondary">
          {value}
        </h3>

        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-secondary-light">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ================= PLAYER CARD ================= */

function PlayerCard({
  player,
}: {
  player: (typeof players)[0];
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-[1.8rem] border border-secondary/10 bg-white/[0.28] p-4 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
      style={{
        boxShadow:
          "0 12px 30px rgba(96,25,29,0.06), inset 0 1px 0 rgba(255,255,255,0.20)",
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/[0.03]" />

      {/* GLOW */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -top-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* IMAGE */}
      <div className="relative z-10 h-52 w-full">
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="object-contain drop-shadow-[0_20px_50px_rgba(96,25,29,0.25)] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-3">

        <div className="flex items-start justify-between gap-3">

          <h3 className="text-lg font-black leading-tight text-secondary">
            {player.name}
          </h3>

          <span
            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary"
            style={{
              boxShadow: "0 8px 18px rgba(245,176,66,0.10)",
            }}
          >
            {player.role}
          </span>

        </div>

        <p className="mt-2 text-sm leading-6 text-secondary-light">
          {player.tag}
        </p>

      </div>
    </div>
  );
}

/* ================= MAIN ================= */

export default function TeamShowcase() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">

        {/* HEADER */}
        <div className="max-w-3xl">

          <span
            className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary backdrop-blur-xl"
            style={{
              boxShadow: "0 10px 25px rgba(245,176,66,0.12)",
            }}
          >
            Team Overview
          </span>

          <h2 className="mt-4 text-4xl font-black leading-none tracking-tight text-secondary md:text-6xl">
            Built For
            <span className="mt-1 block text-primary">
              Big Moments
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary-light md:text-[15px]">
            A balanced squad packed with fearless batters,
            impactful bowlers, and versatile all-rounders.
          </p>

        </div>

        {/* METRICS */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {teamStats.map((item) => (
            <MetricCard
              key={item.label}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>

        {/* MAIN SPOTLIGHT */}
        <div
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-secondary/10 bg-white/[0.26] p-5 backdrop-blur-2xl md:p-8"
          style={{
            boxShadow:
              "0 15px 45px rgba(96,25,29,0.08), inset 0 1px 0 rgba(255,255,255,0.22)",
          }}
        >

          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/[0.03]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
                Captain Spotlight
              </span>

              <h3 className="mt-4 text-3xl font-black leading-tight text-secondary md:text-5xl">
                {players[0].name}
              </h3>

              <p className="mt-2 text-base font-semibold text-primary">
                {players[0].role}
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-secondary-light md:text-[15px]">
                Calm under pressure and capable of changing momentum
                with leadership and performance.
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-6 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-secondary/10 bg-white/[0.35] px-4 py-3 backdrop-blur-xl"
                    style={{
                      boxShadow:
                        "0 8px 20px rgba(96,25,29,0.05)",
                    }}
                  >

                    <p className="text-sm font-bold text-secondary">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-6 text-secondary-light">
                      {item.desc}
                    </p>

                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="absolute h-72 w-72 rounded-full bg-primary/20 blur-[90px]" />

              <div className="relative h-[360px] w-full max-w-sm">

                <div
                  className="absolute inset-10 rounded-full bg-white/20 blur-3xl"
                  style={{
                    boxShadow: "0 35px 90px rgba(245,176,66,0.16)",
                  }}
                />

                <Image
                  src={players[0].image}
                  alt={players[0].name}
                  fill
                  priority
                  className="relative z-10 object-contain drop-shadow-[0_35px_90px_rgba(96,25,29,0.30)]"
                />

              </div>

            </div>

          </div>

        </div>

        {/* PLAYERS */}
        <div className="mt-10">

          <div className="mb-6 flex items-center justify-between">

            <h3 className="text-2xl font-black text-secondary">
              Key Players
            </h3>

            <p className="text-sm font-medium text-secondary-light">
              Squad Strength
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {players.slice(1).map((player) => (
              <PlayerCard
                key={player.name}
                player={player}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}