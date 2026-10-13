import { profile } from '@/data/site'
import { dict, type Lang } from '@/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div className="stripe h-3" aria-hidden />
      <div className="wrap flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. {dict[lang].footer}</p>
        <div className="flex gap-6 font-bold uppercase tracking-wider">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">LinkedIn</a>
          <a href={profile.studio} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">WeCraft</a>
        </div>
      </div>
    </footer>
  )
}
