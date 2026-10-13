import { Globe } from 'lucide-react'
import { SiAppstore, SiGoogleplay } from 'react-icons/si'
import type { Project } from '@/data/site'

export default function StoreLinks({ project }: { project: Project }) {
  if (!project.appStore && !project.playStore && !project.website) return null
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {project.appStore && (
          <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="btn btn-paper" aria-label={`${project.title} on the App Store`}>
            <SiAppstore className="h-4 w-4" /> App Store
          </a>
        )}
        {project.playStore && (
          <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="btn btn-paper" aria-label={`${project.title} on Google Play`}>
            <SiGoogleplay className="h-4 w-4" /> Google Play
          </a>
        )}
        {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn btn-yellow" aria-label={`${project.title} website`}>
            <Globe className="h-4 w-4" /> Website
          </a>
        )}
      </div>
      {project.alsoOn && <p className="mt-3 text-sm text-muted">Also on {project.alsoOn}.</p>}
    </div>
  )
}
