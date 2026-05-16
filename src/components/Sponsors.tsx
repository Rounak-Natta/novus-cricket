"use client";

import Image from "next/image";

/* =========================================
   TYPES
========================================= */

type SponsorItem = {
  logo: string;
  width?: string;
  height?: string;
};

type SponsorGroup = {
  title: string;
  items: SponsorItem[];
};

/* =========================================
   SPONSOR DATA
========================================= */

const sponsorGroups: SponsorGroup[] = [
  {
    title: "Title Partner",
    items: [
      {
        logo: "/sponsors/1.webp",
        width: "w-[240px]",
        height: "h-[125px]",
      },
    ],
  },

  {
    title: "Principal Partners",
    items: [
      {
        logo: "/sponsors/2.webp",
      },
      {
        logo: "/sponsors/3.webp",
      },
    ],
  },

  {
    title: "Associate Sponsors",
    items: [
      {
        logo: "/sponsors/4.webp",
      },
      {
        logo: "/sponsors/5.webp",
      },
      {
        logo: "/sponsors/6.webp",
      },
      {
        logo: "/sponsors/7.webp",
      },
    ],
  },

  {
    title: "Official Partners",
    items: [
      { logo: "/sponsors/1.webp" },
      { logo: "/sponsors/2.webp" },
      { logo: "/sponsors/3.webp" },
      { logo: "/sponsors/4.webp" },
      { logo: "/sponsors/5.webp" },
      { logo: "/sponsors/6.webp" },
      { logo: "/sponsors/7.webp" },
      { logo: "/sponsors/1.webp" },
      { logo: "/sponsors/2.webp" },
      { logo: "/sponsors/3.webp" },
      { logo: "/sponsors/4.webp" },
      { logo: "/sponsors/5.webp" },
    ],
  },
];

/* =========================================
   COMPONENT
========================================= */

export default function Sponsors() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">

      {/* SECTION BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

      {/* BIG TOP GLOW */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      {/* SIDE GLOWS */}
      <div className="absolute left-0 top-1/3 h-[260px] w-[260px] rounded-full bg-primary/[0.05] blur-[120px]" />

      <div className="absolute right-0 top-2/3 h-[260px] w-[260px] rounded-full bg-primary/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            Official Partners
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-secondary md:text-5xl">
            Proud Sponsors
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-secondary-light md:text-[15px]">
            Trusted brands powering the journey, growth, and future of the club.
          </p>

        </div>

        {/* SPONSOR GROUPS */}
        <div className="space-y-16">

          {sponsorGroups.map((group, index) => (
            <div
              key={index}
              className="relative"
            >

              {/* DIVIDER */}
              {index !== 0 && (
                <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
              )}

              {/* TITLE */}
              <div className="mb-8 text-center">

                <h3 className="text-xs font-extrabold uppercase tracking-[0.32em] text-primary md:text-sm">
                  {group.title}
                </h3>

              </div>

              {/* GRID */}
              <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">

                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className={`
                      group
                      relative
                      flex
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-white/20
                      bg-white/75
                      backdrop-blur-xl
                      transition-all
                      duration-700
                      hover:-translate-y-2
                      hover:border-primary/20

                      ${item.width || "w-[155px] md:w-[185px]"}
                      ${item.height || "h-[95px] md:h-[115px]"}
                    `}
                    style={{
                      boxShadow:
                        `
                        0 10px 30px rgba(15, 23, 42, 0.06),
                        0 1px 2px rgba(15, 23, 42, 0.04),
                        inset 0 1px 0 rgba(255,255,255,0.45)
                        `,
                    }}
                  >

                    {/* PREMIUM BACK DEPTH GLOW */}
                    <div className="absolute inset-0 -z-10 opacity-80">

                      <div className="absolute left-1/2 top-1/2 h-[140%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-3xl transition-all duration-700 group-hover:bg-primary/[0.14]" />

                    </div>

                    {/* SOFT RADIAL LIGHT */}
                    <div className="absolute inset-0 opacity-60">

                      <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-white/40 blur-2xl" />

                    </div>

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">

                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.10] blur-3xl" />

                    </div>

                    {/* SHINE */}
                    <div className="absolute inset-0 overflow-hidden rounded-[2rem]">

                      <div className="absolute -left-[130%] top-0 h-full w-[55%] rotate-12 bg-white/40 blur-xl transition-all duration-1000 group-hover:left-[150%]" />

                    </div>

                    {/* INNER BORDER */}
                    <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/40" />

                    {/* LOGO */}
                    <div className="relative z-10 h-12 w-[110px] md:h-14 md:w-[130px]">

                      <Image
                        src={item.logo}
                        alt={`Sponsor ${i + 1}`}
                        fill
                        quality={100}
                        sizes="180px"
                        className="object-contain transition-all duration-700 group-hover:scale-105"
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}