"use client";

export default function Footer() {
  return (
    <footer className="mt-14 w-full overflow-hidden border-t border-secondary/10 bg-secondary text-white">

      {/* TOP */}
      <div className="border-b border-white/10">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-4 text-center text-xs md:gap-6 md:text-sm">

          <button className="font-medium text-white/75 transition-colors duration-300 hover:text-primary">
            Terms & Conditions
          </button>

          <span className="text-white/20">•</span>

          <button className="font-medium text-white/75 transition-colors duration-300 hover:text-primary">
            Privacy Policy
          </button>

          <span className="text-white/20">•</span>

          <button className="font-medium text-white/75 transition-colors duration-300 hover:text-primary">
            Cookie Policy
          </button>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative">

        {/* DEPTH */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs md:flex-row md:text-sm">

          {/* LEFT */}
          <div className="text-center text-white/70 md:text-left">
            © 2026 Your Club. All Rights Reserved.
          </div>

          {/* RIGHT */}
          <div
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-xl"
            style={{
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-xs text-white/50">
              Powered by
            </span>

            <span className="font-bold tracking-[0.12em] text-primary">
              NOVUS GLOBAL PURULIA
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}