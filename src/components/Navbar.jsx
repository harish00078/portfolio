import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ theme, toggleTheme }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur border-b border-slate-800/60 bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow flex items-center justify-center text-xs font-bold">
            HK
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">
              Harish Kumar
            </div>
            <div className="text-xs text-slate-400">
              MERN Stack Developer
            </div>
          </div>
        </motion.div>

        <nav className="flex items-center gap-6 text-xs sm:text-sm">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="uppercase tracking-wide text-slate-400 hover:text-brand-400 transition"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 hover:border-brand-400 hover:text-brand-300 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
