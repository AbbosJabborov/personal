import React, { useState, useEffect, useRef } from "react";

export default function CommandPalette({ isOpen, onClose, onToggleTheme }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const COMMANDS = [
    { label: "About Me", target: "#about", type: "jump" },
    { label: "Experience & Competitions", target: "#experience", type: "jump" },
    { label: "Technical Toolbox", target: "#toolbox", type: "jump" },
    { label: "Selected Work & Projects", target: "#projects", type: "jump" },
    { label: "Off Duty Photo Gallery", target: "#photos", type: "jump" },
    { label: "Download CV / Resume (PDF)", target: "/Abbos_Jabborov_CV.pdf", type: "link" },
    { label: "Contact & Email", target: "#contact", type: "jump" },
    { label: "Toggle Light / Dark Theme", target: "theme", type: "action" },
  ];

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const executeCommand = (cmd) => {
    onClose();
    if (cmd.type === "link") {
      window.open(cmd.target, "_blank");
    } else if (cmd.target === "theme") {
      onToggleTheme();
    } else {
      const el = document.querySelector(cmd.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        Math.min(filteredCommands.length - 1, prev + 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(0, prev - 1));
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      executeCommand(filteredCommands[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="pal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="pal-box" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(0);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Jump to a section or toggle theme..."
          aria-label="Command search"
        />
        <ul>
          {filteredCommands.length === 0 ? (
            <li style={{ padding: "12px", color: "var(--muted)", fontSize: "14px" }}>
              No matching commands.
            </li>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <li key={cmd.label}>
                <button
                  type="button"
                  aria-selected={idx === selectedIndex}
                  onClick={() => executeCommand(cmd)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <span>{cmd.label}</span>
                  <small>{cmd.type === "jump" ? "jump" : "toggle"}</small>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
