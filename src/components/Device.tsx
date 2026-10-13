import Image from 'next/image'
import type { Shot } from '@/data/site'

/** Renders a shot in a frame that suits it: phone bezel, tablet bezel, or a bare render. */
export default function Device({
  shot,
  sizes,
  priority = false,
  className = '',
}: {
  shot: Shot
  sizes: string
  priority?: boolean
  className?: string
}) {
  if (shot.kind === 'scene') {
    return (
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        sizes={sizes}
        priority={priority}
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  const isPhone = shot.kind === 'phone'
  return (
    <div
      className={`relative overflow-hidden ${
        shot.bare ? 'border-2 border-ink bg-paper' : 'border-[6px] border-ink bg-ink'
      } shadow-[8px_8px_0_var(--ink)] ${
        isPhone ? (shot.bare ? 'rounded-xl' : 'aspect-[9/19.5] rounded-[2rem]') : 'aspect-[4/3] rounded-2xl'
      } ${className}`}
      style={shot.bare ? { aspectRatio: `${shot.w} / ${shot.h}` } : undefined}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top"
      />
    </div>
  )
}
