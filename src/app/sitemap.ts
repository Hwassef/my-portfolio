import type { MetadataRoute } from 'next'
import { profile, projects } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.site, priority: 1 },
    ...projects.map((p) => ({ url: `${profile.site}/project/${p.slug}`, priority: 0.8 })),
  ]
}
