import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import Device from '@/components/Device'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import CopyEmail from '@/components/CopyEmail'
import { education, experience, getProject, languages, profile, projects, skills, stack, stats } from '@/data/site'

const services = [
  { title: 'Lead & architect', body: 'Clean Architecture, modular codebases, flavors and config-driven builds so one platform ships to many brands. Offline-first when the business needs it.' },
  { title: 'Payments & auth', body: 'Hosted payment pages and 3-D Secure in WebViews, Keycloak / OAuth2, biometrics, Stripe, StoreKit and RevenueCat subscriptions.' },
  { title: 'Ship & own', body: 'Tests, profiling, CI/CD with Fastlane and GitHub Actions, and releases to the App Store, Google Play and Huawei AppGallery.' },
]

export default function Home() {
  const products = projects.filter((p) => p.group === 'product')
  const client = projects.filter((p) => p.group === 'client')
  const [heroLeft, heroMid, heroRight] = [getProject('mytt')!, getProject('wire')!, getProject('studio44')!].map((p) => p.cover)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="wrap grid items-center gap-12 pb-16 md:pb-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#16a34a]" aria-hidden />
              {profile.title} · {profile.location}
            </p>
            <h1 className="display text-[clamp(3.25rem,8.5vw,6.5rem)]">
              I lead and ship <span className="inline-block -rotate-1 bg-yellow px-3 pt-1">Flutter apps</span> end to end.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
              I&apos;m Wassef. For 4+ years I&apos;ve built cross-platform apps for banks, telecoms, hospitality and retail, and I publish my own products under{' '}
              <a href={profile.studio} target="_blank" rel="noopener noreferrer" className="font-bold text-ink underline decoration-yellow decoration-4 underline-offset-4">
                WeCraft Solutions
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#work" className="btn btn-ink">See the work <ArrowDown className="h-4 w-4" /></a>
              <a href="#contact" className="btn btn-yellow">Get in touch</a>
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
        <div className="overflow-hidden border-y-2 border-ink bg-ink py-4 text-paper">
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
              <p className="eyebrow mb-3">Selected work · 2022 — {new Date().getFullYear()}</p>
              <h2 className="display text-6xl md:text-8xl">The work</h2>
            </div>
            <p className="max-w-md text-muted">
              {projects.length} apps, almost all live in the stores. Client and employer work first, then the products I build and publish myself.
            </p>
          </Reveal>

          <h3 className="display mb-6 flex items-center gap-3 text-3xl">
            <span className="h-3 w-3 bg-ink" aria-hidden /> Client & employer work
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {client.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>

          <h3 id="products" className="display mb-6 mt-20 flex items-center gap-3 text-3xl">
            <span className="h-3 w-3 bg-yellow ring-2 ring-ink" aria-hidden /> Own products · WeCraft Solutions
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <ProjectCard project={p} index={client.length + i} large />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="on-ink bg-ink py-20 text-paper md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4 text-yellow">About</p>
            <h2 className="display text-5xl md:text-7xl">
              Unfamiliar codebase? <span className="text-yellow">Good.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg text-paper/80">
            <p>
              I&apos;m a Flutter Tech Lead based in Tunisia. I&apos;ve architected an offline-first hospitality platform (POS, kitchen display, inventory, analytics) and shipped booking, payment and self-care apps for a Qatari bank, Tunisia&apos;s national telecom and clients in France.
            </p>
            <p>
              I&apos;m comfortable taking over a codebase I didn&apos;t write and owning it end to end: architecture, hosted-payment flows, testing, CI/CD and store release. I also publish and monetise my own products, so I care about what happens after launch.
            </p>
            <p className="text-base text-paper/60">
              {education.degree}, {education.major} ({education.year}) · {languages.join(' · ')}
            </p>
          </Reveal>
        </div>

        <div className="wrap mt-16 grid gap-px border-2 border-paper/20 bg-paper/20 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="bg-ink p-6 md:p-8">
              <span className="display text-5xl text-yellow">0{i + 1}</span>
              <h3 className="display mt-4 text-3xl">{s.title}</h3>
              <p className="mt-3 text-paper/70">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="wrap mt-16">
          <h3 className="display mb-6 text-4xl">Toolbox</h3>
          <dl className="grid gap-x-10 border-t border-paper/20 md:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-3 border-b border-paper/20 py-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                <dt className="eyebrow pt-1 text-yellow">{g.group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="chip border-paper/40 text-paper/90">{it}</span>
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
            <p className="eyebrow mb-3">Experience</p>
            <h2 className="display mb-12 text-6xl md:text-8xl">The path</h2>
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
                        const p = getProject(slug)
                        return p ? (
                          <Link key={slug} href={`/project/${slug}`} className="chip border-ink hover:bg-yellow">
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
      <section id="contact" className="relative overflow-hidden border-t-2 border-ink bg-yellow py-20 md:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="display text-[clamp(3.5rem,13vw,10rem)]">Let&apos;s build it.</h2>
            <p className="mt-6 max-w-xl text-lg">
              A new app, a codebase that needs an owner, or a Flutter lead for your team: tell me what you&apos;re making and I&apos;ll get back to you fast.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="display mt-10 block break-all text-3xl underline decoration-4 underline-offset-8 hover:decoration-8 sm:text-5xl"
            >
              {profile.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="btn btn-ink"><Mail className="h-4 w-4" /> Email me</a>
              <CopyEmail email={profile.email} />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-paper"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-paper"><Github className="h-4 w-4" /> GitHub</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
