"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Squad", href: "/squad" },
  { name: "Fixtures", href: "/fixtures" },
  { type: "logo" },
  { name: "Points Table", href: "/points-table" },
  { name: "News", href: "/news" },
  { name: "Sponsors", href: "/sponsors" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const links = navItems.filter((i) => i.href);

  return (
    <>
      {/* NAVBAR */}
      <div className="absolute top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
        <div className="w-full max-w-[70%] pointer-events-auto">
          <div
            className={`
              relative flex items-center justify-center h-15
              px-4 md:px-0 rounded-full
              backdrop-blur-2xl
              border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              transition-all duration-500
              ${scrolled ? "bg-(--secondary)/95" : "bg-(--secondary)/85"}
            `}
          >
            {/* subtle inner glow */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-(--brand)/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) =>
                item.type === "logo" ? (
                  <Link key="logo" href="/" className="group">
                    <div className="relative w-25 h-25 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src="/logo/logo.png"
                        alt="Logo"
                        fill
                        priority
                        className="object-contain drop-shadow-[0_8px_25px_rgba(245,176,66,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_12px_35px_rgba(245,176,66,0.9)]"
                      />
                    </div>
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className="group relative text-[13px] font-semibold uppercase tracking-[0.15em] text-white/80 transition-all duration-300"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                      {item.name}
                    </span>

                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />

                    <span className="absolute inset-0 rounded-md opacity-0 bg-(--brand)/10 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                )
              )}
            </div>

            {/* MOBILE */}
            <div className="md:hidden flex items-center justify-between w-full">
  
  {/* LEFT → Logo */}
  <Link href="/">
    <div className="relative w-12 h-12">
      <Image
        src="/logo/logo.png"
        alt="Logo"
        fill
        priority
        className="object-contain"
      />
    </div>
  </Link>

  {/* RIGHT → Hamburger */}
  <button onClick={() => setIsOpen(!isOpen)} className="z-50 text-white">
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>

</div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 h-full w-64 bg-(--secondary) shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col pt-24 px-6 gap-6">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href!}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-sm font-semibold uppercase text-white/80 hover:text-primary border-b border-white/10 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}