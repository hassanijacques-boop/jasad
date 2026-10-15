#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Parcours de test de JASAD v2 dans un vrai navigateur (mobile 390×844).

Vérifie : zéro erreur JS, contenu rendu, minuteries qui tournent, filtre des
contre-indications, sauvegarde du prénom, module SAVOIR (11 axes + sources
créditées), MANGER, MENSONGES, SOUFFLE guidé, HABITUDES — et capture chaque écran.
"""
import pathlib, sys
from playwright.sync_api import sync_playwright

BASE = pathlib.Path(__file__).parent
OUT = pathlib.Path("/tmp/jasad")
OUT.mkdir(parents=True, exist_ok=True)
URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8811/index.html"

erreurs = []
resultats = []


def shot(p, nom):
    p.screenshot(path=str(OUT / (nom + ".png")))
    return nom


def verif(nom, ok, detail=""):
    resultats.append((nom, ok, detail))
    print(("  OK  " if ok else "  ÉCHEC ") + nom + ((" — " + detail) if detail else ""))


with sync_playwright() as pw:
    b = pw.chromium.launch(args=["--no-sandbox", "--disable-dev-shm-usage"])
    ctx = b.new_context(viewport={"width": 390, "height": 844},
                        device_scale_factor=2, is_mobile=True, has_touch=True,
                        locale="fr-FR")
    p = ctx.new_page()
    p.on("pageerror", lambda e: erreurs.append("pageerror: " + str(e)))
    p.on("console", lambda m: erreurs.append("console." + m.type + ": " + m.text)
         if m.type == "error" else None)

    p.goto(URL, wait_until="load")
    p.wait_for_timeout(900)

    # 1 · accueil
    shot(p, "01-accueil")
    txt = p.inner_text("#app")
    verif("Accueil rendu (promesses visibles)", "Aucune publicité" in txt and "Aucun compte" in txt)
    verif("Nombre d’exercices annoncé", "exercices" in txt)
    verif("Accueil → entrée « Savoir »", "Ouvrir « Savoir »" in txt)

    # 2 · programmes
    p.click("nav.tabs button#t-pro")
    p.wait_for_timeout(350)
    shot(p, "02-bouger")
    txt = p.inner_text("#app")
    verif("3 programmes affichés", "Réveil du corps" in txt and "Force tranquille" in txt and "Endurance" in txt)
    verif("Bibliothèque accessible depuis « Bouger »", "Ouvrir la bibliothèque" in txt)

    # 3 · choisir le programme 1
    p.click("text=Réveil du corps")
    p.wait_for_timeout(400)
    txt = p.inner_text("#app")
    verif("Programme choisi mémorisé", "C’est le programme que tu suis" in txt)
    shot(p, "03-programme-choisi")

    # 4 · contraintes (onglet Moi) AVANT la séance, pour tester le filtre
    p.click("nav.tabs button#t-moi")
    p.wait_for_timeout(350)
    p.click("text=Genoux fragiles")
    p.wait_for_timeout(300)
    p.click("text=Dos fragile")
    p.wait_for_timeout(300)
    shot(p, "04-moi-contraintes")
    verif("Contraintes cochées", "✓" in p.inner_text("#app"))

    # 5 · prénom
    p.fill("#prenom", "Jacques")
    p.wait_for_timeout(500)
    verif("Prénom repris dans l’en-tête", "JACQUES" in p.inner_text("#topSous").upper(),
          p.inner_text("#topSous"))
    p.click("nav.tabs button#t-acc")
    p.wait_for_timeout(350)
    verif("Prénom sur l’accueil", "Bonjour Jacques" in p.inner_text("#app"))
    shot(p, "05-accueil-personnalise")

    # 6 · écran séances + effet du filtre
    p.click("nav.tabs button#t-sea")
    p.wait_for_timeout(400)
    txt = p.inner_text("#app")
    shot(p, "06-seances")
    verif("Adaptation annoncée", ("adapté" in txt) or ("remplacé" in txt) or ("Écarté" in txt))

    # 7 · lancer la séance
    p.click("#app .item")
    p.wait_for_timeout(700)
    shot(p, "07-lecteur")
    txt = p.inner_text("#player")
    verif("Lecteur ouvert sur un exercice", "Marche sur place" in txt, txt.replace("\n", " | ")[:80])
    verif("Bouton de départ présent", "C’est parti" in txt)
    verif("Repère d’étapes affiché", "1/" in txt)

    # 8 · minuterie
    p.click("#player button.btn")
    p.wait_for_timeout(2100)
    t1 = p.inner_text("#player .ring .inside .big")
    p.wait_for_timeout(2100)
    t2 = p.inner_text("#player .ring .inside .big")
    verif("Minuterie qui descend", t1 != t2, f"{t1} puis {t2}")
    shot(p, "08-lecteur-en-cours")

    # 9 · enchaîner, puis forcer la fin
    for _ in range(6):
        p.click("#player button.main")
        p.wait_for_timeout(60)
    avance = p.evaluate("pl.i")
    verif("Les étapes s’enchaînent", avance >= 5, "étape atteinte : " + str(avance))

    p.evaluate("pl.i = pl.pas.length - 1; suivant();")
    p.wait_for_timeout(500)
    t_fin = p.inner_text("#player")
    verif("Écran de fin atteint", "SÉANCE TERMINÉE" in t_fin)
    verif("Hadith affiché à la fin", "Ton corps a un droit sur toi" in t_fin)
    verif("Durée comptée", ":" in t_fin)
    shot(p, "09-fin-de-seance")
    p.click("#player button.btn.g")
    p.wait_for_timeout(400)
    verif("Séance enregistrée", p.evaluate("etat.faites.length") == 1,
          "séances enregistrées : " + str(p.evaluate("etat.faites.length")))

    # 10 · bibliothèque (depuis Bouger)
    p.click("nav.tabs button#t-pro")
    p.wait_for_timeout(350)
    p.click("text=Ouvrir la bibliothèque")
    p.wait_for_timeout(500)
    txt = p.inner_text("#app")
    shot(p, "10-exercices")
    verif("Bibliothèque remplie", "Squat au poids du corps" in txt and "Position :" in txt)
    verif("Marquage « à ménager »", "à ménager" in txt)

    # 11 · filtre par groupe
    p.click("text=Cardio")
    p.wait_for_timeout(350)
    txt = p.inner_text("#app")
    verif("Filtre par groupe", ("Sauts écartés" in txt) and ("Squat au poids du corps" not in txt))
    shot(p, "11-exercices-cardio")

    # ------------------------------------------------------------------
    # 12 · MODULE SAVOIR : les 11 axes
    # ------------------------------------------------------------------
    p.click("nav.tabs button#t-sav")
    p.wait_for_timeout(450)
    txt = p.inner_text("#app")
    shot(p, "12-savoir")
    nb = p.evaluate("AXES.length")
    verif("11 axes hormonaux présents", nb == 11, "axes : " + str(nb))
    verif("Les axes sont listés à l’écran",
          all(m in txt for m in ["L’insuline", "Le foie, chef d’orchestre", "Le corps féminin", "Le muscle qui protège"]))
    verif("Le crédit est annoncé dès l’entrée", "nom de la vidéo et minutage" in txt)
    verif("Les cinq sections du module", all(m in txt for m in
          ["COMPRENDRE MON CORPS", "MANGER JUSTE", "RESPIRER", "LES MENSONGES", "SOURCES"]))

    # 13 · une fiche d’axe, avec sa source
    p.click("text=Le foie, chef d’orchestre")
    p.wait_for_timeout(450)
    txt = p.inner_text("#app")
    shot(p, "13-axe-foie")
    verif("Fiche d’axe ouverte", "À retenir" in txt and "pétrole" in txt)
    verif("Source créditée (nom de la vidéo)", "P1 : le foie" in txt)
    verif("Source créditée (minutage + lien)",
          "3:00 à 4:50" in txt and "youtube.com/watch?v=9nFsSIghnio" in txt)
    verif("Renvoi au médecin présent", "ton médecin" in txt)

    # 14 · Manger juste
    p.click("text=Retour à Savoir")
    p.wait_for_timeout(300)
    p.click("text=Ouvrir « Manger juste »")
    p.wait_for_timeout(450)
    txt = p.inner_text("#app")
    shot(p, "14-manger")
    verif("Six blocs alimentation", all(m in txt for m in
          ["ce que tu bois", "trois zones", "étiquette", "protéines d’ici", "journée type", "remplacements"]))
    verif("Repère OMS cité", "25 g" in txt and "OMS" in txt)
    verif("Assiette en trois zones détaillée", "Une paume de protéine" in txt)

    # 15 · Mensonges
    p.click("text=Retour à Savoir")
    p.wait_for_timeout(300)
    p.click("text=Ouvrir « Les mensonges »")
    p.wait_for_timeout(450)
    txt = p.inner_text("#app")
    shot(p, "15-mensonges")
    verif("Huit mensonges", p.evaluate("MENSONGES.length") == 8 and "MENSONGE N°1" in txt)
    verif("Le mensonge des abdos est traité", "ventre plat" in txt)
    verif("Chaque mensonge a sa source", txt.count("Irvine K") >= 3 and "Règle de la maison" in txt)

    # 16 · Sources & crédits
    p.click("text=Retour à Savoir")
    p.wait_for_timeout(300)
    p.click("text=Voir les sources")
    p.wait_for_timeout(450)
    txt = p.inner_text("#app")
    shot(p, "16-sources")
    verif("Nom de la chaîne source citée", "Irvine K" in txt and "Plus jamais gros" in txt)
    verif("Les 10 vidéos listées", p.evaluate("SOURCES_VIDEOS.length") == 10
          and "Stress oxydatif" in txt and "Cycle menstruel" in txt)
    verif("Règle de crédit explicitée", "Comment il est crédité" in txt and "Jamais ses images" in txt)
    verif("Limites assumées", "coach, pas médecin" in txt)
    verif("Ce qu’on ne fera jamais", "Aucun poids promis" in txt and "Aucun conseil médical" in txt)

    # 17 · Le souffle guidé
    p.click("text=Retour à Savoir")
    p.wait_for_timeout(300)
    p.click("text=Ouvrir « Respirer")
    p.wait_for_timeout(450)
    txt = p.inner_text("#app")
    shot(p, "17-souffle")
    verif("Écran du souffle", "3 · 5 · 7" in txt and "les six gestes de la nuit" in txt.lower())
    verif("Six gestes de la nuit", p.evaluate("SOMMEIL.length") == 6)
    p.click("text=Commencer")
    p.wait_for_timeout(1200)
    r1 = p.inner_text("#respzone")
    p.wait_for_timeout(2200)
    r2 = p.inner_text("#respzone")
    verif("Le souffle décompte", r1 != r2, "(compteur qui tourne)")
    shot(p, "18-souffle-en-cours")
    p.click("text=Arrêter")
    p.wait_for_timeout(300)

    # 18 · Retour sur Moi : habitudes
    p.click("nav.tabs button#t-moi")
    p.wait_for_timeout(450)
    txt = p.inner_text("#app")
    shot(p, "19-moi-habitudes")
    verif("Bloc habitudes présent", "Mes habitudes du jour" in txt and "Boire de l’eau" in txt)
    p.click("text=Boire de l’eau, pas de boisson sucrée")
    p.wait_for_timeout(400)
    nb_hab = p.evaluate("habitudesFaitesAujourdhui()")
    verif("Habitude cochée et enregistrée", nb_hab == 1, "habitudes cochées : " + str(nb_hab))
    verif("Habitude conservée au rechargement",
          p.evaluate("JSON.parse(localStorage.getItem('jasad.v1')).habitudes") is not None)
    shot(p, "20-moi-habitude-cochee")

    verif("Aucune erreur JavaScript", len(erreurs) == 0, " | ".join(erreurs[:4]))
    b.close()

print()
print(f"{sum(1 for r in resultats if r[1])}/{len(resultats)} contrôles passés")
sys.exit(0 if all(r[1] for r in resultats) else 1)
