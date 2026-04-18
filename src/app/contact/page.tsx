"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <main className="w-full bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[60vh] min-h-[380px] overflow-hidden">
        <Image
          src="/images/abtbnr.png"
          alt="Contact Banner"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold max-w-3xl"
          >
            Let’s Build Something Bigger
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-text-dim max-w-xl"
          >
            Whether you're a partner, player, or supporter — the journey starts here.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[var(--secondary)]">
            Get in Touch
          </h2>

          <p className="text-text-dim leading-relaxed">
            Reach out for collaborations, partnerships, or inquiries.
          </p>

          <div className="mt-8 space-y-6">

            <div className="p-5 rounded-xl bg-card border border-border">
              <p className="text-sm text-text-dim">Email</p>
              <p className="font-semibold mt-1 text-[#f5d7b2]">
                contact@novusroyals.com
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border">
              <p className="text-sm text-text-dim">Phone</p>
              <p className="font-semibold mt-1 text-[#f5d7b2]">
                +91 98765 43210
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border">
              <p className="text-sm text-text-dim">Location</p>
              <p className="font-semibold mt-1 text-[#f5d7b2]">
                Purulia, West Bengal, India
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-6 rounded-2xl bg-card border border-border shadow-md">

          <h3 className="text-xl font-semibold mb-6 text-[#f5d7b2]">
            Send a Message
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-muted border border-border text-[#f5d7b2]
              placeholder:text-text-dim focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-muted border border-border text-[#f5d7b2]
              placeholder:text-text-dim focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-muted border border-border text-[#f5d7b2]
              placeholder:text-text-dim focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-black font-semibold 
                         hover:bg-[var(--brand-strong)] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6">

        <h2 className="text-3xl font-bold text-[var(--secondary)]">
          Be Part of the Rise
        </h2>

        <p className="mt-4 text-text-dim max-w-xl mx-auto">
          From the soil to the spotlight — this journey is just beginning.
        </p>

        <button className="mt-8 px-8 py-3 rounded-full bg-primary text-black font-semibold 
                           hover:bg-[var(--brand-strong)] transition">
          Join the Movement
        </button>

      </section>
<Footer/>
    </main>
  );
};

export default Page;