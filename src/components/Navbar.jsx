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
    <header className="sticky top-0 z-30 backdrop-blur border-b border-slate-200/80 bg-white/80 dark:border-slate-800/60 dark:bg-slate-950/60 transition-colors duration-300 shadow-sm dark:shadow-none">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-md dark:shadow-glow flex items-center justify-center text-slate-50 text-xs font-bold">
            HK
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-50">
              Harish Kumar
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              MERN Stack Developer
            </div>
          </div>
        </motion.div>

        <nav className="flex items-center gap-6 text-xs sm:text-sm">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="uppercase tracking-wide text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:text-brand-300 transition"
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
