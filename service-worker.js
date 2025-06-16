
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("radio-inca-cache").then(function(cache) {
      return cache.addAll([
        "index_radio_inca_965fm_notificacion_ok.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
