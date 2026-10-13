'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { dict, href, langs, switchPath, type Lang } from '@/i18n'

type Theme = 'light' | 'dark'

function ThemeToggle({ lang }: { lang: Lang }) {
  // null until mounted: the real theme is set by the inline script in <head>
  const [theme, setTheme] = useState<Theme | null>(null)
  const t = dict[lang].theme

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTheme(next)
  }

  return (
    <button
      onClick={toggle}
      className="grid h-10 w-10 place-items-center border-2 border-ink"
      aria-label={theme === 'dark' ? t.toLight : t.toDark}
      title={theme === 'dark' ? t.toLight : t.toDark}
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() || '/'
  return (
    <div className="flex h-10 border-2 border-ink text-xs font-bold" role="group" aria-label={dict[lang].lang.label}>
      {langs.map((l) => (
        <a
          key={l}
          href={switchPath(pathname, l)}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? 'true' : undefined}
          className={`grid w-10 place-items-center uppercase tracking-wider ${l === lang ? 'bg-ink text-paper' : 'hover:bg-yellow hover:text-[#0a0a0a]'}`}
        >
          {l}
        </a>
      ))}
    </div>
  )
}

export default function Nav({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const t = dict[lang].nav
  const home = href(lang)

  const links = [
    { href: `${home}#work`, label: t.work },
    { href: `${home}#about`, label: t.about },
    { href: `${home}#experience`, label: t.experience },
    { href: `${home}#contact`, label: t.contact },
  ]

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 bg-paper transition-[border-color] ${
        scrolled || open ? 'border-ink' : 'border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href={home} className="flex items-center gap-2" aria-label={t.home}>
          <span className="display grid h-9 w-9 place-items-center bg-yellow text-xl">W</span>
          <span className="display hidden text-xl tracking-wide min-[380px]:inline">Wassef Hassine</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-bold uppercase tracking-wider hover:underline hover:decoration-yellow hover:decoration-4 hover:underline-offset-8">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} />
          <ThemeToggle lang={lang} />
          <a href={`${home}#contact`} className="btn btn-yellow ml-2 hidden !px-4 !py-2 lg:inline-flex">{t.hire}</a>
          <button
            className="grid h-10 w-10 place-items-center border-2 border-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.close : t.open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="wrap flex flex-col gap-1 pb-6 lg:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="display border-b border-line py-3 text-3xl">
              {l.label}
            </a>
          ))}
          <a href={`${home}#contact`} onClick={() => setOpen(false)} className="btn btn-yellow mt-4 justify-center">{t.hire}</a>
        </nav>
      )}
    </header>
  )
}
