// Service Worker cho Nhật Mỹ Learning App - Global Success PWA (Chống Stale Cache Safari/iOS/Chrome)
const CACHE_NAME = 'nhatmy-globalsuccess-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Không cache các file data động hoặc json để tránh bị lưu cache hỏng trên iOS Safari
  if (url.includes('/data/') || url.endsWith('.json')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Network first với fallback cache an toàn
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
