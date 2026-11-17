/**
 * Hero "Binary Rain" — Matrix-inspired falling streams of 0s and 1s.
 *
 * Monochrome, atmospheric, sophisticated:
 * · glyph palette of soft white, silver and grays (weighted toward gray/silver)
 * · head glyph slightly brighter (soft white/silver), tails fading out
 * · occasional, extremely subtle violet glyphs (~4%, dimmed alpha)
 * · slow fall speeds, 30fps cap, glyphs mutate gently instead of flickering
 * · renders only while the hero is on screen; pauses when the tab is hidden
 * · DPR clamped at 2, no shadowBlur/glow passes
 * · mobile: smaller glyphs, tighter columns, dimmer alpha
 * · prefers-reduced-motion: draws one static frozen rain field, no animation
 */
import { reduced, setupCanvas } from './utils';

const canvas = document.getElementById('hero-rain') as HTMLCanvasElement | null;

/* Glyph shades: soft white → silver → light gray → dim gray */
const SHADES = ['236, 238, 241', '205, 210, 217', '168, 174, 184', '128, 134, 144'];
const VIOLET = '142, 133, 194';

if (canvas) {
  let frame = setupCanvas(canvas);

  if (frame) {
    interface Column {
      x: number;      // px
      y: number;      // head position, px (starts above the viewport)
      speed: number;  // px/s
      len: number;    // trail length in glyphs
      seed: number;
    }

    let cols: Column[] = [];
    let fontSize = 13;
    let cellH = 18;
    let gap = 24;
    let headAlpha = 0.5;
    let tick = 0;

    const configure = () => {
      const w = canvas.clientWidth;
      fontSize = Math.max(11, Math.min(14, Math.round(w / 90)));
      cellH = Math.round(fontSize * 1.45);
      gap = Math.round(fontSize * 1.85);
      headAlpha = w < 640 ? 0.4 : 0.5;
    };

    const makeCol = (x: number, initial: boolean): Column => {
      const h = canvas.clientHeight;
      return {
        x,
        y: initial
          ? Math.random() * (h + cellH * 14) - cellH * 14 // spread across full height
          : -cellH * (2 + Math.random() * 10),            // re-enter from the top
        speed: 26 + Math.random() * 46,
        len: 8 + Math.floor(Math.random() * 8),
        seed: Math.random() * 1000,
      };
    };

    const buildCols = () => {
      configure();
      cols = [];
      const w = canvas.clientWidth;
      for (let x = gap / 2; x < w; x += gap) cols.push(makeCol(x, true));
    };

    // Deterministic pseudo-random values (no per-glyph state to store)
    const rand = (col: Column, i: number, salt: number): number => {
      const s =
        Math.sin(i * 12.9898 + col.seed * 78.233 + tick * 0.37 + salt * 7.771) *
        43758.5453;
      return s - Math.floor(s);
    };

    const glyphAt = (col: Column, i: number): string =>
      rand(col, i, 0) > 0.5 ? '1' : '0';

    /** -1 = violet accent, otherwise an index into SHADES */
    const shadeAt = (col: Column, i: number): number => {
      const r = rand(col, i, 1);
      if (r < 0.04) return -1;       // ~4% subtle violet
      if (r < 0.14) return 0;        // soft white
      if (r < 0.52) return 1;        // silver
      if (r < 0.82) return 2;        // light gray
      return 3;                      // dim gray
    };

    const draw = (dt: number) => {
      if (!frame) return;
      const { ctx, w, h } = frame;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${fontSize}px 'JetBrains Mono Variable', 'JetBrains Mono', monospace`;
      ctx.textAlign = 'center';

      for (const col of cols) {
        if (!reduced) col.y += col.speed * dt;

        for (let i = 0; i < col.len; i++) {
          const y = col.y - i * cellH;
          if (y < -cellH || y > h + cellH) continue;
          const fall = 1 - i / col.len;
          let a = Math.pow(fall, 1.6) * headAlpha * (i === 0 ? 1.25 : 1);

          const shade = shadeAt(col, i);
          if (shade === -1) {
            a *= 0.7; // violet stays whisper-quiet
            ctx.fillStyle = `rgba(${VIOLET}, ${a.toFixed(3)})`;
          } else {
            // Head glyph reads brighter: never dimmer than silver
            const idx = i === 0 ? Math.min(shade, 1) : shade;
            ctx.fillStyle = `rgba(${SHADES[idx]}, ${a.toFixed(3)})`;
          }
          ctx.fillText(glyphAt(col, i), col.x, y);
        }

        if (col.y - col.len * cellH > h + cellH) {
          Object.assign(col, makeCol(col.x, false));
        }
      }
    };

    buildCols();

    if (reduced) {
      // Static frozen rain field — one draw, never animated
      draw(0);
      // Re-render once fonts are ready so glyphs use JetBrains Mono
      document.fonts?.ready.then(() => draw(0));
    } else {
      let raf = 0;
      let heroVisible = false;
      let last = performance.now();
      const STEP = 1000 / 30; // 30fps cap

      const loop = (now: number) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(now - last, 120) / 1000;
        if (now - last < STEP) return;
        last = now;
        tick = (tick + 1) % 100000;
        draw(dt);
      };

      const startStop = (visible: boolean) => {
        if (visible && !raf) {
          last = performance.now();
          raf = requestAnimationFrame(loop);
        } else if (!visible && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      };

      const update = () => startStop(heroVisible && !document.hidden);

      new IntersectionObserver(([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      }).observe(canvas);

      document.addEventListener('visibilitychange', update);

      // Debounced resize → rebuild columns for the new geometry
      let resizeTimer = 0;
      window.addEventListener(
        'resize',
        () => {
          window.clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(() => {
            frame = setupCanvas(canvas);
            buildCols();
            if (reduced) draw(0);
          }, 150);
        },
        { passive: true }
      );
    }
  }
}
