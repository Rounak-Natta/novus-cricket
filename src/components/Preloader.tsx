"use client";

import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => {
      setVisible(false);
      onComplete?.();
    };

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide);

    // fallback: hide after 2 seconds anyway
    const timer = setTimeout(hide, 2000);

    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0806] transition-opacity duration-500">
      <div className="text-center">
        {/* minimalist cricket nod – a single gold dot */}
        <div className="mx-auto w-3 h-3 rounded-full bg-[#f5b042] animate-pulse" />
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
          stumps
        </p>
      </div>
    </div>
  );
}