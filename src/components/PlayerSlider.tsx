"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    title: "Second-highest run chase in IPL",
    desc: "Record-breaking performance powered the chase with ease.",
    image: "/slides/1.png",
    stat: "247",
    tag: "Historic Chase",
    imageHeight: "h-[380px] md:h-[880px]",
  },
  {
    title: "Most sixes in one season",
    desc: "Smashing boundaries all over the park.",
    image: "/slides/2.png",
    stat: "178",
    tag: "Power Hitting",
    imageHeight: "h-[420px] md:h-[620px]",
  },
  {
    title: "Fastest powerplay domination",
    desc: "Aggression right from ball one.",
    image: "/slides/3.png",
    stat: "167",
    tag: "Explosive Start",
    imageHeight: "h-[800px] md:h-[800px]",
  },
  {
    title: "Most wickets in a season",
    desc: "Bowling dominance throughout the tournament.",
    image: "/slides/4.png",
    stat: "28",
    tag: "Bowling Peak",
    imageHeight: "h-[440px] md:h-[840px]",
  },
  {
    title: "Highest strike rate impact",
    desc: "Explosive batting redefining T20 aggression.",
    image: "/slides/5.png",
    stat: "210",
    tag: "Elite Strike Rate",
    imageHeight: "h-[460px] md:h-[860px]",
  },
];

export default function PlayerSlider() {
  const ref = useRef(null);
  const numSlides = slides.length;

  const finalXOffset = `-${((numSlides - 1) * 100) / numSlides}%`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", finalXOffset]);

  const SLOW_FACTOR = 4;
  const sectionHeight = `${numSlides * 100 * SLOW_FACTOR}vh`;

  return (
    <section
  ref={ref}
  className="relative bg-[var(--bg)]"
  style={{ height: sectionHeight }}
>
      {/* 🔵 Dotted pattern background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* 🔗 Connecting horizontal timeline */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-orange-300 via-purple-300 to-orange-300 opacity-40 z-0" />

      <div className="sticky top-0 h-[95vh] flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[500%] h-full relative">
          {slides.map((slide, i) => (
            <Slide key={i} slide={slide} progress={scrollYProgress} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Slide({ slide, progress, index }: any) {
  const bgY = useTransform(progress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(progress, [0, 1], ["0%", "20%"]);
  const badgeY = useTransform(progress, [0, 1], ["0%", "30%"]);

  return (
    <div className="w-screen h-full flex items-center justify-center px-6 md:px-20 relative">
      
      {/* 🌈 Glow blobs */}
      <motion.div
        style={{ y: bgY }}
        className="absolute w-[400px] h-[400px] bg-orange-300/20 blur-[120px] rounded-full top-[-100px] left-[10%]"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute w-[400px] h-[400px] bg-purple-300/20 blur-[120px] rounded-full bottom-[-120px] right-[10%]"
      />

      {/* Divider */}
      {index !== 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[55%] w-[1px] bg-black/10" />
      )}

      {/* Timeline dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg z-20" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* TEXT */}
        <motion.div style={{ y: textY }} className="space-y-6">
          
          {/* small tag */}
          <div className="text-xs uppercase tracking-widest text-orange-500 font-semibold">
            {slide.tag}
          </div>

          {/* index number */}
          <div className="text-5xl md:text-7xl font-bold text-black/10">
            0{index + 1}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            {slide.title}
          </h2>

          <p className="text-base text-black/60 max-w-md">
            {slide.desc}
          </p>

          {/* subtle line */}
          <div className="w-16 h-[2px] bg-orange-400 mt-4" />
        </motion.div>

        {/* IMAGE */}
        <div
          className={`relative w-full ${slide.imageHeight} transition-all duration-500 group`}
        >
          <Image
            src={slide.image}
            alt="player"
            fill
            className="object-contain scale-110 group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
            priority
          />
        </div>
      </div>

      
    </div>
  );
}