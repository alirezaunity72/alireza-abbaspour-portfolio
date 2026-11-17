# Portfolio Content Interview — Progress Notes

Working scratchpad (safe to delete at the end). Nothing here is deployed.
Rules: one question at a time · skipping is always allowed · nothing is
invented · `src/data/profile.ts` is only edited after your explicit confirmation.

## Confirmed so far (from your original brief)
- BSc in Electrical Engineering
- MSc — Digital Electronics, Iran University of Science and Technology (IUST)
- Interest areas: Digital Electronics, FPGA, VHDL, DSP, Computer Architecture, AI, AI Hardware Acceleration
- Ambition: hardware & intelligent systems engineering; research/PhD abroad, especially Europe

## Answers received (pending final application to profile.ts)

1. **Full name** → `Alireza Abbaspour`
   - Display form: full name, no short form specified (can note one later if desired)

2. **Professional headline** → `M.Sc. Student in Digital Electronics | Interested in AI Hardware and Computer Architecture`
   - Will appear under the Hero name; also reusable for SEO meta description

3. **About / intro** → COMPLETE (both paragraphs in their own words):
   ¶1: `I have a strong interest in computers and technology, particularly in understanding how computing systems work. I am especially drawn to the intersection of hardware and software.`
   ¶2: `What fascinates me most about artificial intelligence is its potential to make a positive impact on society. I hope to be part of this journey and contribute to developing technologies that make a meaningful difference in people's lives.`
   - Optional light polish offered at final review (meaning kept intact)

4. **BSc university + dates** → `Islamic Azad University, South Tehran Branch (2015–2019)`
   - Full education node: `BSc — Electrical Engineering` · `Islamic Azad University, South Tehran Branch` · `2015 – 2019`
   - Display note: render "Islamic Azad University, South Tehran Branch" as school name

5. **MSc dates + status** → `2026 – Present`
   - Degree wording per user: `M.Sc. in Electrical Engineering – Digital Electronics`
   - School: `Iran University of Science and Technology (IUST)`
   - Research focus / thesis: NOT provided → keep placeholder or drop line at application
   - Note: sync wording in About datasheet + hero kicker at application time

6. **Projects** → NONE. User: "I don't have any projects to showcase at the moment."
   → Projects section removed entirely (component is dormant + conditional;
     no cards / placeholders / empty-state). Reappears automatically when a
     real project .md is added to src/content/projects/.
   → Nav link + hero CTA adapt (CTA currently "View Research →").

GLOBAL RULE (set during Q6): never leave placeholders — omit unconfirmed info
entirely; sections auto-hide until real data arrives. Applied across the site:
dummy projects/skill rows/experience items deleted; name/headline/about/education
applied live; Contact & Experience hidden until content exists.

7. **Skills: tools & languages** → CONFIRMED (4 categories, no proficiency levels):
   - Programming Languages & Technical Computing: MATLAB, Python, VHDL
   - FPGA Development: Xilinx Vivado
   - CAD / CAM Software: CATIA, AutoCAD, Autodesk PowerMill
   - CNC Programming: CNC Machine Programming, G-code Programming
   - Rendered as chips in category cards (no bars/levels); timing-bar code removed

8. **Research interests: personal angle** → REDEFINED per user: 6 new areas with
   natural interest-based descriptions (honest, no experience claims):
   Digital Electronics / Computer Architecture / FPGA-Based Systems /
   AI Hardware and Accelerators / Hardware–Software Co-design /
   Intelligent Computing Systems. Section title now "Directions that interest me";
   added disclaimer line under the grid. AI-related cards (R4, R6) keep violet tone.

9. **Experience / achievements** → IN PROGRESS. INDUSTRIAL experience section
   built with ONLY the most recent role (user instruction: exclude previous
   company + earlier ~3 years):
   · Company: Afra Sanat Mahan (Persian: افرا صنعت ماهان — not displayed
     unless requested)
   · Dates: 2022 – 2025
   · Responsibilities: industrial part design (CATIA/AutoCAD); CNC machine
     operation; CNC programming and G-code
   · Job title (Q9.2): `Mold Making Department Supervisor`
   · Section label: "EXPERIENCE — INDUSTRIAL"; no aggregate "5 years" line
     (earlier period excluded by user)

9.3 (answered): NO achievements/honors/awards/certifications → omit the
   achievements subsection entirely; section remains "EXPERIENCE — INDUSTRIAL"
   with only the Afra Sanat Mahan node.
9.4 (answered): YES — display Persian company name alongside English:
   "Afra Sanat Mahan (افرا صنعت ماهان)"
   · Section label: "EXPERIENCE — INDUSTRIAL"; no aggregate "5 years" line
     (earlier period excluded by user)

10. **Base location** → CONFIRMED: `Tehran, Iran`

## NEW REQUIREMENTS for final implementation pass (apply together after approval)

A. **Bilingual EN|FA site**:
   - Two complete versions: EN (`/`, current design) + FA (`/fa/`)
   - Language switcher "EN | FA" in header
   - FA version: full RTL layout, high-quality Persian font (Vazirmatn
     preferred; Estedad fallback), independently polished + responsive
   - Approach (no changes yet): second static Astro page with
     lang="fa" dir="rtl", profile.ts gains FA translations of all confirmed
     content, [dir='rtl'] CSS scope, hreflang alternates, header switcher
   - OPEN QUESTIONS: who writes Persian copy (me translating confirmed
     content, for user review at approval — or user supplies FA text);
     Persian display of decorative mono labels vs keeping them EN

B. **Collaboration availability**: professional section or clearly visible
   statement — available/open to academic collaboration, research
   opportunities, engineering projects; emphasize willingness to dedicate
   time. OPEN QUESTIONS: placement (own section vs About/Hero statement),
   wording source (user text vs my draft for approval)

C. Remaining interview queue: Q14 CV → Q15 Persian-copy source →
   Q16 collaboration statement →
   Q17 FULL SUMMARY + APPROVAL → one-pass implementation

14. **CV PDF** → asked

11. **Email** → `abbaspour_alireza@elec.iust.ac.ir` (IUST university email —
    activates Contact section; also a credibility signal for academic audience)

12. **GitHub** → NONE. User has no GitHub profile yet — omit the link
    (may create one and add later; Contact renders without a GitHub button)

13. **LinkedIn** → NONE. User does not have one — omit entirely
    (Contact section will render with email only, plus CV if provided)

14. **CV PDF** → NONE. No CV/résumé file yet — remove CV download buttons
    and links entirely, no placeholders, no generated PDF. May add later
    (public/cv.pdf + cv field in profile.ts activates it).

15. **Persian-copy source** → Option C (hybrid): I draft FA translations of
    all confirmed content; user reviews every string at approval step and may
    overwrite any line with their own words.

16. **Collaboration statement** → Option 1: dedicated availability strip
    immediately BEFORE Contact. Full-width, elegant, consistent with visual
    style, NOT promotional. Label "07 // AVAILABILITY", Contact renumbers
    to 08. Statement drafts (EN+FA) accepted as basis; user may edit at approval.
    FA statement: «آماده همکاری — برای همکاری علمی، فرصت‌های پژوهشی و پروژه‌های
    مهندسی در دسترس هستم و حاضرم زمان لازم را به کار مشترک اختصاص دهم...»

17. **FULL SUMMARY sent** → APPROVED with modification: all small technical/
    monospaced labels, abbreviations and engineering terms stay ENGLISH in
    BOTH versions (FPGA, DSP, VHDL, RTL, AI, CAD, CNC, G-code, `01 // ABOUT`,
    `SRC // IDENTITY`, `DATA // SHEET`, nav-side labels…). Persian digits for
    FA dates; tool names Latin.

## IMPLEMENTATION (one pass, complete)

- `@fontsource-variable/vazirmatn` installed.
- `src/data/profile.ts` (EN): experience title/org updated (Mold Making
  Department Supervisor / Afra Sanat Mahan (افرا صنعت ماهان)); availability
  {status:OPEN, title, statement}; email set; nav/titles/ctaResearch/
  researchDisclaimer/skillsNote/datasheet added; cv field REMOVED.
- `src/data/profile-types.ts` (shared shapes) + `src/data/profile-fa.ts`
  (approved FA drafts) + `src/data/i18n.ts` (getI18n: site/profile/dir/ui).
- All components take `lang` prop; new `Availability.astro` = 07 // AVAILABILITY
  before Contact; Contact = 08 and activates via email; CV wiring removed.
- `src/layouts/Base.astro`: lang prop, html lang/dir, hreflang/canonical when
  domain set, og:locale, Vazirmatn import, FA JSON-LD.
- `src/pages/fa/index.astro` → FA version at `/fa/`.
- Header: EN | FA switcher (is-active state), nav labels data-driven
  (+ Availability, Contact), menu aria-labels via data-attrs (scroll.ts).
- global.css: .lang-switch, .availability-card/dot, FA font vars (Vazirmatn
  fallback), FA letter-spacing=0 + line-heights, RTL mirrors (.tl, .tl-list,
  .skip-link, .section-line, .hero-scrim, #progress-bar, .contact-email,
  .chain), .fa-ls, .chip-gap.
- README updated (bilingual docs).
- Production build: PASS (2 pages; only known benign empty-projects warnings).
- Verified served: EN `/` 200 + FA `/fa/` 200; all content checks OK on both;
  no console errors; FA page dir=rtl lang=fa confirmed in browser.
- NOT deployed (per user instruction). Dev server: http://localhost:4321 (+ /fa/).

## REVISION PASS (user request, applied in both versions)

1. **Availability section REMOVED entirely** — component deleted, nav link,
   data fields (availability + nav.availability) and CSS removed; Contact
   renumbered back to `07 // CONTACT` (label trimmed from
   "CONTACT — OUTPUT" to plain "CONTACT").
2. **Contact heading** → EN "Contact", FA «راه‌های ارتباطی»; tagline
   "Let's route a signal" / «بیایید سیگنالی ارسال کنیم» removed. Email kept.
3. **Internship added** (2nd experience node, reverse-chronological):
   EN: Intern · Pakdasht Combined Cycle Power Plant · 2018 – 2019
   FA: کارآموز · نیروگاه سیکل ترکیبی پاکدشت (Pakdasht Combined Cycle Power
   Plant) · ۱۳۹۷ – ۱۳۹۸ · mono row "INTERNSHIP" (kind field added); NO duties.
4. **FA research card titles → English** (exact EN strings); blurbs +
   disclaimer stay Persian.
5. **"Next stage" PhD node REMOVED** from education (both versions) —
   education = B.Sc. + M.Sc. only; no PhD/Europe/دکترا/اروپا references.
6. **Datasheet**: Focus = `FPGA · VHDL · AI × HW` (DSP removed); Next row
   removed; Base = Tehran, Iran kept.
- Production build PASS; all revision checks OK on both routes (build + dev).

## FINAL CONTENT PASS (user request, applied in both versions)

1. **Research section → minimal names-only grid**:
   - Section heading: EN "Research Interests" / FA «علایق پژوهشی»
     (mono label `03 // RESEARCH INTERESTS` unchanged, EN both).
   - All six area names ENGLISH in BOTH versions: Digital Electronics /
     Computer Architecture / FPGA-Based Systems / AI Hardware and Accelerators /
     Hardware–Software Co-design / Intelligent Computing Systems.
   - Descriptions (blurbs), keyword tags and the disclaimer line REMOVED
     everywhere; ResearchArea type reduced to {index, title, tone}.
     Violet `intel` tone kept on R4/R6 (design only).
2. **About heading**: EN "About Me" / FA «درباره من» (old metaphor headings
   removed). Biography paragraphs untouched.
- Production build PASS; verified on build output AND live dev server:
  headings correct in both, six EN names in both, no blurbs/tags/disclaimer,
  bio paragraphs intact. Dev server restarted fresh (stale module graph).

## Answers
| # | Field | Status |
|---|-------|--------|
| 1 | Full name | ✅ Alireza Abbaspour |
| 2 | Professional headline | ✅ recorded |
| 3 | About / intro paragraphs | ✅ 2 paragraphs received |
| 4 | BSc university + dates | ✅ IAU South Tehran Branch, 2015–2019 |
| 5 | MSc start date / status | ✅ IUST, 2026–Present |
| 6 | Projects | ✅ none — section removed entirely |
| 7 | Skills: tools & languages | ✅ 4 categories confirmed (no levels) |
| 8 | Research interests: personal angle | ✅ 6 areas redefined + descriptions |
| 9 | Experience / achievements | ✅ Afra Sanat Mahan node (title, dates, 3 duties) |
| 10 | Base location | ✅ Tehran, Iran (confirmed) |
| 11 | Email | — |
| 12 | GitHub | — |
| 13 | LinkedIn | — |
| 14 | CV PDF | — |
| 15 | Persian copy (EN→FA) | ✅ Option C — I draft, user reviews at approval |
| 16 | Collaboration availability | ✅ Option 1 — dedicated strip before Contact |
| 17 | Final review & approval | ✅ approved (EN-labels rule added) |
| — | One-pass implementation | ✅ complete — build + both routes verified |

## SKILLS REDESIGN, SECTION REORDER & EDUCATION PASS

User request (both language versions):

1. **Skills section** — legacy "Knowledge Areas" block (interests chips + note)
   removed completely; no "Capability Map"/"capability" wording anywhere.
   - Titles: EN "Skills" / FA «مهارت‌ها»; mono label `03 // SKILLS`.
   - Redesigned as prominent 2-column card grid; skill names use the display
     font at clamp(1.35–1.7rem) (`.skill-name`), readable 1rem descriptions
     (`.skill-desc`) — no tiny tags.
   - Flat `skills: { name, desc }[]` data shape (SkillItem) replaces SkillGroup;
     `skillsNote` removed.
   - Exactly 8 skills: MATLAB Programming, Python Programming, C Programming,
     CNC Machine Operation and Programming, G-code Programming, CATIA,
     AutoCAD, Autodesk PowerMill.
   - MATLAB/Python/C separate cards with clear descriptions; CNC card states
     both operating CNC machines AND programming them with G-code.
   - VHDL, Xilinx Vivado and FPGA Development removed from Skills (user is
     still learning them). `interests` (hero meta / JSON-LD / datasheet Focus)
     intentionally untouched.
2. **Education** — titles EN "Education" / FA «سوابق تحصیلی»; M.Sc. entry kept;
   B.Sc. entry (IAU South Tehran Branch, 2015–2019 / ۲۰۱۵–۲۰۱۹) present.
   `EducationItem.gpa` added; GPA renders as a visible accent chip
   (`GPA · …`) next to the dates once the value is supplied — **value pending
   from user** (no-invention rule, not fabricated).
3. **Section order** — About → Education → Skills → Research → Experience →
   Contact (Projects dormant slot between Research and Experience). Components
   renumbered 01–06; Base.astro main order and header nav order updated.
- Production build PASS; 74 automated checks passed on both routes (8 skills,
  descriptions, removed legacy skills/wording, titles, B.Sc./M.Sc. entries,
  indices, DOM + nav order). Dev server restarted fresh.
- README updated (flat skills shape + section-order map).

## HERO CLEANUP PASS

User request (both language versions):
1. **"View Research" hero CTA removed** — the `#research` button below the name
   is gone (EN + FA). `ctaResearch` deleted from Profile type and both profile
   files; Hero.astro now renders a hero CTA only when real projects exist
   (dormant "View Projects" branch kept — previously approved behavior).
   Nothing replaced the removed button; no link/button renders in the hero now.
2. **"SRC // IDENTITY — BINARY STREAM" caption removed** from the hero in both
   versions; unused `.rain-caption` CSS rule deleted. The binary-rain canvas
   itself is untouched (user asked to remove the text, not the visual).
   README example label updated (`SRC // IDENTITY` → `S1 // SKILL`).
- Production build PASS; 33 automated checks passed on both routes (no
  "View Research"/«مشاهدهٔ پژوهش», no `#research` hero link, no buttons/links in
  hero, no SRC/BINARY STREAM text, rain-caption CSS gone; hero name, headline,
  kicker, interests row, rain canvas, scroll hint all intact; Skills/Education
  content and section order unchanged).

## SKILL REMOVAL PASS — "C Programming"

- "C Programming" (EN) / «برنامه‌نویسی C» (FA) removed entirely from the Skills
  section in both profile files (name + description deleted, nothing renamed
  or substituted).
- Skills list is now exactly 7: MATLAB Programming, Python Programming,
  CNC Machine Operation and Programming, G-code Programming, CATIA, AutoCAD,
  Autodesk PowerMill. Card mono rows auto-renumber to S1..S7.
- Production build PASS; all checks passed on both routes and the live dev
  server (7 cards, C Programming and «برنامه‌نویسی C» absent everywhere,
  remaining skills + titles + order + hero cleanup unchanged).



