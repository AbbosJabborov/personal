import React, { useState, useEffect } from "react";

export default function CarHUD({ isDriving }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Auto hide after 7 seconds or when user has engaged with driving
    const timer = setTimeout(() => {
      setVisible(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDriving) {
      // Hide quickly once the user starts driving
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isDriving]);

  const handleDpadPress = (k) => {
    if (window.__driveCar) {
      window.__driveCar(k, true);
    }
  };

  const handleDpadRelease = (k) => {
    if (window.__driveCar) {
      window.__driveCar(k, false);
    }
  };

  return (
    <>
      {/* Desktop HUD: positioned on the right side upon entering */}
      <div
        className={`car-hud-right ${visible ? "" : "hidden"}`}
        aria-live="polite"
      >
        <span className="keys">
          <kbd>W</kbd>
          <kbd>A</kbd>
          <kbd>S</kbd>
          <kbd>D</kbd>
        </span>
        <span>drive car</span>
        <button
          type="button"
          className="hud-close"
          onClick={() => setVisible(false)}
          aria-label="Dismiss controls hint"
        >
          ×
        </button>
      </div>

      {/* Mobile Touch D-Pad */}
      <div className="dpad" aria-label="Drive controls">
        <button
          type="button"
          className="w"
          onPointerDown={(e) => {
            e.preventDefault();
            handleDpadPress("w");
          }}
          onPointerUp={() => handleDpadRelease("w")}
          onPointerLeave={() => handleDpadRelease("w")}
          aria-label="Forward"
        >
          W
        </button>
        <button
          type="button"
          className="a"
          onPointerDown={(e) => {
            e.preventDefault();
            handleDpadPress("a");
          }}
          onPointerUp={() => handleDpadRelease("a")}
          onPointerLeave={() => handleDpadRelease("a")}
          aria-label="Steer left"
        >
          A
        </button>
        <button
          type="button"
          className="s"
          onPointerDown={(e) => {
            e.preventDefault();
            handleDpadPress("s");
          }}
          onPointerUp={() => handleDpadRelease("s")}
          onPointerLeave={() => handleDpadRelease("s")}
          aria-label="Brake or reverse"
        >
          S
        </button>
        <button
          type="button"
          className="d"
          onPointerDown={(e) => {
            e.preventDefault();
            handleDpadPress("d");
          }}
          onPointerUp={() => handleDpadRelease("d")}
          onPointerLeave={() => handleDpadRelease("d")}
          aria-label="Steer right"
        >
          D
        </button>
      </div>
    </>
  );
}
