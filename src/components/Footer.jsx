import React from "react";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-50/80 dark:border-slate-800/70 dark:bg-slate-950/80 mt-10 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Harish Kumar. All rights reserved.</span>
        <SocialLinks />
      </div>
    </footer>
  );
}
