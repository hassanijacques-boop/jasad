/* JASAD — service worker minimal : l’application marche hors connexion.
   Il ne fait AUCUN suivi, ne contacte aucun serveur, ne stocke que les
   fichiers de l’application elle-meme. */
var CACHE = "jasad-v1";
var FICHIERS = ["index.html", "jasad.js", "manifest.json", "icon-192.png", "icon-512.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FICHIERS); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (noms) {
    return Promise.all(noms.map(function (n) { return n === CACHE ? null : caches.delete(n); }));
  }));
  self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") { return; }
  e.respondWith(
    caches.match(e.request).then(function (r) {
      return r || fetch(e.request).then(function (rep) {
        var copie = rep.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copie); });
        return rep;
      }).catch(function () { return caches.match("index.html"); });
    })
  );
});
