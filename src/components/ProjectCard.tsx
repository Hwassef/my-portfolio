import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Device from './Device'
import type { Project } from '@/data/site'
import { dict, href, type Lang } from '@/i18n'

export default function ProjectCard({ project, index, lang, large = false }: { project: Project; index: number; lang: Lang; large?: boolean }) {
  const { cover } = project
  return (
    <Link
      href={href(lang, `/project/${project.slug}`)}
      className="group flex h-full flex-col border-2 border-ink bg-paper transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--ink)]"
    >
      <div
        className={`relative overflow-hidden border-b-2 border-ink ${
          cover.kind === 'scene' ? '' : index % 2 === 0 ? 'bg-yellow' : 'bg-paper-2'
        } ${large ? 'aspect-[4/3] md:aspect-[16/11]' : 'aspect-[4/3]'}`}
      >
        {cover.kind === 'scene' ? (
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
            <Device shot={cover} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        ) : (
          <div
            className={`absolute left-1/2 top-8 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-3 ${
              cover.kind === 'phone' ? (large ? 'w-[46%] md:w-[38%]' : 'w-[46%]') : 'w-[82%]'
            }`}
          >
            <Device shot={cover} sizes="(min-width: 768px) 25vw, 50vw" />
          </div>
        )}
        <span className="display absolute left-4 top-3 text-2xl">{String(index + 1).padStart(2, '0')}</span>
        {project.status && <span className="chip absolute right-4 top-4 border-[#0a0a0a] bg-[#0a0a0a] text-[#ffd60a]">{project.status}</span>}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className={`display ${large ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{project.title}</h3>
          <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
        <p className="text-muted">{project.tagline} {large && project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.group === 'product' ? (
            <span className="chip border-ink bg-yellow">{dict[lang].work.own}</span>
          ) : (
            project.client && <span className="chip">{project.client.replace(/^Proxym Group (for|pour) /, '')}</span>
          )}
          <span className="chip">{project.category}</span>
          <span className="chip">{project.year}</span>
        </div>
      </div>
    </Link>
  )
}
