"use client";

import Image from "next/image";
import React from "react";

// Sponsor data structure for better organization
const sponsorData = {
  title: { id: 1, name: "Title Sponsor", logo: "/sponsors/1.jpeg" },
  platinum: [
    { id: 2, name: "Platinum Partner", logo: "/sponsors/2.jpeg" },
    { id: 3, name: "Platinum Partner", logo: "/sponsors/3.jpeg" },
    { id: 4, name: "Platinum Partner", logo: "/sponsors/4.jpeg" },
  ],
  gold: [
    { id: 5, name: "Gold Partner", logo: "/sponsors/5.jpeg" },
    { id: 6, name: "Gold Partner", logo: "/sponsors/6.jpeg" },
    { id: 7, name: "Gold Partner", logo: "/sponsors/7.jpeg" },
  ],
};

const Page = () => {
  return (
    <>
      <main className="w-full bg-white">

        {/* ================= HERO ================= */}
        <section className="relative w-full h-[75vh] min-h-130 flex items-center justify-center text-center px-6 overflow-hidden">
          {/* Background Image - Optimized with priority and quality */}
          <Image
            src="/images/abtbnr.png"
            alt="Novus Royals Purulia team banner"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
          
          {/* Gradient Overlay - smoother transition */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-black/40" />

          <div className="relative z-10 max-w-4xl">
            {/* Decorative element */}
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium">
              Novus Royals Purulia
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              When the stakes rise,
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/70">
                so do the warriors.
              </span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
              From the heart of Purulia comes a force built to compete and conquer.
            </p>

            {/* Optional scroll indicator - lightweight */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
              <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center">
                <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= STORY ================= */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image with subtle lift effect */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent z-10" />
              <Image
                src="/images/1.png"
                alt="Novus Royals cricket training in Purulia"
                width={640}
                height={480}
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Soil to Spotlight
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Bengal's cricket revolution is rising — but Purulia's talent has long been overlooked.
                </p>
                <p>
                  <span className="font-semibold text-primary">Novus Royals</span> transforms untapped potential into elite performance.
                </p>
              </div>
              <div className="pt-4 border-l-4 border-primary pl-6">
                <p className="italic text-gray-700 text-lg font-medium">
                  "Effort defines identity — not privilege."
                </p>
                <p className="text-gray-500 text-sm mt-2">— Novus Royals Philosophy</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VISION & MISSION ================= */}
        <section className="bg-linear-to-b from-gray-50 to-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Vision & Mission
              </h2>
              <div className="w-20 h-1 bg-primary/50 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-primary/40 rounded-t-2xl" />
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform grassroots sports into structured pathways for excellence, creating a sustainable ecosystem where raw talent meets world-class opportunity.
                </p>
              </div>

              {/* Mission Card */}
              <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-primary/40 rounded-t-2xl" />
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Identify hidden talent, build robust infrastructure, and create real opportunities that bridge the gap between rural potential and professional recognition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= IDENTITY & APPROACH ================= */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Identity & Approach
            </h2>
            <div className="w-20 h-1 bg-primary/50 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌾",
                title: "Rooted Pride",
                desc: "Deep connection to Purulia's rich heritage, celebrating local culture while building a global mindset.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: "⚡",
                title: "Underdog Spirit",
                desc: "Relentless hunger to rise against all odds, turning challenges into stepping stones for greatness.",
                color: "from-red-500 to-rose-500",
              },
              {
                icon: "🏗️",
                title: "Future Builders",
                desc: "Creating long-term pathways for sustainable success, investing in tomorrow's champions today.",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${item.color} rounded-t-2xl`} />
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <p className="text-gray-700 text-lg font-medium">
                More than a team — a platform, a voice, and a future for Purulia's sporting dreams.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SPONSORS ================= */}
        <section className="bg-linear-to-b from-gray-50 to-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                Our Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Powering The Rise
              </h2>
              <div className="w-20 h-1 bg-primary/50 mx-auto mt-4 rounded-full" />
              <p className="text-gray-600 mt-4">
                United by a shared vision to elevate grassroots cricket in Purulia
              </p>
            </div>

            {/* Title Sponsor */}
            <div className="mb-16">
              <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Title Sponsor
              </h3>
              <div className="flex justify-center">
                <div className="group p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-md w-full">
                  <div className="relative h-24 flex items-center justify-center">
                    <Image
                      src={sponsorData.title.logo}
                      alt={`${sponsorData.title.name} logo`}
                      width={200}
                      height={80}
                      loading="lazy"
                      quality={75}
                      className="object-contain w-auto h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Platinum Partners */}
            <div className="mb-16">
              <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Platinum Partners
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sponsorData.platinum.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="group p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex justify-center items-center"
                  >
                    <div className="relative h-16 w-full flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={120}
                        height={60}
                        loading="lazy"
                        quality={75}
                        className="object-contain w-auto h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Partners */}
            <div>
              <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Gold Partners
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sponsorData.gold.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="group p-5 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex justify-center items-center"
                  >
                    <div className="relative h-14 w-full flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={100}
                        height={50}
                        loading="lazy"
                        quality={75}
                        className="object-contain w-auto h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action for sponsors */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                <span>✨</span>
                <span>Become a partner — </span>
                <a href="#" className="text-primary font-semibold hover:underline transition">
                  Join the movement
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary text-sm font-medium">Novus Royals Purulia</span>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Novus Royals Purulia. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              From the heart of Purulia — building champions, creating legacy.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Page;