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
  const jumpToContact = ()=>{
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
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
            experiences with{" "}
            <span className="text-brand-600 dark:text-brand-300">3D</span>{" "}
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

            <Button variant="ghost" className="text-sm" onClick={jumpToContact}>
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="relative h-60 sm:h-72 lg:h-80 hidden lg:block"
        >
          <div
            className="absolute inset-0 rounded-3xl 
                          bg-white/40 dark:bg-black/40 
                          backdrop-blur-xl 
                          border border-slate-200 dark:border-white/10 
                          shadow-2xl overflow-hidden 
                          p-6 flex flex-col justify-center"
          >
            <div className="grid grid-cols-3 gap-4 mt-4">
              <SkillBox3D
                title="Frontend"
                items={["React", "Vite", "Tailwind"]}
              />

              <SkillBox3D
                title="Backend"
                items={["Node", "Express", "MongoDB"]}
              />

              <SkillBox3D title="3D" items={["Three.js", "R3F", "Shaders"]} />
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

function SkillBox3D({ title, items }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.07,
        rotateX: 10,
        rotateY: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 14,
      }}
      className="bg-white/50 dark:bg-white/10 
                 backdrop-blur-lg border border-white/40 dark:border-white/20
                 rounded-xl p-3 cursor-pointer transform-gpu"
    >
      <h3 className="font-semibold text-slate-900 dark:text-white text-base">
        {title}
      </h3>

      <p className="text-slate-800 dark:text-slate-200 text-sm mt-1 leading-relaxed">
        {items.join(", ")}
      </p>
    </motion.div>
  );
}
