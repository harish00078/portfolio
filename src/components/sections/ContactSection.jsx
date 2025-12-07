import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-xl"
        >
          Looking for a MERN stack developer or an intern who can ship
          production-ready features and learn fast? Feel free to reach out — 
          I&apos;d love to talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-6 rounded-2xl border border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-900/60 p-4 max-w-md transition-colors duration-300"
        >
          <form
            className="space-y-3 text-sm"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:harishpathania150@gmail.com";
            }}
          >
            <div>
              <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <Button type="submit" icon={Mail}>
              Send Email
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
