import React from "react";

const TOOLBOX_CATEGORIES = [
  {
    category: "Game Engine & Mechanics",
    skills: [
      "Unity",
      "C#",
      "3C Design (Char/Cam/Ctrl)",
      "Rapid Prototyping",
      "DoTween",
      "HLSL / Shaders",
      "Cinemachine",
      "Raycast Physics",
    ],
  },
  {
    category: "Architecture & Networking",
    skills: [
      "SOLID Principles",
      "MVP / MVVM",
      "VContainer (DI)",
      "FishNet (Multiplayer)",
      "UniTask (Async)",
      "Git / Git Flow",
    ],
  },
  {
    category: "Backend & Web Systems",
    skills: [
      "Python",
      "Django",
      "Django REST (DRF)",
      "React",
      "Vite",
      "WebSockets",
      "REST APIs",
    ],
  },
  {
    category: "Creative & Design Tools",
    skills: [
      "UI/UX Design",
      "Blender",
      "Photoshop",
      "Game Feel Tuning",
      "Post-Processing",
    ],
  },
];

export default function Toolbox() {
  return (
    <div className="toolbox-grid">
      {TOOLBOX_CATEGORIES.map((cat, idx) => (
        <div key={idx} className="toolbox-group spot">
          <h4>{cat.category}</h4>
          <div className="chips">
            {cat.skills.map((skill, sIdx) => (
              <span key={sIdx} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
