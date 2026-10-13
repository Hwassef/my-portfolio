'use client'

import { useEffect, useState } from 'react'
import { WifiOff } from 'lucide-react'
import type { Lang } from '@/i18n'

/** Registers the offline service worker and shows a small badge while the device is offline. */
export default function ServiceWorker({ lang }: { lang: Lang }) {
  const [offline, setOffline] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    }
    const update = () => setOffline(!navigator.onLine)
    update()
    window.addEventListener('online', update)
    window.addEventListener('offline', update)
    return () => {
      window.removeEventListener('online', update)
      window.removeEventListener('offline', update)
    }
  }, [])

  if (!offline) return null
  return (
    <div role="status" className="on-yellow fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 border-2 border-ink bg-yellow px-4 py-2 text-sm font-bold shadow-[4px_4px_0_#0a0a0a]">
      <WifiOff className="h-4 w-4" />
      {lang === 'fr' ? 'Hors ligne · version enregistrée' : 'Offline · showing saved version'}
    </div>
  )
}
