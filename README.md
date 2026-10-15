# JASAD · جسد — le corps

Application **gratuite** de bien-être du corps, qui fonctionne **hors connexion**, **sans compte**,
**sans publicité**, **sans géolocalisation** et **sans aucun envoi de données**.

Deux moitiés : **bouger** (programmes et séances à la maison) et **comprendre** (les mécanismes
hormonaux, l'alimentation, le souffle — chaque explication portant sa source).

## Ce qu'il y a dedans

| | |
|---|---|
| Programmes | 3 niveaux (Réveil du corps · Force tranquille · Endurance), 16 séances |
| Exercices | 32 exercices détaillés, tous faisables à la maison, sans matériel |
| Sécurité | 6 contre-indications (dos, genoux, épaules, poignets, grossesse, cœur) : les mouvements concernés sont **automatiquement remplacés ou écartés**, et l'application dit lesquels et pourquoi |
| **Savoir** | **11 axes hormonaux** (insuline, foie, cortisol, œstrogènes, mitochondries, dopamine…), **6 blocs d'alimentation**, **8 mensonges** démontés, un **exercice de souffle guidé 3-5-7**, les **six gestes de la nuit** |
| **Sources** | Chaque explication vient du travail d'**Irvine K** (chaîne « Plus jamais gros ») : nom de la vidéo, minutage et citation. Jamais ses images, jamais sa voix |
| Suivi | série de jours, séances faites, minutes cumulées, calendrier, et **5 habitudes quotidiennes** — **tout est stocké uniquement sur le téléphone** |

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | l'application (coquille, styles) |
| `jasad.js` | séances (contenu + logique de lecture) |
| `savoir.js` | **module Savoir** : axes hormonaux, alimentation, souffle, mensonges, sources, habitudes |
| `manifest.json` | permet l'installation sur l'écran d'accueil |
| `sw.js` | service worker : l'application marche sans réseau |
| `icon-192.png`, `icon-512.png` | icônes |
| `test_jasad.py` | 48 contrôles automatiques dans un vrai navigateur |

## Installer sur le téléphone

Ouvrir la page dans le navigateur, puis **menu → « Ajouter à l'écran d'accueil »**.
L'application s'ouvre ensuite comme une vraie application, même sans connexion.

## Vie privée

Aucune donnée ne quitte l'appareil. Il n'y a ni compte, ni identifiant publicitaire,
ni mesure d'audience, ni serveur. La progression est enregistrée dans le stockage local
du navigateur et disparaît si l'on efface les données du navigateur.

## Avertissement

Cette application explique des mécanismes de vie courante. Elle ne remplace ni un médecin,
ni un pharmacien, ni une sage-femme. En cas de douleur, de maladie ou de grossesse :
consultez un professionnel de santé.
