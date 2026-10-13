import type { Experience, Project } from './site'

type ProjectFr = Partial<Pick<Project, 'tagline' | 'description' | 'category' | 'role' | 'client' | 'status' | 'period' | 'stack' | 'architecture' | 'features' | 'alsoOn'>>

export const projectsFr: Record<string, ProjectFr> = {
  wire: {
    tagline: "L'actu tech qui a une fin.",
    description:
      "Un lecteur d'actualités tech construit autour d'un deck quotidien fini : vingt articles à swiper qui s'arrêtent volontairement au lieu de défiler à l'infini, plus Fil, Découvrir, Lecteur et Enregistrés.",
    category: "Lecteur d'actu",
    role: 'Fondateur & développeur unique',
    stack: ['Flutter', 'Persistance hors ligne', 'EN / FR / AR', 'RTL'],
    features: [
      { title: 'Un deck qui se termine', body: 'Vingt articles par jour, à swiper comme des cartes, puis terminé. Une alternative plus sereine au fil infini.' },
      { title: 'Un vrai RTL', body: "Trilingue EN / FR / AR : en-tête, catégories, barre de progression et sens du swipe sont tous inversés, pas seulement les textes." },
      { title: 'Sans compte', body: "Toutes les données de lecture restent sur l'appareil, hors ligne. J'ai géré la landing page, la fiche store et la review." },
    ],
  },
  spytrap: {
    tagline: 'Sachez qui vous observe.',
    description:
      "Une app Android payante de protection de la vie privée qui enregistre chaque accès à la caméra et au micro (quelle app, quand, combien de temps, téléphone verrouillé ou non) et alerte en temps réel.",
    category: 'Vie privée · Android',
    role: 'Fondateur & développeur unique',
    stack: ['Flutter', 'Kotlin', 'Platform channels', 'API système Android'],
    features: [
      { title: 'Service système', body: "Un service en arrière-plan sur les API Android natives, qui recoupe plusieurs signaux système pour rester fiable sur toutes les surcouches constructeur." },
      { title: 'Sans serveur', body: 'Ni compte ni backend : chaque journal reste sur le téléphone. Vendue en achat unique.' },
      { title: 'Validée par Google Play', body: "Gestion des refus, des corrections et des pistes de test jusqu'à la production, pour une app à permissions sensibles." },
    ],
  },
  sayso: {
    tagline: 'Déchiffrez le rébus.',
    description:
      "Un jeu de rébus : transformez emojis, symboles et lettres en mots et expressions. Plus de 1 800 puzzles faits main, un défi quotidien, des mondes à débloquer et des classements mondiaux.",
    category: 'Jeu mobile',
    role: 'Fondateur & développeur unique',
    architecture: 'Par fonctionnalité + DI (get_it)',
    features: [
      { title: '1 800+ puzzles', body: "Niveaux de difficulté, indices, révélations et passes, avec une économie de pièces en jeu." },
      { title: 'Boucle quotidienne', body: 'Cinq nouveaux puzzles par jour, des séries et des notifications locales adaptées au fuseau horaire.' },
      { title: 'Monétisé de bout en bout', body: 'Achats intégrés via RevenueCat, pubs récompensées, consentement ATT et classements natifs sur les deux stores.' },
    ],
  },
  dibs: {
    tagline: 'Soyez le premier sur ce que vous voulez.',
    description:
      "Une couche de découverte et d'alertes pour les marketplaces d'occasion. Créez des « Watchers » et soyez prévenu quelques secondes après la publication d'un article près de chez vous, parcourez par pièce ou explorez la carte en direct.",
    category: 'App marketplace',
    role: 'Fondateur & développeur unique',
    status: 'En développement',
    architecture: 'Par fonctionnalité, couche repository',
    features: [
      { title: 'Watchers', body: 'Recherches enregistrées filtrées par pièce, prix et rayon, avec alertes instantanées, horaires ou quotidiennes.' },
      { title: 'Carte en direct', body: "Marqueurs de prix avec regroupement par distance et rayon de recherche à l'échelle sur OpenStreetMap." },
      { title: 'UI animée', body: 'Design system sur mesure, physique de ressorts et tests golden pour chaque écran.' },
    ],
  },
  mytt: {
    tagline: "L'espace client d'un opérateur national.",
    description:
      "L'app selfcare de Tunisie Telecom : gestion du compte, suivi de consommation, recharge et paiement de factures.",
    category: 'Télécom',
    client: 'Proxym Group pour Tunisie Telecom',
    role: 'Développeur logiciel',
    period: 'févr. 2025 — août 2025',
    features: [
      { title: 'Services selfcare', body: 'Gestion du compte, suivi de consommation, recharge de crédit et paiement de factures.' },
      { title: 'Paiement hébergé', body: 'Pages de paiement ClicToPay avec succès, échec et annulation rapprochés côté serveur.' },
      { title: 'Sessions sécurisées', body: "Authentification Keycloak par jetons, contrôles de connectivité et gestion robuste des erreurs d'API." },
    ],
  },
  dukhanbank: {
    tagline: 'Banque digitale, Qatar.',
    description:
      'La banque mobile de la première banque digitale islamique du Qatar, plus de 150 000 clients : virements, Western Union, paiement de factures et services de compte.',
    category: 'Fintech',
    client: 'Proxym Group pour Dukhan Bank',
    role: 'Développeur logiciel',
    period: 'janv. 2024 — févr. 2025',
    features: [
      { title: "Transferts d'argent", body: 'Virements internationaux Western Union, virements internes et nationaux au Qatar.' },
      { title: '3-D Secure en WebView', body: "Authentification forte gérée dans l'app, en interceptant l'URL de retour pour confirmer le résultat auprès du backend." },
      { title: 'Bilingue, RTL', body: "Définition du thème et version anglais / arabe en RTL complet, plus le paiement des factures Ooredoo, Kahramaa et Vodafone." },
    ],
  },
  studio44: {
    tagline: 'Réservez le reformer.',
    description:
      'Réservation et planning de cours pour un studio de Pilates privé, avec un calendrier de disponibilité en temps réel pour chaque machine : Reformer, Wunda Chair et Cadillac.',
    category: 'Réservation',
    role: 'Consultant indépendant',
    period: 'janv. 2025 — avr. 2025',
    stack: ['Flutter', 'Paiements', 'Notifications push'],
    features: [
      { title: 'Disponibilité en direct', body: "Un calendrier de réservation et d'inventaire par machine, le même problème que la réservation hôtelière ou de voyage." },
      { title: 'Packs & abonnements', body: 'Paiement des packs de cours et abonnements, avec authentification et gestion de profil.' },
      { title: 'Trois stores', body: "Publiée sur l'App Store, Google Play et Huawei AppGallery." },
    ],
  },
  maisonsolidaire: {
    tagline: 'Artisans et entreprises, réunis.',
    description:
      'Une marketplace B2B à double rôle qui met en relation entreprises et artisans ou indépendants vérifiés : deux parcours d’inscription, profils et permissions dans une seule base de code.',
    category: 'Marketplace B2B',
    role: 'Consultant indépendant',
    stack: ['Flutter', 'Accès par rôle'],
    features: [
      { title: 'Deux rôles, une app', body: 'Inscription, profils et permissions distincts pour entreprises et artisans, dans une seule base de code.' },
      { title: 'Missions', body: 'Publication de missions, mise en relation et candidatures.' },
      { title: "Jusqu'à la publication", body: 'Production des éléments de conformité store et suivi des deux fiches jusqu’à la validation.' },
    ],
  },
  facturesolidaire: {
    tagline: 'La facturation des auto-entrepreneurs.',
    description:
      'Une app de facturation pour auto-entrepreneurs et petites structures : clients, prestations, totaux automatiques et factures PDF, monétisée par abonnement.',
    category: 'Facturation / SaaS',
    role: 'Consultant indépendant',
    stack: ['Flutter', 'Flutter Web', 'Génération PDF', 'Abonnements'],
    features: [
      { title: 'Factures en minutes', body: 'Gestion des clients et prestations, totaux automatiques, génération et partage de PDF.' },
      { title: 'Abonnement', body: 'Monétisée par un abonnement à renouvellement automatique.' },
      { title: 'Un code, trois cibles', body: 'Publiée sur iOS, Android et le web depuis le même projet Flutter.' },
    ],
  },
  headsapp: {
    tagline: 'La messagerie des équipes soignantes.',
    description:
      "Une messagerie sécurisée pour les professionnels de santé : messages par niveau de priorité, fils par patient et annuaire d'établissements.",
    category: 'Santé',
    role: 'Développeur mobile',
    period: 'nov. 2022 — janv. 2024',
    features: [
      { title: 'Reprise de code existant', body: "Reprise d'une app inconnue, migration vers le null safety et compatibilité avec le dernier SDK Flutter." },
      { title: 'Refonte', body: 'Évolution vers la Clean Architecture avec DI get_it, état BLoC et navigation auto_route.' },
      { title: 'Stabilisation', body: 'Correction systématique des bugs et internationalisation pour des utilisateurs multilingues.' },
    ],
  },
  digitrame: {
    tagline: 'Devis & factures, signés.',
    description:
      "Devis, factures et stock pour freelances et petites entreprises. J'ai ajouté la signature électronique et le partage sécurisé de documents à l'app iOS native.",
    category: 'Gestion / SaaS',
    role: 'Développeur iOS (Swift)',
    period: 'mars 2023 — juin 2023',
    features: [
      { title: 'Signature électronique', body: 'Signature de documents de bout en bout via l’API Zoho Sign.' },
      { title: 'Partage sécurisé', body: 'Partage de documents via l’API Zoho WorkDrive.' },
      { title: 'Stabilité', body: "Contribution à la stabilité de l'app sur iPhone et iPad." },
    ],
  },
  proximitystore: {
    tagline: 'Achetez local, mieux.',
    description: 'Trouvez les bons plans près de chez vous et soutenez les commerces de proximité grâce à des recommandations géolocalisées.',
    category: 'Commerce',
    role: 'Développeur Flutter',
    period: 'janv. 2022 — oct. 2022',
    stack: ['Flutter', 'Google Maps SDK', 'API de localisation', 'EN / FR'],
    features: [
      { title: 'Géolocalisée', body: 'Google Maps SDK et API de localisation pour trouver les commerces et offres à proximité.' },
      { title: 'Thème & i18n', body: "Définition du thème et internationalisation de l'app en anglais et en français." },
      { title: 'Robuste', body: "Contrôles de connectivité et gestion robuste des erreurs d'API." },
    ],
  },
  lejeuqui: {
    tagline: 'Soirée jeux entre amis.',
    description: "Un jeu d'ambiance avec quiz et défis pour les amis et la famille. J'ai été appelé pour le monétiser et le peaufiner.",
    category: "Jeu d'ambiance",
    role: 'Consultant monétisation',
    period: 'août 2022 — sept. 2022',
    features: [
      { title: 'Abonnements', body: 'Abonnements mensuels et annuels sans publicité via RevenueCat.' },
      { title: 'Classement saisonnier', body: 'Un classement par saison pour faire revenir les groupes.' },
      { title: 'Finitions', body: 'Écran de démarrage animé Lottie et corrections d’UI.' },
    ],
  },
  swipecolorgame: {
    tagline: 'Rapide. Coloré. Mondial.',
    description: "Un jeu de réflexes : swipez selon les couleurs et grimpez au classement. J'ai ajouté abonnements, classements et finitions.",
    category: "Jeu d'arcade",
    role: 'Consultant monétisation',
    period: 'août 2022 — sept. 2022',
    features: [
      { title: 'Abonnements', body: 'Abonnements mensuels et annuels sans publicité via RevenueCat.' },
      { title: 'Classement saisonnier', body: 'Un classement par saison pour les joueurs compétitifs.' },
      { title: 'Finitions', body: 'Écran de démarrage animé Lottie et corrections d’UI.' },
    ],
  },
}

export const experienceFr: Experience[] = [
  {
    company: 'WeCraft Solutions',
    role: 'Fondateur & développeur unique',
    period: "2026 — aujourd'hui",
    points: [
      "Studio pour mes propres produits, de bout en bout : concept, architecture, développement, visuels store, prix, review et marketing.",
      "Publication de WIRE (actu tech, EN / FR / AR avec vrai RTL), Spytrap (app Android payante de vie privée) et Sayso (jeu de rébus).",
    ],
    link: 'https://wecraft-solutions.com',
    projects: ['wire', 'spytrap', 'sayso', 'dibs'],
  },
  {
    company: 'Servini ERP Solution',
    client: 'Plateforme de gestion pour la restauration et l’hôtellerie',
    role: 'Tech Lead Flutter (sous-traitance)',
    period: "août 2025 — aujourd'hui",
    points: [
      "Architecture d'une app Flutter pensée tablette, en Clean Architecture : plus de 95 % de code partagé entre iOS, Android et web.",
      'Quatre interfaces par rôle : caisse (POS), stock et coût matière, écran cuisine (KDS) et tableau de bord analytique.',
      'Offline-first avec synchronisation WebSocket en temps réel et des réponses sous 200 ms en plein service.',
      'Flavors et configurations par client : une seule plateforme déployée dans plusieurs établissements, chacun avec sa marque, ses fonctionnalités et ses endpoints.',
      'Imprimantes thermiques, QR codes, tests, profilage DevTools, CI/CD et publication sur les stores.',
    ],
    link: 'https://play.google.com/store/apps/details?id=online.servini.servini',
  },
  {
    company: 'Proxym Group',
    client: 'My TT · Tunisie Telecom',
    role: 'Développeur logiciel',
    period: 'févr. 2025 — août 2025',
    points: [
      "Services selfcare pour l'opérateur national : gestion du compte, consommation, recharge et paiement de factures.",
      'Paiement par carte ClicToPay avec succès, échec et annulation rapprochés côté serveur ; authentification Keycloak.',
    ],
    projects: ['mytt'],
  },
  {
    company: 'Access Content Agency',
    client: 'Studio 44 · Pilates privé',
    role: 'Consultant indépendant',
    period: 'janv. 2025 — avr. 2025',
    points: ['App de réservation et de planning avec disponibilité des machines en temps réel, paiements, abonnements et push. Publiée sur iOS, Android et Huawei.'],
    projects: ['studio44'],
  },
  {
    company: 'Proxym Group',
    client: 'Dukhan Bank · Qatar',
    role: 'Développeur logiciel',
    period: 'janv. 2024 — févr. 2025',
    points: [
      'Fonctionnalités pour la première banque digitale islamique du Qatar, plus de 150 000 clients, sous contraintes réglementaires.',
      'Western Union, virements internes et nationaux, paiement de factures ; 3-D Secure en WebView ; anglais / arabe en RTL complet.',
    ],
    projects: ['dukhanbank'],
  },
  {
    company: 'Solidarité Sans Frontières',
    client: 'Plateforme associative · France',
    role: 'Consultant indépendant',
    period: 'Freelance',
    points: [
      "Maison Solidaire, marketplace B2B à double rôle entre entreprises et artisans vérifiés, menée jusqu'à la publication sur les stores.",
      'Facture Solidaire, app de facturation par abonnement sur iOS, Android et web ; la plateforme Next.js de SSF avec dons Stripe et analyse IA des projets.',
    ],
    link: 'https://solidaritessf.fr',
    projects: ['maisonsolidaire', 'facturesolidaire'],
  },
  {
    company: "Grant's Tech",
    client: 'HeadsApp · Digitrame',
    role: 'Développeur mobile · développeur iOS (Swift)',
    period: 'nov. 2022 — janv. 2024',
    points: [
      'HeadsApp : reprise d’une base de code inconnue, migration vers le null safety et refonte vers la Clean Architecture.',
      'Digitrame (Swift) : signature électronique Zoho Sign et partage sécurisé de documents Zoho WorkDrive.',
    ],
    projects: ['headsapp', 'digitrame'],
  },
  {
    company: 'WIMOBI',
    client: 'ProximityStore · Le Jeu Qui · Swipe Color',
    role: 'Développeur Flutter · consultant monétisation',
    period: 'janv. 2022 — oct. 2022',
    points: [
      'ProximityStore : thème, internationalisation anglais / français, Google Maps et API de localisation.',
      'Le Jeu Qui & Swipe Color : abonnements sans pub RevenueCat, écrans de démarrage Lottie et classement saisonnier.',
    ],
    projects: ['proximitystore', 'lejeuqui', 'swipecolorgame'],
  },
]

export const skillGroupsFr: Record<string, string> = {
  Mobile: 'Mobile',
  Architecture: 'Architecture',
  'State & async': 'État & async',
  'Auth & payments': 'Auth & paiements',
  'Multi-brand & i18n': 'Multi-marque & i18n',
  'Backend & data': 'Backend & données',
  'DevOps & CI/CD': 'DevOps & CI/CD',
  Testing: 'Tests',
}

export const educationFr = { degree: 'Licence en informatique', major: "Développement des systèmes d'information", year: '2022' }
export const languagesFr = ['Arabe (natif)', 'Français (courant)', 'Anglais (courant)']
export const statLabelsFr = ["ans d'expérience Flutter", 'apps en ligne sur les stores', 'clients bancaires servis']
