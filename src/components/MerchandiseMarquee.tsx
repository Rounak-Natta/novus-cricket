"use client";

import Image from "next/image";

/* ================= DATA ================= */

const marqueeItems = Array.from({ length: 3 });

/* ================= COMPONENT ================= */

export default function MerchandiseMarquee() {
  return (
    <section className="mt-6 mb-6 flex justify-center">
      <div
        className="
          relative
          w-[95%]
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#60191d]
          py-3
          md:py-4
        "
      >
        {/* ================= LEFT FADE ================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-16
            bg-gradient-to-r
            from-[#60191d]
            to-transparent
            md:w-24
          "
        />

        {/* ================= RIGHT FADE ================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-16
            bg-gradient-to-l
            from-[#60191d]
            to-transparent
            md:w-24
          "
        />

        {/* ================= MARQUEE ================= */}

        <div className="flex overflow-hidden">
          <div
            className="
              flex
              min-w-max
              shrink-0
              items-center
              animate-marquee
              will-change-transform
              [transform:translate3d(0,0,0)]
              hover:[animation-play-state:paused]
              motion-reduce:animate-none
            "
          >
            {[...marqueeItems, ...marqueeItems].map((_, i) => (
              <div
                key={i}
                className="
                  mx-5
                  flex
                  shrink-0
                  items-center
                  gap-5
                  md:mx-8
                  md:gap-7
                "
              >
                {/* ================= TEXT ================= */}

                <h2
                  className="
                    whitespace-nowrap
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white
                    md:text-lg
                  "
                >
                  NRP OFFICIAL MERCHANDISE 2026 OUT NOW
                </h2>

                {/* ================= LOGO ================= */}

                <div className="relative h-10 w-10 shrink-0 md:h-12 md:w-12">
                  {/* GLOW */}

                  <div
                    className="
                      absolute
                      inset-2
                      rounded-full
                      bg-[#d48f2b]/35
                      blur-md
                    "
                  />

                  {/* IMAGE */}

                  <Image
                    src="/logo/logo.png"
                    alt="NRP Logo"
                    fill
                    quality={75}
                    sizes="48px"
                    loading="eager"
                    draggable={false}
                    className="
                      relative
                      z-10
                      object-contain
                      select-none
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}