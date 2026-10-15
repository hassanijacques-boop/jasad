#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Plan JASAD -> PDF (pandoc + Chromium, A4 paysage).
⚠️ Deux pièges connus : ne PAS utiliser --standalone (sinon un <html> est imbriqué
et le CSS de pandoc écrase le contenu dans une colonne étroite), et neutraliser
max-width dans le CSS maison."""
import pathlib, subprocess, sys
from playwright.sync_api import sync_playwright

BASE = pathlib.Path(__file__).parent
MD = BASE / "PLAN_JASAD.md"
PDF = BASE / "JASAD_plan_complet.pdf"

CSS = """
html, body { margin:0 !important; padding:0 !important; max-width:none !important;
             width:100% !important; }
body { font-family:"DejaVu Sans",Arial,sans-serif; font-size:10pt; color:#152238; line-height:1.5 }
h1 { font-size:22pt; color:#0B1220; border-bottom:3px solid #E3B25C; padding-bottom:6px; margin:0 0 4px }
h2 { font-size:14pt; color:#0B1220; margin:16px 0 6px; padding-left:9px; border-left:5px solid #E3B25C }
h3 { font-size:11.5pt; color:#1B2A4A; margin:12px 0 4px }
p  { margin:6px 0 }
ul, ol { margin:6px 0 6px 20px } li { margin:3px 0 }
table { border-collapse:collapse; width:100% !important; table-layout:fixed; margin:8px 0 }
th, td { border:1px solid #c7d2e0; padding:5px 8px; font-size:9pt; vertical-align:top;
         overflow-wrap:break-word; word-break:break-word }
th { background:#1B2A4A; color:#fff; font-weight:700 }
tr:nth-child(even) td { background:#f6f8fb }
strong { color:#0B1220 }
code { background:#eef2f7; padding:1px 4px; border-radius:3px; font-size:9pt }
hr { border:0; border-top:1px solid #dbe3ee; margin:14px 0 }
a { color:#0E6E8C; text-decoration:none }
@page { size: A4 landscape; margin: 11mm; }
"""

# fragment seulement : pas de --standalone
frag = subprocess.run(["pandoc", str(MD), "-f", "markdown", "-t", "html5"],
                      capture_output=True, text=True, check=True).stdout
tmp = pathlib.Path("/tmp/_plan_jasad.html")
tmp.write_text(f"<html><head><meta charset='utf-8'><style>{CSS}</style></head>"
               f"<body>{frag}</body></html>", encoding="utf-8")

with sync_playwright() as pw:
    b = pw.chromium.launch(args=["--no-sandbox", "--disable-dev-shm-usage"])
    p = b.new_page()
    p.goto(f"file://{tmp}", wait_until="load")
    p.wait_for_timeout(900)
    p.pdf(path=str(PDF), format="A4", landscape=True, print_background=True,
          margin={"top": "11mm", "bottom": "11mm", "left": "11mm", "right": "11mm"})
    b.close()

import fitz
d = fitz.open(str(PDF))
txt = "\n".join(pg.get_text() for pg in d)
deb = sum(1 for pg in d for blk in pg.get_text("blocks") if blk[2] > pg.rect.width - 10)
print(f"PDF : {len(d)} pages · {PDF.stat().st_size//1024} Ko")
print(f"  blocs hors marge droite : {deb}")
print(f"  dièses : {txt.count('#')} · astérisques : {txt.count('*')}")
manquants = [m for m in ["contre-indications", "FitMe", "hors connexion", "Plan de lancement",
                         "JASAD", "1 037"] if m.lower() not in txt.lower()]
print(f"  mots-clés absents : {manquants if manquants else 'aucun'}")
sys.exit(0 if deb == 0 and not manquants else 1)
