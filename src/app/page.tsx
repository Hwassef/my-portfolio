import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import Device from '@/components/Device'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import CopyEmail from '@/components/CopyEmail'
import { experience, profile, projects, stack, stats } from '@/data/site'

const services = [
  { title: 'Apps, end to end', body: 'From Figma to App Store and Google Play: architecture, UI, backend wiring, release.' },
  { title: 'Rescue & scale', body: 'Refactors to Clean Architecture, state-management migrations, null-safety, performance.' },
  { title: 'Make it pay', body: 'In-app purchases, subscriptions, ads, analytics and the store listing that sells it.' },
]

export default function Home() {
  const [first, second, ...rest] = projects
  const heroShots = [projects[1].cover, projects[0].cover, projects[2].cover]

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="wrap grid items-center gap-12 pb-16 lg:grid-cols-[1.2fr_1fr] md:pb-24">
          <div>
            <p className="eyebrow mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#16a34a]" aria-hidden />
              Open to missions · {profile.location}
            </p>
            <h1 className="display text-[clamp(3.25rem,8.5vw,6.5rem)]">
              I build <span className="inline-block -rotate-1 bg-yellow px-3 pt-1">mobile apps</span> people keep.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
              I&apos;m Wassef, a Flutter engineer and founder of{' '}
              <a href={profile.studio} target="_blank" rel="noopener noreferrer" className="font-bold text-ink underline decoration-yellow decoration-4 underline-offset-4">
                WeCraft Solutions
              </a>
              . Banking, healthcare, retail and games, shipped to both stores.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#work" className="btn btn-ink">See the work <ArrowDown className="h-4 w-4" /></a>
              <a href="#contact" className="btn btn-yellow">Start a project</a>
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

          <div className="relative mx-auto h-[420px] w-full max-w-[460px] md:h-[560px]" aria-hidden>
            <div className="absolute inset-x-6 bottom-0 top-10 bg-yellow md:inset-x-10" />
            <div className="stripe absolute -right-2 top-4 h-6 w-32" />
            <div className="absolute left-0 top-24 w-[38%] -rotate-6"><Device shot={heroShots[0]} sizes="200px" priority /></div>
            <div className="absolute left-1/2 top-0 z-10 w-[44%] -translate-x-1/2"><Device shot={heroShots[1]} sizes="220px" priority /></div>
            <div className="absolute right-0 top-28 w-[38%] rotate-6"><Device shot={heroShots[2]} sizes="200px" priority /></div>
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
              <p className="eyebrow mb-3">Selected work · 2021 — {new Date().getFullYear()}</p>
              <h2 className="display text-6xl md:text-8xl">The work</h2>
            </div>
            <p className="max-w-md text-muted">
              Two products I own and build at WeCraft, then apps I shipped for banks, startups and studios. Each one links to its case study and store pages.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal><ProjectCard project={first} index={0} large /></Reveal>
            <Reveal delay={100}><ProjectCard project={second} index={1} large /></Reveal>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProjectCard project={p} index={i + 2} />
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
              Product-minded. <span className="text-yellow">Store-proven.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg text-paper/80">
            <p>
              I&apos;ve been shipping Flutter apps since 2021, for a Qatari bank, a French invoicing SaaS, a healthcare messaging startup, local retail and a handful of games. I care about clean architecture as much as the details users actually feel.
            </p>
            <p>
              Today I run <strong className="text-paper">WeCraft Solutions</strong>, a small agency and product studio. We build for clients and ship our own products, so I know what it takes to get an app from idea to paying users.
            </p>
            <p>Fluent in Arabic, French and English. B.Sc. in Computer Science (information systems development).</p>
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
              <Reveal as="li" key={e.company} delay={i * 80} className="grid gap-2 border-b-2 border-ink py-8 md:grid-cols-[180px_1fr_1.4fr] md:gap-8">
                <span className={`display self-start text-2xl ${i === 0 ? 'w-fit bg-yellow px-2' : ''}`}>{e.period}</span>
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
                </div>
                <p className="text-muted">{e.summary}</p>
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
              A new app, a rescue mission or a Flutter engineer for your team: tell me what you&apos;re making and I&apos;ll get back to you fast.
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
