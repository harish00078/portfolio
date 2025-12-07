import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import HeroCanvas from "./components/3d/HeroCanvas";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-full flex flex-col bg-slate-50 dark:bg-[#0b0b12] transition-colors duration-300 relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroCanvas theme={theme} />
      </div>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
