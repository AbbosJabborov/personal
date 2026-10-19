import React, { useState } from "react";

const WORK_EXPERIENCES = [
  {
    id: "tonto",
    role: "Co-founder & Lead Developer",
    company: "Tonto Studio",
    location: "Remote (Part-time)",
    period: "Jun 2025 – Present",
    highlights: [
      "Architected Desire Lines, a PSX-style driving roguelite, from concept to a live Steam page with 1000+ wishlists.",
      "Built procedural map generation for each run, inspired by the dungeon generation in The Binding of Isaac.",
      "Lead a 5-person team toward a demo release scheduled for Q4 2026; own code reviews, design discussions, and task management.",
    ],
  },
  {
    id: "hexforge",
    role: "UI/UX Designer",
    company: "HexForge",
    location: "Remote (Contract)",
    period: "Oct 2025 – Jan 2026",
    highlights: [
      "Redesigned and implemented the UI system across 2 existing projects, replacing Unity's default debug UI with handmade designs that match each game's atmosphere.",
      "Fixed critical bugs and performance bottlenecks by reducing draw calls and optimizing CPU time with improved core system logic.",
    ],
  },
  {
    id: "tryvox",
    role: "Gameplay Engineer",
    company: "TryVox Studio",
    location: "On-site (Full-time)",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      "Built the whole interaction and movement system for Don't Touch My Dacha, a culturally themed simulator, in an 8-person team.",
      "Delivered core gameplay mechanics for the official trailer release.",
    ],
  },
  {
    id: "itic",
    role: "Unity Developer",
    company: "ITIC Games",
    location: "On-site (Full-time)",
    period: "Dec 2024 – Jun 2025",
    highlights: [
      "Built 6 hypercasual mobile prototypes and independently shipped 2 to the Play Store (1k+ downloads).",
      "Took part in code reviews and technical architecture discussions with senior developers.",
    ],
  },
];

const COMPETITIONS = [
  {
    id: "gamefest-2026",
    title: "Best Game Design",
    event: "GameFest 2026",
    period: "2026",
    badge: "Winner",
    badgeType: "accent",
    description:
      "Awarded Best Game Design at GameFest 2026 among competitive indie teams.",
    details: [
      "Engineered core gameplay mechanics, responsive 3C controls, and player feedback loops under strict game jam constraints.",
      "Recognized with 1st place Best Game Design honor.",
    ],
  },
  {
    id: "gamefest-2025",
    title: "2nd Place",
    event: "GameFest 2025",
    period: "2025",
    badge: "2nd Place",
    badgeType: "accent",
    description:
      "Awarded 2nd place overall at GameFest 2025.",
    details: [
      "Rapidly prototyped and delivered a complete playable build emphasizing tactile feel and custom shaders.",
      "Part of 3 competition awards totaling $3,730 in prizes.",
    ],
  },
  {
    id: "ai-hackathon",
    title: "2nd Place",
    event: "National AI Hackathon",
    period: "2026",
    badge: "2nd Place",
    badgeType: "trail",
    description:
      "2nd place at the National AI Hackathon for Shadow Economy Radar (shadow.claive.uz).",
    details: [
      "Built the full interactive frontend dashboard and integrated real-time anomaly detection alerts.",
      "Collaborated closely with data scientists to turn complex ML model outputs into intuitive visual workflows.",
    ],
  },
];

export default function ExperienceDropdown() {
  const [activeTab, setActiveTab] = useState("work"); // 'work' or 'competitions'
  const [openItems, setOpenItems] = useState({ tonto: true, "gamefest-2026": true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="exp-wrapper spot">
      {/* Tab Switcher */}
      <div className="exp-nav-tabs">
        <button
          type="button"
          className={`exp-nav-btn ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          Work Experience ({WORK_EXPERIENCES.length})
        </button>
        <button
          type="button"
          className={`exp-nav-btn ${activeTab === "competitions" ? "active" : ""}`}
          onClick={() => setActiveTab("competitions")}
        >
          Competitions & Hackathons ({COMPETITIONS.length})
        </button>
      </div>

      {/* Work Experience Tab */}
      {activeTab === "work" && (
        <div className="exp-list">
          {WORK_EXPERIENCES.map((job) => {
            const isOpen = !!openItems[job.id];
            return (
              <div
                key={job.id}
                className={`exp-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="exp-header-btn"
                  onClick={() => toggleItem(job.id)}
                  aria-expanded={isOpen}
                >
                  <div className="exp-title-group">
                    <h3>
                      <span>{job.role}</span>
                      <span className="exp-badge">{job.period}</span>
                    </h3>
                    <div className="exp-org">
                      {job.company} · {job.location}
                    </div>
                  </div>
                  <span className="exp-chevron">▾</span>
                </button>

                {isOpen && (
                  <div className="exp-content">
                    <ul>
                      {job.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Competitions & Hackathons Tab */}
      {activeTab === "competitions" && (
        <div className="exp-list">
          {COMPETITIONS.map((ev) => {
            const isOpen = !!openItems[ev.id];
            return (
              <div
                key={ev.id}
                className={`exp-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="exp-header-btn"
                  onClick={() => toggleItem(ev.id)}
                  aria-expanded={isOpen}
                >
                  <div className="exp-title-group">
                    <h3>
                      <span>{ev.title}</span>
                      <span
                        className={`exp-badge ${
                          ev.badgeType === "accent" ? "accent" : ""
                        }`}
                      >
                        {ev.badge}
                      </span>
                    </h3>
                    <div className="exp-org">
                      {[ev.event, ev.team, ev.period].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                  <span className="exp-chevron">▾</span>
                </button>

                {isOpen && (
                  <div className="exp-content">
                    <p>{ev.description}</p>
                    <ul>
                      {ev.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
