import type { MetadataRoute } from 'next'
import { profile, projects } from '@/data/site'
import { href, langs } from '@/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', ...projects.map((p) => `/project/${p.slug}`)]
  return paths.flatMap((path) =>
    langs.map((lang) => ({
      url: `${profile.site}${href(lang, path)}`,
      priority: path === '/' ? 1 : 0.8,
      alternates: { languages: Object.fromEntries(langs.map((l) => [l, `${profile.site}${href(l, path)}`])) },
    })),
  )
}
