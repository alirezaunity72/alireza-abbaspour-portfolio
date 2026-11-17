/**
 * Layer A — ambient routing activity.
 * A fixed full-viewport canvas over the static CSS dot fabric, drawing a
 * soft silver glow that follows the pointer (lerped), like routing current.
 * Skipped entirely under prefers-reduced-motion (CSS fabric remains).
 */
import { reduced, setupCanvas } from './utils';

const canvas = document.getElementById('bg-grid') as HTMLCanvasElement | null;

if (canvas && !reduced) {
  let ctx = setupCanvas(canvas);
  if (ctx) {
    let raf = 0;
    const pointer = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4 };

    const resize = () => {
      const next = setupCanvas(canvas);
      if (next) ctx = next;
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener(
      'pointermove',
      (e) => {
        pointer.tx = e.clientX;
        pointer.ty = e.clientY;
      },
      { passive: true }
    );

    const loop = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;

      ctx.ctx.clearRect(0, 0, ctx.w, ctx.h);

      const R = 240;
      const g = ctx.ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, R);
      g.addColorStop(0, 'rgba(205, 210, 217, 0.06)');
      g.addColorStop(1, 'rgba(205, 210, 217, 0)');
      ctx.ctx.fillStyle = g;
      ctx.ctx.fillRect(pointer.x - R, pointer.y - R, R * 2, R * 2);

      raf = requestAnimationFrame(loop);
    };

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        raf = requestAnimationFrame(loop);
      }
    });

    raf = requestAnimationFrame(loop);
  }
}
