import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display text-7xl md:text-9xl">Nothing here.</h1>
      <p className="mt-2 text-muted" lang="fr">Rien ici.</p>
      <Link href="/" className="btn btn-yellow mt-8">Home · Accueil</Link>
    </section>
  )
}
