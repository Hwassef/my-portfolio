'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Device from './Device'
import type { Shot } from '@/data/site'

export default function Gallery({ shots, title }: { shots: Shot[]; title: string }) {
  const [active, setActive] = useState(0)
  const go = (d: number) => setActive((a) => (a + d + shots.length) % shots.length)
  const shot = shots[active]
  const isPhone = shot.kind === 'phone'

  return (
    <div
      className="flex flex-col gap-6"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
    >
      <div className={`relative flex items-center justify-center border-2 border-ink bg-yellow ${isPhone ? 'px-16 py-10' : 'p-0'}`}>
        <div className={isPhone ? 'w-full max-w-[280px]' : 'w-full'}>
          <Device key={shot.src} shot={shot} sizes={isPhone ? '280px' : '(min-width: 1024px) 60vw, 100vw'} priority={active === 0} />
        </div>
        {shots.length > 1 && (
          <>
            <button onClick={() => go(-1)} className="btn btn-paper absolute left-3 top-1/2 !p-2 -translate-y-1/2" aria-label="Previous screenshot">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => go(1)} className="btn btn-paper absolute right-3 top-1/2 !p-2 -translate-y-1/2" aria-label="Next screenshot">
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="chip absolute bottom-3 left-3 border-ink bg-paper" aria-live="polite">
              {active + 1} / {shots.length}
            </span>
          </>
        )}
      </div>

      {shots.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {shots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === active}
              className={`relative shrink-0 overflow-hidden border-2 border-ink bg-paper-2 ${
                s.kind === 'phone' ? 'h-24 w-12' : 'h-16 w-24'
              } ${i === active ? 'outline outline-4 outline-yellow' : 'opacity-60 hover:opacity-100'}`}
            >
              <Image src={s.src} alt="" fill sizes="96px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
