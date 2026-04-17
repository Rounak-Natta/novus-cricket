"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-12.5">

      {/* Top Links Bar */}
      <div className="bg-secondary text-white text-xs md:text-sm py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 md:gap-6 text-center">
          <span className="hover:text-primary transition cursor-pointer">
            Terms & Conditions
          </span>
          <span className="opacity-50">|</span>
          <span className="hover:text-primary transition cursor-pointer">
            Privacy Policy
          </span>
          <span className="opacity-50">|</span>
          <span className="hover:text-primary transition cursor-pointer">
            Cookie Policy
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2b1a38] text-white text-xs md:text-sm py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

          {/* Left */}
          <div className="text-center md:text-left">
            © 2026 Your Club. All Rights Reserved
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 opacity-80">
            <span className="text-xs">Powered by</span>
            <div className="font-bold tracking-wide">
              NOVUS GLOBAL PURULIA
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}