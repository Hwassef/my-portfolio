import { SiAppstore, SiGoogleplay } from 'react-icons/si'
import type { Project } from '@/data/site'

export default function StoreLinks({ project, size = 'md' }: { project: Project; size?: 'sm' | 'md' }) {
  if (!project.appStore && !project.playStore) return null
  const cls = size === 'sm' ? 'btn btn-paper !px-3 !py-2 !text-xs' : 'btn btn-paper'
  return (
    <div className="flex flex-wrap gap-3">
      {project.appStore && (
        <a href={project.appStore} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${project.title} on the App Store`}>
          <SiAppstore className="h-4 w-4" /> App Store
        </a>
      )}
      {project.playStore && (
        <a href={project.playStore} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${project.title} on Google Play`}>
          <SiGoogleplay className="h-4 w-4" /> Google Play
        </a>
      )}
    </div>
  )
}
