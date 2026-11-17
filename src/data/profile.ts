/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CENTRAL DATA FILE — English version. Edit this file to update the site.
 *
 *  GLOBAL CONTENT RULE: no placeholders. Anything not explicitly confirmed
 *  is omitted entirely (empty string / empty array → the corresponding UI
 *  does not render). Fill a field and it appears automatically.
 *
 *  Persian counterpart: src/data/profile-fa.ts (structurally identical).
 *  Small technical / monospaced labels, abbreviations and engineering terms
 *  (FPGA, DSP, VHDL, RTL, AI, CAD, CNC, G-code, "01 // ABOUT", …) stay
 *  ENGLISH in BOTH language versions — they are hardcoded in components.
 *  Header language switcher (both versions): English | فارسی.
 * ─────────────────────────────────────────────────────────────────────────
 */

/* ── Site metadata (SEO / link previews) ─────────────────────────────── */

export const site: SiteMeta = {
  title: 'Alireza Abbaspour — M.Sc. Student in Digital Electronics (IUST)',
  description:
    'M.Sc. student in Digital Electronics at Iran University of Science and Technology (IUST), interested in AI hardware and computer architecture — FPGA, VHDL, DSP and digital systems.',
  url: 'https://alirezaunity72.github.io', // canonical/OG/hreflang base — GitHub Pages (accessible from Iran)
};

/* ── Shared shapes (mirrored by profile-fa.ts) ───────────────────────── */

import type {
  Profile,
  SiteMeta,
  Social,
  SkillItem,
  EducationItem,
  ExperienceItem,
  ResearchArea,
} from './profile-types';

export type {
  Profile,
  SiteMeta,
  Social,
  SkillItem,
  EducationItem,
  ExperienceItem,
  ResearchArea,
} from './profile-types';

/* ── Identity ────────────────────────────────────────────────────────── */

export const profile: Profile = {
  name: 'Alireza Abbaspour',

  kicker: 'Electrical Engineer · M.Sc. Student in Digital Electronics (IUST)',

  headline:
    'M.Sc. Student in Digital Electronics | Interested in AI Hardware and Computer Architecture',

  intro: [
    'I have a strong interest in computers and technology, particularly in understanding how computing systems work. I am especially drawn to the intersection of hardware and software.',
    'What fascinates me most about artificial intelligence is its potential to make a positive impact on society. I hope to be part of this journey and contribute to developing technologies that make a meaningful difference in people’s lives.',
  ],

  base: 'Tehran, Iran',

  /* Contact — renders only when real data exists. Email confirmed. */
  email: 'abbaspour_alireza@elec.iust.ac.ir',
  socials: [
    { label: 'GitHub', href: '' }, // empty until a profile exists
    { label: 'LinkedIn', href: '' },
  ],
  /* No CV file yet — no CV button renders anywhere. To add later:
     drop the PDF into public/ and wire it in Hero + Contact. */

  /* Confirmed technical interests — stated by you. */
  interests: [
    'Digital Electronics',
    'FPGA',
    'VHDL',
    'DSP',
    'Computer Architecture',
    'AI',
    'AI Hardware Acceleration',
  ],

  /* ── Skills: confirmed tools & languages only (no proficiency levels). ── */
  skills: [
    { name: 'MATLAB Programming', desc: 'Programming and technical computing' },
    { name: 'Python Programming', desc: 'General-purpose programming' },
    {
      name: 'CNC Machine Operation and Programming',
      desc: 'Hands-on experience operating CNC machines and programming them with G-code',
    },
    { name: 'G-code Programming', desc: 'CNC part programming' },
    { name: 'CATIA', desc: 'Industrial part design' },
    { name: 'AutoCAD', desc: 'Industrial part design' },
    { name: 'Autodesk PowerMill', desc: 'CAM software' },
  ],

  /* ── Education ─────────────────────────────────────────────────────── */
  education: [
    {
      degree: 'B.Sc. in Electrical Engineering',
      school: 'Islamic Azad University, South Tehran Branch',
      dates: '2015 – 2019',
      state: 'confirmed',
    },
    {
      degree: 'M.Sc. in Electrical Engineering — Digital Electronics',
      school: 'Iran University of Science and Technology (IUST)',
      dates: '2026 – Present',
      state: 'confirmed',
    },
  ],

  /* ── Experience (professional + internship, most recent first).
     Minimal entries only — no invented duties. ────────────────────────── */
  experience: [
    {
      kind: 'industrial',
      title: 'Mold Making Department Supervisor',
      org: 'Afra Sanat Mahan (افرا صنعت ماهان)',
      dates: '2022 – 2025',
      responsibilities: [
        'Industrial part design using CATIA and AutoCAD',
        'CNC machine operation',
        'CNC programming and G-code',
      ],
    },
    {
      kind: 'internship',
      title: 'Intern',
      org: 'Pakdasht Combined Cycle Power Plant',
      dates: '2018 – 2019',
      responsibilities: [],
    },
  ],

  /* ── Research interests — names only (EN in both versions), minimal. ── */
  research: [
    { index: 'R1', title: 'Digital Electronics', tone: 'signal' },
    { index: 'R2', title: 'Computer Architecture', tone: 'signal' },
    { index: 'R3', title: 'FPGA-Based Systems', tone: 'signal' },
    { index: 'R4', title: 'AI Hardware and Accelerators', tone: 'intel' },
    { index: 'R5', title: 'Hardware–Software Co-design', tone: 'signal' },
    { index: 'R6', title: 'Intelligent Computing Systems', tone: 'intel' },
  ],

  /* Datasheet card values (labels Now/University/Base/Focus are English
     mono labels in both versions). */
  datasheet: {
    now: 'M.Sc. — Digital Electronics',
    university: 'IUST',
    focus: 'FPGA · VHDL · AI × HW',
  },

  /* UI labels that follow the page language. */
  nav: {
    about: 'About',
    education: 'Education',
    research: 'Research',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
  },

  titles: {
    about: 'About Me',
    education: 'Education',
    research: 'Research Interests',
    skills: 'Skills',
    experience: 'Professional experience',
    contact: 'Contact',
  },

  ctaProjects: 'View Projects →',
};
