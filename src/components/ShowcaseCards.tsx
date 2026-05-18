"use client";

import Image from "next/image";
import { memo } from "react";

/* ================= DATA ================= */

const showcaseCards = [
  {
    title: "OFFICIAL MATCH KITS",
    subtitle: "Novus Royal Purulia",
    image: "/merch/img1.png",
  },
  {
    title: "MATCHDAY EXPERIENCE",
    subtitle: "Royal Cricket Culture",
    image: "/merch/img2.png",
  },
  {
    title: "TRAINING COLLECTION",
    subtitle: "Performance Wear",
    image: "/merch/img3.png",
  },
];

/* ================= COMPONENT ================= */

export default function NovusShowcase() {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        
        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-7
          "
        >
          {showcaseCards.map((card, index) => (
            <ShowcaseCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

interface ShowcaseCardProps {
  title: string;
  subtitle: string;
  image: string;
  priority?: boolean;
}

const ShowcaseCard = memo(function ShowcaseCard({
  title,
  subtitle,
  image,
  priority = false,
}: ShowcaseCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-white/10
        shadow-[0_10px_35px_rgba(0,0,0,0.18)]
        transition-all
        duration-500
        will-change-transform
        hover:-translate-y-1.5
        hover:shadow-[0_18px_55px_rgba(0,0,0,0.28)]
      "
    >
      {/* IMAGE AREA */}

      <div className="relative aspect-[0.72] w-full overflow-hidden">
        
        {/* IMAGE */}

        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          quality={85}
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-[1800ms]
            ease-out
            group-hover:scale-[1.04]
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/20
            to-black/5
          "
        />

        {/* SOFT BORDER LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[26px]
            ring-1
            ring-inset
            ring-white/10
          "
        />

        {/* CONTENT */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            p-5
            sm:p-6
            lg:p-7
          "
        >
          {/* SUBTITLE */}

          <p
            className="
              mb-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.18em]
              text-[#f5b042]
              sm:text-xs
            "
          >
            {subtitle}
          </p>

          {/* TITLE */}

          <h3
            className="
              max-w-[95%]
              text-[1.9rem]
              font-black
              uppercase
              leading-[0.92]
              tracking-tight
              text-white
              transition-transform
              duration-500
              group-hover:translate-y-[-2px]
              sm:text-[2.3rem]
              lg:text-[2.7rem]
            "
          >
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
});