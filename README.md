# Signal & Silicon — Portfolio

Premium, interactive portfolio for **Alireza Abbaspour** — M.Sc. student in Digital
Electronics (IUST). Monochrome identity: deep black, silver accents, restrained violet
for AI content. Binary-rain hero, FPGA routing grid, scroll-choreographed reveals.

**Content policy: no placeholders.** Anything not explicitly confirmed is omitted —
sections, nav links and buttons appear automatically when real data is added.

## Stack

- **Astro** (static output) + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`) — design tokens in `src/styles/global.css` (`@theme`)
- **Content collections** — validated markdown for future projects
- **GSAP + ScrollTrigger** — scroll choreography · **Lenis** — smooth scrolling
- Self-hosted variable fonts (Space Grotesk / Inter / JetBrains Mono / Vazirmatn) via Fontsource

## Bilingual EN | FA

- **English at `/`** — the original design, untouched.
- **Persian at `/fa/`** — full RTL layout, Vazirmatn typeface, Persian copy in
  `src/data/profile-fa.ts`. Language switcher **English | فارسی** in the header.
- Small technical / monospaced labels, abbreviations and engineering terms
  (FPGA, DSP, VHDL, RTL, AI, CAD, CNC, G-code, `01 // ABOUT`, `S1 // SKILL`, …)
  stay **English in both versions** by design; tool names stay Latin; dates use
  Persian digits on the FA page.
- Language resolution lives in `src/data/i18n.ts` (`getI18n(lang)`), and every
  component takes a `lang` prop. When a real domain is set, `hreflang`/canonical
  alternates activate automatically.

## Quickstart

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## How to update

**1. All personal data → `src/data/profile.ts` (EN) + `src/data/profile-fa.ts` (FA)**
Name, kicker, headline, About paragraphs, email, socials, interests, skills,
education, experience, research cards, nav/section labels. An empty
string/array means the corresponding UI is omitted — filling it makes it
appear. The FA file must mirror the EN file's structure.

Skills are a flat list of `{ name, desc }` items (one card per skill, in the
order given) — no grouping or proficiency levels.

**2. Section order** — About → Education → Skills → Research Interests →
Projects (when projects exist) → Experience → Contact. The order lives in
`src/layouts/Base.astro` and `src/components/SiteHeader.astro`; section numbers
(`01 // …`) are set per component. Education / research / interest edits also
live in the profile files.

**3. Projects (future) → `src/content/projects/`**
Drop one markdown file per project and the Projects section, its nav link and the
hero CTA reappear automatically (the component renders nothing until then):

```yaml
---
title: "Your Project"
summary: "What it does, how you built it, the result."
stack: ["VHDL", "FPGA"]
github: "https://github.com/you/repo"   # optional
image: "/projects/your-image.jpg"       # optional → file in public/projects/
status: "completed"                     # completed | in-progress
order: 1
---
```

**4. CV** — no CV button renders anywhere right now. To add one later: drop the
PDF at `public/cv.pdf`, then wire it in `Hero.astro` and `Contact.astro`.

**5. Theme** — colors/fonts in the `@theme` block of `src/styles/global.css`.
Persian typography and RTL mirrors live at the bottom of the same file.

The Experience section (industrial + internship) renders from the profile
data when entries exist; Contact renders once an email is set.

## Accessibility & motion

- Skip link, semantic landmarks, visible focus states, AA contrast.
- `prefers-reduced-motion`: Lenis, reveals, canvases and route animations are all
  disabled — content is simply visible.
- Works without JavaScript (all content readable, grid becomes a static pattern).

## Deploy (free)

1. Push this folder to a GitHub repository.
2. **Vercel** → *Add New Project* → import the repo → deploy (auto on every push).
   If Vercel is unavailable in your region, the build is fully static —
   **GitHub Pages** works identically (set `site`/base in `astro.config.mjs`).
3. After deploying, set `site` in `astro.config.mjs` and `url` in
   `src/data/profile.ts` **and** `src/data/profile-fa.ts` — canonical/OG/hreflang
   tags activate automatically for both language versions.
