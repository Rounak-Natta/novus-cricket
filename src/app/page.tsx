import Image from "next/image";

import BplStats from "@/components/BplStats";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import OurPlayers from "@/components/OurPlayers";
import Sponsors from "@/components/Sponsors";
import TeamNews from "@/components/TeamNews";
import UpcomingMatch from "@/components/UpcomingMatch";

/* ================= DIVIDER ================= */

function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-4 md:py-5">

      {/* LINE */}
      <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />

      {/* CENTER */}
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background"
        style={{
          boxShadow:
            "0 10px 30px rgba(96,25,29,0.06), 0 0 30px rgba(245,176,66,0.08)",
        }}
      >

        {/* GLOW */}
        <div className="absolute h-10 w-10 rounded-full bg-primary/10 blur-2xl" />

        {/* LOGO */}
        <div className="relative h-7 w-7">

          <Image
            src="/logo/logo.png"
            alt="NRP Logo"
            fill
            sizes="28px"
            quality={90}
            className="object-contain"
          />

        </div>
      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* HERO */}
      <HeroCarousel />

      {/* UPCOMING MATCH */}
      <SectionDivider />
      <UpcomingMatch />

      {/* PLAYERS */}
      <SectionDivider />
      <OurPlayers />

      {/* NEWS */}
      <SectionDivider />
      <TeamNews />

      {/* STATS */}
      <SectionDivider />
      <BplStats />

      {/* SPONSORS */}
      <SectionDivider />
      <Sponsors />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}