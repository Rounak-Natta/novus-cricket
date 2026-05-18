"use client";

import Image from "next/image";
import { memo, useCallback, useState } from "react";

/* ================= PRODUCTS ================= */

const products = [
  {
    name: "Travel Jersey",
    price: "₹1,499",
    images: ["/merch/jsr1.png", "/merch/jsr2.png"],
    badge: "Official Kit",
  },
  {
    name: "Practice Kit",
    price: "₹1,199",
    images: ["/merch/jsr3.png"],
    badge: "Training Wear",
  },
  {
    name: "Away Polo",
    price: "₹1,299",
    images: ["/merch/ptc1.png", "/merch/ptc2.png"],
    badge: "Premium",
  },
  {
    name: "Travel Polo",
    price: "₹1,399",
    images: ["/merch/tvl1.jpeg", "/merch/tvl2.png"],
    badge: "New Arrival",
  },
  {
    name: "Official Helmet",
    price: "₹2,999",
    images: ["/merch/helmet.png"],
    badge: "Match Gear",
  },
  {
    name: "Supporter Cap",
    price: "₹699",
    images: ["/merch/cap.png"],
    badge: "Fan Favorite",
  },
];

/* ================= BLUR PLACEHOLDER ================= */

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI/wM3+L6I/gAAAABJRU5ErkJggg==";

/* ================= COMPONENT ================= */

export default function MerchandiseProducts() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleLoad = useCallback((src: string) => {
    setLoadedImages((prev) => {
      const updated = new Set(prev);
      updated.add(src);
      return updated;
    });
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-5 md:px-6 lg:px-8">
      {/* HEADER */}

      <div className="mb-8 md:mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d48f2b] sm:text-xs">
          Official Store
        </p>

        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
          Merchandise Collection
        </h2>
      </div>

      {/* GRID */}

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.name}
            product={product}
            index={index}
            blurDataURL={BLUR_DATA_URL}
            isLoaded={loadedImages.has(product.images[0])}
            onLoad={() => handleLoad(product.images[0])}
          />
        ))}
      </div>
    </section>
  );
}

/* ================= PRODUCT CARD ================= */

interface ProductCardProps {
  product: (typeof products)[0];
  index: number;
  blurDataURL: string;
  isLoaded: boolean;
  onLoad: () => void;
}

const ProductCard = memo(function ProductCard({
  product,
  index,
  blurDataURL,
  isLoaded,
  onLoad,
}: ProductCardProps) {
  const hasSecondImage = product.images.length > 1;
  const priority = index < 2;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
        backdrop-blur-[2px]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#d48f2b]/30
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]
      "
    >
      {/* IMAGE AREA */}

      <div
        className="
          relative
          aspect-square
          w-full
          overflow-hidden
          border-b
          border-white/5
        "
      >
        {/* SOFT TOP GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-white/[0.05]
            via-transparent
            to-transparent
          "
        />

        {/* BADGE */}

        <div
          className="
            absolute
            left-3
            top-3
            z-20
            rounded-full
            border
            border-white/10
            bg-black/30
            px-2.5
            py-1
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/90
            backdrop-blur-md
            sm:text-[10px]
          "
        >
          {product.badge}
        </div>

        {/* MAIN IMAGE */}

        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          quality={80}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL={blurDataURL}
          draggable={false}
          onLoad={onLoad}
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 768px) 33vw,
            (max-width: 1200px) 25vw,
            20vw
          "
          className={`
            object-contain
            p-4
            transition-all
            duration-500
            will-change-transform
            group-hover:scale-[1.03]
            sm:p-5
            ${
              isLoaded
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* SECOND IMAGE */}

        {hasSecondImage && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternate`}
            fill
            quality={80}
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL}
            draggable={false}
            sizes="
              (max-width: 640px) 50vw,
              (max-width: 768px) 33vw,
              (max-width: 1200px) 25vw,
              20vw
            "
            className="
              absolute
              inset-0
              object-contain
              p-4
              opacity-0
              transition-opacity
              duration-500
              will-change-auto
              group-hover:opacity-100
              sm:p-5
            "
          />
        )}
      </div>

      {/* CONTENT */}

      <div className="flex flex-col gap-3 p-3 sm:p-4">
        <div>
          <h3
            className="
              line-clamp-1
              text-xs
              font-bold
              uppercase
              tracking-[0.08em]
              text-white
              transition-colors
              duration-300
              group-hover:text-[#f5b042]
              sm:text-sm
            "
          >
            {product.name}
          </h3>

          <p className="mt-1 text-lg font-black text-[#f5b042] sm:text-xl">
            {product.price}
          </p>
        </div>

        <button
          aria-label={`Buy ${product.name}`}
          className="
            mt-auto
            w-full
            rounded-xl
            border
            border-[#d48f2b]/60
            bg-transparent
            px-3
            py-2.5
            text-[10px]
            font-black
            uppercase
            tracking-[0.22em]
            text-[#f5b042]
            transition-all
            duration-300
            hover:bg-[#d48f2b]
            hover:text-black
            hover:shadow-[0_8px_24px_rgba(245,176,66,0.2)]
            active:scale-[0.98]
            sm:text-[11px]
            md:py-3
          "
        >
          Buy Now
        </button>
      </div>
    </article>
  );
});