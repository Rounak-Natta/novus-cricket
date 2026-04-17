"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const matchDate = new Date("2026-04-10T19:30:00");

export default function UpcomingMatch() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const distance = matchDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-[95%] md:w-[90%] px-2.5">
        <div className="
          flex flex-col md:flex-row items-center justify-between
          gap-5 md:gap-6
          px-5 md:px-6 py-5 md:py-4
          rounded-2xl md:rounded-full
          bg-(--secondary)/95 backdrop-blur-xl
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          border border-white/10
        ">

          {/* LEFT */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">

            <span className="text-xs md:text-sm font-semibold text-white/70 tracking-wide text-center md:text-left">
              Upcoming Match
            </span>

            {/* Teams */}
            <div className="
              flex items-center justify-between md:justify-start
              gap-3 md:gap-5 w-full md:w-auto
            ">
              <Team name="NOVUS ROYALS PURULIA" logo="/logo/logo.png" />

              <span className="text-white/50 text-xs md:text-sm">vs</span>

              <Team name="SILIGURI STRIKERS" logo="/logo/siligurilogo.png" />
            </div>
          </div>

          {/* DIVIDER (unchanged desktop) */}
          <div className="hidden md:block h-10 w-px bg-white/10" />

          {/* TIMER */}
          <div className="
            flex items-center justify-between md:justify-center
            gap-2 md:gap-5
            w-full md:w-auto
          ">
            <TimeBox label="DAYS" value={timeLeft.days} />
            <Colon />
            <TimeBox label="HOURS" value={timeLeft.hours} />
            <Colon />
            <TimeBox label="MINUTES" value={timeLeft.minutes} />
            <Colon />
            <TimeBox label="SECONDS" value={timeLeft.seconds} />
          </div>

        </div>
      </div>
    </div>
  );
}

/* TEAM */
function Team({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
        <Image src={logo} alt={name} fill className="object-contain" />
      </div>

      {/* ONLY mobile truncation */}
      <span className="
        font-semibold text-white
        text-xs md:text-sm lg:text-base
        leading-tight
        truncate md:whitespace-normal
        max-w-27.5 md:max-w-none
      ">
        {name}
      </span>
    </div>
  );
}

/* TIMER BOX */
function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] md:text-xs text-white/60 tracking-wide">
        {label}
      </span>
      <div className="
        px-2 md:px-3 py-1
        rounded-md
        bg-primary
        text-black font-mono font-bold
        text-sm md:text-lg
        shadow-[0_4px_12px_rgba(245,176,66,0.4)]
      ">
        {value}
      </div>
    </div>
  );
}

/* COLON */
function Colon() {
  return (
    <span className="text-sm md:text-lg font-bold text-white/40">:</span>
  );
}