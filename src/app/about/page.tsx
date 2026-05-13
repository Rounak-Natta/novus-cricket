"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

/* ================= DATA ================= */
const stats = [
  { value: "16+", label: "Squad Players", icon: "👥" },
  { value: "4", label: "Major Tournaments", icon: "🏆" },
  { value: "32+", label: "Match Victories", icon: "⚡" },
  { value: "100%", label: "Purulia Spirit", icon: "🔥" },
];

const values = [
  {
    title: "Fearless Cricket",
    desc: "Aggressive intent with disciplined execution in every phase of the game.",
    icon: "🎯",
  },
  {
    title: "Elite Development",
    desc: "Building professional cricketers through structure, intensity, and mentorship.",
    icon: "📈",
  },
  {
    title: "Team First",
    desc: "A culture built on trust, brotherhood, accountability, and passion.",
    icon: "🤝",
  },
];

/* ================= MAIN COMPONENT ================= */
export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ===== 1. HERO – Minimal Split Layout ===== */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Novus Royals • Purulia
              </div>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Built For{" "}
                <span className="block text-primary">Big Moments</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Novus Royals is a modern cricket movement from Purulia —
                combining fearless talent, elite preparation,
                and a winning mentality built for the next generation.
              </p>

              {/* Stats row – clean cards */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-center"
                  >
                    <div className="text-2xl">{stat.icon}</div>
                    <div className="mt-2 text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image – clean, no heavy effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/abtbnr.png"
                  alt="Novus Royals team"
                  width={720}
                  height={820}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 2. STORY – Clean two-column with quote ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
            {/* Image left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/images/1.png"
                  alt="Team in action"
                  width="600"
                  height="500"
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Journey
              </span>
              <h2 className="mt-3 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
                Cricket Beyond{" "}
                <span className="text-primary">Expectations</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Novus Royals was created to give Purulia&apos;s cricketing
                  talent a professional platform to grow, compete,
                  and perform fearlessly.
                </p>
                <p>
                  From training intensity to match mentality,
                  everything is designed around excellence,
                  discipline, and modern cricket culture.
                </p>
              </div>

              {/* Simple quote block */}
              <div className="mt-8 rounded-xl border-l-4 border-primary bg-gray-50 p-5">
                <p className="text-xl font-semibold text-gray-800">
                  “Pressure creates character. We prepare for pressure.”
                </p>
                <p className="mt-2 text-sm text-gray-500">— Team Motto</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 3. VALUES – Card grid with icons ===== */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Team Philosophy
            </span>
            <h2 className="mt-3 text-4xl font-black text-gray-900 sm:text-5xl">
              The Royals <span className="text-primary">Identity</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. FULL-WIDTH BANNER – Bold & minimal ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative h-64 overflow-hidden rounded-2xl shadow-md md:h-96">
            <Image
              src="/images/abtbnr.png"
              alt="Team spirit"
              fill
              loading="lazy"
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
              <h3 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
                One Team. <span className="text-primary">One Mentality.</span>
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/90 sm:text-base">
                Discipline. Intensity. Brotherhood. Everything we do is built
                around winning the right way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}