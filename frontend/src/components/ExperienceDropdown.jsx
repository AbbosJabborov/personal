import React, { useState } from "react";

const WORK_EXPERIENCES = [
  {
    id: "tonto",
    role: "Co-founder, Gameplay Programmer & Designer",
    company: "Tonto Studio",
    location: "Tashkent, Uzbekistan",
    period: "2025 – Present",
    status: "Active Studio",
    highlights: [
      "Desire Lines — Leading gameplay programming for the studio's primary PC release heading to Steam.",
      "Unity 6 Systems & Physics — Built realistic arcade vehicle physics, custom suspension raycasts, and modular movement systems.",
      "Custom Shaders — Wrote HLSL/Shader Graph pipelines for PSX/retro aesthetics, procedural vertex wobble, and dynamic outlines.",
      "Game Design & Ideation — Led design sprints on co-op puzzle mechanics, tactile camera systems, and player feedback loops.",
      "Studio Operations — Architected studio web platforms and prepared IT Park Uzbekistan residency application materials.",
    ],
  },
  {
    id: "freelance-systems",
    role: "Independent Gameplay & Web Systems Developer",
    company: "Self-Employed / Open Source",
    location: "Remote",
    period: "2024 – Present",
    status: "Ongoing",
    highlights: [
      "Engineered full-stack interactive web experiences combining React, Three.js, and Django REST Framework.",
      "Authored custom WebGL/Canvas visualizers and real-time multiplayer duel prototypes.",
      "Maintains open-source game tools, shader snippets, and responsive developer utilities.",
    ],
  },
];

const COMPETITIONS = [
  {
    id: "gamefest-2026",
    title: "Best Game Design Nomination",
    event: "Gamefest 26",
    team: "Team All Hail Uncle Bao",
    period: "February 2026",
    badge: "Top 3 Finalist",
    badgeType: "accent",
    description:
      "48-hour game jam prototype centered on synchronous echoes and temporal rewind mechanics.",
    details: [
      "Designed and coded core character movement and time-rewind ghost recording loops at 60Hz.",
      "Authored custom dissolve and retro post-processing shaders that caught the judges' attention.",
      "Earned an official nomination for Best Game Design among 150+ competitors.",
    ],
  },
  {
    id: "jam-35lvl",
    title: "Independence Mechanic Jam",
    event: "35 LVL Jam",
    team: "Two-Person Duo",
    period: "January 2026",
    badge: "Completed",
    badgeType: "trail",
    description:
      "Rapid three-day indie game sprint focusing on inventive mechanics without relying on external art assets.",
    details: [
      "Acted as primary gameplay programmer, implementing custom shaders to carry the entire visual look.",
      "Engineered responsive controls and level pacing within a strict 72-hour timeframe.",
    ],
  },
  {
    id: "ai-xakaton",
    title: "Umummilliy AI Xakaton — Qashqadaryo",
    event: "National AI Hackathon",
    team: "Team of 5 Engineers",
    period: "2026",
    badge: "Hackathon",
    badgeType: "trail",
    description:
      "State-wide hackathon challenge focusing on AI-assisted anomaly detection in economic transactions.",
    details: [
      "Built the Shadow Economy Radar frontend dashboard and integrated real-time anomaly flagging endpoints.",
      "Collaborated closely with data scientists to turn complex ML model outputs into intuitive visual alerts.",
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
                      {ev.event} · {ev.team} · {ev.period}
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
