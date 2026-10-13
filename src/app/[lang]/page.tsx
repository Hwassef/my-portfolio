import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import Device from '@/components/Device'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import CopyEmail from '@/components/CopyEmail'
import { profile, stack } from '@/data/site'
import { content } from '@/data/content'
import { dict, href, type Lang } from '@/i18n'

export default function Home({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const t = dict[lang]
  const { projects, experience, skills, stats, education, languages } = content(lang)
  const find = (slug: string) => projects.find((p) => p.slug === slug)

  const products = projects.filter((p) => p.group === 'product')
  const client = projects.filter((p) => p.group === 'client')
  const [heroLeft, heroMid, heroRight] = ['mytt', 'wire', 'studio44'].map((s) => find(s)!.cover)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="wrap grid items-center gap-12 pb-16 md:pb-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#16a34a]" aria-hidden />
              {lang === 'fr' ? 'Tech Lead Flutter · Tunisie · à distance partout' : `${profile.title} · ${profile.location}`}
            </p>
            <h1 className="display text-[clamp(3.25rem,8.5vw,6.5rem)]">
              {t.hero.title[0]} <span className="inline-block -rotate-1 bg-yellow px-3 pt-1">{t.hero.title[1]}</span> {t.hero.title[2]}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
              {t.hero.intro}{' '}
              <a href={profile.studio} target="_blank" rel="noopener noreferrer" className="font-bold text-ink underline decoration-yellow decoration-4 underline-offset-4">
                WeCraft Solutions
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#work" className="btn btn-ink">{t.hero.work} <ArrowDown className="h-4 w-4" /></a>
              <a href="#contact" className="btn btn-yellow">{t.hero.contact}</a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 border-y-2 border-ink">
              {stats.map((s, i) => (
                <div key={s.label} className={`py-4 ${i > 0 ? 'border-l-2 border-ink pl-4' : ''}`}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="display text-4xl md:text-5xl">{s.value}</dd>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto h-[380px] w-full max-w-[340px] sm:h-[460px] sm:max-w-[460px] md:h-[560px]" aria-hidden>
            <div className="absolute inset-x-6 bottom-0 top-10 bg-yellow md:inset-x-10" />
            <div className="stripe absolute -right-2 top-4 h-6 w-32" />
            <div className="absolute left-0 top-24 w-[36%] -rotate-6"><Device shot={heroLeft} sizes="200px" priority /></div>
            <div className="absolute left-1/2 top-0 z-10 w-[42%] -translate-x-1/2"><Device shot={heroMid} sizes="220px" priority /></div>
            <div className="absolute right-0 top-28 w-[36%] rotate-6"><Device shot={heroRight} sizes="200px" priority /></div>
          </div>
        </div>

        {/* STACK TICKER */}
        <div className="on-ink overflow-hidden border-y-2 border-ink bg-ink py-4 text-paper">
          <div className="marquee flex w-max gap-10 whitespace-nowrap">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="display flex items-center gap-10 text-2xl md:text-3xl">
                {s}
                <span className="text-yellow" aria-hidden>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-paper-2 py-20 md:py-28">
        <div className="wrap">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-3">{t.work.eyebrow} · 2022 — {new Date().getFullYear()}</p>
              <h2 className="display text-6xl md:text-8xl"><span className="swoosh">{t.work.title}</span></h2>
            </div>
            <p className="max-w-md text-muted">{t.work.blurb(projects.length)}</p>
          </Reveal>

          <h3 className="display mb-6 flex items-center gap-3 text-3xl">
            <span className="h-3 w-3 bg-ink" aria-hidden /> <span className="swoosh">{t.work.client}</span>
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {client.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProjectCard project={p} index={i} lang={lang} />
              </Reveal>
            ))}
          </div>

          <h3 id="products" className="display mb-6 mt-20 flex items-center gap-3 text-3xl">
            <span className="h-3 w-3 bg-yellow ring-2 ring-ink" aria-hidden /> <span className="swoosh">{t.work.products}</span>
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <ProjectCard project={p} index={client.length + i} lang={lang} large />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="on-ink bg-ink py-20 text-paper md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4 text-yellow">{t.about.eyebrow}</p>
            <h2 className="display text-5xl md:text-7xl">
              {t.about.title[0]} <span className="swoosh text-yellow">{t.about.title[1]}</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg opacity-90">
            {t.about.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <p className="text-base opacity-70">
              {education.degree}, {education.major} ({education.year}) · {languages.join(' · ')}
            </p>
          </Reveal>
        </div>

        <div className="wrap mt-16">
          <div className="grid gap-px border-2 border-line bg-line md:grid-cols-3">
            {t.about.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="bg-ink p-6 md:p-8">
                <span className="display text-5xl text-yellow">0{i + 1}</span>
                <h3 className="display mt-4 text-3xl">{s.title}</h3>
                <p className="mt-3 opacity-75">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="wrap mt-16">
          <h3 className="display mb-6 text-4xl"><span className="swoosh">{t.about.toolbox}</span></h3>
          <dl className="grid gap-x-10 border-t border-line md:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-3 border-b border-line py-4 sm:grid-cols-[150px_1fr] sm:gap-4">
                <dt className="eyebrow pt-1 text-yellow">{g.group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="chip opacity-90">{it}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 md:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-3">{t.experience.eyebrow}</p>
            <h2 className="display mb-12 text-6xl md:text-8xl"><span className="swoosh">{t.experience.title}</span></h2>
          </Reveal>
          <ol className="border-t-2 border-ink">
            {experience.map((e, i) => (
              <Reveal as="li" key={`${e.company}-${e.period}`} className="grid gap-3 border-b-2 border-ink py-8 md:grid-cols-[200px_1fr_1.5fr] md:gap-8">
                <span className={`display self-start text-xl md:text-2xl ${i < 2 ? 'w-fit bg-yellow px-2' : ''}`}>{e.period}</span>
                <div>
                  <h3 className="display text-3xl md:text-4xl">
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                        {e.company} <ArrowUpRight className="h-6 w-6" />
                      </a>
                    ) : (
                      e.company
                    )}
                  </h3>
                  <p className="mt-1 font-semibold">{e.role}</p>
                  {e.client && <p className="text-sm text-muted">{e.client}</p>}
                </div>
                <div>
                  <ul className="list-disc space-y-2 pl-5 text-muted marker:text-ink">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  {e.projects && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.projects.map((slug) => {
                        const p = find(slug)
                        return p ? (
                          <Link key={slug} href={href(lang, `/project/${slug}`)} className="chip border-ink hover:bg-yellow hover:text-[#0a0a0a]">
                            {p.title} →
                          </Link>
                        ) : null
                      })}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="on-yellow relative overflow-hidden border-t-2 border-ink bg-yellow py-20 md:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-4">{t.contact.eyebrow}</p>
            <h2 className="display text-[clamp(3.5rem,13vw,10rem)]"><span className="swoosh">{t.contact.title}</span></h2>
            <p className="mt-6 max-w-xl text-lg">{t.contact.body}</p>
            <a
              href={`mailto:${profile.email}`}
              className="display mt-10 block break-all text-3xl underline decoration-4 underline-offset-8 hover:decoration-8 sm:text-5xl"
            >
              {profile.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="btn btn-ink"><Mail className="h-4 w-4" /> {t.contact.email}</a>
              <CopyEmail email={profile.email} label={t.contact.copy} done={t.contact.copied} />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-paper"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-paper"><Github className="h-4 w-4" /> GitHub</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
