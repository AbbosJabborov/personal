import React, { useState, useEffect } from "react";
import InteractiveCanvas from "../components/InteractiveCanvas";
import CarHUD from "../components/CarHUD";
import ExperienceDropdown from "../components/ExperienceDropdown";
import Toolbox from "../components/Toolbox";
import ProjectsBento from "../components/ProjectsBento";
import OffDutyGallery from "../components/OffDutyGallery";
import ContactSection from "../components/ContactSection";
import CommandPalette from "../components/CommandPalette";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import "../styles/portfolio.css";

export default function PortfolioPage() {
  const [theme, setTheme] = useState("dark");
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [hasDriven, setHasDriven] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="portfolio-container">
      {/* 3D Box Car / Toon Cat & Interactive Ground Dot Field */}
      <InteractiveCanvas onKeyDrive={() => setHasDriven(true)} />

      {/* Right-Side Entrance HUD (fades after start / upon driving) */}
      <CarHUD isDriving={hasDriven} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onToggleTheme={toggleTheme}
      />

      <div className="wrap">
        {/* Navigation Bar */}
        <header>
          <nav className="site-nav" aria-label="Main Navigation">
            <a href="#hero" className="mark">
              <span className="pulse-dot" />
              <span>Claive</span>
            </a>

            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#toolbox">Toolbox</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#photos">Photos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="nav-actions">
              <button
                type="button"
                className="kbtn"
                onClick={() => setIsPaletteOpen(true)}
                aria-label="Open command menu"
              >
                <span>Jump</span>
                <kbd>Ctrl K</kbd>
              </button>

              <button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle light/dark theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero" id="hero">
          <h1 aria-label="Abbos Jabborov">
            {"Abbos".split("").map((ch, idx) => (
              <span key={`a-${idx}`} className="ch">
                {ch}
              </span>
            ))}
            <br />
            {"Jabborov".split("").map((ch, idx) => (
              <span key={`j-${idx}`} className="ch">
                {ch}
              </span>
            ))}
          </h1>

          <p className="role">Gameplay Engineer | Core Gameplay Designer</p>

          <div className="actions-row">
            <a className="mag" href="#projects">
              <span>See the work</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/Abbos_Jabborov_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              CV ↗
            </a>

            <a
              href="https://github.com/AbbosJabborov"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/abbos-jabborov-328a53220"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <header>
            <span className="label">About</span>
            <h2>Programmer who designs, designer who programs</h2>
          </header>

          <div className="about-card spot">
            <p>
              I am a Unity gameplay engineer and 3C designer based in Budapest, Hungary,
              studying Computer Science Engineering at Óbuda University. As co-founder of
              Tonto Studio, I lead the development of <em>Desire Lines</em>, a PSX-style
              driving roguelite heading to Steam with 1,000+ wishlists. My daily work
              focuses on responsive C# mechanics, procedural run generation, and tight
              player feedback loops.
            </p>
            <p className="highlight">
              I appreciate cozy, warm, and minimal design, and I lean on custom shaders
              to give projects a distinct aesthetic—retro outlines, vertex warps,
              and tactile post-processing. When stepping away from the screen, you can
              find me playing volleyball, hunting down good espresso, or snapping quiet
              city frames.
            </p>
          </div>
        </section>

        {/* Work Experience & Competitions */}
        <section id="experience">
          <header>
            <span className="label">Journey</span>
            <h2>Experience & Competitions</h2>
          </header>

          <ExperienceDropdown />
        </section>

        {/* Technical Toolbox */}
        <section id="toolbox">
          <header>
            <span className="label">Skills & Stack</span>
            <h2>Technical Toolbox</h2>
          </header>

          <Toolbox />
        </section>

        {/* Selected Work & Projects */}
        <section id="projects">
          <header>
            <span className="label">Selected Work</span>
            <h2>Projects & Prototypes</h2>
          </header>

          <ProjectsBento />
        </section>

        {/* Off Duty Photo Gallery */}
        <section id="photos">
          <header>
            <span className="label">Off Duty</span>
            <h2>Moments Outside the Screen</h2>
          </header>
          <p style={{ color: "var(--muted)", margin: "-12px 0 0", fontSize: "16px" }}>
            Life away from code: volleyball games with friends, quiet coffee shops, and everyday frames.
          </p>

          <OffDutyGallery />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <span className="label">Claive · Abbos Jabborov</span>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top ↑
          </button>
        </footer>
      </div>
    </div>
  );
}
