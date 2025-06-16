
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};

  const title = data.title || 'Radio Nueva';
  const options = {
    body: data.body || '🎵 Transmitiendo música en vivo...',
    icon: data.icon || 'https://i.postimg.cc/nV1p7MR9/1750031181407.jpg',
    badge: data.badge || 'https://i.postimg.cc/nV1p7MR9/1750031181407.jpg',
    image: data.image || undefined,
    vibrate: [200, 100, 200],
    data: { url: data.url || 'https://radiopasion.com' }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
