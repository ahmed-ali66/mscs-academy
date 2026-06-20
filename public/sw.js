/**
 * MSCS Academy Service Worker
 *
 * Strategy:
 *   - Static assets (_next/static, images, fonts): cache-first
 *   - Lesson content (offline-capable): stale-while-revalidate
 *   - API routes: network-first (no caching — PDPL: never cache PII)
 *   - Navigation requests: network-first with offline fallback page
 *
 * PDPL note: This SW deliberately does NOT cache any /api/ responses
 * that may contain student data. Only the offline HTML shell is cached.
 */

const CACHE_VERSION = "mscs-academy-v1";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const CONTENT_CACHE = `${CACHE_VERSION}-content`;
const OFFLINE_URL = "/offline";

// Assets that should be cached on install (app shell)
const APP_SHELL = [
  "/",
  "/offline",
  "/manifest.webmanifest",
  "/favicon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // NEVER cache API responses — PDPL: may contain student PII
  if (url.pathname.startsWith("/api/")) return;

  // Static assets — cache-first
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.match(/\.(?:png|jpg|jpeg|svg|webp|avif|gif|woff2?|ttf|eot)$/)
  ) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const fetched = await fetch(request);
        if (fetched.ok) cache.put(request, fetched.clone());
        return fetched;
      })
    );
    return;
  }

  // Navigation requests — network-first with offline fallback
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          // Cache successful page responses
          if (networkResponse.ok) {
            const cache = await caches.open(CONTENT_CACHE);
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          // Try cache
          const cached = await caches.match(request);
          if (cached) return cached;
          // Fall back to offline page
          const offline = await caches.match(OFFLINE_URL);
          return offline || Response.error();
        }
      })()
    );
    return;
  }

  // Default — try network, fall back to cache
  event.respondWith(
    (async () => {
      try {
        return await fetch(request);
      } catch {
        const cached = await caches.match(request);
        return cached || Response.error();
      }
    })()
  );
});

// Listen for messages from the client (e.g., manual cache clear)
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
  if (event.data === "CLEAR_CACHE") {
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    );
  }
});
