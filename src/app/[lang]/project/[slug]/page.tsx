import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Gallery from '@/components/Gallery'
import Reveal from '@/components/Reveal'
import StoreLinks from '@/components/StoreLinks'
import { projects as allProjects } from '@/data/site'
import { content } from '@/data/content'
import { dict, href, langs, type Lang } from '@/i18n'

type Props = { params: { lang: Lang; slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return langs.flatMap((lang) => allProjects.map((p) => ({ lang, slug: p.slug })))
}

export function generateMetadata({ params }: Props): Metadata {
  const p = content(params.lang).projects.find((x) => x.slug === params.slug)
  if (!p) return {}
  const path = `/project/${p.slug}`
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: href(params.lang, path), languages: { en: href('en', path), fr: href('fr', path) } },
    openGraph: { title: `${p.title} — Wassef Hassine`, description: p.description, images: [{ url: p.cover.src }] },
  }
}

export default function ProjectPage({ params }: Props) {
  const { lang } = params
  const t = dict[lang]
  const projects = content(lang).projects
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const i = projects.indexOf(project)
  const next = projects[(i + 1) % projects.length]

  const facts = [
    { label: t.project.role, value: project.role },
    { label: project.group === 'product' ? t.project.studio : t.project.for, value: project.client ?? 'WeCraft Solutions' },
    { label: project.period ? t.project.period : t.project.year, value: project.period ?? project.year },
    { label: t.project.architecture, value: project.architecture },
    { label: t.project.state, value: project.state },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value))

  return (
    <article className="pt-24">
      <div className="wrap">
        <Link href={`${href(lang)}#work`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:underline">
          <ArrowLeft className="h-4 w-4" /> {t.project.back}
        </Link>
      </div>

      <header className="wrap grid gap-10 py-10 md:py-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <div className="mb-6 flex items-center gap-4">
            {project.icon && (
              <Image src={project.icon} alt="" width={64} height={64} className="h-16 w-16 border-2 border-ink bg-white object-contain" />
            )}
            <div className="flex flex-wrap gap-2">
              {project.group === 'product' && <span className="chip border-ink bg-yellow">{t.work.own}</span>}
              <span className="chip">{project.category}</span>
              {project.status && <span className="chip border-[#0a0a0a] bg-[#0a0a0a] text-[#ffd60a]">{project.status}</span>}
            </div>
          </div>
          <h1 className="display text-[clamp(3.5rem,9vw,7rem)]">{project.title}</h1>
          <p className="display mt-2 text-2xl text-muted md:text-3xl">{project.tagline}</p>
          <p className="mt-6 max-w-xl text-lg">{project.description}</p>

          <dl className="mt-8 grid grid-cols-2 border-t-2 border-ink sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="border-b-2 border-ink py-3 pr-3">
                <dt className="eyebrow text-muted">{f.label}</dt>
                <dd className="mt-1 font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          <div className="mt-8">
            <StoreLinks project={project} lang={lang} />
          </div>
        </div>

        <Gallery shots={project.shots} title={project.title} labels={{ prev: t.project.prev, next: t.project.nextShot, show: t.project.show }} />
      </header>

      <section className="on-ink bg-ink py-16 text-paper md:py-20">
        <div className="wrap">
          <h2 className="display mb-10 text-5xl md:text-6xl"><span className="swoosh">{t.project.features}</span></h2>
          <div className="grid gap-px border-2 border-line bg-line md:grid-cols-3">
            {project.features.map((f, n) => (
              <Reveal key={f.title} delay={n * 100} className="bg-ink p-6 md:p-8">
                <span className="display text-5xl text-yellow">0{n + 1}</span>
                <h3 className="display mt-4 text-3xl">{f.title}</h3>
                <p className="mt-3 opacity-75">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Link href={href(lang, `/project/${next.slug}`)} className="on-yellow group block border-b-2 border-ink bg-yellow">
        <div className="wrap flex items-center justify-between gap-6 py-12 md:py-16">
          <div>
            <p className="eyebrow mb-2">{t.project.next}</p>
            <p className="display text-5xl md:text-8xl">{next.title}</p>
          </div>
          <ArrowRight className="h-12 w-12 shrink-0 transition-transform group-hover:translate-x-2 md:h-20 md:w-20" />
        </div>
      </Link>
    </article>
  )
}
