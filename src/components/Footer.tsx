import { profile } from '@/data/site'

export default function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div className="stripe h-3" aria-hidden />
      <div className="wrap flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <div className="flex gap-6 font-bold uppercase tracking-wider">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">LinkedIn</a>
          <a href={profile.studio} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">WeCraft</a>
        </div>
      </div>
    </footer>
  )
}
