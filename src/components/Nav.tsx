'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur transition-[border-color] ${
        scrolled || open ? 'border-b-2 border-ink' : 'border-b-2 border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Wassef Hassine, home">
          <span className="display grid h-9 w-9 place-items-center bg-yellow text-xl text-ink">W</span>
          <span className="display text-xl tracking-wide">Wassef Hassine</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-bold uppercase tracking-wider hover:underline hover:decoration-yellow hover:decoration-4 hover:underline-offset-8">
              {l.label}
            </a>
          ))}
          <a href="/#contact" className="btn btn-yellow !px-4 !py-2">Hire me</a>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center border-2 border-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="wrap flex flex-col gap-1 pb-6 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="display border-b border-line py-3 text-3xl">
              {l.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="btn btn-yellow mt-4 justify-center">Hire me</a>
        </nav>
      )}
    </header>
  )
}
