# JASAD · جسد — bouger chez soi

Application de sport **gratuite**, qui fonctionne **hors connexion**, **sans compte**,
**sans publicité**, **sans géolocalisation** et **sans aucun envoi de données**.

## Ce qu'il y a dedans

| | |
|---|---|
| Programmes | 3 niveaux (Réveil du corps · Force tranquille · Endurance), 16 séances |
| Exercices | 32 exercices détaillés, tous faisables à la maison, sans matériel |
| Sécurité | 6 contre-indications (dos, genoux, épaules, poignets, grossesse, cœur) : les mouvements concernés sont **automatiquement remplacés ou écartés**, et l'application dit lesquels et pourquoi |
| Suivi | série de jours, séances faites, minutes cumulées, calendrier — **stocké uniquement sur le téléphone** |

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | l'application (coquille, styles) |
| `jasad.js` | contenu (exercices, programmes) + logique |
| `manifest.json` | permet l'installation sur l'écran d'accueil |
| `sw.js` | service worker : l'application marche sans réseau |
| `icon-192.png`, `icon-512.png` | icônes |

## Installer sur le téléphone

Ouvrir la page dans le navigateur, puis **menu → « Ajouter à l'écran d'accueil »**.
L'application s'ouvre ensuite comme une vraie application, même sans connexion.

## Vie privée

Aucune donnée ne quitte l'appareil. Il n'y a ni compte, ni identifiant publicitaire,
ni mesure d'audience, ni serveur. La progression est enregistrée dans le stockage local
du navigateur et disparaît si l'on efface les données du navigateur.
