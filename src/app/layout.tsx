import type { Metadata, Viewport } from 'next'
import { Anton, Archivo } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { profile } from '@/data/site'
import './globals.css'

const display = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })
const body = Archivo({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

const description =
  'Wassef Hassine — Flutter engineer and founder of WeCraft Solutions. 5+ years shipping iOS & Android apps in fintech, healthcare, retail and games.'

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: 'Wassef Hassine — Flutter engineer', template: '%s — Wassef Hassine' },
  description,
  openGraph: {
    type: 'website',
    url: profile.site,
    siteName: 'Wassef Hassine',
    title: 'Wassef Hassine — Flutter engineer',
    description,
    images: [{ url: '/work/headsapp_mockups.jpg', width: 1600, height: 1200 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = { themeColor: '#0a0a0a' }

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'Flutter engineer',
  url: profile.site,
  email: `mailto:${profile.email}`,
  worksFor: { '@type': 'Organization', name: 'WeCraft Solutions', url: profile.studio },
  sameAs: [profile.github, profile.linkedin],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </body>
    </html>
  )
}
