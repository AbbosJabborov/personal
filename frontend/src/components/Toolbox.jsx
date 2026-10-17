import React from "react";

const TOOLBOX_CATEGORIES = [
  {
    category: "Game Engines & Graphics",
    skills: [
      "Unity 6",
      "C#",
      "Godot",
      "HLSL / Shaders",
      "Shader Graph",
      "URP",
      "Cinemachine",
      "Netcode",
      "Raycast Physics",
    ],
  },
  {
    category: "Web & Backend Systems",
    skills: [
      "React",
      "Vite",
      "Python",
      "Django REST",
      "PostgreSQL",
      "SQLite",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    category: "Workflow & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Cloudflare",
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
