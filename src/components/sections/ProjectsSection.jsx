import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";

export function ProjectsSection() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  // Convert vertical scroll to horizontal when inside this section
  const handleWheel = (e) => {
    const el = containerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  // Track active slide based on scroll position
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, clientWidth } = el;
      const index = Math.round(scrollLeft / clientWidth);
      setActive(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const el = containerRef.current;
    if (!el) return;
    const clamped = Math.min(Math.max(index, 0), projects.length - 1);
    const offset = clamped * el.clientWidth;
    el.scrollTo({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-stretch bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="relative mx-auto max-w-6xl px-0 sm:px-4 py-10 flex-1 flex flex-col">
        <div className="px-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-2xl"
          >
            Scroll horizontally to explore three fullscreen project case studies.
            Each slide focuses on how you think about architecture, UI, and
            real-world problem solving.
          </motion.p>
        </div>

        <div
          className="relative mt-6 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70 transition-colors duration-300"
          onWheel={handleWheel}
        >
          <div
            ref={containerRef}
            className="flex h-full w-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {projects.map((project, index) => (
              <Slide key={project.id} project={project} active={active === index} />
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 inset-x-0 flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToIndex(active - 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-brand-200 transition"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToIndex(active + 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-brand-200 transition"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {projects.map((p, index) => (
                <button
                  key={p.id}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === active
                      ? "w-6 bg-brand-400"
                      : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slide({ project, active }) {
  return (
    <motion.article
      className="snap-center shrink-0 w-full h-full flex items-center justify-center px-4 sm:px-6"
      initial={false}
      animate={{
        scale: active ? 1 : 0.9,
        opacity: active ? 1 : 0.6,
        x: active ? 0 : 40,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <div className="max-w-3xl w-full grid gap-6 lg:grid-cols-[3fr,2fr] items-center">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-50 transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 transition-colors">
            {project.description}
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 transition-colors">
            {project.highlight}
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-100 border border-slate-200 text-slate-600 dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-300 px-2 py-0.5 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 text-xs">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300 transition-colors"
              >
                <Github className="w-3 h-3" />
                GitHub Repo
              </a>
            )}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative h-52 rounded-2xl bg-gradient-to-br from-brand-500/10 via-slate-900 to-slate-950 border border-slate-700/70 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_transparent_70%)]" />
            <div className="relative p-4 text-[11px] font-mono text-slate-200 space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>// Tech stack</span>
                <span>{project.tech.join(" · ")}</span>
              </div>
              <p className="mt-2 text-slate-300/90">
                &gt; npm run build
              </p>
              <p className="text-slate-400/90">
                &gt; shipping production-ready features with a focus on{" "}
                <span className="text-brand-300">DX</span> &amp;{" "}
                <span className="text-brand-300">UX</span>.
              </p>
              <p className="mt-3 text-slate-400/90">
                // Highlight
              </p>
              <p className="text-slate-200/90 line-clamp-3">
                {project.highlight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
