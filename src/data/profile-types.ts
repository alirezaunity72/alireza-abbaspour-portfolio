/**
 * Shared data shapes for the bilingual site (EN + FA profiles).
 */

export interface Social {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  desc: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  /** undergraduate GPA, rendered as a visible chip when present */
  gpa?: string;
  note?: string;
  state: 'confirmed' | 'future';
}

export interface ExperienceItem {
  title: string;
  org: string;
  dates: string;
  responsibilities: string[];
  /** mono label row: INDUSTRIAL (default) or INTERNSHIP */
  kind?: 'industrial' | 'internship';
}

export interface ResearchArea {
  index: string;
  title: string;
  tone: 'signal' | 'intel';
}

export interface Datasheet {
  now: string;
  university: string;
  focus: string;
}

export interface NavLabels {
  about: string;
  education: string;
  research: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
}

export interface Titles {
  about: string;
  education: string;
  research: string;
  skills: string;
  experience: string;
  contact: string;
}

export interface Profile {
  name: string;
  kicker: string;
  headline: string;
  intro: string[];
  base: string;
  email: string;
  socials: Social[];
  interests: string[];
  skills: SkillItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  research: ResearchArea[];
  datasheet: Datasheet;
  nav: NavLabels;
  titles: Titles;
  ctaProjects: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  url: string;
}
