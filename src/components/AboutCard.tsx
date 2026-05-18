"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AboutCardProps = {
  image?: string;
  tag?: string;
  title?: string;
  quote?: string;
  description?: string;
  name?: string;
  country?: string;
};

export default function AboutCard({
  image = "/images/abt1.avif",
  tag = "TESTIMONIALS",
  title = "What parents & guardians say",
  quote = `"The team at BrightFuture has completely transformed our son's learning journey. His confidence has soared, and he actually looks forward to studying every day."`,
  description = `From personalised tutoring to mentorship, BrightFuture's approach is holistic and results‑driven. Our daughter’s grades improved by two levels within a single term. We couldn't be happier.`,
  name = "Sarah & Michael Chen",
  country = "Singapore",
}: AboutCardProps) {
  return (
    <section className="w-full flex justify-center px-4 py-8 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="
          relative
          w-full
          max-w-[1400px]
          overflow-hidden
          rounded-[34px]
          border border-white/10
          backdrop-blur-xl
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* subtle gradient (kept minimal, not a solid background) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,176,66,0.08),transparent_35%)]" />

        <div className="relative grid md:grid-cols-[420px_1fr]">
          {/* IMAGE */}
          <div className="relative h-[320px] sm:h-[420px] md:h-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/40" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[rgba(18,12,8,0.85)] to-transparent hidden md:block" />
          </div>

          {/* CONTENT */}
          <div className="flex items-center">
            <div className="w-full px-6 py-8 sm:px-10 sm:py-12 md:px-14 lg:px-16">
              {/* TAG with secondary-light */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[1px] w-12 bg-[var(--secondary-light)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--secondary-light)]">
                  {tag}
                </span>
              </div>

              {/* TITLE - white for contrast */}
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>

              {/* QUOTE - lighter secondary tone */}
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--secondary-light)]/80 sm:text-xl">
                {quote}
              </p>

              {/* DESCRIPTION - softer secondary */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--secondary)]/70 sm:text-base">
                {description}
              </p>

              {/* FOOTER */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-white">
                  {name}
                </h4>
                <p className="mt-1 text-sm font-medium text-[var(--secondary-light)]">
                  {country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}