export const profile = {
  name: 'Wassef Hassine',
  role: 'Flutter engineer & founder of WeCraft Solutions',
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
  role: string
  period: string
  summary: string
  link?: string
}

export const experience: Experience[] = [
  {
    company: 'WeCraft Solutions',
    role: 'Founder & lead mobile engineer',
    period: 'Now',
    summary:
      'Digital agency and product studio. I scope, design and ship mobile products for clients, and build our own apps: Sayso (word-puzzle game) and DIBS (marketplace alerts).',
    link: 'https://wecraft-solutions.com',
  },
  {
    company: 'Dukhan Bank',
    role: 'Software developer',
    period: '2024',
    summary:
      'Flutter development on the retail banking app: national and international transfers, Google Maps branch locator, and UX improvements across core flows.',
  },
  {
    company: 'Digitrame',
    role: 'Mobile developer',
    period: '2022 — 2024',
    summary:
      'Evolved the Digitrame quoting and invoicing app: digital signature, secure document sharing and native Swift work alongside the Flutter codebase.',
  },
  {
    company: 'HeadsApp',
    role: 'Flutter developer',
    period: '2022',
    summary:
      'Maintained the secure messaging app for healthcare professionals: null-safety migration, internationalisation and feature work.',
  },
]

export const stack = [
  'Flutter',
  'Dart',
  'BLoC',
  'Riverpod',
  'Provider',
  'MobX',
  'GetX',
  'Firebase',
  'Firestore',
  'SQLite',
  'REST APIs',
  'go_router',
  'Clean Architecture',
  'In-app purchases',
  'AdMob',
  'Swift',
  'Kotlin',
  'Java',
  'Next.js',
  'TypeScript',
  'Git',
  'CI / store releases',
]

export type Shot = {
  src: string
  alt: string
  /** phone = portrait screen, scene = landscape mockup render, tablet = landscape screen */
  kind: 'phone' | 'scene' | 'tablet'
  w: number
  h: number
  /** already framed (e.g. store screenshots with a device baked in): skip the bezel */
  bare?: boolean
}

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  category: string
  year: string
  /** Own product vs. client or employer work */
  owner: 'WeCraft product' | 'Client / employer'
  status?: string
  icon?: string
  cover: Shot
  shots: Shot[]
  stack: string[]
  architecture: string
  state: string
  duration?: string
  features: { title: string; body: string }[]
  appStore?: string
  playStore?: string
}

const phone = (src: string, alt: string, w = 314, h = 681, bare = false): Shot => ({ src, alt, kind: 'phone', w, h, bare })

export const projects: Project[] = [
  {
    slug: 'sayso',
    title: 'Sayso',
    tagline: 'Crack the rebus.',
    description:
      'A rebus word-puzzle game: turn emojis, symbols and letters into words and phrases. 1,800+ handcrafted puzzles, a fresh daily challenge, worlds to unlock and global leaderboards.',
    category: 'Mobile game',
    year: '2026',
    owner: 'WeCraft product',
    icon: '/work/sayso_icon.png',
    cover: phone('/work/sayso_1_gameplay.jpg', 'Sayso gameplay screen', 1200, 2596, true),
    shots: [
      phone('/work/sayso_1_gameplay.jpg', 'Sayso gameplay', 1200, 2596, true),
      phone('/work/sayso_2_solved.jpg', 'Sayso puzzle solved', 1200, 2596, true),
      phone('/work/sayso_3_worlds.jpg', 'Sayso worlds', 1200, 2596, true),
      phone('/work/sayso_5_daily.jpg', 'Sayso daily challenge', 1200, 2596, true),
    ],
    stack: ['Flutter', 'Firebase', 'RevenueCat', 'Game Center / Play Games', 'AdMob'],
    architecture: 'Feature-first + DI (get_it)',
    state: 'BLoC',
    features: [
      { title: '1,800+ puzzles', body: 'Content pipeline with difficulty tiers, hints, reveals and passes priced in an in-game coin economy.' },
      { title: 'Daily loop', body: 'Five new puzzles a day, streaks and timezone-aware local notifications to bring players back.' },
      { title: 'Monetised end-to-end', body: 'In-app purchases via RevenueCat, rewarded ads, ATT consent and native leaderboards on both stores.' },
    ],
  },
  {
    slug: 'dibs',
    title: 'DIBS',
    tagline: 'Be first to what you want.',
    description:
      'A discovery and alerts layer for second-hand marketplaces. Save "Watchers" and get pinged seconds after a matching item is posted near you, browse by room, or explore drops on a live map.',
    category: 'Marketplace app',
    year: '2026',
    owner: 'WeCraft product',
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
      { title: 'Watchers', body: 'Saved searches that match new listings by room, price and radius, with instant, hourly or daily alerts.' },
      { title: 'Live map', body: 'Price-tag markers with distance-based clustering and a to-scale search radius on OpenStreetMap.' },
      { title: 'Motion-led UI', body: 'Custom design system: spring physics, breathing shapes, no stock Material widgets, golden-file tests per screen.' },
    ],
  },
  {
    slug: 'dukhanbank',
    title: 'Dukhan Bank',
    tagline: 'Banking, 24/7.',
    description:
      'Retail banking app for Dukhan Bank (Qatar): secure login, account management, national and international transfers, bill payments and mobile services.',
    category: 'Fintech',
    year: '2024',
    owner: 'Client / employer',
    icon: '/ic_app_icon.svg',
    cover: phone('/dukhan_mockup_1.png', 'Dukhan Bank app screen'),
    shots: [
      phone('/dukhan_mockup_1.png', 'Dukhan Bank screen 1'),
      phone('/dukhan_mockup_2.png', 'Dukhan Bank screen 2'),
      phone('/dukhan_mockup_3.png', 'Dukhan Bank screen 3'),
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
    architecture: 'Clean Architecture',
    state: 'BLoC',
    duration: '6 months',
    features: [
      { title: 'Account management', body: 'Balances, transactions and account services in one place.' },
      { title: 'Secure transfers', body: 'National and international transfers and bill payments, anytime.' },
      { title: 'Mobile services', body: 'Top-ups, Western Union and a Google Maps branch and ATM locator.' },
    ],
    appStore: 'https://apps.apple.com/us/app/dukhan-mobile/id817391995',
    playStore: 'https://play.google.com/store/apps/details?id=com.Barwa&hl=en',
  },
  {
    slug: 'digitrame',
    title: 'Digitrame',
    tagline: 'Quotes & invoices, done.',
    description:
      'Quotes, invoices and inventory for freelancers and small businesses, with digital signature and secure document sharing.',
    category: 'Business / SaaS',
    year: '2023',
    owner: 'Client / employer',
    icon: '/digitrame.jpg',
    cover: { src: '/digitrame_1.png', alt: 'Digitrame client screen on iPad', kind: 'tablet', w: 434, h: 325 },
    shots: [1, 2, 3, 4].map((n) => ({ src: `/digitrame_${n}.png`, alt: `Digitrame screen ${n}`, kind: 'tablet' as const, w: 434, h: 325 })),
    stack: ['Flutter', 'Swift', 'SQLite'],
    architecture: 'MVVM',
    state: 'Provider',
    duration: '4 months',
    features: [
      { title: 'Streamlined invoicing', body: 'Create quotes, convert them to invoices and track payment status.' },
      { title: 'Digital signature', body: 'Clients sign quotes on device; documents are shared through secure links.' },
      { title: 'Offline-first', body: 'Local SQLite storage keeps the app fast and usable without a connection.' },
    ],
    appStore: 'https://apps.apple.com/fr/app/digitrame-devis-et-factures/id1494623897',
  },
  {
    slug: 'headsapp',
    title: 'HeadsApp',
    tagline: 'Messaging for care teams.',
    description:
      'Secure messaging for healthcare professionals: priority-coded messages, patient threads and an establishment directory to speed up consultations.',
    category: 'Healthcare',
    year: '2022',
    owner: 'Client / employer',
    icon: '/headsapp.png',
    cover: { src: '/work/headsapp_mockups.jpg', alt: 'HeadsApp screens', kind: 'scene', w: 1600, h: 1200 },
    shots: [
      { src: '/work/headsapp_mockups.jpg', alt: 'HeadsApp chat, patients and splash screens', kind: 'scene', w: 1600, h: 1200 },
      { src: '/work/headsapp_mockup_two.jpg', alt: 'HeadsApp screens 2', kind: 'scene', w: 1600, h: 1200 },
      { src: '/work/headsapp_mockup_three.jpg', alt: 'HeadsApp screens 3', kind: 'scene', w: 1600, h: 1200 },
    ],
    stack: ['Flutter', 'Dart', 'Firebase'],
    architecture: 'Clean Architecture',
    state: 'Riverpod',
    duration: '5 months',
    features: [
      { title: 'Secure messaging', body: 'Private threads between practitioners, with patient data kept in the loop safely.' },
      { title: 'Priority levels', body: 'Colour-coded urgency so critical requests are seen first.' },
      { title: 'International', body: 'Null-safety migration and full internationalisation of the app.' },
    ],
    appStore: 'https://apps.apple.com/us/app/headsapp/id1568508905',
    playStore: 'https://play.google.com/store/apps/details?id=com.TechAngela.HeadsApp&hl=fr&gl=US',
  },
  {
    slug: 'proximitystore',
    title: 'ProximityStore',
    tagline: 'Shop local, smarter.',
    description:
      'Find local deals and support nearby businesses with personalised shopping recommendations.',
    category: 'Retail',
    year: '2022',
    owner: 'Client / employer',
    icon: '/proximitystore.png',
    cover: phone('/proximitystore_1.png', 'ProximityStore screen', 273, 592),
    shots: [1, 2, 3, 4].map((n) => phone(`/proximitystore_${n}.png`, `ProximityStore screen ${n}`, 273, 592)),
    stack: ['Flutter', 'Dart', 'Firebase'],
    architecture: 'MVC',
    state: 'GetX',
    duration: '3 months',
    features: [
      { title: 'Personalised deals', body: 'Recommendations tailored to preferences and location.' },
      { title: 'Nearby businesses', body: 'Encourages shopping locally and helps small shops grow.' },
      { title: 'Secure accounts', body: 'Personal data protected end to end.' },
    ],
    appStore: 'https://apps.apple.com/fr/app/proximitystore/id1612459998?l=en',
    playStore: 'https://play.google.com/store/apps/details?id=com.proximitystore.app',
  },
  {
    slug: 'lejeuqui',
    title: 'Le Jeu Qui',
    tagline: 'Party game night.',
    description:
      'Le jeu qui… makes for a wild evening with friends or family: trivia and challenges built for groups.',
    category: 'Party game',
    year: '2023',
    owner: 'Client / employer',
    icon: '/le_jeu_qui.png',
    cover: phone('/lejeuqui_mockup_1.png', 'Le Jeu Qui screen'),
    shots: [phone('/lejeuqui_mockup_1.png', 'Le Jeu Qui screen 1'), phone('/lejeuqui_mockup_2.png', 'Le Jeu Qui screen 2')],
    stack: ['Flutter', 'Dart', 'Firebase'],
    architecture: 'MVVM',
    state: 'MobX',
    duration: '3 months',
    features: [
      { title: 'Multiplayer fun', body: 'Pass-the-phone play for groups of friends and family.' },
      { title: 'Diverse challenges', body: 'A wide pool of questions and dares keeps every round fresh.' },
      { title: 'Easy to play', body: 'Simple rules and an intuitive interface for all ages.' },
    ],
    appStore: 'https://apps.apple.com/us/app/le-jeu-qui/id6448712204',
    playStore: 'https://play.google.com/store/apps/details?id=com.lejeuqui',
  },
  {
    slug: 'swipecolorgame',
    title: 'Swipe Color',
    tagline: 'Fast. Colourful. Global.',
    description:
      'A fast-paced reflex game: swipe based on colour cues and climb the global leaderboard.',
    category: 'Arcade game',
    year: '2021',
    owner: 'Client / employer',
    icon: '/swipe_color.png',
    cover: { src: '/work/swipe_mockup_1.jpg', alt: 'Swipe Color screens', kind: 'scene', w: 1600, h: 1200 },
    shots: [1, 2, 3, 4].map((n) => ({ src: `/work/swipe_mockup_${n}.jpg`, alt: `Swipe Color mockup ${n}`, kind: 'scene' as const, w: 1600, h: 1200 })),
    stack: ['Flutter', 'Dart'],
    architecture: 'Simple layered',
    state: 'setState',
    duration: '2 months',
    features: [
      { title: 'Global leaderboards', body: 'Compete with players worldwide and climb the ranks.' },
      { title: 'Offline play', body: 'Most modes work with no connection at all.' },
      { title: 'Tight game feel', body: 'Responsive swipe detection tuned for speed.' },
    ],
    appStore: 'https://apps.apple.com/us/app/swipe-color-game/id1522599744',
    playStore: 'https://play.google.com/store/apps/details?id=com.impactmsg.swipecolorgame',
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const stats = [
  { value: `${new Date().getFullYear() - 2021}+`, label: 'years shipping Flutter' },
  { value: `${projects.filter((p) => p.appStore || p.playStore).length}`, label: 'apps live in the stores' },
  { value: '2', label: 'own products at WeCraft' },
]
