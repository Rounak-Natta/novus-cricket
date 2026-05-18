"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const images = [
  "/images/abt2.avif",
  "/images/abt3.avif",
  "/images/abt4.avif",
  "/images/abt5.avif",
  "/images/abt6.avif",
  "/images/abt7.avif",
  "/images/abt8.avif",
];

export default function SocialGallery() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-[var(--brand)]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[var(--brand)]
              "
            >
              Social Gallery
            </span>

            <span className="h-[1px] w-10 bg-[var(--brand)]" />
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-[var(--secondary)]
              sm:text-5xl
            "
          >
            Every Match Has
            <span className="block text-[var(--brand)]">
              A Story To Tell
            </span>
          </h2>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-[var(--secondary)]/70
              sm:text-base
            "
          >
            Moments, emotions, celebrations and the culture that unites every
            supporter beyond the game.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] xl:gap-6">
          {/* ================= LEFT FEATURED ================= */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border border-white/10
              bg-white/[0.03]
              shadow-[0_15px_45px_rgba(0,0,0,0.12)]
            "
          >
            <div className="relative h-full min-h-[520px]">
              <Image
                src={images[0]}
                alt="featured"
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                "
              />

              {/* content */}
              <div className="absolute bottom-0 left-0 z-10 p-6 sm:p-8">
                <div
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border border-white/15
                    bg-black/25
                    px-3
                    py-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-white
                    backdrop-blur-xl
                  "
                >
                  Featured Story
                </div>

                <h3
                  className="
                    mt-4
                    max-w-md
                    text-2xl
                    font-black
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  The energy and emotion behind every unforgettable game
                </h3>

                <button
                  className="
                    group/button
                    mt-6
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[var(--brand)]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                  "
                >
                  Explore Gallery

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:-translate-y-1
                      group-hover/button:translate-x-1
                    "
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT GRID ================= */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:gap-6">
            {images.slice(1).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.04,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border border-white/10
                  bg-white/[0.03]
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                "
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={img}
                    alt={`social-${i}`}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* hover button */}
                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-black/35
                      text-white
                      opacity-0
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-[var(--brand)]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(245,176,66,0.22)]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:bg-[var(--brand-strong)]
            "
          >
            Follow Us

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}