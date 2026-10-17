import React, { useState } from "react";

const PROJECTS = [
  {
    id: "desire-lines",
    title: "Desire Lines",
    tag: "Unity · PC",
    category: "game",
    status: "Upcoming",
    statusClass: "hi",
    isFeature: true,
    widthClass: "",
    desc: "A PSX-style driving roguelite with custom retro shaders, realistic vehicle suspension physics, and procedural mountain highways.",
  },
  {
    id: "zakovat-live",
    title: "Zakovat Live",
    tag: "React · Django",
    category: "web",
    status: "Completed",
    statusClass: "",
    isFeature: false,
    widthClass: "",
    desc: "A real-time party quiz platform. Players type free-text answers and see each other's guesses live with WebSocket scoring.",
  },
  {
    id: "jam-35lvl",
    title: "35 LVL entry",
    tag: "Unity · Jam",
    category: "game",
    status: "3 days",
    statusClass: "mute",
    isFeature: false,
    widthClass: "",
    desc: "A jam game built on the 'Independence Mechanic' theme, relying entirely on custom shaders rather than traditional 3D models.",
  },
  {
    id: "shadow-radar",
    title: "Shadow Economy Radar",
    tag: "AI · Hackathon",
    category: "web",
    status: "Hackathon",
    statusClass: "mute",
    isFeature: false,
    widthClass: "w3",
    desc: "An AI monitoring platform that flags informal economic activities, built in three days for the Umummilliy AI Xakaton in Qashqadaryo.",
  },
  {
    id: "car-chase",
    title: "Arcade Car Chase",
    tag: "Unity · Physics",
    category: "game",
    status: "Prototype",
    statusClass: "mute",
    isFeature: false,
    widthClass: "w3",
    desc: "A top-down chase game in Unity 6 featuring sphere-based arcade physics, dynamic chaser AI, and a manual gearbox system.",
  },
  {
    id: "arena-shooter",
    title: "Arena Shooter",
    tag: "WebGL · 3D Engine",
    category: "game",
    status: "Prototype",
    statusClass: "mute",
    isFeature: false,
    widthClass: "",
    desc: "A custom 3D perspective renderer with grappling hook momentum physics that preserve velocity during aerial swinging.",
  },
  {
    id: "trivia-duel",
    title: "Trivia Duel Mode",
    tag: "Unity · Netcode",
    category: "game",
    status: "Feature",
    statusClass: "mute",
    isFeature: false,
    widthClass: "",
    desc: "Multiplayer duels for a mobile trivia title featuring synchronized lobbies, turn-based matchmaking, and speed scoring.",
  },
  {
    id: "pixel-chefs",
    title: "Pixel Chefs",
    tag: "HTML · WebGL",
    category: "game",
    status: "Prototype",
    statusClass: "mute",
    isFeature: false,
    widthClass: "",
    desc: "A pixel-art kitchen time-management game with cook timers, combo scoring multipliers, and interactive utensil upgrades.",
  },
  {
    id: "cs2-generator",
    title: "CS2 Highlight Generator",
    tag: "Python · Cloud GPU",
    category: "tool",
    status: "In progress",
    statusClass: "mute",
    isFeature: false,
    widthClass: "w3",
    desc: "A local clip generator for CS2 demo files. Parsing, job queue, and dashboard run locally while heavy encoding offloads to GPU.",
  },
  {
    id: "shelf-chef",
    title: "ShelfChef",
    tag: "Django REST · PostgreSQL",
    category: "web",
    status: "Backend done",
    statusClass: "mute",
    isFeature: false,
    widthClass: "w3",
    desc: "A recipe and pantry management API with secure auth and intelligent recipe matching based on available ingredients at home.",
  },
  {
    id: "scrolls",
    title: "Scrolls",
    tag: "React · Web",
    category: "web",
    status: "Planning",
    statusClass: "mute",
    isFeature: false,
    widthClass: "w6",
    desc: "A reel-style platform for exploring curated artworks, featuring biographical context, artist following, and short architectural reflections.",
  },
];

export default function ProjectsBento() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Category Filter Buttons */}
      <div className="filters" role="group" aria-label="Filter projects">
        <button
          type="button"
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
        >
          All ({PROJECTS.length})
        </button>
        <button
          type="button"
          className={filter === "game" ? "active" : ""}
          onClick={() => setFilter("game")}
          aria-pressed={filter === "game"}
        >
          Games
        </button>
        <button
          type="button"
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
          aria-pressed={filter === "web"}
        >
          Web Systems
        </button>
        <button
          type="button"
          className={filter === "tool" ? "active" : ""}
          onClick={() => setFilter("tool")}
          aria-pressed={filter === "tool"}
        >
          Tools
        </button>
      </div>

      {/* Bento Grid */}
      <div className="bento">
        {filteredProjects.map((p) => {
          let cardClass = "p spot";
          if (p.isFeature) cardClass += " feature";
          if (p.widthClass) cardClass += ` ${p.widthClass}`;

          return (
            <article key={p.id} className={cardClass}>
              <div className="meta">
                <span className="label">{p.tag}</span>
                <span className={`status ${p.statusClass}`}>{p.status}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
