"use client";

import Image from "next/image";

/* ================= SPONSORS ================= */

const sponsors: string[] = [
  "/sponsors/1.webp",
  "/sponsors/2.webp",
  "/sponsors/3.webp",
  "/sponsors/4.webp",
  "/sponsors/5.webp",
  "/sponsors/6.webp",
  "/sponsors/7.webp",
];

const duplicatedSponsors = [...sponsors, ...sponsors];

/* ================= COMPONENT ================= */

export default function Sponsors() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-12 text-center">

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

        {/* MARQUEE */}
        <div className="relative overflow-hidden py-4">

          {/* SIDE FADE */}
          <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />

          <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

          {/* TRACK */}
          <div className="flex overflow-hidden">

            <div className="animate-marquee flex min-w-max items-center gap-6 px-3">

              {duplicatedSponsors.map((logo, i) => (
                <div
                  key={i}
                  className="group relative flex h-[110px] w-[180px] shrink-0 items-center justify-center rounded-[1.75rem] border border-secondary/10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20"
                  style={{
                    boxShadow:
                      "0 10px 30px rgba(96,25,29,0.05)",
                  }}
                >

                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
                  </div>

                  {/* LOGO */}
                  <div className="relative h-14 w-[120px]">

                    <Image
                      src={logo}
                      alt={`Sponsor ${i + 1}`}
                      fill
                      priority={i < 2}
                      loading={i < 2 ? "eager" : "lazy"}
                      quality={90}
                      sizes="180px"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}