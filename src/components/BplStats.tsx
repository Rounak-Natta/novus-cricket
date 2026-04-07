"use client";

import Image from "next/image";

/* ================= TYPES ================= */

type Stat = {
  label: string;
  value: string;
};

type StatBoxProps = Stat;

type HighlightCardProps = {
  value: string;
  label: string;
  name: string;
  imageSrc?: string;
  variant?: "default" | "with-image";
  imageSize?: "sm" | "md" | "lg";
};

/* ================= DATA ================= */

const statsTop: Stat[] = [
  { label: "Total Runs Scored", value: "338" },
  { label: "Total Wickets Taken", value: "18" },
];

const battingStats: Stat[] = [
  { label: "Centuries", value: "0" },
  { label: "Fifties", value: "3" },
  { label: "Sixes", value: "19" },
  { label: "Fours", value: "30" },
];

const bowlingStats: Stat[] = [
  { label: "Catches", value: "12" },
  { label: "Run Outs", value: "2" },
  { label: "Yorkers", value: "8" },
  { label: "Dot Balls", value: "104" },
];

/* ================= COMPONENTS ================= */

const StatBox = ({ value, label }: StatBoxProps) => {
  return (
    <div className="group relative bg-white rounded-xl px-4 py-3 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotted-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-gray-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mt-1">
          {label}
        </div>
      </div>
    </div>
  );
};

const HighlightCard = ({ 
  value, 
  label, 
  name, 
  imageSrc,
  variant = "default",
  imageSize = "md"
}: HighlightCardProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32"
  };
  
  const sizePixels = {
    sm: "64px",
    md: "96px",
    lg: "128px"
  };

  if (variant === "with-image" && imageSrc) {
    return (
      <div className="group relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotted-pattern-card" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-gray-900" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotted-pattern-card)" />
          </svg>
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <div className={`relative ${sizeClasses[imageSize]} flex-shrink-0`}>
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes={sizePixels[imageSize]}
              className="object-contain drop-shadow-md"
            />
          </div>
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {value}
            </div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              {label}
            </div>
            <div className="font-semibold text-gray-700 text-sm mt-1">
              {name}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotted-pattern-card-simple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-gray-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotted-pattern-card-simple)" />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mt-1">
          {label}
        </div>
        <div className="font-semibold text-gray-700 text-sm mt-2">
          {name}
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN ================= */

export default function IPLStats() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Title with accent */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            IPL 2026 IN NUMBERS
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-primary/60 to-transparent mt-2" />
        </div>

        {/* Top Stats - Premium centered */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {statsTop.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wide mt-2">
                {item.label}
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-primary/40 to-transparent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 mb-12">

          {/* Left - Batting Stats */}
          <div className="grid grid-cols-2 gap-3">
            {battingStats.map((item, i) => (
              <StatBox key={i} {...item} />
            ))}
          </div>

          {/* Center Players - Premium overlay effect */}
          <div className="relative flex justify-center items-center py-8">
            <div className="relative w-[280px] md:w-[340px] h-[280px] md:h-[340px]">
              {/* Glow behind center player */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
              
              <Image
                src="/players/1.webp"
                alt="player"
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-contain z-10 drop-shadow-2xl"
                priority
              />

              <Image
                src="/players/2.webp"
                alt="player"
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-contain scale-90 -translate-x-24 opacity-60 drop-shadow-lg"
              />

              <Image
                src="/players/3.webp"
                alt="player"
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-contain scale-90 translate-x-24 opacity-60 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Right - Bowling Stats */}
          <div className="grid grid-cols-2 gap-3">
            {bowlingStats.map((item, i) => (
              <StatBox key={i} {...item} />
            ))}
          </div>

        </div>

        {/* Divider with gradient */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <div className="h-2 w-12 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full" />
          </div>
        </div>

        {/* Bottom Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          <HighlightCard
            value="93"
            label="Most Runs"
            name="Yashasvi Jaiswal"
            imageSrc="/players/4.webp"
            variant="with-image"
            imageSize="md"
          />

          <HighlightCard
            value="5"
            label="Most Wickets"
            name="Ravi Bishnoi"
            imageSrc="/players/5.webp"
            variant="with-image"
            imageSize="lg"
          />
        </div>

      </div>
    </section>
  );
}