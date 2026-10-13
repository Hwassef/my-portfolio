import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { Anton, Archivo } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ServiceWorker from '@/components/ServiceWorker'
import { profile } from '@/data/site'
import { dict, href, isLang, langs, type Lang } from '@/i18n'
import './globals.css'

const display = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })
const body = Archivo({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

type Props = { children: React.ReactNode; params: { lang: string } }

export const dynamicParams = false
export const generateStaticParams = () => langs.map((lang) => ({ lang }))

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Lang
  const t = dict[lang].meta
  return {
    metadataBase: new URL(profile.site),
    title: { default: t.title, template: '%s — Wassef Hassine' },
    description: t.description,
    icons: { icon: '/favicon.ico', apple: '/icons/apple-touch-icon.png' },
    manifest: '/manifest.webmanifest',
    appleWebApp: { capable: true, title: 'Wassef', statusBarStyle: 'black-translucent' },
    openGraph: {
      type: 'website',
      url: href(lang),
      siteName: 'Wassef Hassine',
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      title: t.title,
      description: t.description,
      images: [{ url: '/work/headsapp_mockups.jpg', width: 1600, height: 1200 }],
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical: href(lang), languages: { en: '/', fr: '/fr' } },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

// Runs before paint so a saved or system dark preference never flashes light.
const themeScript = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}`

export default function RootLayout({ children, params }: Props) {
  if (!isLang(params.lang)) notFound()
  const lang = params.lang

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: lang === 'fr' ? 'Tech Lead Flutter' : profile.title,
    url: profile.site,
    email: `mailto:${profile.email}`,
    worksFor: { '@type': 'Organization', name: 'WeCraft Solutions', url: profile.studio },
    sameAs: [profile.github, profile.linkedin],
  }

  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip">{lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a>
        <Nav lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <ServiceWorker lang={lang} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </body>
    </html>
  )
}
