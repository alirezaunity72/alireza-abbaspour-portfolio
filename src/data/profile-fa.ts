/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CENTRAL DATA FILE — Persian (FA) version. Mirrors src/data/profile.ts.
 *
 *  Persian copy was drafted from the user's confirmed English content
 *  (Option C hybrid) and approved at the review step.
 *
 *  Small technical / monospaced labels, abbreviations and engineering terms
 *  (FPGA, DSP, VHDL, RTL, AI, CAD, CNC, G-code, "01 // ABOUT", …) stay
 *  ENGLISH in BOTH language versions — they are hardcoded in components.
 *  Dates use Persian digits; tool names stay Latin.
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { Profile } from './profile-types';

/* ── Site metadata (SEO / link previews) ─────────────────────────────── */

export const site = {
  title: 'علیرضا عباس‌پور — دانشجوی کارشناسی ارشد الکترونیک دیجیتال (IUST)',
  description:
    'دانشجوی کارشناسی ارشد الکترونیک دیجیتال در دانشگاه علم و صنعت ایران (IUST)، علاقه‌مند به سخت‌افزار هوش مصنوعی و معماری کامپیوتر — FPGA، VHDL، DSP و سامانه‌های دیجیتال.',
  url: '', // set to the final public domain (e.g. *.pages.dev) after Cloudflare Pages setup — canonical/OG/hreflang activate then
};

/* ── Identity ────────────────────────────────────────────────────────── */

export const profile: Profile = {
  name: 'علیرضا عباس‌پور',

  kicker: 'مهندس برق · دانشجوی کارشناسی ارشد الکترونیک دیجیتال (دانشگاه علم و صنعت ایران)',

  headline:
    'دانشجوی کارشناسی ارشد الکترونیک دیجیتال | علاقه‌مند به سخت‌افزار هوش مصنوعی و معماری کامپیوتر',

  intro: [
    'علاقهٔ نیرومندی به کامپیوتر و فناوری دارم؛ به‌ویژه به درک اینکه سامانه‌های محاسباتی چگونه کار می‌کنند. بیش از همه به نقطهٔ تلاقی سخت‌افزار و نرم‌افزار جذب می‌شوم.',
    'آنچه بیش از هر چیز در هوش مصنوعی جذاب می‌دانم، توانایی آن در ایجاد تأثیر مثبت بر جامعه است. امیدوارم در این مسیر سهیم باشم و در توسعهٔ فناوری‌هایی مشارکت کنم که تفاوتی معنادار در زندگی مردم ایجاد می‌کنند.',
  ],

  base: 'تهران، ایران',

  /* Contact — renders only when real data exists. Email confirmed. */
  email: 'abbaspour_alireza@elec.iust.ac.ir',
  socials: [
    { label: 'GitHub', href: '' },
    { label: 'LinkedIn', href: '' },
  ],

  /* Confirmed technical interests — engineering terms stay English. */
  interests: [
    'Digital Electronics',
    'FPGA',
    'VHDL',
    'DSP',
    'Computer Architecture',
    'AI',
    'AI Hardware Acceleration',
  ],

  /* ── Skills: names Persianized, tool names stay Latin. ─────────────── */
  skills: [
    { name: 'برنامه‌نویسی MATLAB', desc: 'برنامه‌نویسی و محاسبات فنی' },
    { name: 'برنامه‌نویسی Python', desc: 'برنامه‌نویسی همه‌منظوره' },
    {
      name: 'کار با دستگاه‌های CNC و برنامه‌نویسی آن‌ها',
      desc: 'تجربهٔ عملی در کار با دستگاه‌های CNC و برنامه‌نویسی آن‌ها با G-code',
    },
    { name: 'برنامه‌نویسی G-code', desc: 'برنامه‌نویسی قطعات CNC' },
    { name: 'CATIA', desc: 'طراحی قطعات صنعتی' },
    { name: 'AutoCAD', desc: 'طراحی قطعات صنعتی' },
    { name: 'Autodesk PowerMill', desc: 'نرم‌افزار CAM' },
  ],

  /* ── Education (dates in Persian digits) ───────────────────────────── */
  education: [
    {
      degree: 'کارشناسی مهندسی برق',
      school: 'دانشگاه آزاد اسلامی، واحد تهران جنوب',
      dates: '۲۰۱۵ – ۲۰۱۹',
      state: 'confirmed',
    },
    {
      degree: 'کارشناسی ارشد مهندسی برق — الکترونیک دیجیتال',
      school: 'دانشگاه علم و صنعت ایران (IUST)',
      dates: '۲۰۲۶ – در حال تحصیل',
      state: 'confirmed',
    },
  ],

  /* ── Experience (professional + internship, most recent first).
     Minimal entries only — no invented duties. ────────────────────────── */
  experience: [
    {
      kind: 'industrial',
      title: 'سرپرست بخش قالب‌سازی',
      org: 'آفرا صنعت ماهان (Afra Sanat Mahan)',
      dates: '۲۰۲۲ – ۲۰۲۵',
      responsibilities: [
        'طراحی قطعات صنعتی با CATIA و AutoCAD',
        'کار با دستگاه‌های CNC',
        'برنامه‌نویسی CNC و G-code',
      ],
    },
    {
      kind: 'internship',
      title: 'کارآموز',
      org: 'نیروگاه سیکل ترکیبی پاکدشت (Pakdasht Combined Cycle Power Plant)',
      dates: '۱۳۹۷ – ۱۳۹۸',
      responsibilities: [],
    },
  ],

  /* ── Research interests — names only, ENGLISH in both versions
     (user request); no descriptions. ─────────────────────────────────── */
  research: [
    { index: 'R1', title: 'Digital Electronics', tone: 'signal' },
    { index: 'R2', title: 'Computer Architecture', tone: 'signal' },
    { index: 'R3', title: 'FPGA-Based Systems', tone: 'signal' },
    { index: 'R4', title: 'AI Hardware and Accelerators', tone: 'intel' },
    { index: 'R5', title: 'Hardware–Software Co-design', tone: 'signal' },
    { index: 'R6', title: 'Intelligent Computing Systems', tone: 'intel' },
  ],

  /* Datasheet card values (labels Now/University/Base/Focus stay
     English; technical values stay English, place names translate). */
  datasheet: {
    now: 'M.Sc. — Digital Electronics',
    university: 'IUST',
    focus: 'FPGA · VHDL · AI × HW',
  },

  /* UI labels that follow the page language. */
  nav: {
    about: 'درباره',
    education: 'تحصیلات',
    research: 'پژوهش',
    projects: 'پروژه‌ها',
    skills: 'مهارت‌ها',
    experience: 'تجربه',
    contact: 'تماس',
  },

  titles: {
    about: 'درباره من',
    education: 'سوابق تحصیلی',
    research: 'علایق پژوهشی',
    skills: 'مهارت‌ها',
    experience: 'تجربهٔ حرفه‌ای',
    contact: 'راه‌های ارتباطی',
  },

  ctaProjects: 'مشاهدهٔ پروژه‌ها ←',
};
