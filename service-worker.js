// Service Worker per l'uso offline del quiz Genki I.
// Strategia: "cache-first" — al primo caricamento (con internet) salva tutti i file
// necessari; da quel momento in poi li serve dalla cache, funzionando anche offline.

const CACHE_NAME = "genki-quiz-v8";
const FILES_TO_CACHE = [
  "./index.html",
  "./data-vocab.js",
  "./data-kanji.js",
  "./data-grammar.js",
  "./data-verbs.js",
  "./data-adjectives.js",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

// Installazione: scarica e salva ogni file singolarmente (se uno fallisce, gli altri
// vengono comunque salvati — a differenza di cache.addAll() che è tutto-o-niente).
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.all(
        FILES_TO_CACHE.map((url) =>
          fetch(url, { cache: "reload" })
            .then((response) => {
              if (response.ok) return cache.put(url, response);
            })
            .catch(() => {})
        )
      );
    })
  );
  self.skipWaiting();
});

// Attivazione: elimina eventuali cache vecchie da versioni precedenti
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Ogni richiesta: prova prima la cache (funziona offline), altrimenti va in rete
// e salva il risultato in cache per la prossima volta.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => cached);
    })
  );
});
