# JASAD · جسد — Plan complet

## Application de sport gratuite

**Document de travail — 14 octobre 2026**

État : la version 1 est construite, testée et en ligne.

---

## 1. En une phrase

Une application de sport qu'on ouvre sans payer, sans créer de compte, sans être suivi — et qui écarte d'elle-même les mouvements qui abîmeraient ton dos, tes genoux ou tes épaules.

**Adresse :** https://hassanijacques-boop.github.io/jasad/

---

## 2. Le point de départ : ce que l'analyse de FitMe a montré

L'application FitMe (éditeur Gismart, paquet `home.fitness.challenge`, 110 Mo) a été analysée sans jamais être lancée. Trois découvertes ont dessiné la place de JASAD.

| Découverte | Ce que ça veut dire |
|---|---|
| Le contenu n'est pas dans l'application | FitMe est une coquille : les séances et les vidéos sont téléchargées depuis leurs serveurs. Pour nous : pas besoin de serveur, le contenu tient dans l'application. |
| 27 permissions, dont la géolocalisation et l'identifiant publicitaire | Rien de tout cela n'est nécessaire pour faire du sport chez soi. |
| 1 037 occurrences de « billing », 284 de « paywall » | Ce n'est pas une application de sport, c'est un tunnel de paiement avec des exercices autour. |

Et une trouvaille à réutiliser : leur modèle de données décrit un exercice avec douze champs, dont `injuries_ids` — **les blessures à éviter**. C'est l'idée la plus intelligente du produit, et c'est devenu le cœur de JASAD.

---

## 3. Les six refus de JASAD

Ces refus ne sont pas des principes abstraits : ce sont des décisions de produit, déjà appliquées dans le code.

| Refus | Pourquoi |
|---|---|
| Pas de mur payant | L'application est entièrement ouverte dès la première seconde. Aucune fonction cachée. |
| Pas de publicité | Aucune régie, aucun identifiant publicitaire, aucun module de suivi. |
| Pas de compte | Ni email, ni mot de passe, ni inscription. On ouvre, on bouge, on ferme. |
| Pas de géolocalisation | Inutile pour des séances à la maison. |
| Pas de données qui sortent | Il n'y a aucun serveur. Rien ne peut partir, même par erreur. |
| Pas de compte à rebours | On n'achète jamais rien, donc il n'y a rien à annuler. |

---

## 4. Ce qui existe déjà — l'état réel au 14 octobre 2026

| Élément | État |
|---|---|
| Exercices détaillés | 32, tous faisables à la maison, sans matériel |
| Programmes | 3 niveaux : Réveil du corps (débutant), Force tranquille (intermédiaire), Endurance (avancé) |
| Séances | 16 séances complètes, du corps entier jusqu'au travail du souffle |
| Contre-indications | 6 (dos, genoux, épaules, poignets, grossesse, cœur) avec remplacement automatique |
| Lecteur de séance | Minuteur en anneau, séries, repos, enchaînement automatique, signal sonore et vibration |
| Suivi | Série de jours, séances faites, minutes cumulées, calendrier de 5 semaines |
| Hors connexion | Oui, une fois ouverte une première fois |
| Installation | Oui, sur l'écran d'accueil du téléphone, comme une vraie application |
| Tests | 21 contrôles automatiques passés, aucune erreur |
| Coût d'exploitation | 0 € — aucun serveur, aucune base de données |

---

## 5. La différence, en un tableau

| | FitMe | JASAD |
|---|---|---|
| Prix | Abonnement | Gratuit, définitivement |
| Essayer d'abord | Non, paiement avant l'essai | Tout ouvert tout de suite |
| Publicités | Oui | Aucune |
| Géolocalisation | Oui | Non |
| Profilage publicitaire | Oui | Non |
| Compte à créer | Oui | Non |
| Données envoyées | Vers leurs serveurs | Aucune, jamais |
| Le contenu | Chez eux | Dans ton téléphone |
| Blessures à éviter | Champs présents dans leur base | **Utilisés : les mouvements sont remplacés automatiquement, et l'application dit pourquoi** |
| Marche sans réseau | Partiellement | Oui |

---

## 6. Le point fort : le filtre des contre-indications

C'est ce qui distingue JASAD d'une liste d'exercices.

**Comment ça marche.** Au premier lancement, on coche ce qu'on doit ménager : dos fragile, genoux fragiles, épaules fragiles, poignets fragiles, grossesse, souffle court ou cœur. À partir de là, chaque séance est recalculée :

- un mouvement concerné est **remplacé** par une version plus douce, quand elle existe ;
- s'il n'y a pas de version plus douce, il est **écarté** ;
- et dans les deux cas, **l'application le dit** : quel mouvement, remplacé par quoi, ou écarté et pourquoi.

**Pourquoi c'est important.** Les applications de sport habituelles proposent des programmes standardisés, et c'est à l'utilisateur de savoir se protéger. Ici, la protection est intégrée. Un genou abîmé ou un dos fragile n'est pas un cas particulier à gérer soi-même : c'est une donnée d'entrée du programme.

**Exemple concret, vérifié dans l'application.** Avec « dos fragile » et « genoux fragiles » cochés, le squat au poids du corps est signalé comme concerné, et la version sur chaise est proposée à la place.

---

## 7. Comment c'est fait, et pourquoi ça ne coûte rien

| Brique | Choix | Pourquoi |
|---|---|---|
| Le site | Fichiers statiques hébergés gratuitement | Pas de serveur à payer, pas de panne possible |
| Le contenu | Dans l'application elle-même | Aucune connexion nécessaire, rien à télécharger |
| Le stockage de la progression | Dans le téléphone | Aucune donnée personnelle à protéger, puisque aucune ne circule |
| Les mises à jour | Un fichier remplacé | Une correction est visible en une minute, sans « mise à jour » à accepter |
| La confidentialité | Rien à déclarer | Sans collecte, il n'y a pas de registre à tenir |

**Ce que cela évite :** facture d'hébergement, base de données, obligation de conservation des données, service client pour les remboursements, et tout ce qui fait grossir une application sans rien apporter à l'utilisateur.

---

## 8. La place de JASAD dans ton ensemble

Quatre dimensions, quatre portes d'entrée : le cœur, l'esprit, le corps, l'âme. Les chaînes traitent l'humain, le mental, le business et la spiritualité. **JASAD est la porte du corps.**

C'est ce qui rend l'application difficile à copier : aucune application de sport ne rattache le corps à autre chose que la performance. Ici, la fin d'une séance ne se termine pas par un score mais par un rappel — le corps est un dépôt qui nous a été confié, et il a un droit sur nous.

**Application gratuite, sans contrepartie** — et elle sert aussi l'ensemble : les personnes qui viennent pour le corps découvrent les autres portes.

---

## 9. Sécurité et honnêteté

| Règle | Application |
|---|---|
| Ne pas nuire | Les contre-indications sont traitées automatiquement, pas laissées à l'appréciation de l'utilisateur |
| Ne pas promettre | Aucun poids promis, aucun délai, aucune « transformation en 30 jours » |
| Ne pas humilier | Aucun graphique de comparaison avec la moyenne des autres, aucun classement social |
| Ne pas pousser à la blessure | aucune incitation à « faire mal » : le message de fin dit le contraire |
| Avertir | Une phrase rappelle de consulter un médecin en cas de douleur, de maladie ou de grossesse |

---

## 10. Plan de lancement

| Étape | Contenu | Échéance |
|---|---|---|
| 1. Tester soi-même | Ouvrir le lien, installer sur le téléphone, faire trois séances complètes | Cette semaine |
| 2. Faire tester | 5 personnes de l'entourage, dont au moins une avec un genou ou un dos fragile | Une semaine |
| 3. Premiers contenus | Une vidéo courte par programme pour montrer l'application en fonctionnement | Deux semaines |
| 4. Ouverture | Le lien partagé publiquement, avec la chaîne sport comme point d'entrée | Un mois |

**Ce qu'on ne fait pas au lancement :** pas de publicité payante, pas de campagne, pas de compte à créer. On laisse l'application parler d'elle-même.

---

## 11. Ce qui vient après

| Version | Contenu | Pourquoi |
|---|---|---|
| v2 | Échauffement guidé en vidéo, séances « 10 minutes » pour les jours pressés | Ce sont les deux demandes les plus fréquentes |
| v2 | Sons et signets : aucune musique imposée, travailler en silence ou avec la sienne | Cohérent avec les valeurs, et c'est un vrai confort |
| v3 | Mode Ramadan : séances courtes et décalées | Correspond au rythme réel de l'année |
| v3 | Programmes pour la grossesse et pour les seniors | Aujourd'hui, ces publics sont seulement protégés ; ils méritent d'être servis |
| v4 | Anglais et arabe | Pour sortir de Mayotte |
| v4 | Version « sans écran » : la voix guide la séance | On n'a pas besoin de regarder son téléphone pour faire des squats |

---

## 12. Ce qu'il reste à décider

1. **Le nom définitif** — JASAD (le corps) est proposé. Un autre nom peut être choisi : rien n'est figé.
2. **L'avertissement médical** — faut-il une case à cocher au premier lancement, ou une phrase simple sur l'écran des réglages ?
3. **Les vidéos** — qui les tourne ? Un vrai visage rend l'application beaucoup plus chaleureuse.
4. **Le rythme hebdomadaire** — trois séances par semaine est proposé par défaut pour le programme débutant.
5. **Le partage** — l'application est publique aujourd'hui. Faut-il la garder discrète le temps des tests ?

---

## 13. L'état technique exact

| Fichier | Rôle | Poids |
|---|---|---|
| `index.html` | Structure et habillage de l'application | 13 Ko |
| `jasad.js` | Les 32 exercices, les programmes, et toute la logique | 47 Ko |
| `manifest.json` | Permet l'installation sur l'écran d'accueil | 1 Ko |
| `sw.js` | Fonctionnement hors connexion | 1 Ko |
| `icon-192.png`, `icon-512.png` | Icônes de l'application | 40 Ko |

**Contrôles passés le 14 octobre 2026 :** 21 contrôles automatiques — affichage des écrans, minuteur qui descend, enchaînement des séries et des repos, filtre des contre-indications, enregistrement d'une séance, bibliothèque et filtres. Résultat : 21 sur 21, aucune erreur.

**Hébergement :** dépôt `jasad` sur GitHub, publié automatiquement. Aucune facture, aucune limite de durée.
