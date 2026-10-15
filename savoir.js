/* =======================================================================
   JASAD · جسد — SAVOIR
   Le module « comprendre » : les 11 axes hormonaux, l'alimentation,
   le souffle, les mensonges du bien-être, et les sources.

   RÈGLE ABSOLUE : chaque explication qui vient d'une vidéo d'Irvine K
   porte son crédit (nom de la vidéo + minutage). On ne s'approprie rien.
   Aucun poids promis. Aucun produit vendu. Aucun conseil médical.
   ======================================================================= */

var axeOuvert = "";

/* -----------------------------------------------------------------------
   1. LES 11 AXES HORMONAUX
   ----------------------------------------------------------------------- */
var AXES = [
{
 id:"insuline", em:"🩸", n:"L’insuline", court:"Le bouton marche / arrêt",
 p:["Après un repas, ton pancréas libère de l’insuline. Tant qu’elle est haute, une enzyme "
   +"qui découpe les graisses (la HSL) est bloquée : ton corps ne puise pas dans ses réserves. "
   +"Quand elle redescend, le découpage reprend.",
    "C’est pour ça qu’on ne parle pas seulement de CE QUE tu manges, mais aussi de LA FRÉQUENCE. "
    +"Grignoter toute la journée, c’est garder le bouton sur pause du matin au soir."],
 r:["L’insuline monte à chaque repas — et plus haut quand c’est du sucre seul.",
    "Tant qu’elle est haute, pas de puisage dans les réserves.",
    "Laisser des trous entre les repas compte plus que compter les calories."],
 src:[{v:"La Perte de gras Expliquée — la vérité cachée par l’industrie", id:"DQtY5Nyn6r0", t:"2:48 et 6:29",
       c:"« Quand l’insuline est basse, la lipolyse est activée… L’enzyme HSL a un antagoniste : l’insuline. »"}]
},
{
 id:"repas", em:"🍽", n:"Le trou entre les repas", court:"Le moment où le corps puise",
 p:["Ton corps ne brûle ses réserves que dans les moments où l’insuline est basse. Après un repas, "
   +"il faut du temps pour que le brûlage reprenne — d’autant plus longtemps que le repas était sucré.",
    "La nuit est ton meilleur trou : plus elle est longue, plus ton corps travaille pour toi."],
 r:["Repas tard le soir + petit-déjeuner sucré tôt = aucun trou dans la journée.",
    "Eau et rien d’autre entre les repas : c’est déjà un changement.",
    "Le jeûne n’est PAS pour tout le monde (voir l’avertissement plus bas)."],
 src:[{v:"6 méthodes JAMAIS vues pour PERDRE DU POIDS", id:"yBZ9ukH9NZI", t:"2:56 et 3:23",
       c:"« Si tu manges sucré le matin… ton insuline va faire comme ça. »"}],
 note:"⚠️ Le jeûne ne convient pas à tout le monde : grossesse, diabète traité, enfants, "
     +"travail physique intense, personne fragilisée. Parles-en à ton médecin."
},
{
 id:"foie", em:"🫀", n:"Le foie, chef d’orchestre", court:"Celui qui allume tout",
 p:["Ton foie n’est pas qu’un filtre. Il convertit l’hormone thyroïdienne inactive (T4) en forme "
   +"active (T3) — la plus grande partie de cette transformation se fait chez lui. Il fabrique aussi "
   +"l’essentiel de ton cholestérol, qui est la matière première de tes hormones. Et c’est lui qui "
   +"active la vitamine D.",
    "Autrement dit : un foie fatigué, ce n’est pas un détail — c’est un métabolisme qui tourne au "
    +"ralenti et des hormones qui baissent."],
 r:["T4 = le pétrole, T3 = l’essence. La transformation se fait dans le foie.",
    "Le cholestérol n’est pas l’ennemi : c’est la brique de tes hormones.",
    "Aucune gélule ne « nettoie » le foie. Ce qui l’aide, c’est ce qu’on arrête de lui envoyer."],
 src:[{v:"Comment vraiment Perdre son VENTRE / P1 : le foie", id:"9nFsSIghnio", t:"3:00 à 4:50",
       c:"« Avoir un foie à son plein potentiel, c’est ultra important… il y a vraiment tout qui part du foie. »"}]
},
{
 id:"fructose", em:"🥤", n:"Le sucre qui se boit", court:"Celui qui va droit au foie",
 p:["Le sucre des boissons et des produits industriels arrive directement au foie, qui n’a qu’une "
   +"capacité limitée par jour. Au-delà, il range le surplus — et il le range devant, au ventre.",
    "Une mangue n’est pas un soda : dans le fruit, le sucre est emballé avec des fibres et de l’eau, "
    +"il arrive doucement. Dans la bouteille, il arrive seul."],
 r:["Le sucre qui se boit n’est pas le sucre qui se mange.",
    "Repère grand public : moins de 25 g de sucres libres par jour (Organisation mondiale de la santé) "
    +"— soit environ 6 morceaux de sucre, boissons comprises.",
    "Un soda de 50 cl peut à lui seul dépasser la journée entière."],
 src:[{v:"Perdre son VENTRE — P1 : le foie", id:"9nFsSIghnio", t:"5:13 à 5:41",
       c:"« L’excédent, il ne va pas se stocker dans les épaules : il va se stocker pile dans le ventre. »"},
      {v:"Tu manges du POISON sans savoir (le fructose)", id:"SWmattdMbfk", t:"toute la vidéo",
       c:"Sa vidéo entière sur le sujet. Son titre est volontairement provocateur — nous, on garde "
       +"le mécanisme et on laisse de côté le mot « poison »."}]
},
{
 id:"ventre", em:"🍩", n:"Ton ventre te parle", court:"Le gras n’est pas inerte",
 p:["Le tissu graisseux n’est pas un sac immobile : il fabrique des messages hormonaux. Certains "
   +"rendent ton corps moins sensible à l’insuline (le TNF-alpha, la résistine), d’autres entretiennent "
   +"l’inflammation (l’IL-6). Et une enzyme du gras, l’aromatase, transforme les hormones mâles en "
   +"hormones femelles : plus il y a de gras, plus cette transformation s’intensifie.",
    "C’est un cercle : plus de gras → plus de résistance à l’insuline → plus de stockage. "
    +"La bonne nouvelle, c’est que c’est aussi le ventre qui répond le premier quand tu changes "
    +"quelque chose."],
 r:["Le tissu graisseux envoie des signaux — ce n’est pas que du stockage.",
    "Plus il y en a, plus l’insuline a du mal à faire son travail.",
    "Le ventre est souvent le premier à réagir quand on change l’alimentation."],
 src:[{v:"Meilleur cardio, perte de poids après 40 ans (Podcast 3)", id:"1UogdYYFXRs", t:"1:43 à 3:23",
       c:"« Le gras du bide, c’est 100 hormones minimum… TNF-alpha, celle qui vient te rendre résistant à l’insuline. »"}]
},
{
 id:"cortisol", em:"😖", n:"Le cortisol", court:"Le stress range le gras devant",
 p:["Le cortisol se fabrique dans l’axe hypothalamo-hypophyso-surrénalien. Une inflammation de "
   +"l’intestin remonte au cerveau et active cet axe. Un cortisol qui reste haut abîme le muscle et "
   +"pousse au stockage abdominal : pendant un effort, l’adrénaline puise dans les graisses, mais le "
   +"cortisol, lui, puise dans les muscles.",
    "Donc dormir, marcher et respirer lentement ne sont pas des conforts : ce sont des gestes "
    +"hormonaux."],
 r:["Stress prolongé = stockage devant, et muscle mangé.",
    "Le sommeil fait baisser le cortisol — c’est le levier le plus puissant et le plus gratuit.",
    "Respirer lentement, marcher, ne pas s’épuiser : ça se voit dans les hormones."],
 src:[{v:"Tout sur les glucides, inflammation, FODMAP (Podcast 2)", id:"hMx4x4foS20", t:"12:01 et 12:09",
       c:"« Ça va activer l’axe HPA… c’est dans l’axe HPA que le cortisol est produit. »"}]
},
{
 id:"mito", em:"⚡", n:"Tes petites centrales", court:"Là où l’énergie se fabrique",
 p:["Toute ton énergie se fabrique dans les mitochondries. Elles ont deux carburants : ce que tu "
   +"viens de manger, ou tes réserves de graisse. Quand les radicaux libres prennent le dessus, les "
   +"membranes s’abîment : moins d’énergie, moins bonne réponse à l’insuline, vieillissement des "
   +"cellules. Les oméga-3 renforcent ces membranes.",
    "Ce qu’elles préfèrent : un effort long et doux plutôt qu’un effort violent. C’est exactement "
    +"pour ça qu’une marche de quarante minutes fait plus qu’un sprint de trois minutes."],
 r:["Deux carburants : ce que tu manges, ou ta graisse.",
    "Marcher longtemps et tranquillement est ce que tes cellules préfèrent.",
    "Ce qui les aide : bouger régulièrement, dormir, manger vrai. Pas une gélule."],
 src:[{v:"Perte de poids — Stress oxydatif — Mitochondries", id:"acY6U9R2hdA", t:"0:30, 7:19, 18:21",
       c:"« Le mécanisme du brûlage de graisse, il se passe dans les mitochondries… des petits moteurs "
       +"où il y a deux carburants. »"}]
},
{
 id:"age", em:"⏳", n:"À partir de 30 ans", court:"Le même corps ne répond plus pareil",
 p:["Avec les années, le corps fabrique moins d’hormone de croissance, moins d’hormones sexuelles, "
   +"la thyroïde ralentit et la sensibilité à l’insuline baisse. Résultat : la même assiette et le "
   +"même effort ne donnent plus le même résultat.",
    "L’hormone de croissance agit sur la même enzyme que l’insuline : quand l’insuline est haute, "
    +"elle est au repos. D’où le conseil d’un dîner plus léger — pas une mode, une question de "
    +"signaux."],
 r:["Ce n’est pas de la paresse : c’est un terrain qui change.",
    "Le levier qui marche après 40 ans : marcher, dormir, garder du muscle.",
    "Le soir plus léger aide la nuit — et la nuit fait le reste."],
 src:[{v:"J’ai perdu 40 kg en 90 jours, je t’explique tout", id:"m2YF01i1vzw", t:"1:21 et 1:26",
       c:"« Entre 20 et 30 ans, tu n’as plus du tout le même métabolisme : ta thyroïde a commencé à "
       +"ralentir. »"}],
 note:"⚠️ On ne dit jamais à quelqu’un qu’il a « la thyroïde qui ne marche pas ». Ça, c’est un "
     +"bilan de santé. Si tu as des doutes : ton médecin."
},
{
 id:"dopamine", em:"🍫", n:"Ce n’est pas ta volonté", court:"L’accoutumance au sucre",
 p:["Le sucre appuie sur le circuit du plaisir dans ton cerveau. À force, il en faut plus pour "
   +"ressentir le même effet — exactement comme un récepteur d’insuline qui s’abîme et finit par "
   +"moins bien répondre.",
    "Ce n’est donc pas un défaut de caractère. C’est une accoutumance, et elle se démonte en deux "
    +"à trois semaines, en changeant la forme du sucre (le fruit plutôt que le jus), en espaçant les "
    +"prises et en dormant."],
 r:["Le sucre est un plaisir, pas seulement une calorie.",
    "Plus tu en manges, plus il t’en faut — ça s’appelle l’accoutumance.",
    "On ne dit jamais « tu manques de volonté » : c’est faux, et c’est blessant."],
 src:[{v:"Comment se désintoxiquer du Sucre (dopamine, flow)", id:"Fehrfs416jw", t:"0:00, 3:01, 6:32",
       c:"« Tu crois que tu n’as pas de volonté ? »"}]
},
{
 id:"femme", em:"🌸", n:"Le corps féminin", court:"Cycles, périménopause, ménopause",
 p:["Les hormones féminines — œstrogènes et progestérone — naissent à 90-95 % dans l’axe "
   +"hypothalamo-hypophyso-ovarien. Ce sont des hormones stéroïdiennes, donc fabriquées à partir du "
   +"cholestérol : ton foie est concerné aussi.",
    "Sur tes cellules graisseuses, deux enzymes s’opposent : la LPL remplit, la HSL vide. Et les "
   +"œstrogènes bloquent la LPL. C’est pour ça qu’on stocke moins au ventre quand ils sont hauts.",
    "Le cycle : une phase folliculaire, l’ovulation (le pic d’œstrogènes), puis une phase lutéale "
   +"avec le pic de progestérone, puis la chute. Au pic, tu as plus d’énergie, moins faim et "
   +"meilleure humeur. Après 40 ans, en périménopause puis à la ménopause, le terrain change : "
   +"le même effort donne un autre résultat. Ce n’est pas toi qui as changé de caractère."],
 r:["Les œstrogènes décident où le gras se range.",
    "Il y a des jours du mois où tout est plus facile — ce n’est pas une impression.",
    "Le cycle varie d’une femme à l’autre (24 à 34 jours) : aucune généralisation."],
 src:[{v:"Cycle menstruel, périménopause, ménopause et perte de poids", id:"71ZcpBFYI00", t:"2:40, 8:50, 13:53, 15:03",
       c:"« Tu as moins de gras du ventre quand les œstrogènes sont élevés… la LPL, c’est l’inverse de la HSL. »"}],
 note:"⚠️ On ne dit jamais à une femme qu’elle a « un déséquilibre hormonal ». Un symptôme = "
     +"un médecin ou un gynécologue. Pas une vidéo."
},
{
 id:"muscle", em:"💪", n:"Le muscle qui protège", court:"Ton amortisseur",
 p:["Le muscle se construit avec des hormones : dans la lecture d’Irvine K, la testostérone compte "
   +"pour environ 40 %, l’IGF-1 pour 30 %, l’hormone de croissance pour 15 % et l’insuline pour 15 %. "
   +"L’insuline n’est pas un bâtisseur : elle apporte les briques — les protéines — au muscle. "
   +"Le cortisol, lui, fait l’inverse : il puise dans le muscle pour produire de l’énergie.",
    "Ici, on ne cherche pas à en prendre. On cherche à ne pas en perdre. Parce que le muscle n’est "
    +"pas pour la plage : c’est ce qui tient ton dos, ce qui amortit tes genoux, et ce qui te permet "
    +"de te relever du sol à soixante-dix ans."],
 r:["Le muscle est ta protection articulaire, pas un objet de vitrine.",
    "Des protéines régulières : poisson, œufs, légumes secs, lait caillé, viande.",
    "Le stress en mange : c’est l’autre raison de bien dormir."],
 src:[{v:"Le SECRET sur la PRISE DE MUSCLE", id:"tgCtRL6KoLc", t:"≈ 2:00",
       c:"« La testostérone joue à peu près sur 40 %, IGF1 30 %, l’hormone de croissance 15 % et "
       +"l’insuline 15 %. »"}]
}
];

function axeById(id){ for(var i=0;i<AXES.length;i++){ if(AXES[i].id===id){ return AXES[i]; } } return null; }

/* -----------------------------------------------------------------------
   2. MANGER JUSTE — les blocs pratiques
   ----------------------------------------------------------------------- */
var MANGER = [
{ em:"🥤", n:"Le geste n°1 : ce que tu bois",
  p:["C’est le geste le plus rentable, et le plus simple : tu ne changes rien dans ton assiette, "
    +"tu changes ce que tu bois.",
     "Méthode pour mesurer par toi-même : prends la ligne « dont sucres » de l’étiquette, en "
     +"grammes pour 100 ml, et divise par 4. Tu obtiens le nombre de morceaux de sucre."],
  li:["Soda → eau fraîche avec du citron, de la menthe ou du gingembre.",
      "Jus de fruits en brique → le fruit entier (tu manges la fibre, tu bois de l’eau).",
      "Boisson énergisante → eau, et si tu manques de tonus : du sommeil.",
      "Sirop maison très sucré → divise le sucre par deux, puis par deux encore."],
  src:"Repère grand public : moins de 25 g de sucres libres par jour (OMS)."}
,
{ em:"🍛", n:"L’assiette en trois zones",
  p:["Une assiette, trois couleurs — et tu n’as plus besoin de calculer quoi que ce soit.",
     "C’est ce qui marche aussi avec la cuisine d’ici : le poisson, les brèdes, le riz, le fruit "
     +"à pain, le manioc."],
  li:["Une paume de protéine : poisson, poulet, œufs, légumes secs, viande.",
      "Deux poings de légumes ou de feuilles : brèdes, tomates, courgettes, salade, carottes.",
      "Un poing de féculent : riz, manioc, fruit à pain, pommes de terre, pain.",
      "Un pouce de gras : huile, arachides, avocat."],
  src:"Repère de méthode (portions à la main)."}
,
{ em:"🏷", n:"Lire une étiquette en 10 secondes",
  p:["Retourne l’emballage. Tu n’as pas besoin de lire tout : trois coups d’œil suffisent.",
     "Et retiens la phrase d’Irvine K : « sans gras » ne veut pas dire « sans danger » — quand on "
     +"retire le gras, on remet souvent du sucre."],
  li:["1. Les trois premiers ingrédients : le sucre est-il dedans ? Si oui, repose-le.",
      "2. La ligne « dont sucres » pour 100 g : au-dessus de 10 g, c’est beaucoup.",
      "3. Les noms cachés : saccharose, sirop de glucose-fructose, dextrose, maltodextrine, "
      +"jus de fruits concentré, miel ajouté."],
  src:"Méthode de lecture ; « sans gras » : Irvine K, vidéo sur le fructose (SWmattdMbfk)."}
,
{ em:"🐟", n:"Les protéines d’ici",
  p:["Tu n’as pas besoin de poudre ni de barres. À Mayotte, la meilleure protéine du monde est "
    +"à quelques mètres de chez toi.",
     "Répartis-les : un peu à chaque repas vaut mieux que tout le soir."],
  li:["Poisson frais ou séché — le meilleur rapport qualité-prix.",
      "Œufs.",
      "Légumes secs : pois, lentilles, haricots, arachides non salées.",
      "Poulet, viande — moins souvent, mais oui.",
      "Lait caillé ou yaourt nature."],
  src:"Repère pratique, cohérent avec sa vidéo sur la prise de muscle."}
,
{ em:"🕐", n:"La journée type",
  p:["Ce n’est pas un régime : c’est un rythme. Les horaires comptent autant que le contenu, "
    +"parce que c’est ce qui laisse des trous à ton insuline."],
  li:["Le matin : une protéine (œufs, lait caillé, poisson) + un fruit. Pas de jus, pas de sucre seul.",
      "Le midi : l’assiette en trois zones. Tu manges à ta faim.",
      "16 h : le creux est normal. Eau + un fruit, ou une petite poignée d’arachides.",
      "Le soir : plus léger, peu de féculent — ça aide la nuit.",
      "Entre les repas : rien, et de l’eau. C’est tout le secret du bouton « pause »."],
  src:"Rythme : Irvine K (trou entre les repas). Contenu : assiette en trois zones."}
,
{ em:"🔁", n:"Cinq remplacements, zéro interdit",
  p:["On n’interdit rien. On remplace. Un interdit se contourne ; un remplacement, il reste."],
  li:["Le soda → l’eau parfumée maison.",
      "Le bokit tous les jours → le bokit une fois par semaine, sans culpabilité.",
      "La friture quotidienne → la friture le week-end, le four en semaine.",
      "Le goûter sucré de 16 h → le fruit ou les arachides.",
      "Le riz seul → le riz avec des légumes et une protéine."],
  src:"Repères pratiques. Le goût du sucré se remet à zéro en deux à trois semaines "
     +"(Irvine K, vidéo sur le sucre, Fehrfs416jw)."}
];

/* -----------------------------------------------------------------------
   3. RESPIRER & DORMIR
   ----------------------------------------------------------------------- */
var SOMMEIL = [
 ["📵","Une heure sans écran avant de dormir","La lumière du téléphone retarde le sommeil : "
  +"ton corps croit qu’il fait encore jour."],
 ["☕","Pas de café après 14 h","Il travaille encore le soir, alors qu’il est déjà loin."],
 ["🌙","La chambre sombre, fraîche et silencieuse","Trois conditions, et le sommeil vient plus vite."],
 ["🍽","Un dîner plus léger","Le soir, on lève le pied sur le féculent : ça aide la nuit."],
 ["☀️","Dix minutes dehors le matin","La lumière du matin règle l’horloge du soir."],
 ["🔄","Le même horaire le week-end","C’est la régularité qui fait la qualité."]
];

/* -----------------------------------------------------------------------
   4. LES MENSONGES DU BIEN-ÊTRE
   ----------------------------------------------------------------------- */
var MENSONGES = [
 ["Les abdos font le ventre plat",
  "Les abdos renforcent ta sangle abdominale — et c’est très bien pour ton dos. Mais ils ne font "
  +"pas disparaître la graisse qui est devant. C’est comme serrer une poche : le contenu ne bouge pas.",
  "Irvine K — « Le SECRET des ABDOS révélé »"],
 ["Il faut souffrir pour progresser",
  "Une douleur qui dure n’est pas une preuve de sérieux : c’est un message. C’est même la première "
  +"raison pour laquelle les gens arrêtent au bout de trois semaines.",
  "Règle de la maison"],
 ["Il faut boire trois litres d’eau",
  "Ça dépend de ton corps, de la chaleur et de ce que tu manges. Le bon repère est simple : des "
  +"urines claires, jamais soif. À Mayotte, la chaleur change tout — bois plus que tu ne le crois.",
  "Repère de vie courante"],
 ["Le détox",
  "Ton foie et tes reins font le travail, gratuitement, vingt-quatre heures sur vingt-quatre. "
  +"Aucun produit ne les remplace ni ne les « nettoie ».",
  "Règle de la maison"],
 ["Le sport, c’est pour les jeunes",
  "C’est le mensonge qui coûte le plus cher. Ce qui change avec l’âge, ce sont les hormones et la "
  +"récupération — pas le besoin de bouger. On ralentit, on ne s’arrête pas.",
  "Irvine K — « Comment BOOSTER sa perte de poids après 30 ans »"],
 ["Manger le soir fait grossir",
  "Ce n’est pas l’heure qui décide : c’est la quantité et la qualité. En revanche, un dîner lourd "
  +"abîme vraiment ton sommeil — et là, ça compte.",
  "Nuance de la maison"],
 ["Il faut une heure de sport pour que ça compte",
  "Dix minutes régulières battent une heure une fois par mois. La régularité n’est pas une "
  +"consolation : c’est la seule chose qui marche vraiment.",
  "Règle de la maison"],
 ["Un complément fera le travail",
  "Il en a fait une vidéo entière : compléments sous-dosés, études détournées pour donner un air "
  +"scientifique, et sentiment d’urgence pour vendre. Ici, il n’y a rien à vendre.",
  "Irvine K — « La Manipulation des influenceurs »"]
];

/* -----------------------------------------------------------------------
   5. LES SOURCES (le crédit, en clair)
   ----------------------------------------------------------------------- */
var SOURCES_VIDEOS = [
 ["La Perte de gras Expliquée — la vérité cachée par l’industrie","DQtY5Nyn6r0","insuline, mitochondries"],
 ["Comment vraiment Perdre son VENTRE / P1 : le foie","9nFsSIghnio","foie, fructose, hormones"],
 ["Meilleur cardio, perte de poids après 40 ans (Podcast 3)","1UogdYYFXRs","tissu graisseux, aromatase"],
 ["Tout sur les glucides, inflammation, FODMAP (Podcast 2)","hMx4x4foS20","cortisol, axe HPA"],
 ["Perte de poids, prise de muscle (Podcast 1)","GN4H-ViXuyM","cortisol et muscle"],
 ["Perte de poids — Stress oxydatif — Mitochondries","acY6U9R2hdA","mitochondries, oméga-3"],
 ["Comment se désintoxiquer du Sucre","Fehrfs416jw","dopamine, accoutumance"],
 ["J’ai perdu 40 kg en 90 jours","m2YF01i1vzw","âge, thyroïde, hormone de croissance"],
 ["Cycle menstruel, périménopause, ménopause","71ZcpBFYI00","corps féminin, œstrogènes, LPL"],
 ["Le SECRET sur la PRISE DE MUSCLE","tgCtRL6KoLc","muscle, testostérone, IGF-1"]
];

/* -----------------------------------------------------------------------
   6. L’ÉTAT DES HABITUDES (rien ne quitte le téléphone)
   ----------------------------------------------------------------------- */
var HAB = [
 ["boire","💧","Boire de l’eau, pas de boisson sucrée"],
 ["marche","🚶","20 minutes de marche"],
 ["assiette","🍛","Une assiette en trois zones"],
 ["ecran","📵","Une heure sans écran avant de dormir"],
 ["resp","🌬","Cinq respirations lentes"]
];

function habitudesJour(){
  if(!etat.habitudes){ etat.habitudes = {}; }
  var j = aujourdhui();
  if(!etat.habitudes[j]){ etat.habitudes[j] = []; }
  return etat.habitudes[j];
}
function basculeHabitude(k){
  var l = habitudesJour(), out = [], i, dedans = false;
  for(i=0;i<l.length;i++){ if(l[i]===k){ dedans = true; } else { out.push(l[i]); } }
  if(!dedans){ out.push(k); }
  etat.habitudes[aujourdhui()] = out;
  sauver(); dessiner();
}
function habitudesFaitesAujourdhui(){
  var l = habitudesJour(); return l.length;
}
function serieHabitudes(nbJours){
  /* nombre de jours consécutifs (en finissant par aujourd’hui) avec au moins 3 habitudes */
  var n=0, d=new Date(), i;
  for(i=0;i<nbJours;i++){
    var iso = jourISO(d);
    var l = (etat.habitudes && etat.habitudes[iso]) ? etat.habitudes[iso].length : 0;
    if(l>=3){ n=n+1; } else if(i>0 || l>0){ break; } /* aujourd’hui incomplet : on continue */
    d.setDate(d.getDate()-1);
  }
  return n;
}

/* -----------------------------------------------------------------------
   7. LES ÉCRANS
   ----------------------------------------------------------------------- */
function sousTitreEditeur(){
  return "<p class=\"sous\">Tout cela vient de quelque part. Chaque explication porte son crédit — "
       + "nom de la vidéo et minutage. Rien n’est repris comme si c’était de nous.</p>";
}

function hubSavoir(){
  return "<div class=\"card\"><div class=\"pill\" style=\"margin:0\">SAVOIR</div>"
   + "<h3 style=\"margin:12px 0 4px\">Comprendre, et manger juste</h3>"
   + "<p class=\"sous\">Bouger, c’est la moitié. L’autre moitié, c’est de comprendre : "
   + AXES.length + " mécanismes expliqués (insuline, foie, cortisol, œstrogènes, "
   + "mitochondries…), six blocs pour l’assiette, le souffle, et huit mensonges démontés. "
   + "Chaque explication porte sa source.</p>"
   + "<div style=\"margin-top:14px\"><button class=\"btn g\" onclick=\"ouvrirEcran(&#39;sav&#39;)\">"
   + "Ouvrir « Savoir »</button></div></div>";
}

function ecranSavoir(){
  var h = "<h2 class=\"sect\" style=\"margin-top:18px\">Savoir</h2>" + sousTitreEditeur();

  h += "<div class=\"card\"><div class=\"pill\" style=\"margin:0\">COMPRENDRE MON CORPS</div>"
     + "<h3 style=\"margin:12px 0 4px\">Les "+AXES.length+" explications</h3>"
     + "<p class=\"sous\">Insuline, foie, cortisol, œstrogènes, mitochondries… Pourquoi ton corps "
     + "fait ce qu’il fait. Un détail à la fois.</p>";
  for(var i=0;i<AXES.length;i++){
    var a = AXES[i];
    h += "<div class=\"bib\" onclick=\"ouvrirAxe(&#39;"+a.id+"&#39;)\">"
       + "<div class=\"g\" style=\"background:var(--or)\"></div>"
       + "<div style=\"flex:1;min-width:0\"><b>"+a.n+"</b><span>"+a.court+"</span></div>"
       + "<div class=\"chev\">›</div></div>";
  }
  h += "</div>";

  h += "<div class=\"card\"><div class=\"pill\" style=\"margin:0\">MANGER JUSTE</div>"
     + "<h3 style=\"margin:12px 0 4px\">Six blocs pratiques</h3>"
     + "<p class=\"sous\">Boissons, assiette, étiquettes, protéines d’ici, journée type, "
     + "remplacements. Rien d’interdit : des remplacements.</p>"
     + "<div style=\"margin-top:14px\"><button class=\"btn g\" onclick=\"ouvrirEcran(&#39;man&#39;)\">"
     + "Ouvrir « Manger juste »</button></div></div>";

  h += "<div class=\"card\"><div class=\"pill\" style=\"margin:0\">RESPIRER &amp; DORMIR</div>"
     + "<h3 style=\"margin:12px 0 4px\">Le souffle, et la nuit</h3>"
     + "<p class=\"sous\">La moitié du travail dont personne ne parle. Un exercice guidé de "
     + "respiration, et six gestes pour la nuit.</p>"
     + "<div style=\"margin-top:14px\"><button class=\"btn ghost\" onclick=\"ouvrirEcran(&#39;resp&#39;)\">"
     + "Ouvrir « Respirer &amp; dormir »</button></div></div>";

  h += "<div class=\"card\"><div class=\"pill\" style=\"margin:0\">LES MENSONGES</div>"
     + "<h3 style=\"margin:12px 0 4px\">Huit choses qu’on te répète</h3>"
     + "<p class=\"sous\">Et qui sont fausses. Y compris quand ça nous arrange.</p>"
     + "<div style=\"margin-top:14px\"><button class=\"btn ghost\" onclick=\"ouvrirEcran(&#39;men&#39;)\">"
     + "Ouvrir « Les mensonges »</button></div></div>";

  h += "<div class=\"card\"><div class=\"pill\" style=\"margin:0\">SOURCES &amp; CRÉDITS</div>"
     + "<h3 style=\"margin:12px 0 4px\">D’où viennent ces explications</h3>"
     + "<p class=\"sous\">Les dix vidéos utilisées, la façon dont elles sont créditées, "
     + "et ce que cette application ne fera jamais.</p>"
     + "<div style=\"margin-top:14px\"><button class=\"btn ghost\" onclick=\"ouvrirEcran(&#39;src&#39;)\">"
     + "Voir les sources</button></div></div>";

  h += "<div class=\"card\"><div class=\"pill\" style=\"margin:0\">MA JOURNÉE</div>"
     + "<h3 style=\"margin:12px 0 4px\">Cinq habitudes, pas plus</h3>"
     + "<p class=\"sous\">De l’eau, marcher, l’assiette, la nuit, le souffle. "
     + "À cocher en deux secondes, chaque jour.</p>";
  h += habitudesBloc(true);
  h += "</div>";
  return h;
}

function habitudesBloc(complet){
  var h = "", l = habitudesJour(), i, j, on;
  h += "<div id=\"habitudes\" style=\"margin-top:8px\">";
  for(i=0;i<HAB.length;i++){
    on = false;
    for(j=0;j<l.length;j++){ if(l[j]===HAB[i][0]){ on = true; } }
    h += "<div class=\"chk"+(on?" on":"")+"\" onclick=\"basculeHabitude(&#39;"+HAB[i][0]+"&#39;)\">"
       + "<div class=\"bx\">"+(on?"✓":"")+"</div>"
       + "<div class=\"lb\"><b>"+HAB[i][1]+" "+HAB[i][2]+"</b></div></div>";
  }
  h += "</div>";
  h += "<p class=\"sous\" style=\"margin-top:10px\">" + l.length + " sur " + HAB.length
     + " aujourd’hui · " + serieHabitudes(60) + " jour(s) d’affilée avec au moins trois habitudes.</p>";
  if(complet){
    h += "<div class=\"cal\" style=\"margin-top:10px\">";
    var d = new Date();
    for(i=13;i>=0;i--){
      var dd = new Date(); dd.setDate(d.getDate()-i);
      var iso = jourISO(dd);
      var n = (etat.habitudes && etat.habitudes[iso]) ? etat.habitudes[iso].length : 0;
      var cls = n>=3 ? "j fait" : (n>0 ? "j aufait" : "j");
      h += "<div class=\""+cls+"\">"+dd.getDate()+"</div>";
    }
    h += "</div>";
    h += "<p class=\"sous\">Les quatorze derniers jours. Trois habitudes sur cinq = la journée compte.";
  }
  return h;
}

function ouvrirEcran(id){ onglet = id; dessiner(); window.scrollTo(0,0); }
function ouvrirAxe(id){ axeOuvert = id; onglet = "axe"; dessiner(); window.scrollTo(0,0); }

function blocSource(src){
  var h = "";
  for(var i=0;i<src.length;i++){
    var s = src[i];
    h += "<div class=\"srcbloc\">"
       + "<div class=\"src-t\">Source — Irvine K</div>"
       + "<div class=\"src-v\">"+s.v+"</div>"
       + "<div class=\"src-c\">"+s.c+"</div>"
       + "<div class=\"src-m\">à "+s.t+" · youtube.com/watch?v="+s.id+"</div>"
       + "</div>";
  }
  return h;
}
function retourSavoir(){
  return "<div style=\"margin-top:18px\"><button class=\"btn ghost\" onclick=\"ouvrirEcran(&#39;sav&#39;)\">"
       + "‹ Retour à Savoir</button></div>";
}

function ecranAxe(){
  var a = axeById(axeOuvert);
  if(!a){ return ecranSavoir(); }
  var h = "<h2 class=\"sect\" style=\"margin-top:18px\">"+a.em+" "+a.n+"</h2>"
        + "<p class=\"sous\">"+a.court+"</p><div class=\"card\">";
  for(var i=0;i<a.p.length;i++){ h += "<p>"+a.p[i]+"</p>"; }
  h += "</div>";
  h += "<div class=\"card\"><h3 style=\"margin-top:0\">À retenir</h3>";
  for(i=0;i<a.r.length;i++){
    h += "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>"+a.r[i]+"</b></div></div>";
  }
  h += "</div>";
  if(a.note){ h += "<div class=\"note rouge\">"+a.note+"</div>"; }
  h += blocSource(a.src);
  h += "<div class=\"note\">Ce que tu viens de lire explique un mécanisme. Ce n’est ni un "
     + "diagnostic, ni une ordonnance. Pour ta situation : ton médecin, ton pharmacien ou "
     + "ta sage-femme.</div>";
  h += retourSavoir();
  return h;
}

function ecranManger(){
  var h = "<h2 class=\"sect\" style=\"margin-top:18px\">🥗 Manger juste</h2>"
        + "<p class=\"sous\">Pas un régime. Des remplacements, et un ordre dans la journée.</p>";
  for(var i=0;i<MANGER.length;i++){
    var b = MANGER[i];
    h += "<div class=\"card\"><h3 style=\"margin-top:0\">"+b.em+" "+b.n+"</h3>";
    for(var j=0;j<b.p.length;j++){ h += "<p>"+b.p[j]+"</p>"; }
    h += "<div style=\"margin-top:6px\">";
    for(j=0;j<b.li.length;j++){
      h += "<div class=\"prom\"><div class=\"k\">•</div><div class=\"v\"><b>"+b.li[j]+"</b></div></div>";
    }
    h += "</div><p class=\"src-m\" style=\"margin-top:10px\">"+b.src+"</p></div>";
  }
  h += "<div class=\"note or\">Rien n’est interdit ici. Un aliment qu’on s’interdit revient "
     + "toujours ; un aliment qu’on remplace, on l’oublie.</div>";
  h += retourSavoir();
  return h;
}

function ecranMensonges(){
  var h = "<h2 class=\"sect\" style=\"margin-top:18px\">🔍 Les mensonges</h2>"
        + "<p class=\"sous\">Huit phrases qu’on entend partout. On les démonte — et on dit "
        + "d’où vient la correction.</p>";
  for(var i=0;i<MENSONGES.length;i++){
    var m = MENSONGES[i];
    h += "<div class=\"card\"><div class=\"pill\" style=\"margin:0\">MENSONGE N°"+(i+1)+"</div>"
       + "<h3 style=\"margin:10px 0 6px\">« "+m[0]+" »</h3>"
       + "<p>"+m[1]+"</p>"
       + "<p class=\"src-m\">"+m[2]+"</p></div>";
  }
  h += retourSavoir();
  return h;
}

function ecranSources(){
  var h = "<h2 class=\"sect\" style=\"margin-top:18px\">📚 Sources &amp; crédits</h2>"
        + "<p class=\"sous\">Cette application s’appuie sur le travail d’Irvine K — chaîne "
        + "« Plus jamais gros ». Il n’est ni associé à ce projet, ni consulté : c’est sa chaîne "
        + "qui est citée, jamais son travail repris comme le nôtre.</p>";

  h += "<div class=\"card\"><h3 style=\"margin-top:0\">Comment il est crédité</h3>"
     + "<div class=\"prom\"><div class=\"k\">1</div><div class=\"v\"><b>Nom de la vidéo</b>"
     + "<span>Dans chaque explication, ici même dans l’application</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">2</div><div class=\"v\"><b>Minutage précis</b>"
     + "<span>Pour que tu puisses aller vérifier toi-même</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">3</div><div class=\"v\"><b>Ses mots entre guillemets</b>"
     + "<span>Quand on le cite, c’est lui qui parle</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">4</div><div class=\"v\"><b>Un renvoi vers sa chaîne</b>"
     + "<span>Pour que les gens aillent à la source, pas chez nous</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">5</div><div class=\"v\"><b>Jamais ses images, jamais sa voix</b>"
     + "<span>Aucun extrait de ses vidéos n’est utilisé</span></div></div>"
     + "</div>";

  h += "<div class=\"card\"><h3 style=\"margin-top:0\">Les vidéos utilisées</h3>";
  for(var i=0;i<SOURCES_VIDEOS.length;i++){
    h += "<div class=\"bib\"><div class=\"g\" style=\"background:var(--em)\"></div>"
       + "<div style=\"flex:1;min-width:0\"><b>"+SOURCES_VIDEOS[i][0]+"</b>"
       + "<span>"+SOURCES_VIDEOS[i][2]+" · youtube.com/watch?v="+SOURCES_VIDEOS[i][1]+"</span></div></div>";
  }
  h += "<p class=\"sous\" style=\"margin-top:12px\">Chaîne à retrouver sur YouTube, en tapant : "
     + "<b>Irvine K - Plus jamais gros</b>.</p></div>";

  h += "<div class=\"card\"><h3 style=\"margin-top:0\">Ce que cette application ne fera jamais</h3>"
     + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucun poids promis, aucun avant-après</b>"
     + "<span>On ne parle pas de kilos ici, on parle de durer</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucun conseil médical</b>"
     + "<span>Un symptôme, une maladie, une grossesse : on renvoie au médecin</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucun produit, aucune vente</b>"
     + "<span>Ni complément, ni programme payant, ni publicité</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucun chiffre inventé</b>"
     + "<span>Soit c’est cité et sourcé, soit on se tait</span></div></div>"
     + "</div>";

  h += "<div class=\"note or\"><b>Où sont les limites.</b> Irvine K est coach, pas médecin — et "
     + "nous non plus. Certaines de ses images sont volontairement fortes (« poison ») : on garde le "
     + "mécanisme, on laisse le mot. Certains de ses chiffres sont sa lecture des choses : quand on "
     + "n’a pas de source publique pour les vérifier, on te le dit au lieu de les répéter.</div>";
  h += retourSavoir();
  return h;
}

/* -----------------------------------------------------------------------
   8. LE SOUFFLE — exercice guidé 3 · 5 · 7
   ----------------------------------------------------------------------- */
var resp = { actif:false, phase:0, reste:0, cycles:0, minuterie:null, total:5 };
var PHASES = [["Inspire",3,"#17B8A6"], ["Retiens",5,"#E3B25C"], ["Expire",7,"#7FA6D8"]];

function ecranRespiration(){
  var h = "<h2 class=\"sect\" style=\"margin-top:18px\">🌬 Le souffle</h2>"
        + "<p class=\"sous\">3 · 5 · 7 — trois temps pour inspirer, cinq pour retenir, sept pour "
        + "souffler. Deux minutes, et ton corps redescend.</p>";
  h += "<div class=\"card\" id=\"respzone\">" + zoneResp() + "</div>";
  h += "<div class=\"card\"><h3 style=\"margin-top:0\">Pourquoi ça marche</h3>"
     + "<p>Souffler plus longtemps qu’on n’inspire ralentit le cœur et fait baisser la tension du "
     + "corps. Le soir avant de dormir, après une journée de tension, ou juste après une séance : "
     + "c’est le geste le plus court de toute l’application, et l’un des plus utiles.</p>"
     + "<p class=\"src-m\">Mécanisme du souffle lent. Rappel de la maison : ce n’est pas de la "
     + "spiritualité, c’est de la physiologie — les deux peuvent se faire en même temps.</p></div>";
  h += "<div class=\"card\"><h3 style=\"margin-top:0\">Les six gestes de la nuit</h3>";
  for(var i=0;i<SOMMEIL.length;i++){
    h += "<div class=\"prom\"><div class=\"k\">•</div><div class=\"v\"><b>"
       + SOMMEIL[i][0]+" "+SOMMEIL[i][1]+"</b><span>"+SOMMEIL[i][2]+"</span></div></div>";
  }
  h += "</div>";
  h += "<div class=\"card\"><h3 style=\"margin-top:0\">Dix minutes après le repas</h3>"
     + "<p>La marche d’après-repas est peut-être le meilleur moment de la journée pour bouger : "
     + "c’est court, ça ne demande aucun équipement, et ça tombe pile au moment où ton corps "
     + "traite ce que tu viens de manger.</p></div>";
  h += retourSavoir();
  return h;
}
function zoneResp(){
  if(resp.actif){
    var ph = PHASES[resp.phase];
    return "<div class=\"respwrap\">"
         + "<div class=\"respcircle\" style=\"border-color:"+ph[2]+";box-shadow:0 0 60px "+ph[2]+"44;"
         + "transform:scale("+(resp.phase===1?1.06:0.92)+");\">"
         + "<span class=\"respbig\" style=\"color:"+ph[2]+"\">"+resp.reste+"</span>"
         + "<span class=\"resplab\">"+ph[0]+"</span></div>"
         + "<div class=\"respsub\">Cycle "+(resp.cycles+1)+" sur "+resp.total+"</div>"
         + "<div style=\"margin-top:16px\"><button class=\"btn ghost\" onclick=\"respStop()\">Arrêter</button></div>"
         + "</div>";
  }
  return "<div class=\"respwrap\">"
       + "<div class=\"respcircle\" style=\"border-color:var(--em)\">"
       + "<span class=\"respbig\" style=\"color:var(--em)\">3·5·7</span></div>"
       + "<p class=\"sous\" style=\"max-width:340px;margin:14px auto 0\">Cinq cycles, soit un peu "
       + "plus d’une minute. Assis, dos droit, épaules relâchées.</p>"
       + "<div style=\"margin-top:16px\"><button class=\"btn g\" onclick=\"respStart()\">Commencer</button></div>"
       + "</div>";
}
function respStart(){
  resp.actif = true; resp.phase = 0; resp.reste = PHASES[0][1]; resp.cycles = 0;
  if(resp.minuterie){ clearInterval(resp.minuterie); }
  resp.minuterie = setInterval(respTic, 1000);
  rafraichirResp();
}
function respStop(){
  resp.actif = false;
  if(resp.minuterie){ clearInterval(resp.minuterie); resp.minuterie = null; }
  rafraichirResp();
}
function respTic(){
  resp.reste = resp.reste - 1;
  if(resp.reste <= 0){
    resp.phase = resp.phase + 1;
    if(resp.phase > 2){ resp.phase = 0; resp.cycles = resp.cycles + 1; }
    if(resp.cycles >= resp.total){
      resp.actif = false;
      if(resp.minuterie){ clearInterval(resp.minuterie); resp.minuterie = null; }
      var z = document.getElementById("respzone");
      if(z){
        z.innerHTML = "<div class=\"respwrap\"><div class=\"respbig\" style=\"color:var(--or2)\">✓</div>"
          + "<div class=\"resplab\">Terminé</div><p class=\"sous\" style=\"max-width:340px;margin:10px auto 0\">"
          + "Cinq cycles. C’est fait, et ça compte.</p>"
          + "<div style=\"margin-top:16px\"><button class=\"btn ghost\" onclick=\"rafraichirResp(true)\">"
          + "Recommencer</button></div></div>";
      }
      return;
    }
    resp.reste = PHASES[resp.phase][1];
    if(navigator.vibrate){ try{ navigator.vibrate(60); }catch(e){} }
  }
  rafraichirResp();
}
function rafraichirResp(recharger){
  var z = document.getElementById("respzone");
  if(!z){ return; }
  if(recharger){ resp.actif=false; resp.cycles=0; resp.phase=0; resp.reste=0; }
  z.innerHTML = zoneResp();
}
