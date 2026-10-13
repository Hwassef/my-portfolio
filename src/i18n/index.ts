export const langs = ['en', 'fr'] as const
export type Lang = (typeof langs)[number]

export const isLang = (v: string): v is Lang => (langs as readonly string[]).includes(v)

/** English lives at the root, French under /fr. */
export const href = (lang: Lang, path = '/') => (lang === 'en' ? path : path === '/' ? '/fr' : `/fr${path}`)

/** The same page in the other language. */
export const switchPath = (pathname: string, to: Lang) => {
  const bare = pathname.replace(/^\/fr(?=\/|$)/, '') || '/'
  return href(to, bare)
}

export const dict = {
  en: {
    nav: { work: 'Work', about: 'About', experience: 'Experience', contact: 'Contact', hire: 'Hire me', home: 'Wassef Hassine, home', open: 'Open menu', close: 'Close menu' },
    theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
    lang: { label: 'Language' },
    hero: {
      title: ['I lead and ship', 'Flutter apps', 'end to end.'],
      intro: "I'm Wassef. For 4+ years I've built cross-platform apps for banks, telecoms, hospitality and retail, and I publish my own products under",
      work: 'See the work',
      contact: 'Get in touch',
    },
    work: {
      eyebrow: 'Selected work',
      title: 'The work',
      blurb: (n: number) => `${n} apps, almost all live in the stores. Client and employer work first, then the products I build and publish myself.`,
      client: 'Client & employer work',
      products: 'Own products · WeCraft Solutions',
      own: 'Own product',
    },
    about: {
      eyebrow: 'About',
      title: ['Unfamiliar codebase?', 'Good.'],
      body: [
        "I'm a Flutter Tech Lead based in Tunisia. I've architected an offline-first hospitality platform (POS, kitchen display, inventory, analytics) and shipped booking, payment and self-care apps for a Qatari bank, Tunisia's national telecom and clients in France.",
        "I'm comfortable taking over a codebase I didn't write and owning it end to end: architecture, hosted-payment flows, testing, CI/CD and store release. I also publish and monetise my own products, so I care about what happens after launch.",
      ],
      services: [
        { title: 'Lead & architect', body: 'Clean Architecture, modular codebases, flavors and config-driven builds so one platform ships to many brands. Offline-first when the business needs it.' },
        { title: 'Payments & auth', body: 'Hosted payment pages and 3-D Secure in WebViews, Keycloak / OAuth2, biometrics, Stripe, StoreKit and RevenueCat subscriptions.' },
        { title: 'Ship & own', body: 'Tests, profiling, CI/CD with Fastlane and GitHub Actions, and releases to the App Store, Google Play and Huawei AppGallery.' },
      ],
      toolbox: 'Toolbox',
    },
    experience: { eyebrow: 'Experience', title: 'The path' },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build it.",
      body: "A new app, a codebase that needs an owner, or a Flutter lead for your team: tell me what you're making and I'll get back to you fast.",
      email: 'Email me',
      copy: 'Copy email',
      copied: 'Copied',
    },
    project: {
      back: 'All work',
      role: 'Role',
      for: 'For',
      studio: 'Studio',
      period: 'Period',
      year: 'Year',
      architecture: 'Architecture',
      state: 'State',
      features: 'What it does',
      next: 'Next project',
      website: 'Website',
      alsoOn: 'Also on',
      prev: 'Previous screenshot',
      nextShot: 'Next screenshot',
      show: 'Show screenshot',
    },
    footer: 'Built with Next.js.',
    notFound: { title: 'Nothing here.', back: 'Back home' },
    meta: {
      title: 'Wassef Hassine — Flutter Tech Lead',
      description: 'Wassef Hassine — Flutter Tech Lead and founder of WeCraft Solutions. 4+ years shipping iOS, Android and web apps for fintech, telecom, hospitality and retail.',
    },
  },
  fr: {
    nav: { work: 'Projets', about: 'À propos', experience: 'Parcours', contact: 'Contact', hire: 'Me contacter', home: 'Wassef Hassine, accueil', open: 'Ouvrir le menu', close: 'Fermer le menu' },
    theme: { toDark: 'Passer en mode sombre', toLight: 'Passer en mode clair' },
    lang: { label: 'Langue' },
    hero: {
      title: ['Je livre des', 'apps Flutter', 'de A à Z.'],
      intro: "Je suis Wassef. Depuis plus de 4 ans, je développe des apps multiplateformes pour la banque, les télécoms, l'hôtellerie-restauration et le commerce, et je publie mes propres produits sous",
      work: 'Voir les projets',
      contact: 'Me contacter',
    },
    work: {
      eyebrow: 'Projets choisis',
      title: 'Les projets',
      blurb: (n: number) => `${n} apps, presque toutes en ligne sur les stores. D'abord les projets clients et employeurs, puis les produits que je conçois et publie moi-même.`,
      client: 'Projets clients & employeurs',
      products: 'Produits maison · WeCraft Solutions',
      own: 'Produit maison',
    },
    about: {
      eyebrow: 'À propos',
      title: ['Un code que vous ne maîtrisez plus ?', 'Parfait.'],
      body: [
        "Je suis Tech Lead Flutter, basé en Tunisie. J'ai conçu l'architecture d'une plateforme offline-first pour la restauration (caisse, écran cuisine, stock, statistiques) et livré des apps de réservation, de paiement et de selfcare pour une banque qatarie, l'opérateur télécom national tunisien et des clients en France.",
        "Je sais reprendre un code que je n'ai pas écrit et le porter de bout en bout : architecture, paiements hébergés, tests, CI/CD et publication sur les stores. Je publie et monétise aussi mes propres produits, donc je m'intéresse à ce qui se passe après le lancement.",
      ],
      services: [
        { title: 'Piloter & architecturer', body: "Clean Architecture, code modulaire, flavors et builds pilotés par configuration pour qu'une plateforme serve plusieurs marques. Offline-first quand le métier l'exige." },
        { title: 'Paiements & auth', body: 'Pages de paiement hébergées et 3-D Secure en WebView, Keycloak / OAuth2, biométrie, Stripe, StoreKit et abonnements RevenueCat.' },
        { title: 'Livrer & maintenir', body: "Tests, profilage, CI/CD avec Fastlane et GitHub Actions, publication sur l'App Store, Google Play et Huawei AppGallery." },
      ],
      toolbox: 'Boîte à outils',
    },
    experience: { eyebrow: 'Parcours', title: 'Le parcours' },
    contact: {
      eyebrow: 'Contact',
      title: 'Construisons-le.',
      body: "Une nouvelle app, un code qui a besoin d'un responsable ou un lead Flutter pour votre équipe : dites-moi ce que vous préparez, je vous réponds vite.",
      email: 'M’écrire',
      copy: "Copier l'e-mail",
      copied: 'Copié',
    },
    project: {
      back: 'Tous les projets',
      role: 'Rôle',
      for: 'Pour',
      studio: 'Studio',
      period: 'Période',
      year: 'Année',
      architecture: 'Architecture',
      state: 'État',
      features: 'Ce que fait l’app',
      next: 'Projet suivant',
      website: 'Site web',
      alsoOn: 'Aussi sur',
      prev: 'Capture précédente',
      nextShot: 'Capture suivante',
      show: 'Afficher la capture',
    },
    footer: 'Construit avec Next.js.',
    notFound: { title: 'Rien ici.', back: "Retour à l'accueil" },
    meta: {
      title: 'Wassef Hassine — Tech Lead Flutter',
      description: "Wassef Hassine — Tech Lead Flutter et fondateur de WeCraft Solutions. Plus de 4 ans d'apps iOS, Android et web pour la fintech, les télécoms, l'hôtellerie-restauration et le commerce.",
    },
  },
}

export type Dict = (typeof dict)['en']
