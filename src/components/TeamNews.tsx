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
  const handleViewAll = () => {
    // Optional: navigate to videos page or open modal
    console.log("View all videos clicked");
  };

  return (
    <section className="relative overflow-hidden py-8 md:py-14">
      {/* SOFT GLOW */}
      <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-5 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary shadow-[0_8px_24px_rgba(245,176,66,0.10)]">
              Latest Updates
            </span>

            <h2 className="mt-4 text-[2rem] font-black leading-[0.95] tracking-tight text-secondary md:text-[4rem]">
              N.R.P Media &
              <span className="mt-1 block text-primary">Match Stories</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-secondary-light md:text-[15px]">
              Exclusive match previews, documentaries, behind-the-scenes
              moments, and squad stories.
            </p>
          </div>

          {/* DESKTOP BUTTON */}
          <button
            onClick={handleViewAll}
            className="hidden items-center gap-2 rounded-full border border-secondary/10 px-5 py-2.5 text-sm font-medium text-secondary transition-all duration-300 hover:border-primary/25 hover:text-primary md:flex"
          >
            View All
          </button>
        </div>

        {/* UNIFIED RESPONSIVE GRID - NO DUPLICATION */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* FEATURED CARD */}
          <div className="col-span-1 md:col-span-12 lg:col-span-7">
            <NewsCard item={VIDEOS[0]} featured />
          </div>

          {/* SIDE CARDS GRID */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {VIDEOS.slice(1, 5).map((video) => (
                <NewsCard key={video.title} item={video} />
              ))}
            </div>
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
}: {
  item: Video;
  featured?: boolean;
}) {
  // Responsive sizes: mobile first, then md breakpoint
  const cardHeight = featured
    ? "h-[340px] md:h-[420px]"
    : "h-[180px] md:h-[200px]";

  const playButtonSize = featured
    ? "h-11 w-11 md:h-14 md:w-14"
    : "h-9 w-9 md:h-10 md:w-10";

  const titleSize = featured
    ? "text-xl md:text-3xl"
    : "text-sm md:text-base";

  const iconSize = featured ? "h-4 w-4 md:h-5 md:w-5" : "h-3 w-3 md:h-4 md:w-4";

  // Optimized image sizes for responsive loading
  const imageSizes = featured
    ? "(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
    : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.5rem] border border-secondary/10 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(96,25,29,0.08)] ${cardHeight}`}
    >
      {/* IMAGE with optimized loading */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={featured}
        quality={85}
        sizes={imageSizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* DYNAMIC GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#22090c]/90 via-[#22090c]/20 to-transparent transition-opacity duration-300 group-hover:via-[#22090c]/30" />

      {/* CATEGORY BADGE */}
      <div className="absolute left-4 top-4 z-10">
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          {item.category}
        </span>
      </div>

      {/* PLAY BUTTON with smooth scaling */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:border-white/30 group-hover:bg-white/15 ${playButtonSize}`}
        >
          <Play
            className={`ml-0.5 fill-white text-white ${iconSize}`}
            aria-label="Play video"
          />
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-5">
        <h3
          className={`font-black leading-tight tracking-tight text-white ${titleSize}`}
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
        >
          {item.title}
        </h3>

        {featured && (
          <p className="mt-3 hidden max-w-md text-sm leading-6 text-white/75 md:block">
            Experience the preparation, emotions, and intensity shaping the
            season.
          </p>
        )}
      </div>

      {/* HOVER BORDER GLOW */}
      <div className="absolute inset-0 rounded-[1.5rem] border-2 border-transparent transition-all duration-300 group-hover:border-primary/30" />
    </article>
  );
});