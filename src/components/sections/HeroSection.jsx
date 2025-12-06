import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { SocialLinks } from "../SocialLinks";
import { ArrowRight } from "lucide-react";
import HeroCanvas from "../3d/HeroCanvas";

export function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-[#0b0b12]"
    >
      {/* === 3D Background === */}
      <div className="absolute inset-0 pointer-events-none opacity-90">
        <HeroCanvas />
      </div>

      {/* Blur + Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-black/60 dark:via-black/20 dark:to-black/80 backdrop-blur-[2px]" />

      {/* === CONTENT === */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 lg:py-20 grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
        {/* Left Side */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300 mb-3 font-bold"
          >
            Full-Stack JavaScript Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
          >
            Crafting modern <span className="text-[#915eff]">MERN</span>{" "}
            experiences with <span className="text-brand-600 dark:text-brand-300">3D</span>{" "}
            precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
          >
            I'm Harish — building realistic and interactive MERN interfaces,
            blending 3D visuals, smooth animations, and powerful backend logic
            into clean, beautiful experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button icon={ArrowRight} onClick={scrollToProjects}>
              View Projects
            </Button>

            <Button variant="ghost" className="text-sm">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Right Side Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="relative h-60 sm:h-72 lg:h-80 hidden lg:block"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Interactive 3D Layer
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Powered by React Three Fiber & GLSL Effects
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] mt-4">
              <SkillBox
                title="Frontend"
                items={["React", "Vite", "Tailwind"]}
              />
              <SkillBox
                title="Backend"
                items={["Node", "Express", "MongoDB"]}
              />
              <SkillBox title="3D" items={["Three.js", "R3F", "Shaders"]} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-600 dark:bg-white rounded-full animate-bounce mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

function SkillBox({ title, items }) {
  return (
    <div className="bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-2">
      <div className="text-slate-700 dark:text-slate-300 font-medium">{title}</div>
      <div className="text-slate-500 dark:text-slate-100 text-[10px]">{items.join(", ")}</div>
    </div>
  );
}