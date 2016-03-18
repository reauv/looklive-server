var VERSION = '0.1.2';

this.addEventListener('install', function (event) {
    console.log('Installing service worker');
    console.log('Version', VERSION);
});

this.addEventListener('activate', function (event) {
    clearOldCache(event);
});

this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }

                return fetchAndCache(event.request);
            })
    );
});

function fetchAndCache(request) {
    return fetch(request)
        .then(function (response) {
            caches
                .open(VERSION, response)
                .then(function (cache) {
                    cache.put(request, response.clone());
                });

            return response;
        });
}

function clearOldCache(event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames
                    .filter(function (cacheName) { return (cacheName !== VERSION); })
                    .map(function (cacheName) { return caches.delete(cacheName); })
          );
        })
      );
}
