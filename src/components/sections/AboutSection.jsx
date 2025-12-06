import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-sm text-slate-300 max-w-2xl"
        >
          I&apos;m Harish, a MERN stack developer with a strong interest in
          building interactive, visual experiences. I enjoy connecting clean
          backend APIs with polished frontends, and exploring areas like 3D in
          the browser and AI integrations.
        </motion.p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          <SkillColumn title="Languages" items={skills.languages} />
          <SkillColumn title="Frontend" items={skills.frontend} />
          <SkillColumn title="Backend &amp; DB" items={skills.backend} />
          <SkillColumn title="Tools" items={skills.tools} />
        </div>
      </div>
    </section>
  );
}

function SkillColumn({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
    >
      <h3 className="text-sm font-semibold text-slate-100 mb-2">
        {title}
      </h3>
      <ul className="space-y-1 text-xs text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
