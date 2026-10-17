import React, { useEffect, useRef } from "react";

export default function InteractiveCanvas({ onKeyDrive }) {
  const fieldRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    const back = fieldRef.current;
    const front = linesRef.current;
    if (!back || !front) return;

    const bctx = back.getContext("2d");
    const fctx = front.getContext("2d");
    const root = document.documentElement;

    let W = window.innerWidth;
    let H = window.innerHeight;
    const GAP = 30;
    const RO = 40;
    let cols = 0;
    let off = 0;
    let hc = 0;
    let heat = new Float32Array(0);

    const hotX = new Float32Array(1500);
    const hotZ = new Float32Array(1500);
    const hotH = new Float32Array(1500);

    const TILT = (36 * Math.PI) / 180;
    const ST = Math.sin(TILT);
    const CT = Math.cos(TILT);
    let FL = 1000;
    let CX = 0;
    let CY = 0;
    let CZ = 0;
    let PX = 0;
    let PY = 0;
    let PS = 1;
    let PD = 1;
    let GX = 0;
    let GZ = 0;

    const LX = -0.46;
    const LY = 0.82;
    const LZ = 0.34;
    const KS = 1.4;

    function fitHeat() {
      const rows = Math.ceil(Math.max(root.scrollHeight, H) / GAP) + RO + 40;
      if (rows * hc !== heat.length) heat = new Float32Array(rows * hc);
    }

    function fit() {
      const d = Math.min(2, window.devicePixelRatio || 1);
      W = window.innerWidth;
      H = window.innerHeight;
      [back, front].forEach((c) => {
        c.width = Math.round(W * d);
        c.height = Math.round(H * d);
      });
      bctx.setTransform(d, 0, 0, d, 0, 0);
      fctx.setTransform(d, 0, 0, d, 0, 0);
      cols = Math.ceil(W / GAP);
      off = cols + 2;
      hc = cols * 3 + 6;
      FL = 1.5 * Math.max(H, 600);
      fitHeat();
    }
    fit();
    window.addEventListener("resize", fit);

    function camera(sy) {
      CX = W / 2;
      CY = FL * CT;
      CZ = sy + H / 2 + FL * ST;
    }

    function pr(wx, wy, wz) {
      const vy = wy - CY;
      const vz = wz - CZ;
      const depth = -vy * CT - vz * ST;
      const yc = vy * ST - vz * CT;
      PD = depth;
      PS = FL / depth;
      PX = W / 2 + (wx - CX) * PS;
      PY = H / 2 - yc * PS;
    }

    function unproject(sx, sy_) {
      const dxc = (sx - W / 2) / FL;
      const dyc = -(sy_ - H / 2) / FL;
      let dirY = ST * dyc - CT;
      const dirZ = -CT * dyc - ST;
      if (dirY > -0.05) dirY = -0.05;
      const t = -CY / dirY;
      GX = CX + t * dxc;
      GZ = CZ + t * dirZ;
    }

    let prevSy = window.scrollY;
    camera(prevSy);
    unproject(W * 0.7, H * 0.45);
    let x = GX;
    let z = GZ;
    let a = Math.PI;
    let v = 0;

    // Keys state - driven ONLY by keyboard or dpad controls
    const keys = { w: 0, a: 0, s: 0, d: 0 };
    window.__driveCar = function (k, on) {
      if (keys.hasOwnProperty(k)) {
        keys[k] = on ? 1 : 0;
        if (on && onKeyDrive) onKeyDrive();
      }
    };

    const trail = [];
    let last = null;
    const LIFE = 1800;
    const MAXT = 120;
    let cAcc = "#5b46d6";
    let cTrail = "#0b8f6a";
    let cMuted = "#5a5675";
    let cBody = [212, 86, 15];
    let frames = 0;
    let prevT = performance.now();
    let ccs = 1;
    let csn = 0;

    const GLASS = [38, 34, 64];
    const TYRE = [26, 23, 38];

    function rgb(c) {
      const m = /^#([0-9a-f]{6})$/i.exec(c);
      if (m)
        return [
          parseInt(m[1].slice(0, 2), 16),
          parseInt(m[1].slice(2, 4), 16),
          parseInt(m[1].slice(4, 6), 16),
        ];
      const ma = /rgba?\((\d+)[ ,]+(\d+)[ ,]+(\d+)/.exec(c);
      return ma ? [+ma[1], +ma[2], +ma[3]] : [212, 86, 15];
    }

    function shade(c, f) {
      return `rgb(${Math.round(Math.min(255, c[0] * f))},${Math.round(
        Math.min(255, c[1] * f)
      )},${Math.round(Math.min(255, c[2] * f))})`;
    }

    function updateColors() {
      const st = getComputedStyle(root);
      cAcc = st.getPropertyValue("--accent2").trim() || cAcc;
      cTrail = st.getPropertyValue("--trail").trim() || cTrail;
      cMuted = st.getPropertyValue("--muted").trim() || cMuted;
      cBody = rgb(st.getPropertyValue("--accent").trim());
    }
    updateColors();

    function drawBox(x0, x1, y0, y1, h0, h1, topC, sideC, emis) {
      const F = [
        [1, 0, 0, [[x1, y0, h0], [x1, y1, h0], [x1, y1, h1], [x1, y0, h1]]],
        [-1, 0, 0, [[x0, y1, h0], [x0, y0, h0], [x0, y0, h1], [x0, y1, h1]]],
        [0, 1, 0, [[x1, y1, h0], [x0, y1, h0], [x0, y1, h1], [x1, y1, h1]]],
        [0, -1, 0, [[x0, y0, h0], [x1, y0, h0], [x1, y0, h1], [x0, y0, h1]]],
        [0, 0, 1, [[x0, y0, h1], [x1, y0, h1], [x1, y1, h1], [x0, y1, h1]]],
      ];
      for (let i = 0; i < F.length; i++) {
        const f = F[i];
        const P = f[3];
        const sxs = [];
        const sys = [];
        let mx = 0;
        let my = 0;
        let mz = 0;
        for (let n = 0; n < 4; n++) {
          const wx = x + (ccs * P[n][0] - csn * P[n][1]) * KS;
          const wz = z + (csn * P[n][0] + ccs * P[n][1]) * KS;
          const wy = P[n][2] * KS;
          mx += wx;
          my += wy;
          mz += wz;
          pr(wx, wy, wz);
          sxs.push(PX);
          sys.push(PY);
        }
        mx /= 4;
        my /= 4;
        mz /= 4;
        const nx = ccs * f[0] - csn * f[1];
        const nz = csn * f[0] + ccs * f[1];
        const ny = f[2];
        if (nx * (CX - mx) + ny * (CY - my) + nz * (CZ - mz) <= 0) continue;
        if (emis) fctx.fillStyle = sideC;
        else
          fctx.fillStyle = shade(
            f[2] ? topC : sideC,
            (0.5 + 0.5 * Math.max(0, nx * LX + ny * LY + nz * LZ)) * 1.05
          );
        fctx.beginPath();
        fctx.moveTo(sxs[0], sys[0]);
        fctx.lineTo(sxs[1], sys[1]);
        fctx.lineTo(sxs[2], sys[2]);
        fctx.lineTo(sxs[3], sys[3]);
        fctx.closePath();
        fctx.fill();
        fctx.stroke();
      }
    }

    function groundQuad(pts, dx, dz) {
      fctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        pr(
          x + (ccs * pts[i][0] - csn * pts[i][1]) * KS + dx,
          0,
          z + (csn * pts[i][0] + ccs * pts[i][1]) * KS + dz
        );
        if (i) fctx.lineTo(PX, PY);
        else fctx.moveTo(PX, PY);
      }
      fctx.closePath();
      fctx.fill();
    }

    function drawCar() {
      ccs = Math.cos(a);
      csn = Math.sin(a);
      fctx.globalAlpha = 1;
      fctx.fillStyle = "rgba(255, 229, 138, 0.13)";
      groundQuad([[23, -7], [23, 7], [115, 28], [115, -28]], 0, 0);
      fctx.fillStyle = "rgba(0, 0, 0, 0.26)";
      groundQuad([[-26, -14], [26, -14], [26, 14], [-26, 14]], 4, 5);
      fctx.lineWidth = 1;
      fctx.lineJoin = "round";
      fctx.strokeStyle = "rgba(0, 0, 0, 0.35)";
      pr(x, 8 * KS, z);
      const dC = PD;
      const near = [];
      [[-14, -1], [-14, 1], [14, -1], [14, 1]].forEach((w) => {
        const lx = w[0];
        const ly = w[1] * 12.5;
        pr(x + (ccs * lx - csn * ly) * KS, 4 * KS, z + (csn * lx + ccs * ly) * KS);
        const box = [
          lx - 5.5,
          lx + 5.5,
          w[1] > 0 ? 10 : -15,
          w[1] > 0 ? 15 : -10,
          0,
          9,
        ];
        if (PD > dC)
          drawBox(box[0], box[1], box[2], box[3], box[4], box[5], TYRE, TYRE, false);
        else near.push(box);
      });
      drawBox(-22, 22, -11, 11, 4, 14, cBody, cBody, false);
      drawBox(22, 23.5, -9, -4, 7, 11, null, "#ffe58a", true);
      drawBox(22, 23.5, 4, 9, 7, 11, null, "#ffe58a", true);
      drawBox(-23.5, -22, -9.5, -5, 7, 10, null, "#ff4b4b", true);
      drawBox(-23.5, -22, 5, 9.5, 7, 10, null, "#ff4b4b", true);
      drawBox(
        -10,
        10,
        -8.5,
        8.5,
        14,
        23,
        [cBody[0] * 0.85, cBody[1] * 0.85, cBody[2] * 0.85],
        GLASS,
        false
      );
      near.forEach((b) => {
        drawBox(b[0], b[1], b[2], b[3], b[4], b[5], TYRE, TYRE, false);
      });
    }

    let animId = null;
    function step(ts) {
      animId = requestAnimationFrame(step);
      const dt = Math.min(48, ts - prevT);
      prevT = ts;
      if (document.hidden) return;
      const k = dt / 16.667;
      let sy = window.scrollY;
      if (frames++ % 40 === 0) updateColors();
      camera(sy);
      z += sy - prevSy;
      prevSy = sy;

      // MANUAL CAR CONTROL ONLY (No cursor chasing!)
      const thr = keys.w - keys.s;
      const steer = keys.d - keys.a;
      if (thr > 0) v += 0.16 * k;
      else if (thr < 0) v -= (v > 0 ? 0.3 : 0.1) * k;
      else v *= Math.pow(0.97, k); // Smooth friction decay

      v = Math.max(-2.8, Math.min(7.5, v));
      a += steer * 0.05 * k * Math.max(-1, Math.min(1, v / 3));

      x += Math.cos(a) * v * k;
      z += Math.sin(a) * v * k;

      // Driving near viewport edge smooth-scrolls page
      if (Math.abs(v) > 0.3) {
        const zone = Math.min(170, H * 0.28);
        const b0 = window.scrollY;
        const maxS = root.scrollHeight - H;
        const vz = Math.sin(a) * v;
        pr(x, 0, z);
        const scy = PY;
        const scl = PS;
        if (vz > 0 && scy > H - zone && b0 < maxS - 1) {
          window.scrollBy({
            top: ((scy - (H - zone)) / scl) * 0.5,
            left: 0,
            behavior: "instant",
          });
        } else if (vz < 0 && scy < zone && b0 > 0) {
          window.scrollBy({
            top: ((scy - zone) / scl) * 0.5,
            left: 0,
            behavior: "instant",
          });
        }
        sy = window.scrollY;
        prevSy = sy;
        camera(sy);
      }

      // Keep car on screen margins
      const mg = 16;
      unproject(W / 2, mg);
      const zt = GZ;
      unproject(W / 2, H - mg);
      const zb = GZ;
      const nz = Math.max(zt, Math.min(zb, z));
      const hw = (W / 2 - mg) / (FL / (CY * CT - (nz - CZ) * ST));
      const nx = Math.max(CX - hw, Math.min(CX + hw, x));
      if (nx !== x || nz !== z) v *= 0.92;
      x = nx;
      z = nz;

      // Desire lines
      const cs = Math.cos(a);
      const sn = Math.sin(a);
      if (Math.abs(v) > 0.4) {
        if (!last || Math.hypot(x - last.x, z - last.z) > 4) {
          trail.push({
            t: ts,
            cx: x - cs * 14 * KS,
            cz: z - sn * 14 * KS,
            lx: x - (cs * 14 - sn * 12.5) * KS,
            lz: z - (sn * 14 + cs * 12.5) * KS,
            rx: x - (cs * 14 + sn * 12.5) * KS,
            rz: z - (sn * 14 - cs * 12.5) * KS,
            s: !last,
          });
          last = { x, z };
        }
      } else {
        last = null;
      }
      while (trail.length && ts - trail[0].t > LIFE) trail.shift();
      if (trail.length > MAXT) trail.splice(0, trail.length - MAXT);

      fctx.clearRect(0, 0, W, H);
      fctx.lineCap = "round";
      fctx.strokeStyle = cTrail;
      for (let i = 1; i < trail.length; i++) {
        const p = trail[i];
        const q = trail[i - 1];
        if (p.s) continue;
        const al = 1 - (ts - p.t) / LIFE;
        pr(q.cx, 0, q.cz);
        const ax = PX;
        const ay = PY;
        pr(p.cx, 0, p.cz);
        const bx = PX;
        const by = PY;
        const ps = PS;
        if ((ay < -30 && by < -30) || (ay > H + 30 && by > H + 30)) continue;
        fctx.globalAlpha = 0.14 * al;
        fctx.lineWidth = 24 * ps;
        fctx.beginPath();
        fctx.moveTo(ax, ay);
        fctx.lineTo(bx, by);
        fctx.stroke();
        fctx.globalAlpha = 0.75 * al;
        fctx.lineWidth = 2.4 * ps;
        fctx.beginPath();
        pr(q.lx, 0, q.lz);
        fctx.moveTo(PX, PY);
        pr(p.lx, 0, p.lz);
        fctx.lineTo(PX, PY);
        pr(q.rx, 0, q.rz);
        fctx.moveTo(PX, PY);
        pr(p.rx, 0, p.rz);
        fctx.lineTo(PX, PY);
        fctx.stroke();
      }
      fctx.globalAlpha = 1;

      // Ground dot field
      bctx.clearRect(0, 0, W, H);
      unproject(W / 2, -40);
      const zTop = GZ;
      unproject(W / 2, H + 40);
      const zBot = GZ;
      const R = 90 + Math.abs(v) * 9;
      const R2 = R * R;
      let nh = 0;
      const r0 = Math.max(-RO, Math.floor(zTop / GAP) - 1);
      const r1 = Math.ceil(zBot / GAP) + 1;
      bctx.fillStyle = cMuted;
      for (let r = r0; r <= r1; r++) {
        const gz = r * GAP;
        const rvz = gz - CZ;
        const dep = CY * CT - rvz * ST;
        if (dep < 80) continue;
        const rs = FL / dep;
        const rowY = H / 2 - (-CY * ST - rvz * CT) * rs;
        if (rowY < -30 || rowY > H + 50) continue;
        const base = (r + RO) * hc;
        if (base + hc > heat.length) break;
        const c0 = Math.max(0, Math.floor((CX + (-30 - W / 2) / rs) / GAP) + off);
        const c1 = Math.min(
          hc - 1,
          Math.ceil((CX + (W + 30 - W / 2) / rs) / GAP) + off
        );
        bctx.globalAlpha = 0.3 * Math.max(0.35, Math.min(1.2, rs));
        const dsz = Math.max(1.4, 2 * rs);
        for (let c = c0; c <= c1; c++) {
          const gx = (c - off) * GAP;
          const idx = base + c;
          let h = heat[idx] * 0.955;
          const ddx = gx - x;
          const ddz = gz - z;
          const d2 = ddx * ddx + ddz * ddz;
          let hx = gx;
          let hz = gz;
          if (d2 < R2) {
            const dd = Math.sqrt(d2) || 1;
            const f = 1 - dd / R;
            if (f > h) h = f;
            const push = f * f * 16;
            hx += (ddx / dd) * push;
            hz += (ddz / dd) * push;
          }
          if (h < 0.03) {
            heat[idx] = 0;
            bctx.fillRect(
              W / 2 + (gx - CX) * rs - dsz / 2,
              rowY - dsz / 2,
              dsz,
              dsz
            );
          } else {
            heat[idx] = h;
            if (nh < hotX.length) {
              hotX[nh] = hx;
              hotZ[nh] = hz;
              hotH[nh] = h;
              nh++;
            }
          }
        }
      }
      for (let j = 0; j < nh; j++) {
        const hh = hotH[j];
        pr(hotX[j], hh * hh * 16, hotZ[j]);
        const sz = (2 + hh * 3.5) * PS;
        bctx.globalAlpha = Math.min(1, 0.3 + hh * 0.8);
        bctx.fillStyle = hh > 0.5 ? cTrail : cAcc;
        bctx.fillRect(PX - sz / 2, PY - sz / 2, sz, sz);
      }
      bctx.globalAlpha = 1;

      drawCar();
      pr(x, 9 * KS, z);
      const carX = PX;
      const carY = PY;

      // Cards light up and letters hop when car passes
      if (frames % 2 === 0) {
        const spots = document.querySelectorAll(".spot");
        const letters = document.querySelectorAll(".ch");

        spots.forEach((el) => {
          const rc = el.getBoundingClientRect();
          const inside =
            rc.width > 0 &&
            carX >= rc.left &&
            carX <= rc.right &&
            carY >= rc.top &&
            carY <= rc.bottom;
          if (inside) {
            el.style.setProperty("--mx", `${carX - rc.left}px`);
            el.style.setProperty("--my", `${carY - rc.top}px`);
          }
          el.classList.toggle("lit", inside);
        });

        letters.forEach((el) => {
          const rc = el.getBoundingClientRect();
          const dist = Math.hypot(
            carX - (rc.left + rc.width / 2),
            carY - (rc.top + rc.height / 2)
          );
          el.classList.toggle("pop", dist < 48);
        });
      }
    }
    animId = requestAnimationFrame(step);

    // Keyboard controls
    function isTyping(t) {
      return (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.tagName === "SELECT" ||
          t.isContentEditable)
      );
    }

    function handleKeyDown(e) {
      if (e.ctrlKey || e.metaKey || e.altKey || isTyping(e.target)) return;
      const k = e.key.toLowerCase();
      let keyMapped = null;
      if (k === "w" || k === "arrowup") keyMapped = "w";
      if (k === "a" || k === "arrowleft") keyMapped = "a";
      if (k === "s" || k === "arrowdown") keyMapped = "s";
      if (k === "d" || k === "arrowright") keyMapped = "d";

      if (keyMapped) {
        keys[keyMapped] = 1;
        if (onKeyDrive) onKeyDrive();
      }
    }

    function handleKeyUp(e) {
      const k = e.key.toLowerCase();
      let keyMapped = null;
      if (k === "w" || k === "arrowup") keyMapped = "w";
      if (k === "a" || k === "arrowleft") keyMapped = "a";
      if (k === "s" || k === "arrowdown") keyMapped = "s";
      if (k === "d" || k === "arrowright") keyMapped = "d";

      if (keyMapped) {
        keys[keyMapped] = 0;
      }
    }

    function handleBlur() {
      keys.w = keys.a = keys.s = keys.d = 0;
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", fit);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
      delete window.__driveCar;
    };
  }, [onKeyDrive]);

  return (
    <>
      <canvas id="field" ref={fieldRef} aria-hidden="true" />
      <canvas id="lines" ref={linesRef} aria-hidden="true" />
    </>
  );
}
