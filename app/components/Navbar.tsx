"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Программы", href: "#programs" },
    { name: "О школе", href: "#programs" },
    { name: "Контакты", href: "#programs" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b-2 border-ink shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🦛</span>
            <span
              className="text-xl text-warm-white font-bold tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Hippo English
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-warm-white/70 hover:text-warm-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#programs"
              className="bg-coral text-warm-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-coral-dark transition-colors duration-200 shadow-md"
            >
              Начать учиться
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Меню"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-warm-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-warm-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-warm-white"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-ink pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl text-warm-white hover:text-coral transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#programs"
                onClick={() => setMenuOpen(false)}
                className="bg-coral text-warm-white px-8 py-4 rounded-full text-lg font-semibold text-center mt-4"
              >
                Начать учиться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}