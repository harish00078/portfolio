import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { SocialLinks } from "../SocialLinks";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16 grid gap-10 lg:grid-cols-[3fr,2fr] items-center"></div>
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs uppercase tracking-[0.35em] text-brand-300 mb-3"
        >
          Full-Stack JavaScript Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
        >
          Building clean, modern <span className="text-brand-400">MERN</span>{" "}
          experiences with a touch of{" "}
          <span className="font-mono text-brand-300">3D &amp; AI</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm text-slate-300 max-w-xl"
        >
          I&apos;m Harish, a MERN stack developer focused on building realistic,
          interactive interfaces — from weather visualizations to full-stack
          course platforms. Currently refining my craft through hands-on
          projects and internships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <Button icon={ArrowRight} onClick={scrollToProjects}>
            View Projects
          </Button>
          <Button variant="ghost" className="text-xs">
            Available for internships &amp; freelance
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative h-60 sm:h-72 lg:h-80"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/20 via-slate-900 to-slate-950 border border-slate-700/60 shadow-glow overflow-hidden">
          <div className="absolute -inset-32 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_70%)]" />
          <div className="relative h-full flex flex-col justify-between p-4">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono text-brand-200">
                MERN Stack Journey
              </span>
              <span className="text-[10px] bg-slate-900/60 border border-slate-700 px-2 py-0.5 rounded-full">
                Internship ready
              </span>
            </div>
            <div className="space-y-1 text-xs font-mono">
              <p className="text-slate-300/90">&gt; npm run dev</p>
              <p className="text-slate-400/90">
                &gt; Connecting MongoDB, Node.js, React, and real-world
                projects...
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-2">
                <div className="text-slate-400">Frontend</div>
                <div className="mt-1 text-slate-100">React, Vite, Redux</div>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-2">
                <div className="text-slate-400">Backend</div>
                <div className="mt-1 text-slate-100">Node, Express, Mongo</div>
              </div>
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-2">
                <div className="text-slate-400">Extras</div>
                <div className="mt-1 text-slate-100">3D, APIs, Animations</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
