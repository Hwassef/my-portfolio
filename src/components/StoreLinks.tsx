import { Globe, Store } from 'lucide-react'
import { SiAppstore, SiGoogleplay } from 'react-icons/si'
import type { Project } from '@/data/site'
import { dict, type Lang } from '@/i18n'

export default function StoreLinks({ project, lang }: { project: Project; lang: Lang }) {
  if (!project.appStore && !project.playStore && !project.appGallery && !project.website) return null
  const t = dict[lang].project
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {project.appStore && (
          <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="btn btn-paper" aria-label={`${project.title} — App Store`}>
            <SiAppstore className="h-4 w-4" /> App Store
          </a>
        )}
        {project.playStore && (
          <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="btn btn-paper" aria-label={`${project.title} — Google Play`}>
            <SiGoogleplay className="h-4 w-4" /> Google Play
          </a>
        )}
        {project.appGallery && (
          <a href={project.appGallery} target="_blank" rel="noopener noreferrer" className="btn btn-paper" aria-label={`${project.title} — Huawei AppGallery`}>
            <Store className="h-4 w-4" /> AppGallery
          </a>
        )}
        {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn btn-yellow" aria-label={`${project.title} — ${t.website}`}>
            <Globe className="h-4 w-4" /> {t.website}
          </a>
        )}
      </div>
      {project.alsoOn && <p className="mt-3 text-sm text-muted">{t.alsoOn} {project.alsoOn}.</p>}
    </div>
  )
}
