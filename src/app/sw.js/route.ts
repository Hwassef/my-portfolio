import { projects } from '@/data/site'
import { href, langs } from '@/i18n'

// Prerendered at build time: the version changes on every deploy, which retires old caches.
export const dynamic = 'force-static'

const VERSION = Date.now().toString(36)

const images = Array.from(
  new Set(projects.flatMap((p) => [p.icon, p.cover.src, ...p.shots.map((s) => s.src)]).filter((s): s is string => Boolean(s))),
)

const pages = langs.flatMap((lang) => ['/', ...projects.map((p) => `/project/${p.slug}`)].map((path) => href(lang, path)))

const sw = `
const VERSION = '${VERSION}'
const PAGES = 'pages-' + VERSION
const ASSETS = 'assets-' + VERSION
const PRECACHE = ${JSON.stringify([...pages, '/favicon.ico', '/manifest.webmanifest'])}
const IMAGES = ${JSON.stringify([...images, '/icons/icon-192.png', '/icons/icon-512.png'])}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const pages = await caches.open(PAGES)
      const assets = await caches.open(ASSETS)
      // one by one so a single failure doesn't abort the whole install
      await Promise.all(PRECACHE.map((url) => pages.add(new Request(url, { cache: 'reload' })).catch(() => {})))
      // the JS and CSS each page needs, so unvisited pages are still interactive offline
      const statics = new Set()
      for (const req of await pages.keys()) {
        const html = await (await pages.match(req)).text()
        for (const m of html.matchAll(new RegExp('(?:src|href)="([^"]*_next/static/[^"]+)"', 'g'))) statics.add(m[1])
      }
      await Promise.all([...statics].map((url) => assets.add(url).catch(() => {})))
    })(),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.endsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(warmImages),
  )
})

// Screenshots for every case study, fetched in the background after install (skipped on data saver).
async function warmImages() {
  if (self.navigator.connection && self.navigator.connection.saveData) return
  const cache = await caches.open(ASSETS)
  for (const url of IMAGES) {
    if (!(await cache.match(url))) await cache.add(url).catch(() => {})
  }
}

const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))

// Pages: network first (fresh content when online), cached copy when offline or slow.
async function page(request) {
  const cache = await caches.open(PAGES)
  try {
    const res = await Promise.race([fetch(request), timeout(4000)])
    if (res.ok && !res.redirected) cache.put(request, res.clone())
    return res
  } catch {
    const url = new URL(request.url)
    const hit = (await cache.match(request, { ignoreSearch: true })) || (await cache.match(url.pathname.replace(/\\/$/, '') || '/'))
    if (hit) return hit
    // unknown page while offline: fall back to the home page in the same language
    return (await cache.match(url.pathname.startsWith('/fr') ? '/fr' : '/')) || Response.error()
  }
}

// Hashed build files never change: cache first.
async function immutable(request) {
  const cache = await caches.open(ASSETS)
  const hit = await cache.match(request)
  if (hit) return hit
  const res = await fetch(request)
  if (res.ok) cache.put(request, res.clone())
  return res
}

// Images and everything else: serve from cache, refresh in the background.
async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(ASSETS)
  const hit = await cache.match(request)
  const refresh = fetch(request)
    .then((res) => {
      if (res.ok) cache.put(request, res.clone())
      return res
    })
    .catch(() => hit || Response.error())
  if (hit) {
    event.waitUntil(refresh)
    return hit
  }
  return refresh
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  // React Server Component payloads: let them fail offline; Next then falls back to a full page load we can serve.
  if (request.headers.get('RSC') || url.searchParams.has('_rsc')) return

  if (request.mode === 'navigate') return event.respondWith(page(request))
  if (url.pathname.startsWith('/_next/static/')) return event.respondWith(immutable(request))
  event.respondWith(staleWhileRevalidate(request, event))
})
`

export function GET() {
  return new Response(sw, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      // always revalidate so a new deploy's worker is picked up promptly
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
