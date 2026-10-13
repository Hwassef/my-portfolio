export const profile = {
  name: 'Wassef Hassine',
  title: 'Flutter Tech Lead',
  location: 'Tunisia · remote worldwide',
  email: 'hassinewassef@gmail.com',
  phone: '+216 53 252 928',
  github: 'https://github.com/Hwassef',
  linkedin: 'https://www.linkedin.com/in/wassef-hassine-052329248/',
  studio: 'https://wecraft-solutions.com',
  site: 'https://hwassef.tn',
}

export type Experience = {
  company: string
  client?: string
  role: string
  period: string
  points: string[]
  link?: string
  /** project slugs shown as chips */
  projects?: string[]
}

export const experience: Experience[] = [
  {
    company: 'WeCraft Solutions',
    role: 'Founder & sole developer',
    period: '2026 — Now',
    points: [
      'Studio for my own products, owned end to end: concept, architecture, build, store assets, pricing, review and marketing.',
      'Shipped WIRE (tech-news reader, EN / FR / AR with true RTL), Spytrap (paid Android privacy monitor) and Sayso (word-puzzle game).',
    ],
    link: 'https://wecraft-solutions.com',
    projects: ['wire', 'spytrap', 'sayso', 'dibs'],
  },
  {
    company: 'Servini ERP Solution',
    client: 'Restaurant & hospitality operations platform',
    role: 'Flutter Tech Lead (subcontract)',
    period: 'Aug 2025 — Now',
    points: [
      'Architected a tablet-first Flutter app with Clean Architecture: 95%+ code reuse across iOS, Android and web.',
      'Four role-based interfaces: POS, inventory & food cost, kitchen display system and analytics.',
      'Offline-first with real-time WebSocket sync and sub-200 ms responses for high-volume service.',
      'Flavors and per-client build configs so one core platform ships to many venues with their own branding, features and endpoints.',
      'Thermal printers, QR systems, tests, DevTools profiling, CI/CD and store releases.',
    ],
    link: 'https://play.google.com/store/apps/details?id=online.servini.servini',
  },
  {
    company: 'Proxym Group',
    client: 'My TT · Tunisie Telecom',
    role: 'Software developer',
    period: 'Feb 2025 — Aug 2025',
    points: [
      'Self-care services for the national telecom operator: account management, consumption, recharge and bill payment.',
      'ClicToPay hosted card payments with success, failure and cancellation reconciled server-side; Keycloak auth.',
    ],
    projects: ['mytt'],
  },
  {
    company: 'Access Content Agency',
    client: 'Studio 44 · private Pilates',
    role: 'Independent consultant',
    period: 'Jan 2025 — Apr 2025',
    points: ['Booking and scheduling app with real-time equipment availability, payments, memberships and push. Shipped to iOS, Android and Huawei.'],
    projects: ['studio44'],
  },
  {
    company: 'Proxym Group',
    client: 'Dukhan Bank · Qatar',
    role: 'Software developer',
    period: 'Jan 2024 — Feb 2025',
    points: [
      "Features for Qatar's leading Sharia-compliant digital bank, 150,000+ customers, under regulated-fintech constraints.",
      'Western Union, internal and national transfers, bill payments; 3-D Secure in a WebView; EN / AR with full RTL.',
    ],
    projects: ['dukhanbank'],
  },
  {
    company: 'Solidarité Sans Frontières',
    client: 'Association platform · France',
    role: 'Independent consultant',
    period: 'Freelance',
    points: [
      'Maison Solidaire, a dual-role B2B marketplace for companies and verified artisans, taken through to store publication.',
      'Facture Solidaire, a subscription invoicing app on iOS, Android and web; the SSF Next.js platform with Stripe donations and an AI project-intake pipeline.',
    ],
    link: 'https://solidaritessf.fr',
    projects: ['maisonsolidaire', 'facturesolidaire'],
  },
  {
    company: "Grant's Tech",
    client: 'HeadsApp · Digitrame',
    role: 'Mobile developer · iOS developer (Swift)',
    period: 'Nov 2022 — Jan 2024',
    points: [
      'HeadsApp: took over an unfamiliar codebase, migrated to null safety and refactored toward Clean Architecture.',
      'Digitrame (Swift): Zoho Sign digital signature and Zoho WorkDrive secure document sharing.',
    ],
    projects: ['headsapp', 'digitrame'],
  },
  {
    company: 'WIMOBI',
    client: 'ProximityStore · Le Jeu Qui · Swipe Color',
    role: 'Flutter developer · monetisation consultant',
    period: 'Jan 2022 — Oct 2022',
    points: [
      'ProximityStore: theme, EN / FR internationalisation, Google Maps and location-based APIs.',
      'Le Jeu Qui & Swipe Color: RevenueCat ad-removal subscriptions, Lottie splash screens and a seasonal ranking.',
    ],
    projects: ['proximitystore', 'lejeuqui', 'swipecolorgame'],
  },
]

export const education = { degree: "Bachelor's in Computer Science", major: 'Information Systems Development', year: '2022' }

export const languages = ['Arabic (native)', 'French (fluent)', 'English (fluent)']

export const skills: { group: string; items: string[] }[] = [
  { group: 'Mobile', items: ['Flutter / Dart', 'Swift', 'Java', 'Kotlin'] },
  { group: 'Architecture', items: ['Clean Architecture', 'Modular', 'MVVM / MVVMC / MVC', 'Feature flags', 'Config-driven builds'] },
  { group: 'State & async', items: ['BLoC', 'Provider', 'Riverpod', 'MobX', 'Streams', 'WebSockets'] },
  { group: 'Auth & payments', items: ['Keycloak / OAuth2', 'Biometrics', 'WebView ↔ Dart channels', 'Deep links', 'Stripe & 3-D Secure', 'ClicToPay', 'StoreKit / RevenueCat'] },
  { group: 'Multi-brand & i18n', items: ['Flavors', 'Per-flavor Firebase', 'Config-driven theming', 'EN / FR / AR with RTL'] },
  { group: 'Backend & data', items: ['REST / JSON', 'Firebase', 'SQLite', 'Realm', 'NestJS', 'GraphQL', 'Supabase'] },
  { group: 'DevOps & CI/CD', items: ['GitHub Actions', 'GitLab', 'Fastlane', 'Tag-based deploys', 'App Store Connect', 'Play Console', 'AppGallery'] },
  { group: 'Testing', items: ['Unit, widget & integration', 'Mockito', 'DevTools profiling'] },
]

/** compact list for the ticker */
export const stack = ['Flutter', 'Dart', 'Clean Architecture', 'BLoC', 'Riverpod', 'WebSockets', 'Offline-first', 'Keycloak', '3-D Secure', 'Stripe', 'RevenueCat', 'Firebase', 'Flavors', 'RTL', 'Fastlane', 'GitHub Actions', 'Swift', 'Kotlin']

export type Shot = {
  src: string
  alt: string
  /** phone = portrait screen, scene = landscape mockup render, tablet = landscape screen */
  kind: 'phone' | 'scene' | 'tablet'
  w: number
  h: number
  /** already framed (store marketing screenshots with a device baked in): skip the bezel */
  bare?: boolean
}

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  category: string
  year: string
  group: 'product' | 'client'
  /** who it was for, e.g. "Proxym Group for Tunisie Telecom" */
  client?: string
  role: string
  status?: string
  icon?: string
  cover: Shot
  shots: Shot[]
  stack: string[]
  architecture?: string
  state?: string
  period?: string
  features: { title: string; body: string }[]
  appStore?: string
  playStore?: string
  website?: string
  appGallery?: string
  /** stores without a link we can verify, e.g. Huawei AppGallery */
  alsoOn?: string
}

const shots = (prefix: string, title: string, w: number, h: number, n = 4): Shot[] =>
  Array.from({ length: n }, (_, i) => ({ src: `/work/${prefix}_${i + 1}.jpg`, alt: `${title} screenshot ${i + 1}`, kind: 'phone' as const, w, h, bare: true }))

const phone = (src: string, alt: string, w = 314, h = 681): Shot => ({ src, alt, kind: 'phone', w, h })
const scene = (src: string, alt: string): Shot => ({ src, alt, kind: 'scene', w: 1600, h: 1200 })

const wire = shots('wire', 'WIRE', 600, 1298)
const spytrap = shots('spytrap', 'Spytrap', 600, 1067)
const mytt = shots('mytt', 'My TT', 600, 1067)
const studio44 = shots('studio44', 'Studio 44', 600, 1300)
const maison = shots('maisonsolidaire', 'Maison Solidaire', 600, 1299)
const facture = shots('facturesolidaire', 'Facture Solidaire', 600, 1299)
const sayso = ['1_gameplay', '2_solved', '3_worlds', '5_daily'].map((s, i): Shot => ({
  src: `/work/sayso_${s}.jpg`, alt: `Sayso screenshot ${i + 1}`, kind: 'phone', w: 1200, h: 2596, bare: true,
}))

export const projects: Project[] = [
  // ── own products ────────────────────────────────────────────────
  {
    slug: 'wire',
    title: 'WIRE',
    tagline: 'Tech news with an ending.',
    description:
      'A tech-news reader built around a finite daily deck: twenty swipeable stories that deliberately end instead of scrolling forever, plus Feed, Discover, Reader and Saved.',
    category: 'News reader',
    year: '2026',
    group: 'product',
    role: 'Founder & sole developer',
    icon: '/work/wire_icon.jpg',
    cover: wire[0],
    shots: wire,
    stack: ['Flutter', 'Offline persistence', 'EN / FR / AR', 'RTL'],
    features: [
      { title: 'A deck that ends', body: 'Twenty stories a day, swiped like cards, then done. A calmer alternative to the infinite feed.' },
      { title: 'Real RTL', body: 'Trilingual EN / FR / AR where the masthead, chips, progress bar and swipe direction all mirror, not just the strings.' },
      { title: 'No account', body: 'All reading data stays on-device with offline persistence. I owned the landing page, store listing and review.' },
    ],
    appStore: 'https://apps.apple.com/app/wire-tech-newsstand/id6790411412',
    playStore: 'https://play.google.com/store/apps/details?id=com.wecraftsolutions.wire',
    website: 'https://wecraft-solutions.com/wire',
  },
  {
    slug: 'spytrap',
    title: 'Spytrap',
    tagline: 'Know who is watching.',
    description:
      'A paid Android privacy app that logs every camera and microphone access (which app, when, for how long, and whether the phone was locked) and alerts you in real time.',
    category: 'Privacy · Android',
    year: '2026',
    group: 'product',
    role: 'Founder & sole developer',
    icon: '/work/spytrap_icon.png',
    cover: spytrap[0],
    shots: spytrap,
    stack: ['Flutter', 'Kotlin', 'Platform channels', 'Android system APIs'],
    features: [
      { title: 'System-level service', body: 'A background service on native Android APIs, cross-checking parallel system signals to stay reliable across manufacturer skins.' },
      { title: 'No server', body: 'No account and no backend: every log stays on the phone. Sold as a one-time purchase.' },
      { title: 'Through Play review', body: 'Handled rejection remediation and testing tracks through to production for a sensitive-permission app.' },
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.hwassef.spytrap',
    website: 'https://spydar.pro',
  },
  {
    slug: 'sayso',
    title: 'Sayso',
    tagline: 'Crack the rebus.',
    description:
      'A rebus word-puzzle game: turn emojis, symbols and letters into words and phrases. 1,800+ handcrafted puzzles, a fresh daily challenge, worlds to unlock and global leaderboards.',
    category: 'Mobile game',
    year: '2026',
    group: 'product',
    role: 'Founder & sole developer',
    icon: '/work/sayso_icon.png',
    cover: sayso[0],
    shots: sayso,
    stack: ['Flutter', 'Firebase', 'RevenueCat', 'Game Center / Play Games', 'AdMob'],
    architecture: 'Feature-first + DI (get_it)',
    state: 'BLoC',
    features: [
      { title: '1,800+ puzzles', body: 'Difficulty tiers, hints, reveals and passes priced in an in-game coin economy.' },
      { title: 'Daily loop', body: 'Five new puzzles a day, streaks and timezone-aware local notifications.' },
      { title: 'Monetised end to end', body: 'In-app purchases via RevenueCat, rewarded ads, ATT consent and native leaderboards on both stores.' },
    ],
    appStore: 'https://apps.apple.com/app/sayso-word-puzzle-game/id6787775102',
    playStore: 'https://play.google.com/store/apps/details?id=com.wecraftsolutions.sayso',
  },
  {
    slug: 'dibs',
    title: 'DIBS',
    tagline: 'Be first to what you want.',
    description:
      'A discovery and alerts layer for second-hand marketplaces. Save "Watchers" and get pinged seconds after a matching item is posted near you, browse by room, or explore drops on a live map.',
    category: 'Marketplace app',
    year: '2026',
    group: 'product',
    role: 'Founder & sole developer',
    status: 'In development',
    cover: phone('/work/dibs_home.jpg', 'DIBS home screen', 600, 1298),
    shots: [
      phone('/work/dibs_home.jpg', 'DIBS home with rooms and watchers', 600, 1298),
      phone('/work/dibs_listing.jpg', 'DIBS listing detail', 600, 1298),
      phone('/work/dibs_watchers.jpg', 'DIBS watchers', 600, 1298),
    ],
    stack: ['Flutter', 'Riverpod 3', 'go_router', 'Firebase', 'flutter_map', 'Geolocation'],
    architecture: 'Feature-first, repository layer',
    state: 'Riverpod',
    features: [
      { title: 'Watchers', body: 'Saved searches matched by room, price and radius, with instant, hourly or daily alerts.' },
      { title: 'Live map', body: 'Price-tag markers with distance-based clustering and a to-scale search radius on OpenStreetMap.' },
      { title: 'Motion-led UI', body: 'Custom design system with spring physics and golden-file tests for every screen.' },
    ],
  },

  // ── client & employer work ─────────────────────────────────────
  {
    slug: 'mytt',
    title: 'My TT',
    tagline: 'Self-care for a national telco.',
    description:
      "Tunisie Telecom's self-care app: account management, consumption tracking, credit recharge and bill payment.",
    category: 'Telecom',
    year: '2025',
    group: 'client',
    client: 'Proxym Group for Tunisie Telecom',
    role: 'Software developer',
    period: 'Feb 2025 — Aug 2025',
    icon: '/work/mytt_icon.jpg',
    cover: mytt[0],
    shots: mytt,
    stack: ['Flutter', 'Keycloak', 'ClicToPay', 'Firebase FCM', 'Analytics'],
    architecture: 'Modular',
    state: 'BLoC',
    features: [
      { title: 'Self-care services', body: 'Account management, consumption tracking, credit recharge and bill payment.' },
      { title: 'Hosted payments', body: 'ClicToPay card payment pages with success, failure and cancellation reconciled server-side.' },
      { title: 'Secure sessions', body: 'Keycloak authentication with token-based sessions, connectivity checks and robust API error handling.' },
    ],
    appStore: 'https://apps.apple.com/tn/app/my-tt/id1351050951',
    playStore: 'https://play.google.com/store/apps/details?id=com.tunisietelecom.selfcare',
    appGallery: 'https://appgallery.huawei.com/app/C101380003',
  },
  {
    slug: 'dukhanbank',
    title: 'Dukhan Bank',
    tagline: 'Digital banking, Qatar.',
    description:
      "Mobile banking for Qatar's leading Sharia-compliant digital bank, serving 150,000+ customers: transfers, Western Union, bill payments and account services.",
    category: 'Fintech',
    year: '2024',
    group: 'client',
    client: 'Proxym Group for Dukhan Bank',
    role: 'Software developer',
    period: 'Jan 2024 — Feb 2025',
    icon: '/ic_app_icon.svg',
    cover: phone('/dukhan_mockup_1.png', 'Dukhan Bank app screen'),
    shots: [1, 2, 3].map((n) => phone(`/dukhan_mockup_${n}.png`, `Dukhan Bank screen ${n}`)),
    stack: ['Flutter', 'WebView', '3-D Secure', 'EN / AR RTL'],
    architecture: 'Modular',
    state: 'BLoC',
    features: [
      { title: 'Money movement', body: 'Western Union international transfers, internal and national transfers within Qatar.' },
      { title: '3-D Secure in a WebView', body: 'Step-up authentication handled in-app, intercepting the return URL to resolve the outcome against the backend.' },
      { title: 'Bilingual, RTL', body: 'Defined the app theme and shipped English and Arabic with full right-to-left layout, plus Ooredoo, Kahramaa and Vodafone bill pay.' },
    ],
    appStore: 'https://apps.apple.com/app/dukhan-mobile/id817391995',
    playStore: 'https://play.google.com/store/apps/details?id=com.Barwa',
  },
  {
    slug: 'studio44',
    title: 'Studio 44',
    tagline: 'Book the reformer.',
    description:
      'Class booking and scheduling for a private Pilates studio, with a real-time availability calendar for each piece of equipment: Reformer, Wunda Chair and Cadillac.',
    category: 'Booking',
    year: '2025',
    group: 'client',
    client: 'Access Content Agency',
    role: 'Independent consultant',
    period: 'Jan 2025 — Apr 2025',
    icon: '/work/studio44_icon.jpg',
    cover: studio44[0],
    shots: studio44,
    stack: ['Flutter', 'Payments', 'Push notifications'],
    features: [
      { title: 'Live availability', body: 'A reservation-and-inventory calendar per machine, the same problem shape as hospitality and travel booking.' },
      { title: 'Packages & memberships', body: 'Payments for class packs and memberships, with auth and profile management.' },
      { title: 'Three stores', body: 'Shipped to the App Store, Google Play and Huawei AppGallery.' },
    ],
    appStore: 'https://apps.apple.com/app/studio44-private-pilates/id6757301064',
    playStore: 'https://play.google.com/store/apps/details?id=com.studio.studio_44',
    alsoOn: 'Huawei AppGallery',
  },
  {
    slug: 'maisonsolidaire',
    title: 'Maison Solidaire',
    tagline: 'Artisans meet companies.',
    description:
      'A dual-role B2B marketplace connecting companies with verified artisans and independents: two onboarding paths, profiles and permission sets sharing one codebase.',
    category: 'B2B marketplace',
    year: '2026',
    group: 'client',
    client: 'Solidarité Sans Frontières',
    role: 'Independent consultant',
    icon: '/work/maisonsolidaire_icon.jpg',
    cover: maison[0],
    shots: maison,
    stack: ['Flutter', 'Role-based access'],
    features: [
      { title: 'Two roles, one app', body: 'Separate onboarding, profiles and permissions for companies and artisans in a single codebase.' },
      { title: 'Missions', body: 'Mission listing, matching and application flows.' },
      { title: 'To publication', body: 'Produced the store compliance assets and managed both listings through review.' },
    ],
    appStore: 'https://apps.apple.com/app/maison-solidaire/id6785665171',
    playStore: 'https://play.google.com/store/apps/details?id=com.ssf.maison_solidaire',
    website: 'https://maisonsolidaire.fr',
  },
  {
    slug: 'facturesolidaire',
    title: 'Facture Solidaire',
    tagline: 'Invoicing for the self-employed.',
    description:
      'An invoicing app for auto-entrepreneurs and small structures: clients, services, automatic totals and PDF invoices, monetised with an auto-renewing subscription.',
    category: 'Invoicing / SaaS',
    year: '2026',
    group: 'client',
    client: 'Solidarité Sans Frontières',
    role: 'Independent consultant',
    icon: '/work/facturesolidaire_icon.jpg',
    cover: facture[0],
    shots: facture,
    stack: ['Flutter', 'Flutter Web', 'PDF generation', 'Subscriptions'],
    features: [
      { title: 'Invoices in minutes', body: 'Client and service management with automatic totals, PDF generation and sharing.' },
      { title: 'Subscription', body: 'Monetised with an auto-renewing subscription.' },
      { title: 'One codebase, three targets', body: 'Released to iOS, Android and the web from the same Flutter project.' },
    ],
    appStore: 'https://apps.apple.com/app/facture-solidaire/id6777970056',
    playStore: 'https://play.google.com/store/apps/details?id=com.facture_solidaire',
    website: 'https://facturesolidaire.fr',
  },
  {
    slug: 'headsapp',
    title: 'HeadsApp',
    tagline: 'Messaging for care teams.',
    description:
      'Secure messaging for healthcare professionals: priority-coded messages, patient threads and an establishment directory.',
    category: 'Healthcare',
    year: '2023',
    group: 'client',
    client: "Grant's Tech",
    role: 'Mobile developer',
    period: 'Nov 2022 — Jan 2024',
    icon: '/headsapp.png',
    cover: scene('/work/headsapp_mockups.jpg', 'HeadsApp chat, patients and splash screens'),
    shots: [
      scene('/work/headsapp_mockups.jpg', 'HeadsApp chat, patients and splash screens'),
      scene('/work/headsapp_mockup_two.jpg', 'HeadsApp screens 2'),
      scene('/work/headsapp_mockup_three.jpg', 'HeadsApp screens 3'),
    ],
    stack: ['Flutter', 'get_it', 'auto_route', 'i18n'],
    architecture: 'Clean Architecture',
    state: 'BLoC',
    features: [
      { title: 'Owned a legacy codebase', body: 'Took over an unfamiliar app, migrated it to null safety and restored compatibility with the latest Flutter SDK.' },
      { title: 'Refactored', body: 'Moved it toward Clean Architecture with get_it DI, BLoC state and auto_route navigation.' },
      { title: 'Stabilised', body: 'Systematic bug triage and internationalisation for a multilingual user base.' },
    ],
    appStore: 'https://apps.apple.com/app/headsapp/id1568508905',
    playStore: 'https://play.google.com/store/apps/details?id=com.TechAngela.HeadsApp',
    alsoOn: 'Huawei AppGallery',
  },
  {
    slug: 'digitrame',
    title: 'Digitrame',
    tagline: 'Quotes & invoices, signed.',
    description:
      'Quotes, invoices and inventory for freelancers and small businesses. I added digital signature and secure document sharing to the native iOS app.',
    category: 'Business / SaaS',
    year: '2023',
    group: 'client',
    client: "Grant's Tech",
    role: 'iOS developer (Swift)',
    period: 'Mar 2023 — Jun 2023',
    icon: '/digitrame.jpg',
    cover: { src: '/digitrame_1.png', alt: 'Digitrame client screen on iPad', kind: 'tablet', w: 434, h: 325 },
    shots: [1, 2, 3, 4].map((n): Shot => ({ src: `/digitrame_${n}.png`, alt: `Digitrame screen ${n}`, kind: 'tablet', w: 434, h: 325 })),
    stack: ['Swift', 'Zoho Sign API', 'Zoho WorkDrive API'],
    features: [
      { title: 'Digital signature', body: 'End-to-end document signing through the Zoho Sign API.' },
      { title: 'Secure sharing', body: 'Documents shared through the Zoho WorkDrive API.' },
      { title: 'Stability', body: "Contributed to the app's long-term stability on iPhone and iPad." },
    ],
    appStore: 'https://apps.apple.com/app/digitrame-devis-et-factures/id1494623897',
  },
  {
    slug: 'proximitystore',
    title: 'ProximityStore',
    tagline: 'Shop local, smarter.',
    description: 'Find local deals and support nearby businesses with location-based shopping recommendations.',
    category: 'Retail',
    year: '2022',
    group: 'client',
    client: 'WIMOBI',
    role: 'Flutter developer',
    period: 'Jan 2022 — Oct 2022',
    icon: '/proximitystore.png',
    cover: phone('/proximitystore_1.png', 'ProximityStore screen', 273, 592),
    shots: [1, 2, 3, 4].map((n) => phone(`/proximitystore_${n}.png`, `ProximityStore screen ${n}`, 273, 592)),
    stack: ['Flutter', 'Google Maps SDK', 'Location APIs', 'EN / FR'],
    architecture: 'Modular',
    state: 'BLoC',
    features: [
      { title: 'Location-based', body: 'Google Maps SDK and location APIs to surface nearby shops and deals.' },
      { title: 'Theme & i18n', body: 'Defined the app theme and internationalised it in English and French.' },
      { title: 'Resilient', body: 'Connectivity checks and robust API error handling across the app.' },
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.proximitystore.app',
  },
  {
    slug: 'lejeuqui',
    title: 'Le Jeu Qui',
    tagline: 'Party game night.',
    description: 'A party game of trivia and dares for friends and family. I was brought in to monetise and polish it.',
    category: 'Party game',
    year: '2022',
    group: 'client',
    client: 'WIMOBI',
    role: 'Monetisation consultant',
    period: 'Aug 2022 — Sep 2022',
    icon: '/le_jeu_qui.png',
    cover: phone('/lejeuqui_mockup_1.png', 'Le Jeu Qui screen'),
    shots: [phone('/lejeuqui_mockup_1.png', 'Le Jeu Qui screen 1'), phone('/lejeuqui_mockup_2.png', 'Le Jeu Qui screen 2')],
    stack: ['Flutter', 'RevenueCat', 'Lottie'],
    features: [
      { title: 'Subscriptions', body: 'Monthly and annual ad-removal subscriptions via RevenueCat.' },
      { title: 'Seasonal ranking', body: 'A seasonal user-ranking feature to keep groups coming back.' },
      { title: 'Polish', body: 'Animated Lottie splash screen and UI fixes.' },
    ],
    appStore: 'https://apps.apple.com/app/le-jeu-qui/id6448712204',
    playStore: 'https://play.google.com/store/apps/details?id=com.lejeuqui',
  },
  {
    slug: 'swipecolorgame',
    title: 'Swipe Color',
    tagline: 'Fast. Colourful. Global.',
    description: 'A fast-paced reflex game: swipe on colour cues and climb the leaderboard. I added subscriptions, rankings and polish.',
    category: 'Arcade game',
    year: '2022',
    group: 'client',
    client: 'WIMOBI',
    role: 'Monetisation consultant',
    period: 'Aug 2022 — Sep 2022',
    icon: '/swipe_color.png',
    cover: scene('/work/swipe_mockup_1.jpg', 'Swipe Color screens'),
    shots: [1, 2, 3, 4].map((n) => scene(`/work/swipe_mockup_${n}.jpg`, `Swipe Color mockup ${n}`)),
    stack: ['Flutter', 'RevenueCat', 'Lottie'],
    features: [
      { title: 'Subscriptions', body: 'Monthly and annual ad-removal subscriptions via RevenueCat.' },
      { title: 'Seasonal ranking', body: 'A seasonal leaderboard for competitive players.' },
      { title: 'Polish', body: 'Animated Lottie splash screen and UI fixes.' },
    ],
    appStore: 'https://apps.apple.com/app/swipe-color-game/id1522599744',
    playStore: 'https://play.google.com/store/apps/details?id=com.impactmsg.swipecolorgame',
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const stats = [
  { value: `${new Date().getFullYear() - 2022}+`, label: 'years shipping Flutter' },
  { value: `${projects.filter((p) => p.appStore || p.playStore).length}`, label: 'apps live in the stores' },
  { value: '150k+', label: 'bank customers served' },
]
