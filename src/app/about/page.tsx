"use client";

import PlayerSlider from "@/components/PlayerSlider";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const sponsors = [1, 2, 3, 4, 5, 6, 7];

const Page = () => {
  return (
    <>
      <main className="w-full bg-background text-foreground">

        {/* ================= HERO ================= */}
        <section className="relative w-full h-[75vh] min-h-[420px] overflow-hidden">
          <Image
            src="/images/abtbnr.png"
            alt="About Banner"
            fill
            priority
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold max-w-4xl"
            >
              When the stakes rise, so do the warriors.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-text-dim max-w-2xl"
            >
              From the heart of Purulia comes a force that plays not just to compete, but to conquer.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-lg font-semibold text-primary"
            >
              Novus Royals Purulia — where talent finds its throne.
            </motion.p>
          </div>
        </section>

        {/* ================= STORY ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/1.png"
              alt="Purulia Story"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--secondary)]">
              From Soil to the Spotlight
            </h2>

            <p className="text-text-dim leading-relaxed">
              The Bengal Pro T20 League is opening new doors for regional cricket,
              yet regions like Purulia rich in culture and athletic spirit remain underrepresented.
            </p>

            <p className="mt-4 text-text-dim leading-relaxed">
              Novus Royals Purulia enters as more than a franchise representing identity,
              opportunity, and the rise of overlooked talent.
            </p>

            <div className="mt-6 border-l-4 border-primary pl-4">
              <p className="italic text-text-dim">
                A journey where effort defines identity not privilege.
              </p>
            </div>
          </div>
        </section>

        {/* ================= VISION ================= */}
        <section className="bg-card py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--secondary)]">
              Vision & Purpose
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              <div className="p-6 rounded-xl bg-muted border border-border">
                <h3 className="text-xl font-semibold mb-4 text-[var(--secondary)]">
                  Vision
                </h3>
                <p className="text-text-dim leading-relaxed">
                  Transform grassroots sports into structured pathways for excellence,
                  identity, and sustainable growth.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-muted border border-border">
                <h3 className="text-xl font-semibold mb-4 text-[var(--secondary)]">
                  Mission
                </h3>
                <ul className="space-y-2 text-text-dim">
                  <li>• Identify and nurture talent</li>
                  <li>• Build infrastructure</li>
                  <li>• Create real opportunities</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ================= IDENTITY ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--secondary)]">
            Identity & Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rooted Pride",
                desc: "Deep connection to Purulia culture and identity.",
              },
              {
                title: "Underdog Spirit",
                desc: "Resilience and determination to rise beyond limits.",
              },
              {
                title: "Future Builders",
                desc: "Creating long term pathways for talent.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-3 text-[var(--secondary)]">
                  {item.title}
                </h3>
                <p className="text-text-dim text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-text-dim leading-relaxed">
              What begins as a team evolves into something larger —
              a platform for opportunity, a voice for representation,
              and a pathway for the future.
            </p>
          </div>

        </section>

      </main>

      {/* ================= PLAYERS ================= */}
      <section className="mt-10">
        <PlayerSlider />
      </section>

      {/* ================= SPONSORS ================= */}
      <section className="w-full py-24 overflow-hidden">

        <div className="text-center mb-14 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)]">
            Our Sponsors
          </h2>
          <p className="mt-4 text-text-dim">
            Partners who power the rise.
          </p>
        </div>

        {/* TITLE */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <p className="text-center text-sm text-text-dim mb-4">
            TITLE PARTNER
          </p>

          <div className="p-8 rounded-2xl bg-card border border-border flex justify-center">
            <Image
              src="/sponsors/1.jpeg"
              alt="Title Sponsor"
              width={220}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* GOLD */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <p className="text-center text-sm text-text-dim mb-6">
            GOLD PARTNERS
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[2, 3, 4].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-card border border-border flex justify-center"
              >
                <Image
                  src={`/sponsors/${num}.jpeg`}
                  alt={`Sponsor ${num}`}
                  width={120}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max animate-marquee">
            {[...sponsors, ...sponsors].map((num, i) => (
              <div
                key={i}
                className="min-w-[160px] h-[80px] flex items-center justify-center 
                           bg-card border border-border rounded-xl"
              >
                <Image
                  src={`/sponsors/${num}.jpeg`}
                  alt={`Sponsor ${num}`}
                  width={100}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default Page;