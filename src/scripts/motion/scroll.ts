/**
 * Scroll choreography — Lenis smooth scroll + GSAP ScrollTrigger.
 *
 * · Reveals: [data-reveal] elements fade/rise in as they enter the viewport.
 *   (CSS hides them only when <html> has .js, so no-JS users see everything.)
 * · Routes: each `.route-path` draws itself via stroke-dashoffset, scrubbed
 *   to scroll progress — the FPGA traces being "routed" section by section.
 * · Nav: active-section tracking, scroll progress bar, mobile menu, anchors.
 * Everything is skipped (content simply visible) under reduced motion.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { reduced } from './utils';

gsap.registerPlugin(ScrollTrigger);

/* ── Header: scrolled state ───────────────────────────────────────────── */
const header = document.getElementById('site-header');
const onScrollHeader = () =>
  header?.classList.toggle('scrolled', window.scrollY > 24);
onScrollHeader();
window.addEventListener('scroll', onScrollHeader, { passive: true });

/* ── Mobile menu ──────────────────────────────────────────────────────── */
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (header && menuToggle && mobileMenu) {
  const openLabel = menuToggle.getAttribute('data-label-open') ?? 'Open menu';
  const closeLabel = menuToggle.getAttribute('data-label-close') ?? 'Close menu';
  const setOpen = (open: boolean) => {
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? closeLabel : openLabel);
    if (open) mobileMenu.removeAttribute('hidden');
    else mobileMenu.setAttribute('hidden', '');
  };
  menuToggle.addEventListener('click', () =>
    setOpen(!document.body.classList.contains('menu-open'))
  );
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setOpen(false);
  });
}

/* ── Lenis smooth scroll ──────────────────────────────────────────────── */
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ── Anchor links ─────────────────────────────────────────────────────── */
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const hash = a.getAttribute('href');
    if (!hash || hash === '#') return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(hash, { offset: -72 });
    else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', hash);
  });
});

/* ── Scroll progress bar ──────────────────────────────────────────────── */
const bar = document.getElementById('progress-bar');
if (bar && !reduced) {
  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.4 },
  });
} else if (bar) {
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight || 1;
    bar.style.transform = `scaleX(${doc.scrollTop / max})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ── Active nav link ──────────────────────────────────────────────────── */
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.main-nav .nav-link'));
navLinks.forEach((link) => {
  const hash = link.getAttribute('href');
  const section = hash ? document.querySelector(hash) : null;
  if (!section) return;
  ScrollTrigger.create({
    trigger: section,
    start: 'top 55%',
    end: 'bottom 45%',
    onToggle: (self) => {
      if (self.isActive) {
        navLinks.forEach((l) => l.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'true');
      }
    },
  });
});

/* ── Reduced motion: static page, nothing more to do ──────────────────── */
if (reduced) {
  document.documentElement.classList.add('reduced');
} else {
  /* Reveals */
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  /* FPGA routes draw on scroll */
  document.querySelectorAll<SVGPathElement>('.route-path').forEach((path) => {
    const section = path.closest('section') ?? path;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len} ${len}`;
    path.style.strokeDashoffset = `${len}`;
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top 92%', end: 'top 38%', scrub: 0.5 },
    });
  });

  /* Junction nodes light up */
  document.querySelectorAll<SVGRectElement>('.route-node').forEach((node) => {
    const section = node.closest('section') ?? node;
    gsap.fromTo(
      node,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        scrollTrigger: { trigger: section, start: 'top 55%', once: true },
      }
    );
  });
}
