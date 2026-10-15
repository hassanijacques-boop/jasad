/* JASAD — service worker minimal : l’application marche hors connexion.
   Il ne fait AUCUN suivi, ne contacte aucun serveur, ne stocke que les
   fichiers de l’application elle-meme. */
var CACHE = "jasad-v2";
var FICHIERS = ["index.html", "jasad.js", "savoir.js", "manifest.json",
                "icon-192.png", "icon-512.png"];