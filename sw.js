const CACHE_NAME = 'gestion-scolaire-v1';
const ASSETS = [
  './',
  './index.html', // Remplacez par le nom exact de votre fichier principal
  'https://cdn-icons-png.flaticon.com/512/2940/2940651.png'
];

// Installation du Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Stratégie : Réseau d'abord, sinon Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
