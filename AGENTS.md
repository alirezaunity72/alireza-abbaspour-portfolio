# Project Context — Alireza Abbaspour Portfolio

Bilingual (EN/FA) static portfolio for Alireza Abbaspour — electrical engineer,
M.Sc. Digital Electronics student at IUST. Monochrome "Signal & Silicon"
identity. **Do not redesign or change content beyond explicit user requests.**

## Production (verified 2026-11-17)

- **Live canonical URL:** https://alirezaunity72.github.io (EN default at `/`,
  FA RTL at `/fa/`). Verified from Iran with VPN OFF.
- **Hosting:** GitHub Pages user site — repo
  `alirezaunity72/alirezaunity72.github.io` (public, branch `main`, root path,
  legacy build). Contains built `dist/*` + `.nojekyll` (required for
  `/_astro/` assets — never delete it). Source commit `bdac941`.
- **Source repo:** `alirezaunity72/alireza-abbaspour-portfolio` (Astro source,
  commit `d1fa710` = canonical URLs on github.io + full deployment log).
- **Old mirror:** `ali-abbaspour.pages.dev` (Cloudflare Pages, direct-upload,
  wrangler OAuth persists) — still deployed but **ISP-blocked in Iran**
  (SNI-level `*.pages.dev` filter, diagnosis in interview-notes.md). Keep as
  non-Iran mirror only; do not treat as canonical. User forbids Vercel.

## Deploy procedure (after content edits)

1. `npx astro build` (prepend `C:\Program Files\nodejs` to PATH) — build is
   authoritative; only benign warnings: empty `projects` collection.
2. Copy `dist/*` into a clean dir, add `.nojekyll`, commit, push to
   `alirezaunity72/alirezaunity72.github.io` `main`. Pages auto-rebuilds
   (~1 min). Also commit source edits to the source repo.
3. Verify live before claiming done: EN `/` + FA `/fa/` 200, RTL, 7 skill
   cards both languages, switcher "English | فارسی", 0 console errors,
   0 horizontal overflow at 375/390/768/1024, canonical tags on github.io.

## Hard content rules (established + approved)

- No invented content/placeholders — omit anything unconfirmed; dormant
  sections (Projects) auto-hide.
- Technical labels/abbreviations stay ENGLISH in the FA version (FPGA, DSP,
  VHDL, RTL, G-code, `01 // ABOUT`, tool names). Persian digits for FA dates.
- Skills = exactly 7: MATLAB, Python, CNC Machine Operation and Programming,
  G-code, CATIA, AutoCAD, Autodesk PowerMill. No C Programming card.
- Section order: About(01) → Education(02) → Skills(03) → Research(04) →
  Experience(05) → Contact(06). Education title "Education" / «سوابق تحصیلی»;
  GPA chip support exists but unused ("skip GPA for now").
- Hero has no CTA/caption; switcher displays exactly "English | فارسی".
- `interests` (DSP/VHDL/FPGA) intentionally kept for hero meta/JSON-LD.

## User constraints

- No purchases/paid services; no passwords/tokens/secrets in chat; official
  browser-based auth flows only (gh device flow, wrangler OAuth both done).
- Never claim success without verifying (verify before claiming; exact URLs).
- GitHub account: `alirezaunity72` (id 37151331).
- Tooling: portable git + gh live at
  `C:\Users\HOME\AppData\Local\Temp\opencode\tools\` (temp — reinstall if
  missing: gh via winget/direct download, then `gh auth setup-git`).
- Full pass-by-pass log: `interview-notes.md`. Setup docs: `README.md`.
