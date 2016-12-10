importScripts('/cache-polyfill.js');

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('connected2truth').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/script/calendar.js',
        '/script/main.js',
        '/script/kjv.js',
        '/script/portions-data.js',
        '/styles/inline.css',
        '/fonts/google-material/material.css',
        '/fonts/lato/fontFace.import.css'
      ])
      .then(() => self.skipWaiting());
    })
  )
});


self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
