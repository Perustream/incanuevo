
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("radio-pasion-cache").then(function(cache) {
      return cache.addAll(["radio_pasion_pwa.html"]);
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
