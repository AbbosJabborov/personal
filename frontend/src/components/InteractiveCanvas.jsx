import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const CAT_CONFIG = {
  catScale: 75,
  catElevation: 0,
  catPivotX: 0,
  catPivotZ: 0,
  catRotYDeg: 0,
  catPitchDeg: 0,
  catRollDeg: 0,
  pawSpread: 10,
  pawForwardOffset: 0,
  pawScale: 0.6,
  pawRotDeg: 90,
  pawSpacing: 35,
  maxSpeed: 7.5,
  accel: 0.15,
  animSpeedMult: 0.7,
  scrollSensitivity: 0.5,
};

export default function InteractiveCanvas({ onKeyDrive }) {
  const containerRef = useRef(null);
  const fieldRef = useRef(null);
  const linesRef = useRef(null);
  const threeCanvasRef = useRef(null);

  useEffect(() => {
    const back = fieldRef.current;
    const front = linesRef.current;
    const threeCanvas = threeCanvasRef.current;
    if (!back || !front || !threeCanvas) return;

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

    function fitHeat() {
      const rows = Math.ceil(Math.max(root.scrollHeight, H) / GAP) + RO + 40;
      if (rows * hc !== heat.length) heat = new Float32Array(rows * hc);
    }

    // --- THREE.JS SETUP FOR TOON CAT ---
    const scene = new THREE.Scene();
    const threeCamera = new THREE.PerspectiveCamera(36.87, W / H, 10, 10000);
    const renderer = new THREE.WebGLRenderer({
      canvas: threeCanvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(W, H);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Ambient & Directional Lights for Toon Cat
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffebd2, 1.8);
    dirLight.position.set(100, 300, 200);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x7ee6c1, 0.8);
    rimLight.position.set(-150, 100, -100);
    scene.add(rimLight);

    let catModel = null;
    let rawBox = null;
    let rawSize = null;
    let mixer = null;
    let walkAction = null;
    const catHolder = new THREE.Group();
    scene.add(catHolder);

    // Load Toon Cat Model
    const loader = new GLTFLoader();
    loader.load(
      "/models/toon_cat_free.glb",
      (gltf) => {
        const cat = gltf.scene;

        // Measure bounding box to normalize scale
        rawBox = new THREE.Box3().setFromObject(cat);
        rawSize = new THREE.Vector3();
        rawBox.getSize(rawSize);

        const initialScale = CAT_CONFIG.catScale / (rawSize.y || 1);
        cat.scale.set(initialScale, initialScale, initialScale);
        cat.position.y = -rawBox.min.y * initialScale + CAT_CONFIG.catElevation;
        cat.position.z =
          -((rawBox.min.z + rawBox.max.z) / 2) * initialScale + CAT_CONFIG.catPivotZ;
        cat.position.x =
          -((rawBox.min.x + rawBox.max.x) / 2) * initialScale + CAT_CONFIG.catPivotX;

        catHolder.add(cat);
        catModel = cat;

        // Setup Animations
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(cat);
          walkAction = mixer.clipAction(gltf.animations[0]);
          walkAction.play();
          walkAction.timeScale = 0; // Stand still initially
        }
      },
      undefined,
      (err) => console.warn("Toon cat model loading fallback:", err)
    );

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

      // Match Three.js camera FOV with custom projection
      threeCamera.fov = (2 * Math.atan((H / 2) / FL) * 180) / Math.PI;
      threeCamera.aspect = W / H;
      threeCamera.updateProjectionMatrix();
      renderer.setSize(W, H);

      fitHeat();
    }
    fit();
    window.addEventListener("resize", fit);

    function camera(sy) {
      CX = W / 2;
      CY = FL * CT;
      CZ = sy + H / 2 + FL * ST;

      // Sync Three.js camera position and exact ground target
      threeCamera.position.set(CX, CY, CZ);
      threeCamera.lookAt(CX, 0, sy + H / 2);
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
    unproject(W * 0.72, H * 0.42);
    let x = GX;
    let z = GZ;
    let a = Math.PI / 2; // Initial heading pointing downward toward the content!
    let v = 0;

    // Keys state - driven ONLY by keyboard or dpad controls
    const keys = { w: 0, a: 0, s: 0, d: 0 };
    window.__driveCar = function (k, on) {
      if (keys.hasOwnProperty(k)) {
        keys[k] = on ? 1 : 0;
        if (on && onKeyDrive) onKeyDrive();
      }
    };

    // Paw prints trail system
    const paws = [];
    let pawCount = 0;
    let lastPawDist = 0;
    let lastPawPos = { x, z };
    const PAW_LIFE = 2400; // ms
    const MAX_PAWS = 90;

    let cTrail = "#7ee6c1";
    let cAcc = "#5b46d6";
    let cMuted = "#a29db8";
    let frames = 0;
    let prevT = performance.now();

    function updateColors() {
      const st = getComputedStyle(root);
      cTrail = st.getPropertyValue("--trail").trim() || cTrail;
      cAcc = st.getPropertyValue("--accent2").trim() || cAcc;
      cMuted = st.getPropertyValue("--muted").trim() || cMuted;
    }
    updateColors();

    // Draw an authentic cat paw print (main pad + 4 toe beans)
    function drawCatPaw(px, pz, angle, alpha, scaleFactor) {
      fctx.save();
      fctx.translate(px, pz);
      fctx.rotate(angle);
      fctx.scale(scaleFactor, scaleFactor);

      fctx.fillStyle = cTrail;
      fctx.globalAlpha = Math.max(0, Math.min(1, alpha * 0.85));

      // 1. Main palm pad (rounded kidney/bean shape)
      fctx.beginPath();
      fctx.ellipse(0, 1, 4.2, 3.2, 0, 0, Math.PI * 2);
      fctx.fill();

      // 2. Four little toe beans in a curve
      const toes = [
        { x: -4.0, y: -4.0, r: 1.4 },
        { x: -1.5, y: -5.4, r: 1.5 },
        { x: 1.5, y: -5.4, r: 1.5 },
        { x: 4.0, y: -4.0, r: 1.4 },
      ];

      toes.forEach((t) => {
        fctx.beginPath();
        fctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
        fctx.fill();
      });

      fctx.restore();
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

      // --- MANUAL MOVEMENT PHYSICS ---
      const thr = keys.w - keys.s;
      const steer = keys.d - keys.a;

      const accel = CAT_CONFIG.accel;
      const maxSpd = CAT_CONFIG.maxSpeed;

      if (thr > 0) v += accel * k;
      else if (thr < 0) v -= (v > 0 ? 0.32 : 0.12) * k;
      else v *= Math.pow(0.965, k); // Smooth friction glide

      v = Math.max(-maxSpd * 0.4, Math.min(maxSpd, v));
      a += steer * 0.052 * k * Math.max(-1, Math.min(1, v / 2.8));

      const dx = Math.cos(a) * v * k;
      const dz = Math.sin(a) * v * k;
      x += dx;
      z += dz;

      // --- ANIMATION SPEED MATCHING ---
      const speed = Math.abs(v);
      if (mixer) {
        if (speed < 0.08) {
          // Idle / Stand still
          if (walkAction) walkAction.timeScale = 0;
        } else {
          // Dynamic gait: slow walk -> fast trot
          const playRate = Math.min(
            3.2,
            Math.max(0.4, speed * 0.42 * CAT_CONFIG.animSpeedMult)
          );
          if (walkAction) {
            walkAction.timeScale = playRate;
            mixer.update((dt / 1000) * playRate);
          }
        }
      }

      // --- SMOOTH PAGE SCROLLING WITH THE CAT ---
      pr(x, 0, z);
      const catScreenY = PY;
      const vz = Math.sin(a) * v; // Downward movement velocity

      if (speed > 0.2) {
        const currentScroll = window.scrollY;
        const maxScroll = Math.max(0, root.scrollHeight - H);
        const bottomZone = H * 0.64;
        const topZone = H * 0.34;
        const scrollSens = CAT_CONFIG.scrollSensitivity;

        // Walking DOWN -> Scroll page down
        if (vz > 0.1 && catScreenY > bottomZone && currentScroll < maxScroll - 2) {
          const ratio = Math.min(1, (catScreenY - bottomZone) / (H - bottomZone));
          const scrollStep = (vz * 1.5 + ratio * 5.5) * k * scrollSens;
          window.scrollBy({ top: scrollStep, left: 0, behavior: "instant" });
          sy = window.scrollY;
          prevSy = sy;
          camera(sy);
        }
        // Walking UP -> Scroll page up
        else if (vz < -0.1 && catScreenY < topZone && currentScroll > 2) {
          const ratio = Math.min(1, (topZone - catScreenY) / topZone);
          const scrollStep = (vz * 1.5 - ratio * 5.5) * k * scrollSens;
          window.scrollBy({ top: scrollStep, left: 0, behavior: "instant" });
          sy = window.scrollY;
          prevSy = sy;
          camera(sy);
        }
      }

      // Keep cat comfortably on screen
      const mg = 24;
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

      // Position Three.js 3D Cat Holder & apply rotations
      catHolder.position.set(x, 0, z);
      const rotY = Math.PI / 2 - a + ((CAT_CONFIG.catRotYDeg * Math.PI) / 180);
      const pitch = (CAT_CONFIG.catPitchDeg * Math.PI) / 180;
      const roll = (CAT_CONFIG.catRollDeg * Math.PI) / 180;
      catHolder.rotation.set(pitch, rotY, roll);

      // Render Three.js Cat Model
      renderer.render(scene, threeCamera);

      // --- CAT PAW PRINTS TRAILS ---
      lastPawDist += Math.hypot(x - lastPawPos.x, z - lastPawPos.z);
      if (speed > 0.3 && lastPawDist > CAT_CONFIG.pawSpacing) {
        lastPawDist = 0;
        lastPawPos = { x, z };
        pawCount++;
        const side = pawCount % 2 === 0 ? 1 : -1;

        const forwardX = Math.cos(a) * CAT_CONFIG.pawForwardOffset;
        const forwardZ = Math.sin(a) * CAT_CONFIG.pawForwardOffset;
        const spreadX = -Math.sin(a) * side * CAT_CONFIG.pawSpread;
        const spreadZ = Math.cos(a) * side * CAT_CONFIG.pawSpread;

        paws.push({
          t: ts,
          wx: x + spreadX + forwardX,
          wz: z + spreadZ + forwardZ,
          angle: a + ((CAT_CONFIG.pawRotDeg * Math.PI) / 180),
          scale: CAT_CONFIG.pawScale,
        });
      }

      while (paws.length && ts - paws[0].t > PAW_LIFE) paws.shift();
      if (paws.length > MAX_PAWS) paws.splice(0, paws.length - MAX_PAWS);

      fctx.clearRect(0, 0, W, H);
      for (let i = 0; i < paws.length; i++) {
        const p = paws[i];
        const age = ts - p.t;
        const alpha = 1 - age / PAW_LIFE;
        pr(p.wx, 0, p.wz);
        if (PY >= -20 && PY <= H + 20 && PX >= -20 && PX <= W + 20) {
          drawCatPaw(PX, PY, p.angle, alpha, PS * (p.scale || 1.0));
        }
      }

      // --- GROUND DOT MATRIX FIELD ---
      bctx.clearRect(0, 0, W, H);
      unproject(W / 2, -40);
      const zTop = GZ;
      unproject(W / 2, H + 40);
      const zBot = GZ;
      const R = 85 + speed * 8;
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
            const push = f * f * 14;
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
        pr(hotX[j], hh * hh * 14, hotZ[j]);
        const sz = (2 + hh * 3.5) * PS;
        bctx.globalAlpha = Math.min(1, 0.3 + hh * 0.8);
        bctx.fillStyle = hh > 0.5 ? cTrail : cAcc;
        bctx.fillRect(PX - sz / 2, PY - sz / 2, sz, sz);
      }
      bctx.globalAlpha = 1;

      // Cards light up & letters hop when cat passes
      pr(x, 18, z);
      const catPx = PX;
      const catPy = PY;

      if (frames % 2 === 0) {
        const spots = document.querySelectorAll(".spot");
        const letters = document.querySelectorAll(".ch");

        spots.forEach((el) => {
          const rc = el.getBoundingClientRect();
          const inside =
            rc.width > 0 &&
            catPx >= rc.left &&
            catPx <= rc.right &&
            catPy >= rc.top &&
            catPy <= rc.bottom;
          if (inside) {
            el.style.setProperty("--mx", `${catPx - rc.left}px`);
            el.style.setProperty("--my", `${catPy - rc.top}px`);
          }
          el.classList.toggle("lit", inside);
        });

        letters.forEach((el) => {
          const rc = el.getBoundingClientRect();
          const dist = Math.hypot(
            catPx - (rc.left + rc.width / 2),
            catPy - (rc.top + rc.height / 2)
          );
          el.classList.toggle("pop", dist < 52);
        });
      }
    }
    animId = requestAnimationFrame(step);

    // Keyboard handlers
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
      renderer.dispose();
    };
  }, [onKeyDrive]);

  return (
    <div ref={containerRef}>
      {/* Background ground dot field */}
      <canvas id="field" ref={fieldRef} aria-hidden="true" />

      {/* Cat paw print trails */}
      <canvas id="lines" ref={linesRef} aria-hidden="true" />

      {/* 3D Toon Cat WebGL Canvas */}
      <canvas id="cat-canvas" ref={threeCanvasRef} aria-hidden="true" />
    </div>
  );
}
