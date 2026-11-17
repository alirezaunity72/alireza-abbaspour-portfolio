/** Shared motion helpers. */

export const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Cap devicePixelRatio at 2 — retina crispness without overdraw. */
export const clampDPR = Math.min(
  typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
  2
);

/** Resize a canvas for its CSS box, returns its 2D context (or null). */
export function setupCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const dpr = clampDPR;
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  canvas.width = Math.max(1, Math.round(w * dpr));
  canvas.height = Math.max(1, Math.round(h * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}
