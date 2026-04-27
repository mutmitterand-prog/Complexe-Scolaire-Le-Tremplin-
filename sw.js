const CACHE_NAME = 'scolaire-v1';
const ASSETS = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/2940/2940651.png'
];

self.addEventListener('install', (i) => {
  i.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (f) => {
  f.respondWith(
    fetch(f.request).catch(() => caches.match(f.request))
  );
});
