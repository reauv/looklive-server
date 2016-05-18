var VERSION = '0.1.6';

this.addEventListener('activate', function (event) {
    clearOldCache(event);
});

this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function (response) {
                if (response) return response.clone();

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
                    return cache.put(request, response);
                });

                return response.clone();
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
