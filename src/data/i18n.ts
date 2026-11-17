/**
 * ─────────────────────────────────────────────────────────────────────────
 *  i18n resolver — returns the site/profile/UI bundle for one language.
 *  EN lives at `/`, FA at `/fa/` (rtl). Both share the same components;
 *  small technical / monospaced labels stay English in both versions.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { site as siteEn, profile as profileEn } from './profile';
import { site as siteFa, profile as profileFa } from './profile-fa';
import type { Profile, SiteMeta } from './profile-types';

export type Lang = 'en' | 'fa';
export type Dir = 'ltr' | 'rtl';

export interface UiStrings {
  /** skip-link text */
  skip: string;
  /** header <nav> aria-labels */
  navPrimary: string;
  navMobile: string;
  /** hamburger menu aria-labels (read by scroll.ts via data attributes) */
  menuOpen: string;
  menuClose: string;
  /** hero */
  heroLabel: string;
  scrollHint: string;
  /** language switcher aria-label */
  langSwitch: string;
  /** JSON-LD Person */
  schemaJobTitle: string;
  schemaAffiliation: string;
}

const uiEn: UiStrings = {
  skip: 'Skip to content',
  navPrimary: 'Primary',
  navMobile: 'Mobile',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  heroLabel: 'Introduction',
  scrollHint: 'SCROLL',
  langSwitch: 'Language',
  schemaJobTitle: 'M.Sc. Student in Digital Electronics',
  schemaAffiliation: 'Iran University of Science and Technology (IUST)',
};

const uiFa: UiStrings = {
  skip: 'پرش به محتوا',
  navPrimary: 'ناوبری اصلی',
  navMobile: 'منوی موبایل',
  menuOpen: 'باز کردن منو',
  menuClose: 'بستن منو',
  heroLabel: 'معرفی',
  scrollHint: 'SCROLL',
  langSwitch: 'زبان',
  schemaJobTitle: 'دانشجوی کارشناسی ارشد الکترونیک دیجیتال',
  schemaAffiliation: 'دانشگاه علم و صنعت ایران (IUST)',
};

export interface I18n {
  lang: Lang;
  dir: Dir;
  site: SiteMeta;
  profile: Profile;
  ui: UiStrings;
}

const bundles: Record<Lang, I18n> = {
  en: { lang: 'en', dir: 'ltr', site: siteEn, profile: profileEn, ui: uiEn },
  fa: { lang: 'fa', dir: 'rtl', site: siteFa, profile: profileFa, ui: uiFa },
};

export function getI18n(lang: Lang): I18n {
  return bundles[lang];
}
