import type { Lang } from '@/i18n'
import * as en from './site'
import { educationFr, experienceFr, languagesFr, projectsFr, skillGroupsFr, statLabelsFr } from './site.fr'

/** All page content for one language. French overlays the English data by slug. */
export function content(lang: Lang) {
  if (lang === 'en') {
    return { projects: en.projects, experience: en.experience, skills: en.skills, stats: en.stats, education: en.education, languages: en.languages }
  }
  return {
    projects: en.projects.map((p) => ({ ...p, ...projectsFr[p.slug] })),
    experience: experienceFr,
    skills: en.skills.map((g) => ({ ...g, group: skillGroupsFr[g.group] ?? g.group })),
    stats: en.stats.map((s, i) => ({ ...s, label: statLabelsFr[i] })),
    education: educationFr,
    languages: languagesFr,
  }
}
