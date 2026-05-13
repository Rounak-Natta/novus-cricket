"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { memo } from "react";

/* ================= TYPES ================= */

type Video = {
  title: string;
  image: string;
  category?: string;
};

/* ================= DATA ================= */

const VIDEOS: Video[] = [
  {
    title: "Match Preview vs RCB",
    image: "/images/1.webp",
    category: "Matchday",
  },
  {
    title: "Kings Clash At Home",
    image: "/images/2.png",
    category: "Highlights",
  },
  {
    title: "The Making Of Rising Star",
    image: "/images/3.png",
    category: "Behind The Scenes",
  },
  {
    title: "Season Documentary",
    image: "/images/4.png",
    category: "Documentary",
  },
  {
    title: "Post Match Analysis",
    image: "/images/5.png",
    category: "Insights",
  },
];

/* ================= MAIN ================= */

export default function NewsSection() {
  return (
    <section className="relative overflow-hidden py-8 md:py-14">

      {/* SOFT GLOW */}
      <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-5 md:mb-8 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <span
              className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary"
              style={{
                boxShadow: "0 8px 24px rgba(245,176,66,0.10)",
              }}
            >
              Latest Updates
            </span>

            <h2 className="mt-4 text-[2rem] font-black leading-[0.95] tracking-tight text-secondary md:text-[4rem]">
              N.R.P Media &
              <span className="mt-1 block text-primary">
                Match Stories
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-secondary-light md:text-[15px]">
              Exclusive match previews, documentaries,
              behind-the-scenes moments, and squad stories.
            </p>
          </div>

          {/* DESKTOP BUTTON */}
          <button
            className="hidden items-center gap-2 rounded-full border border-secondary/10 px-5 py-2.5 text-sm font-medium text-secondary transition-all duration-300 hover:border-primary/25 hover:text-primary md:flex"
            style={{
              boxShadow:
                "0 10px 30px rgba(96,25,29,0.04)",
            }}
          >
            View All
          </button>

        </div>

        {/* MOBILE */}
        <div className="space-y-3 md:hidden">

          <NewsCard
            item={VIDEOS[0]}
            featured
            mobile
          />

          <div className="grid grid-cols-2 gap-3">
            {VIDEOS.slice(1, 5).map((video) => (
              <NewsCard
                key={video.title}
                item={video}
                mobile
              />
            ))}
          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden grid-cols-12 gap-4 md:grid">

          {/* FEATURED */}
          <div className="col-span-12 lg:col-span-7">
            <NewsCard
              item={VIDEOS[0]}
              featured
            />
          </div>

          {/* SIDE GRID */}
          <div className="col-span-12 grid grid-cols-2 gap-4 lg:col-span-5">
            {VIDEOS.slice(1, 5).map((video) => (
              <NewsCard
                key={video.title}
                item={video}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */

const NewsCard = memo(function NewsCard({
  item,
  featured = false,
  mobile = false,
}: {
  item: Video;
  featured?: boolean;
  mobile?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.5rem] border border-secondary/10 transition-all duration-300 ${
        featured
          ? mobile
            ? "h-[340px]"
            : "h-[420px]"
          : mobile
            ? "h-[180px]"
            : "h-[200px]"
      }`}
      style={{
        boxShadow:
          "0 10px 30px rgba(96,25,29,0.05)",
      }}
    >

      {/* IMAGE */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={featured}
        quality={82}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#22090c]/95 via-[#22090c]/30 to-transparent" />

      {/* CATEGORY */}
      <div className="absolute left-4 top-4 z-10">

        <span
          className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl"
          style={{
            boxShadow:
              "0 8px 24px rgba(0,0,0,0.18)",
          }}
        >
          {item.category}
        </span>

      </div>

      {/* PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div
          className={`flex items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl transition-transform duration-300 group-hover:scale-105 ${
            mobile
              ? "h-11 w-11"
              : "h-14 w-14"
          }`}
          style={{
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          <Play
            className={`ml-0.5 fill-white text-white ${
              mobile
                ? "h-4 w-4"
                : "h-5 w-5"
            }`}
          />
        </div>

      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-5">

        <h3
          className={`font-black leading-tight tracking-tight text-white ${
            featured
              ? mobile
                ? "max-w-sm text-xl"
                : "max-w-lg text-3xl"
              : mobile
                ? "text-sm"
                : "text-base"
          }`}
          style={{
            textShadow:
              "0 4px 20px rgba(0,0,0,0.35)",
          }}
        >
          {item.title}
        </h3>

        {featured && !mobile && (
          <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
            Experience the preparation, emotions,
            and intensity shaping the season.
          </p>
        )}

      </div>

      {/* HOVER BORDER */}
      <div className="absolute inset-0 rounded-[1.5rem] border border-transparent transition-all duration-300 group-hover:border-primary/20" />

    </article>
  );
});