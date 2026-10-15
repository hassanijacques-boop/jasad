/* JASAD — جسد · application de sport gratuite
   Tout tient dans ce fichier. Aucune donnée ne quitte le téléphone.
   Style volontairement ancien (var / function) : fonctionne partout. */

/* =======================================================================
   1. LES CONTRE-INDICATIONS
   ======================================================================= */
var CI = [
  ["dos",       "Dos fragile ou douloureux",     "On écarte les mouvements qui arrondissent le dos"],
  ["genoux",    "Genoux fragiles",               "On écarte les appuis et les sauts"],
  ["epaules",   "Épaules fragiles",              "On écarte les appuis sur les bras"],
  ["poignets",  "Poignets fragiles",             "On écarte les appuis sur les mains"],
  ["grossesse", "Grossesse",                     "On écarte les positions allongées sur le ventre"],
  ["coeur",     "Souffle court / cœur",          "On écarte les efforts intenses et les sauts"]
];

/* =======================================================================
   2. LA BIBLIOTHÈQUE D’EXERCICES
   ms : sec = en secondes · rep = en répétitions
   ci : contre-indications · al : version plus facile
   ======================================================================= */
var GR = [
  ["jg","Jambes","#17B8A6"],
  ["gn","Gainage","#E3B25C"],
  ["hc","Haut du corps","#D0664F"],
  ["dp","Dos & posture","#7FA8E8"],
  ["cd","Cardio","#4BC48A"],
  ["et","Étirements","#B78BE0"]
];

var EX = [
/* ---- JAMBES ---- */
{id:"squat-pdc",nom:"Squat au poids du corps",gr:"jg",niv:1,ms:"rep",v:12,se:3,rp:30,
 pos:"Debout, pieds écartés à la largeur du bassin, bras tendus devant toi.",
 ge:"Pousse les fesses vers l’arrière et descends comme pour t’asseoir. Descends jusqu’où tu peux sans que le dos s’arrondisse, puis remonte en poussant dans le sol.",
 er:"Ne laisse pas les genoux rentrer vers l’intérieur et ne descends pas plus bas que ce que ton dos supporte.",
 so:"Inspire en descendant, souffle en remontant.",
 ci:["genoux","dos"],al:"squat-chaise"},
{id:"squat-chaise",nom:"Squat sur chaise",gr:"jg",niv:1,ms:"rep",v:12,se:3,rp:30,
 pos:"Dos à une chaise, pieds à la largeur du bassin, bras devant.",
 ge:"Descends jusqu’à effleurer l’assise, marque un temps d’arrêt, puis remonte lentement. La chaise sert de repère, pas de siège.",
 er:"Ne t’assieds pas complètement : on effleure et on remonte.",
 so:"Inspire en descendant, souffle en remontant.",
 ci:[],al:null},
{id:"fente-avant",nom:"Fente avant alternée",gr:"jg",niv:2,ms:"rep",v:10,se:3,rp:40,
 pos:"Debout, pieds joints, mains sur les hanches.",
 ge:"Fais un grand pas en avant, descends le genou arrière vers le sol, puis reviens. Alterne les jambes. Si l’équilibre est difficile, tiens-toi au mur d’une main.",
 er:"Le genou avant ne doit pas dépasser la pointe du pied.",
 so:"Inspire en descendant, souffle en remontant.",
 ci:["genoux"],al:"squat-chaise"},
{id:"montee-chaise",nom:"Montée sur chaise",gr:"jg",niv:1,ms:"rep",v:12,se:3,rp:35,
 pos:"Face à un marchepied ou une chaise stable, mains sur les hanches ou au mur.",
 ge:"Monte un pied sur la chaise, pousse pour te redresser, redescends lentement. Alterne le pied qui monte.",
 er:"Ne t’aide pas de la jambe arrière pour te lancer.",
 so:"Souffle en montant, inspire en descendant.",
 ci:["genoux"],al:"squat-chaise"},
{id:"pont-fessier",nom:"Pont fessier au sol",gr:"jg",niv:1,ms:"rep",v:15,se:3,rp:35,
 pos:"Allongé sur le dos, genoux pliés, pieds à plat, bras le long du corps.",
 ge:"Pousse dans les talons pour décoller le bassin, serre les fessiers en haut, marque un temps, puis redescends lentement.",
 er:"Ne creuse pas les lombaires : monte jusqu’à ce que le corps forme une ligne.",
 so:"Inspire en bas, souffle en montant.",
 ci:["grossesse"],al:"dead-bug"},
{id:"chaise-mur",nom:"Chaise contre le mur",gr:"jg",niv:1,ms:"sec",v:30,se:3,rp:40,
 pos:"Dos plaqué contre un mur, pieds avancés, genoux pliés.",
 ge:"Glisse le long du mur jusqu’à former un angle confortable et tiens la position. Les genoux restent au-dessus des chevilles.",
 er:"Ne descends pas trop bas : c’est la tenue qui compte, pas la profondeur.",
 so:"Respire lentement et régulièrement.",
 ci:["genoux"],al:"squat-chaise"},
{id:"squat-saute",nom:"Squat sauté",gr:"jg",niv:3,ms:"rep",v:10,se:3,rp:45,
 pos:"Debout, pieds largeur de bassin.",
 ge:"Descends en squat, puis pousse fort pour décoller. Amortis la réception en repliant les genoux.",
 er:"Ne réceptionne jamais jambes tendues, et fais silence : c’est le signe d’une bonne réception.",
 so:"Souffle pendant l’effort.",
 ci:["genoux","coeur","grossesse"],al:"squat-pdc"},

/* ---- GAINAGE ---- */
{id:"planche",nom:"Planche sur les avant-bras",gr:"gn",niv:2,ms:"sec",v:25,se:3,rp:40,
 pos:"Sur les avant-bras et les pointes de pieds, coudes sous les épaules.",
 ge:"Serre les fessiers et le ventre, comme si tu voulais rapprocher le nombril de la colonne. Tiens sans bouger.",
 er:"Ne laisse pas le bassin tomber ni monter : le corps reste une planche.",
 so:"Respire calmement, sans bloquer.",
 ci:["dos","epaules","poignets","grossesse"],al:"planche-genoux"},
{id:"planche-genoux",nom:"Planche sur les genoux",gr:"gn",niv:1,ms:"sec",v:25,se:3,rp:35,
 pos:"Sur les avant-bras et les genoux, coudes sous les épaules.",
 ge:"Aligne les épaules, le bassin et les genoux. Serre le ventre et tiens.",
 er:"Ne creuse pas le bas du dos.",
 so:"Respire calmement.",
 ci:["grossesse"],al:null},
{id:"gainage-lateral",nom:"Gainage latéral",gr:"gn",niv:2,ms:"sec",v:20,se:3,rp:35,
 pos:"Allongé sur le côté, appui sur l’avant-bras, pieds l’un sur l’autre.",
 ge:"Décolle le bassin et tiens le corps aligné. Puis change de côté.",
 er:"Ne laisse pas le bassin partir vers l’arrière.",
 so:"Respire régulièrement.",
 ci:["epaules","poignets","grossesse"],al:"planche-genoux"},
{id:"superman",nom:"Superman au sol",gr:"dp",niv:1,ms:"rep",v:12,se:3,rp:30,
 pos:"Allongé sur le ventre, bras tendus devant, front au sol.",
 ge:"Décolle en même temps un bras et la jambe opposée, tiens deux secondes, puis change. Le mouvement vient du dos, pas des jambes.",
 er:"Ne lève pas la tête en arrière : le regard reste vers le sol.",
 so:"Souffle en montant.",
 ci:["dos","grossesse"],al:"chat-vache"},
{id:"dead-bug",nom:"Allongé, bras et jambes opposés",gr:"gn",niv:1,ms:"rep",v:10,se:3,rp:30,
 pos:"Allongé sur le dos, bras tendus vers le plafond, genoux pliés à angle droit.",
 ge:"Tends lentement le bras droit et la jambe gauche vers le sol, sans toucher, puis reviens. Alterne.",
 er:"Le bas du dos reste collé au sol pendant tout le mouvement.",
 so:"Souffle en tendant.",
 ci:["grossesse"],al:null},
{id:"reverse-crunch",nom:"Bassin décollé, jambes pliées",gr:"gn",niv:2,ms:"rep",v:12,se:3,rp:35,
 pos:"Allongé sur le dos, genoux pliés vers la poitrine, bras le long du corps.",
 ge:"Décolle le bassin du sol en ramenant les genoux vers la poitrine, puis redescends lentement sans poser les pieds.",
 er:"Ne balance pas les jambes : le mouvement est lent et contrôlé.",
 so:"Souffle en ramenant les genoux.",
 ci:["dos","grossesse"],al:"dead-bug"},

/* ---- HAUT DU CORPS ---- */
{id:"pompes-mur",nom:"Pompes contre le mur",gr:"hc",niv:1,ms:"rep",v:12,se:3,rp:30,
 pos:"Debout face au mur, mains à hauteur des épaules, un pas en arrière.",
 ge:"Plie les coudes pour rapprocher la poitrine du mur, puis pousse pour revenir.",
 er:"Ne laisse pas les coudes s’ouvrir complètement sur les côtés.",
 so:"Inspire en descendant près du mur, souffle en poussant.",
 ci:[],al:null},
{id:"pompes-genoux",nom:"Pompes sur les genoux",gr:"hc",niv:1,ms:"rep",v:8,se:3,rp:40,
 pos:"Appui sur les genoux et les mains, mains un peu plus larges que les épaules.",
 ge:"Descends la poitrine vers le sol en pliant les coudes, puis pousse pour remonter. Le corps reste aligné des genoux à la tête.",
 er:"Ne laisse pas le bas du dos s’affaisser.",
 so:"Inspire en descendant, souffle en poussant.",
 ci:["poignets","epaules"],al:"pompes-mur"},
{id:"pompes-classiques",nom:"Pompes classiques",gr:"hc",niv:2,ms:"rep",v:10,se:3,rp:45,
 pos:"Sur les mains et les pointes de pieds, corps aligné.",
 ge:"Descends jusqu’à frôler le sol, coudes à 45 degrés du corps, puis pousse.",
 er:"Ne remonte pas les fesses en premier : le corps monte d’un seul bloc.",
 so:"Inspire en descendant, souffle en poussant.",
 ci:["poignets","epaules"],al:"pompes-genoux"},
{id:"pompes-inclinees",nom:"Pompes appuyées sur une chaise",gr:"hc",niv:1,ms:"rep",v:10,se:3,rp:35,
 pos:"Mains sur le bord d’une chaise stable, pieds reculés, corps aligné.",
 ge:"Descends la poitrine vers le bord de la chaise, puis pousse.",
 er:"Ne laisse pas les hanches monter.",
 so:"Inspire en descendant, souffle en poussant.",
 ci:["poignets"],al:"pompes-mur"},
{id:"dips-chaise",nom:"Dips sur le bord d’une chaise",gr:"hc",niv:2,ms:"rep",v:10,se:3,rp:40,
 pos:"Mains au bord de la chaise derrière toi, jambes tendues devant, dos proche du bord.",
 ge:"Descends le bassin vers le sol en pliant les coudes, puis pousse pour remonter.",
 er:"Ne descends pas trop bas si les épaules tirent : arrête à l’angle droit.",
 so:"Inspire en descendant, souffle en poussant.",
 ci:["epaules","poignets"],al:"pompes-inclinees"},
{id:"tirage-serviette",nom:"Tirage du dos avec une serviette",gr:"dp",niv:1,ms:"rep",v:12,se:3,rp:35,
 pos:"Assis ou debout, tiens une serviette tendue entre les deux mains, bras tendus devant toi.",
 ge:"Tire la serviette vers ta poitrine en serrant les omoplates l’une vers l’autre, puis relâche lentement.",
 er:"Ne hausse pas les épaules vers les oreilles.",
 so:"Souffle en tirant.",
 ci:[],al:null},

/* ---- DOS & POSTURE ---- */
{id:"chat-vache",nom:"Chat-vache (mobilité du dos)",gr:"dp",niv:1,ms:"rep",v:10,se:2,rp:20,
 pos:"À quatre pattes, mains sous les épaules, genoux sous les hanches.",
 ge:"Arrondis le dos en rentrant le menton, puis creuse doucement en regardant devant. Le mouvement est lent et lié à la respiration.",
 er:"Ne force jamais : c’est un mouvement de déroulement, pas d’étirement maximal.",
 so:"Arrondis en soufflant, creuse en inspirant.",
 ci:[],al:null},
{id:"extension-dos",nom:"Extension du dos allongé",gr:"dp",niv:1,ms:"rep",v:12,se:3,rp:30,
 pos:"Allongé sur le ventre, mains près des épaules, jambes tendues.",
 ge:"Décolle doucement la tête et le haut de la poitrine en gardant le regard vers le sol, tiens deux secondes, redescends.",
 er:"Ne pousse pas sur les mains pour te relever en arrière.",
 so:"Souffle en montant.",
 ci:["dos","grossesse"],al:"chat-vache"},
{id:"rotation-thoracique",nom:"Rotation du haut du dos",gr:"dp",niv:1,ms:"rep",v:8,se:2,rp:20,
 pos:"Allongé sur le côté, genoux pliés, bras tendus devant toi l’un sur l’autre.",
 ge:"Fais glisser le bras du dessus vers l’arrière en tournant la poitrine, suis le mouvement du regard, puis reviens.",
 er:"Garde les genoux serrés et solidaires : seule la poitrine tourne.",
 so:"Souffle à l’ouverture, inspire au retour.",
 ci:["epaules"],al:"chat-vache"},
{id:"etirement-ischio",nom:"Étirement arrière des cuisses, assis",gr:"et",niv:1,ms:"sec",v:30,se:2,rp:15,
 pos:"Assis au sol, une jambe tendue, l’autre pliée.",
 ge:"Penche le buste vers la jambe tendue en gardant le dos droit. Tiens, puis change de côté.",
 er:"Ne cherche pas à attraper le pied : c’est la position du dos qui compte.",
 so:"Respire profondément et relâche à chaque expiration.",
 ci:[],al:null},

/* ---- CARDIO ---- */
{id:"marche-place",nom:"Marche sur place",gr:"cd",niv:1,ms:"sec",v:60,se:1,rp:15,
 pos:"Debout, dos droit.",
 ge:"Marche sur place en levant bien les genoux, bras qui accompagnent. Tu dois pouvoir parler en même temps.",
 er:"Ne bloque pas ta respiration.",
 so:"Respire par le nez.",
 ci:[],al:null},
{id:"talons-fesses",nom:"Talons aux fesses",gr:"cd",niv:1,ms:"sec",v:30,se:2,rp:25,
 pos:"Debout, debout sur place.",
 ge:"Ramène les talons vers les fesses, une jambe après l’autre, sans forcer. Reste léger.",
 er:"Ne te penche pas en avant.",
 so:"Respire régulièrement.",
 ci:["genoux"],al:"marche-place"},
{id:"montees-genoux",nom:"Montées de genoux",gr:"cd",niv:2,ms:"sec",v:30,se:3,rp:30,
 pos:"Debout, pieds largeur de bassin.",
 ge:"Monte le genou droit vers la poitrine, puis le gauche, à un rythme que tu peux tenir.",
 er:"Ne ralentis pas en te cassant en deux : le buste reste droit.",
 so:"Respire sur un rythme régulier.",
 ci:["genoux","coeur"],al:"marche-place"},
{id:"pas-chasses",nom:"Pas chassés",gr:"cd",niv:2,ms:"sec",v:30,se:3,rp:30,
 pos:"Debout, genoux légèrement fléchis.",
 ge:"Déplace-toi d’un côté puis de l’autre par petits pas latéraux rapides. Le buste reste bas et stable.",
 er:"Ne saute pas : les pieds restent proches du sol.",
 so:"Respire régulièrement.",
 ci:["genoux","coeur"],al:"marche-place"},
{id:"jumping-jacks",nom:"Sauts écartés",gr:"cd",niv:2,ms:"sec",v:30,se:3,rp:30,
 pos:"Debout, pieds joints, bras le long du corps.",
 ge:"Écarte les jambes en levant les bras au-dessus de la tête, reviens, et enchaîne. Amortis la réception.",
 er:"Réceptionne sur la plante des pieds, en silence.",
 so:"Respire sur un rythme régulier.",
 ci:["genoux","coeur","grossesse"],al:"marche-place"},

/* ---- ÉTIREMENTS ---- */
{id:"etirement-mollets",nom:"Étirement des mollets au mur",gr:"et",niv:1,ms:"sec",v:30,se:2,rp:15,
 pos:"Debout face au mur, mains posées dessus, une jambe tendue en arrière.",
 ge:"Pousse le talon arrière vers le sol, jambe arrière tendue, jusqu’à sentir l’étirement du mollet. Change de côté.",
 er:"Le talon de la jambe arrière reste au sol.",
 so:"Respire lentement.",
 ci:[],al:null},
{id:"etirement-epaules",nom:"Étirement des épaules",gr:"et",niv:1,ms:"sec",v:20,se:2,rp:10,
 pos:"Debout, un bras croisé devant la poitrine.",
 ge:"Ramène le bras vers toi avec l’autre bras, tiens, puis change de côté.",
 er:"Ne monte pas l’épaule vers l’oreille.",
 so:"Respire et relâche à chaque expiration.",
 ci:["epaules"],al:null},
{id:"etirement-cou",nom:"Étirement du cou",gr:"et",niv:1,ms:"sec",v:20,se:2,rp:10,
 pos:"Assis ou debout, dos droit, épaules basses.",
 ge:"Penche doucement la tête d’un côté, en laissant le poids faire le travail. Puis de l’autre côté.",
 er:"Ne tire jamais sur la tête avec la main.",
 so:"Respire lentement.",
 ci:[],al:null},
{id:"respiration",nom:"Respiration profonde pour finir",gr:"et",niv:1,ms:"sec",v:60,se:1,rp:0,
 pos:"Debout ou assis, dos droit, mains sur le ventre.",
 ge:"Inspire par le nez en comptant 4, garde 2, souffle par la bouche en comptant 6. Continue tranquillement.",
 er:"Ne force pas : c’est un retour au calme, pas un exercice.",
 so:"C’est tout l’exercice.",
 ci:[],al:null}
];

/* =======================================================================
   3. LES PROGRAMMES
   ======================================================================= */
var PROGRAMMES = [
 {id:"p1",nom:"Réveil du corps",niv:1,dur:20,rythme:"3 séances par semaine",quand:"Le matin ou en fin d’après-midi",
  desc:"Pour commencer sans jamais se dégoûter. Des mouvements simples, sans matériel, qui réveillent tout le corps. C’est ce programme que tu gardes les mauvais jours.",
  seances:[
   {id:"p1a",nom:"Le corps entier",obj:"Passer en revue toutes les zones, en douceur",
    ex:["marche-place","squat-chaise","pompes-mur","pont-fessier","planche-genoux","chat-vache","etirement-ischio","respiration"]},
   {id:"p1b",nom:"Jambes et ventre",obj:"Renforcer le bas du corps et la sangle abdominale",
    ex:["marche-place","squat-pdc","montee-chaise","pont-fessier","dead-bug","planche-genoux","etirement-mollets","respiration"]},
   {id:"p1c",nom:"Haut du corps et dos",obj:"Épaules, poitrine, dos — la posture au quotidien",
    ex:["marche-place","pompes-inclinees","dips-chaise","tirage-serviette","extension-dos","etirement-epaules","etirement-cou","respiration"]},
   {id:"p1a2",nom:"Le corps entier (2)",obj:"Deuxième passage : on cherche la régularité, pas la performance",
    ex:["marche-place","squat-pdc","pompes-mur","pont-fessier","planche-genoux","chat-vache","etirement-ischio","respiration"]},
   {id:"p1b2",nom:"Jambes et ventre (2)",obj:"Même séance, un peu plus tenue",
    ex:["marche-place","squat-pdc","montee-chaise","pont-fessier","dead-bug","planche-genoux","etirement-mollets","respiration"]},
   {id:"p1c2",nom:"Haut du corps et dos (2)",obj:"Dernière séance du cycle",
    ex:["marche-place","pompes-inclinees","dips-chaise","tirage-serviette","extension-dos","etirement-epaules","etirement-cou","respiration"]}
  ]},
 {id:"p2",nom:"Force tranquille",niv:2,dur:30,rythme:"4 séances par semaine",quand:"Le soir, après le travail",
  desc:"Le programme du milieu : plus de séries, des mouvements plus complets, un vrai travail du dos. C’est celui qui change le corps sans casser la tête.",
  seances:[
   {id:"p2a",nom:"Bas du corps",obj:"Jambes et fessiers",
    ex:["talons-fesses","squat-pdc","fente-avant","montee-chaise","pont-fessier","chaise-mur","gainage-lateral","etirement-ischio","respiration"]},
   {id:"p2b",nom:"Haut du corps",obj:"Épaules, poitrine, dos",
    ex:["jumping-jacks","pompes-classiques","pompes-inclinees","dips-chaise","tirage-serviette","planche","etirement-epaules","respiration"]},
   {id:"p2c",nom:"Le centre du corps",obj:"Sangle abdominale et gainage complet",
    ex:["montees-genoux","planche","gainage-lateral","dead-bug","reverse-crunch","superman","rotation-thoracique","respiration"]},
   {id:"p2d",nom:"Corps entier",obj:"Les trois ensemble",
    ex:["marche-place","squat-pdc","pompes-classiques","fente-avant","pont-fessier","planche","superman","etirement-mollets","respiration"]}
  ]},
 {id:"p3",nom:"Endurance",niv:3,dur:35,rythme:"4 séances par semaine",quand:"Quand tu te sens déjà solide",
  desc:"Le programme long : du souffle, des séries enchaînées, des tenues plus longues. À ne commencer qu’après plusieurs semaines de Force tranquille.",
  seances:[
   {id:"p3a",nom:"Souffle",obj:"Cardio continu",
    ex:["marche-place","montees-genoux","jumping-jacks","pas-chasses","talons-fesses","squat-saute","etirement-mollets","respiration"]},
   {id:"p3b",nom:"Force longue",obj:"Séries longues sur tout le corps",
    ex:["talons-fesses","squat-pdc","fente-avant","pompes-classiques","dips-chaise","chaise-mur","planche","etirement-ischio","respiration"]},
   {id:"p3c",nom:"Complet",obj:"Le plus exigeant du cycle",
    ex:["jumping-jacks","squat-saute","pompes-classiques","gainage-lateral","reverse-crunch","superman","planche","respiration"]}
  ]}
];

/* =======================================================================
   4. PETIT OUTIL : retrouver un exercice, une séance, un programme
   ======================================================================= */
function exById(id){ for(var i=0;i<EX.length;i++){ if(EX[i].id===id){ return EX[i]; } } return null; }
function grInfo(k){ for(var i=0;i<GR.length;i++){ if(GR[i][0]===k){ return GR[i]; } } return ["","—","#888"]; }
function progById(id){ for(var i=0;i<PROGRAMMES.length;i++){ if(PROGRAMMES[i].id===id){ return PROGRAMMES[i]; } } return null; }
function seanceById(pid,sid){
  var p=progById(pid); if(!p){ return null; }
  for(var i=0;i<p.seances.length;i++){ if(p.seances[i].id===sid){ return p.seances[i]; } }
  return null;
}
function enMin(sec){ var m=Math.round(sec/60); return m+" min"; }
function mmss(s){ var m=Math.floor(s/60), r=s%60; return m+":"+(r<10?"0":"")+r; }

/* durée estimée d’une séance, en secondes */
function dureeSeance(se){
  var t=0;
  for(var i=0;i<se.ex.length;i++){
    var e=exById(se.ex[i]); if(!e){ continue; }
    if(e.ms==="sec"){ t=t+e.v*e.se+e.rp*(e.se-1); }
    else { t=t+e.v*3*e.se+e.rp*(e.se-1); }   /* 3 s par répétition, moyenne */
  }
  return t;
}
function nbExercices(se){ return se.ex.length; }
function dureeTotale(p){ var t=0; for(var i=0;i<p.seances.length;i++){ t=t+dureeSeance(p.seances[i]); } return t; }

/* =======================================================================
   5. L’ÉTAT DE L’APPLICATION (tout reste sur le téléphone)
   ======================================================================= */
var CLE = "jasad.v1";
var etat = { prenom:"", contraintes:[], programme:null, faites:[], biblioGr:"all", habitudes:{} };

function charger(){
  try{
    var s = localStorage.getItem(CLE);
    if(s){ var o = JSON.parse(s); if(o && typeof o==="object"){
      if(o.prenom){ etat.prenom=o.prenom; }
      if(o.contraintes && o.contraintes.length!==undefined){ etat.contraintes=o.contraintes; }
      if(o.programme){ etat.programme=o.programme; }
      if(o.faites && o.faites.length!==undefined){ etat.faites=o.faites; }
      if(o.habitudes && typeof o.habitudes==="object"){ etat.habitudes=o.habitudes; }
    } }
  }catch(e){}
}
function sauver(){
  try{ localStorage.setItem(CLE, JSON.stringify(etat)); }catch(e){}
}

function jourISO(d){
  var y=d.getFullYear(), m=d.getMonth()+1, j=d.getDate();
  return y+"-"+(m<10?"0":"")+m+"-"+(j<10?"0":"")+j;
}
function aujourdhui(){ return jourISO(new Date()); }

/* la série : nombre de jours consécutifs avec au moins une séance */
function serieJours(){
  var jours={}, i;
  for(i=0;i<etat.faites.length;i++){ jours[etat.faites[i].date]=1; }
  var n=0, d=new Date();
  if(!jours[jourISO(d)]){
    d.setDate(d.getDate()-1);              /* la journée n’est pas finie : on tolère */
  }
  while(jours[jourISO(d)]){ n=n+1; d.setDate(d.getDate()-1); }
  return n;
}
function minutesTotales(){
  var t=0; for(var i=0;i<etat.faites.length;i++){ t=t+(etat.faites[i].duree||0); }
  return Math.round(t/60);
}
function faiteAujourdhui(){
  var a=aujourdhui();
  for(var i=0;i<etat.faites.length;i++){ if(etat.faites[i].date===a){ return etat.faites[i]; } }
  return null;
}
/* prochaine séance conseillée */
function prochaineSeance(){
  var p = etat.programme ? progById(etat.programme) : null;
  if(!p){ return null; }
  var faitesP=0, i;
  for(i=0;i<etat.faites.length;i++){ if(etat.faites[i].prog===p.id){ faitesP=faitesP+1; } }
  var se=p.seances[faitesP % p.seances.length];
  return { prog:p, seance:se, numero:(faitesP % p.seances.length)+1 };
}

/* =======================================================================
   6. LE FILTRE DES CONTRE-INDICATIONS
   C’est le cœur de l’application : on écarte automatiquement ce qui
   abîmerait, et on te dit POURQUOI on l’a écarté.
   ======================================================================= */
function adapte(se){
  var gardees=[], changees=[], ecartees=[], i, j, k;
  for(i=0;i<se.ex.length;i++){
    var e=exById(se.ex[i]);
    if(!e){ continue; }
    var touche=false;
    for(j=0;j<etat.contraintes.length;j++){
      for(k=0;k<e.ci.length;k++){
        if(e.ci[k]===etat.contraintes[j]){ touche=true; }
      }
    }
    if(!touche){ gardees.push(e); continue; }
    /* on essaie la version plus facile */
    var a = e.al ? exById(e.al) : null;
    var aTouche=false;
    if(a){
      for(j=0;j<etat.contraintes.length;j++){
        for(k=0;k<a.ci.length;k++){ if(a.ci[k]===etat.contraintes[j]){ aTouche=true; } }
      }
    }
    if(a && !aTouche){ gardees.push(a); changees.push([e.nom,a.nom]); }
    else { ecartees.push(e); }
  }
  return { liste:gardees, changees:changees, ecartees:ecartees };
}
function nomContrainte(k){
  for(var i=0;i<CI.length;i++){ if(CI[i][0]===k){ return CI[i][1]; } }
  return k;
}

/* =======================================================================
   7. LES ÉCRANS
   ======================================================================= */
var onglet = "acc";

function goTab(t){
  onglet = t;
  var ids=["acc","pro","sea","sav","moi"], i, j;
  var cible = (t==="bib") ? "pro" : t;          /* la bibliothèque vit sous « Bouger » */
  for(i=0;i<ids.length;i++){
    var b=document.getElementById("t-"+ids[i]);
    if(b){ if(ids[i]===cible){ b.className="on"; } else { b.className=""; } }
  }
  dessiner();
  window.scrollTo(0,0);
}

function dessiner(){
  var app=document.getElementById("app");
  try{
    if(onglet==="acc"){ app.innerHTML=ecranAccueil(); }
    else if(onglet==="pro"){ app.innerHTML=ecranProgrammes(); }
    else if(onglet==="sea"){ app.innerHTML=ecranSeances(); }
    else if(onglet==="bib"){ app.innerHTML=ecranBiblio(); }
    else if(onglet==="sav"){ app.innerHTML=ecranSavoir(); }
    else if(onglet==="axe"){ app.innerHTML=ecranAxe(); }
    else if(onglet==="man"){ app.innerHTML=ecranManger(); }
    else if(onglet==="men"){ app.innerHTML=ecranMensonges(); }
    else if(onglet==="src"){ app.innerHTML=ecranSources(); }
    else if(onglet==="resp"){ app.innerHTML=ecranRespiration(); }
    else { app.innerHTML=ecranMoi(); }
  }catch(e){
    app.innerHTML="<div class=\"card\"><p><b>Un souci est survenu :</b> "+e.message+"</p></div>";
  }
  var s=document.getElementById("topSerie");
  if(s){ s.innerHTML = serieJours()+" jour"+(serieJours()>1?"s":""); }
  var ss=document.getElementById("topSous");
  if(ss){
    if(etat.prenom){ ss.innerHTML = "bonjour "+etat.prenom; }
    else { ss.innerHTML = "le corps · جسد"; }
  }
}

/* ---------- ACCUEIL ---------- */
function ecranAccueil(){
  var h="";
  if(!etat.programme){
    h += "<div class=\"hero\"><div class=\"ar\">جسد</div><h1>Ton corps a un droit sur toi</h1>"
       + "<p>Bouger chez soi, sans matériel, sans payer. Trois programmes, "
       + EX.length+" exercices, et rien à installer d’autre.</p></div>";
    h += "<div class=\"card\">"
       + "<h2 class=\"sect\" style=\"margin-top:0\">Ce que cette application ne fera jamais</h2>"
       + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucune publicité</b>"
       + "<span>Pas une seule, jamais</span></div></div>"
       + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucun compte, aucune inscription</b>"
       + "<span>Tu ouvres, tu bouges, tu fermes</span></div></div>"
       + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucune géolocalisation</b>"
       + "<span>On n’a pas besoin de savoir où tu es</span></div></div>"
       + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucune donnée qui sort de ton téléphone</b>"
       + "<span>Ta progression reste chez toi</span></div></div>"
       + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Rien derrière un mur payant</b>"
       + "<span>Tout est ouvert dès la première seconde</span></div></div>"
       + "</div>";
    h += "<button class=\"btn\" onclick=\"goTab(&#39;pro&#39;)\">Choisir mon programme</button>";
    h += "<div class=\"note or\">Prends trente secondes pour dire qui tu es et ce que tu dois "
       + "ménager : l’application écartera d’elle-même les mouvements qui ne te conviennent pas. "
       + "<a href=\"#\" onclick=\"goTab(&#39;moi&#39;);return false;\">Ouvrir mes réglages</a></div>";
    h += hubSavoir();
    return h;
  }
  var pr=prochaineSeance();
  var p=pr.prog, se=pr.seance;
  var a=adapte(se);
  h += "<div class=\"hero\"><h1>"+(etat.prenom?("Bonjour "+etat.prenom):"Bonjour")+"</h1>"
     + "<p>Programme <b>"+p.nom+"</b> — séance "+pr.numero+" sur "+p.seances.length+"</p></div>";
  h += "<div class=\"card\">"
     + "<div class=\"pill\" style=\"margin:0\">SÉANCE DU JOUR</div>"
     + "<h2 class=\"sect\" style=\"margin:12px 0 4px\">"+se.nom+"</h2>"
     + "<p class=\"sous\">"+se.obj+"</p>"
     + "<div style=\"margin-top:10px\">"
     + "<span class=\"pill\">"+(a.liste.length)+" exercices</span>"
     + "<span class=\"pill\">≈ "+enMin(dureeSeance(se))+"</span>"
     + "<span class=\"pill\">sans matériel</span></div>";
  if(a.changees.length||a.ecartees.length){
    h += "<div class=\"note\">Adaptée à ce que tu dois ménager : <b>"+a.changees.length+"</b> mouvement"
       + (a.changees.length>1?"s":"")+" remplacé"+(a.changees.length>1?"s":"")
       + (a.ecartees.length?(" et <b>"+a.ecartees.length+"</b> écarté"+(a.ecartees.length>1?"s":"")
       + " automatiquement"):"")+".</div>";
  }
  h += "<div style=\"margin-top:14px\"><button class=\"btn g\" onclick=\"lancerSeance(&#39;"
     + p.id+"&#39;,&#39;"+se.id+"&#39;)\">La faire maintenant</button></div>";
  h += "<div style=\"margin-top:10px\"><button class=\"btn ghost\" onclick=\"goTab(&#39;pro&#39;)\">"
     + "Voir tout le programme</button></div>";
  h += "</div>";
  h += hubSavoir();
  var f=faiteAujourdhui();
  h += "<div class=\"statgrid\">"
     + "<div class=\"stat\"><b>"+etat.faites.length+"</b><span>séances faites</span></div>"
     + "<div class=\"stat\"><b>"+serieJours()+"</b><span>jours d’affilée</span></div>"
     + "<div class=\"stat\"><b>"+minutesTotales()+"</b><span>minutes en tout</span></div>"
     + "</div>";
  if(f){
    h += "<div class=\"note\">Séance déjà faite aujourd’hui. Tu peux en refaire une "
       + "ou laisser le corps se reposer — c’est le repos qui construit le muscle.</div>";
  }
  return h;
}

/* ---------- PROGRAMMES ---------- */
function ecranProgrammes(){
  var h="<h2 class=\"sect\" style=\"margin-top:18px\">Les programmes</h2>"
      + "<p class=\"sous\">Du plus doux au plus exigeant. Tu peux changer quand tu veux — "
      + "rien n’est verrouillé.</p>";
  for(var i=0;i<PROGRAMMES.length;i++){
    var p=PROGRAMMES[i];
    h += "<div class=\"prog\" onclick=\"choisirProgramme(&#39;"+p.id+"&#39;)\">"
       + "<div class=\"badge n"+p.niv+"\">"+(p.niv)+"</div>"
       + "<div style=\"flex:1;min-width:0\">"
       + "<h3>"+p.nom+"</h3>"
       + "<p>"+p.desc+"</p>"
       + "<div><span class=\"pill\">≈ "+p.dur+" min</span>"
       + "<span class=\"pill\">"+p.rythme+"</span>"
       + "<span class=\"pill\">"+p.seances.length+" séances</span></div>"
       + "</div><div class=\"chev\">›</div></div>";
    if(etat.programme===p.id){
      h += "<div class=\"note or\" style=\"margin-top:-4px\">C’est le programme que tu suis en ce moment.</div>";
    }
  }
  h += "<div class=\"note\">Un programme n’est pas un contrat. Si une séance ne passe pas, "
     + "descends d’un niveau : c’est ce qui permet de continuer pendant des années.</div>";
  h += "<div class=\"card\"><h3 style=\"margin-top:0\">📚 Les "+EX.length+" exercices</h3>"
     + "<p class=\"sous\">Tous les mouvements, un par un, avec la position, le geste et ce "
     + "qu’il faut ménager. Tu n’es pas obligé de suivre un programme pour les regarder.</p>"
     + "<div style=\"margin-top:14px\"><button class=\"btn ghost\" onclick=\"goTab(&#39;bib&#39;)\">"
     + "Ouvrir la bibliothèque</button></div></div>";
  return h;
}
function choisirProgramme(id){
  etat.programme=id; sauver(); goTab("pro");
}

/* ---------- SÉANCES ---------- */
function ecranSeances(){
  var p = etat.programme ? progById(etat.programme) : null;
  if(!p){
    return "<h2 class=\"sect\" style=\"margin-top:18px\">Choisis d’abord un programme</h2>"
      + "<p class=\"sous\">Ensuite tu retrouveras ici toutes ses séances, dans l’ordre.</p>"
      + "<button class=\"btn\" onclick=\"goTab(&#39;pro&#39;)\">Voir les programmes</button>";
  }
  var pr=prochaineSeance();
  var h="<h2 class=\"sect\" style=\"margin-top:18px\">"+p.nom+" — les séances</h2>"
      + "<p class=\"sous\">"+p.rythme+" · conseillé "+p.quand+" · ≈ "+p.dur+" min</p>";
  for(var i=0;i<p.seances.length;i++){
    var se=p.seances[i];
    var a=adapte(se);
    var num=i+1;
    var est = (pr && pr.seance.id===se.id);
    h += "<div class=\"item\" onclick=\"lancerSeance(&#39;"+p.id+"&#39;,&#39;"+se.id+"&#39;)\">"
       + "<div class=\"num\">"+num+"</div>"
       + "<div class=\"tx\"><b>"+se.nom+"</b>"
       + "<span>≈ "+enMin(dureeSeance(se))+" · "+a.liste.length+" exercices · "
       + (a.changees.length+a.ecartees.length ? (a.changees.length+a.ecartees.length)+" adapté(s)" : "sans adaptation")
       + "</span></div><div class=\"chev\">›</div></div>";
    if(est){ h += "<div class=\"note\" style=\"margin-top:-2px\">C’est la prochaine à faire.</div>"; }
  }
  h += "<hr class=\"hr\"><h2 class=\"sect\">La séance en détail</h2>";
  for(i=0;i<p.seances.length;i++){
    var s2=p.seances[i], a2=adapte(s2);
    h += "<div class=\"card tight\"><b style=\"font-size:15.5px\">"+(i+1)+". "+s2.nom+"</b>"
       + "<p class=\"sous\" style=\"margin-bottom:8px\">"+s2.obj+"</p>";
    for(var j=0;j<a2.liste.length;j++){
      var e=a2.liste[j];
      var g=grInfo(e.gr);
      var q = (e.ms==="sec") ? (e.v+" s × "+e.se) : (e.v+" rép × "+e.se);
      h += "<div class=\"bib\"><div class=\"g\" style=\"background:"+g[2]+"\"></div>"
         + "<div style=\"flex:1;min-width:0\"><b>"+e.nom+"</b>"
         + "<span>"+g[1]+" · "+q+" · repos "+e.rp+" s</span></div></div>";
    }
    if(a2.ecartees.length){
      h += "<div class=\"note rouge\">Écarté pour toi : ";
      for(j=0;j<a2.ecartees.length;j++){ h += (j?" · ":"")+a2.ecartees[j].nom; }
      h += "</div>";
    }
    if(a2.changees.length){
      h += "<div class=\"note\">Remplacé pour toi : ";
      for(j=0;j<a2.changees.length;j++){ h += (j?" · ":"")+a2.changees[j][0]+" → "+a2.changees[j][1]; }
      h += "</div>";
    }
    h += "</div>";
  }
  return h;
}

/* ---------- BIBLIOTHÈQUE ---------- */
function ecranBiblio(){
  var h="<h2 class=\"sect\" style=\"margin-top:18px\">Les "+EX.length+" exercices</h2>"
      + "<p class=\"sous\">Tous faisables chez toi, sans matériel. Ceux qui ne te conviennent pas "
      + "sont marqués automatiquement.</p>";
  h += "<div class=\"chips\"><button class=\"chip"+(etat.biblioGr==="all"?" on":"")+"\" "
     + "onclick=\"filtreBiblio(&#39;all&#39;)\">Tout</button>";
  for(var i=0;i<GR.length;i++){
    h += "<button class=\"chip"+(etat.biblioGr===GR[i][0]?" on":"")+"\" "
       + "onclick=\"filtreBiblio(&#39;"+GR[i][0]+"&#39;)\">"+GR[i][1]+"</button>";
  }
  h += "</div>";
  var n=0;
  for(i=0;i<EX.length;i++){
    var e=EX[i];
    if(etat.biblioGr!=="all" && e.gr!==etat.biblioGr){ continue; }
    n=n+1;
    var g=grInfo(e.gr);
    var touche=false;
    for(var j=0;j<etat.contraintes.length;j++){
      for(var k=0;k<e.ci.length;k++){ if(e.ci[k]===etat.contraintes[j]){ touche=true; } }
    }
    h += "<div class=\"card tight\">"
       + "<div style=\"display:flex;gap:11px;align-items:center\">"
       + "<div class=\"g\" style=\"width:5px;border-radius:99px;align-self:stretch;background:"+g[2]+"\"></div>"
       + "<div style=\"flex:1;min-width:0\"><b style=\"font-size:15.5px\">"+e.nom+"</b>"
       + "<div class=\"sous\" style=\"font-size:12.5px\">"+g[1]+" · "
       + ((e.ms==="sec")?(e.v+" s"):(e.v+" répétitions"))+" × "+e.se
       + " · repos "+e.rp+" s</div></div>"
       + (touche?"<div class=\"pill\" style=\"margin:0;color:#F0A48F;border-color:rgba(224,106,90,.4)\">à ménager</div>":"")
       + "</div>"
       + "<p class=\"sous\" style=\"margin-top:10px\"><b>Position :</b> "+e.pos+"</p>"
       + "<p class=\"sous\"><b>Geste :</b> "+e.ge+"</p>"
       + "<p class=\"sous\"><b>À éviter :</b> "+e.er+"</p>"
       + "<p class=\"sous\"><b>Respiration :</b> "+e.so+"</p>";
    if(touche){
      h += "<div class=\"note rouge\">À ménager : ";
      var prems=true;
      for(j=0;j<e.ci.length;j++){
        var ok=false;
        for(k=0;k<etat.contraintes.length;k++){ if(e.ci[k]===etat.contraintes[k]){ ok=true; } }
        for(k=0;k<etat.contraintes.length;k++){ if(e.ci[j]===etat.contraintes[k]){ ok=true; } }
        if(ok){ h += (prems?"":" · ")+nomContrainte(e.ci[j]); prems=false; }
      }
      if(e.al && exById(e.al)){
        h += "<br>Version plus facile : <b>"+exById(e.al).nom+"</b>";
      }
      h += "</div>";
    }
    h += "</div>";
  }
  if(n===0){ h += "<div class=\"card\"><p>Aucun exercice dans cette catégorie.</p></div>"; }
  return h;
}
function filtreBiblio(k){ etat.biblioGr=k; dessiner(); }

/* ---------- MOI ---------- */
function ecranMoi(){
  var h="<h2 class=\"sect\" style=\"margin-top:18px\">Mes réglages</h2>";
  h += "<div class=\"card\"><label class=\"lab\">Ton prénom (facultatif)</label>"
     + "<input type=\"text\" id=\"prenom\" placeholder=\"Écris ton prénom…\" value=\""
     + (etat.prenom?etat.prenom:"") + "\"></div>";
  h += "<h2 class=\"sect\">Ce que je dois ménager</h2>"
     + "<p class=\"sous\">Coche ce qui te concerne. L’application écartera d’elle-même les "
     + "mouvements concernés et te le dira. Rien n’est envoyé nulle part.</p>";
  for(var i=0;i<CI.length;i++){
    var on=false;
    for(var j=0;j<etat.contraintes.length;j++){ if(etat.contraintes[j]===CI[i][0]){ on=true; } }
    h += "<div class=\"chk"+(on?" on":"")+"\" onclick=\"basculeContrainte(&#39;"+CI[i][0]+"&#39;)\">"
       + "<div class=\"bx\">"+(on?"✓":"")+"</div>"
       + "<div class=\"lb\"><b>"+CI[i][1]+"</b><span>"+CI[i][2]+"</span></div></div>";
  }
  h += "<div class=\"card\"><h2 class=\"sect\" style=\"margin-top:0\">Ma progression</h2>"
     + "<div class=\"statgrid\">"
     + "<div class=\"stat\"><b>"+etat.faites.length+"</b><span>séances</span></div>"
     + "<div class=\"stat\"><b>"+serieJours()+"</b><span>jours d’affilée</span></div>"
     + "<div class=\"stat\"><b>"+minutesTotales()+"</b><span>minutes</span></div></div>"
     + calendrier(35) + "</div>";
  h += "<div class=\"card\"><h2 class=\"sect\" style=\"margin-top:0\">Mes habitudes du jour</h2>"
     + "<p class=\"sous\">Cinq gestes, pas plus. Ce ne sont pas des exploits : ce sont les "
     + "leviers qui se voient dans tes hormones.</p>"
     + habitudesBloc(true) + "</div>";
  h += "<div class=\"card\"><h2 class=\"sect\" style=\"margin-top:0\">Nos engagements</h2>"
     + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucune publicité, aucun achat</b>"
     + "<span>Il n’y a rien à acheter ici</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucun compte</b>"
     + "<span>Pas d’email, pas de mot de passe</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Aucun suivi</b>"
     + "<span>Ni géolocalisation, ni mouchard, ni identifiant publicitaire</span></div></div>"
     + "<div class=\"prom\"><div class=\"k\">✓</div><div class=\"v\"><b>Gratuit pour de bon</b>"
     + "<span>Y compris la version installée sur ton téléphone</span></div></div>"
     + "</div>";
  h += "<div class=\"card\"><h2 class=\"sect\" style=\"margin-top:0\">Installer sur ton téléphone</h2>"
     + "<p class=\"sous\">Ouvre le menu du navigateur, puis « Ajouter à l’écran d’accueil ». "
     + "L’application s’ouvrira comme une vraie application, et fonctionnera même sans connexion.</p>"
     + "</div>";
  h += "<div class=\"card\"><h2 class=\"sect\" style=\"margin-top:0\">Sources &amp; crédits</h2>"
     + "<p class=\"sous\">Les explications de cette application viennent du travail d’Irvine K "
     + "(chaîne « Plus jamais gros »). Chaque mécanisme porte le nom de sa vidéo et son minutage, "
     + "pour que tu puisses vérifier toi-même.</p>"
     + "<div style=\"margin-top:14px\"><button class=\"btn ghost\" onclick=\"ouvrirEcran(&#39;src&#39;)\">"
     + "Voir les sources</button></div></div>";
  h += "<button class=\"btn ghost\" onclick=\"effacerTout()\">Effacer ma progression</button>";
  h += "<footer class=\"foot\">JASAD · جسد — le corps.<br>"
     + "Une application gratuite, sans publicité, sans compte, sans géolocalisation.<br>"
     + "Tout ce que tu fais ici reste sur ton téléphone.</footer>";
  /* écouteurs posés APRÈS le rendu */
  setTimeout(poserEcouteurs, 0);
  return h;
}
function poserEcouteurs(){
  var inp=document.getElementById("prenom");
  if(inp){
    inp.addEventListener("input", function(){
      etat.prenom = this.value; sauver();
      var ss=document.getElementById("topSous");
      if(ss){ ss.innerHTML = etat.prenom ? ("bonjour "+etat.prenom) : "le corps · جسد"; }
    });
  }
}
function basculeContrainte(k){
  var out=[], i, dedans=false;
  for(i=0;i<etat.contraintes.length;i++){
    if(etat.contraintes[i]===k){ dedans=true; } else { out.push(etat.contraintes[i]); }
  }
  if(!dedans){ out.push(k); }
  etat.contraintes=out; sauver(); dessiner();
}
function effacerTout(){
  if(confirm("Effacer toutes tes séances et tes réglages ? Cette action ne peut pas être annulée.")){
    etat.faites=[]; sauver(); dessiner();
  }
}
function calendrier(nbJours){
  var h="<div class=\"cal\">", i, d;
  var fait={};
  for(i=0;i<etat.faites.length;i++){ fait[etat.faites[i].date]=1; }
  for(i=nbJours-1;i>=0;i--){
    d=new Date(); d.setDate(d.getDate()-i);
    var iso=jourISO(d);
    var cls = fait[iso] ? "j fait" : (i===0 ? "j aufait" : "j");
    h += "<div class=\""+cls+"\">"+d.getDate()+"</div>";
  }
  h += "</div>";
  return h;
}

/* =======================================================================
   8. LE LECTEUR DE SÉANCE
   ======================================================================= */
var pl = { pas:[], i:0, reste:0, parti:false, total:0, ecoule:0, prog:null, seance:null, minuterie:null, adapt:null };

function lancerSeance(pid,sid){
  var p=progById(pid), se=seanceById(pid,sid);
  if(!p||!se){ return; }
  var a=adapte(se);
  if(!a.liste.length){
    alert("Aucun exercice ne reste pour cette séance avec ce que tu dois ménager. "
        + "Décoche une contrainte dans l’onglet Moi.");
    return;
  }
  var pas=[], i, j;
  for(i=0;i<a.liste.length;i++){
    var e=a.liste[i];
    for(j=0;j<e.se;j++){
      pas.push({type:"ex", e:e, serie:(j+1), duree:(e.ms==="sec"?e.v:0)});
      if(j<e.se-1 && e.rp>0){ pas.push({type:"repos", duree:e.rp, suivante:e.nom, e:e}); }
    }
    if(i<a.liste.length-1 && e.rp>0){ pas.push({type:"repos", duree:e.rp, suivante:a.liste[i+1].nom, e:a.liste[i+1]}); }
  }
  pl.pas=pas; pl.i=0; pl.parti=false; pl.ecoule=0; pl.prog=p; pl.seance=se; pl.adapt=a;
  var t=0; for(i=0;i<pas.length;i++){ t=t+pas[i].duree; }
  pl.total=t;
  var el=document.getElementById("player");
  el.className="";
  poserPas();
}

function poserPas(){
  if(pl.minuterie){ clearInterval(pl.minuterie); pl.minuterie=null; }
  var p=pl.pas[pl.i];
  if(!p){ return; }
  pl.reste=p.duree;
  pl.parti=false;
  dessinerLecteur();
}

function dessinerLecteur(){
  var el=document.getElementById("player");
  var p=pl.pas[pl.i];
  if(!p){ return; }
  var pct = pl.total>0 ? Math.round(((pl.i)/pl.pas.length)*100) : 0;
  var h="<div class=\"pl-top\">"
      + "<button class=\"quit\" onclick=\"quitterSeance()\">✕</button>"
      + "<div class=\"pl-prog\"><i style=\"width:"+pct+"%\"></i></div>"
      + "<div style=\"font-size:13px;color:#93A4BF;min-width:52px;text-align:right\">"
      + (pl.i+1)+"/"+pl.pas.length+"</div></div>";
  h += "<div class=\"pl-mid\">";
  if(p.type==="repos"){
    h += "<div class=\"ring\">"+anneau(pl.reste>0?pl.reste:0, p.duree, "#E3B25C")+""
       + "<div class=\"inside\"><div class=\"big\">"+(pl.reste>0?pl.reste:"—")+"</div>"
       + "<div class=\"lab\">repos</div></div></div>"
       + "<div class=\"pl-nom\">Repos</div>"
       + "<div class=\"pl-geste\">Ensuite : <b>"+p.suivante+"</b><br>Respire par le nez, "
       + "bois une gorgée si tu veux.</div>";
  } else {
    var e=p.e;
    var aff, lab, frac;
    if(e.ms==="sec"){
      aff=(pl.reste>0?pl.reste:0); lab="secondes";
      frac = pl.reste/(e.v||1);
    } else {
      aff=e.v; lab="répétitions";
      frac = (p.serie-1)/(e.se||1);           /* la série en cours sur le total */
    }
    h += "<div class=\"ring\">"+anneau(frac, 1, e.ms==="sec"?"#17B8A6":"#E3B25C")+""
       + "<div class=\"inside\"><div class=\"big\">"+aff+"</div><div class=\"lab\">"+lab+"</div></div></div>"
       + "<div class=\"pl-nom\">"+e.nom+"</div>"
       + "<div class=\"pl-geste\">"+e.ge+"</div>"
       + "<div class=\"pl-rep\">série "+p.serie+" sur "+e.se+"</div>"
       + "<div class=\"pl-info\">Respiration : "+e.so+"</div>";
  }
  h += "<div class=\"nextup\">"+(pl.dureeRestante ? ("Il reste ≈ "+mmss(pl.dureeRestante)+" dans la séance") : "")+"</div>";
  h += "</div>";
  h += "<div class=\"pl-bot\">";
  var enSecondes = (p.type==="ex" && p.e.ms==="sec");
  if(p.type==="repos" || enSecondes){
    if(!pl.parti){
      h += "<button class=\"btn "+(p.type==="repos"?"":"g")+"\" onclick=\"demarrer()\">"
         + (p.type==="repos"?"Démarrer le repos":"C’est parti")+"</button>";
    } else {
      h += "<button class=\"btn ghost\" onclick=\"pause()\">Mettre en pause</button>";
    }
  } else {
    h += "<button class=\"btn done\" onclick=\"valider()\">Série faite</button>";
  }
  h += "<div class=\"ctrl\">"
     + "<button onclick=\"precedent()\">◀ Avant</button>"
     + "<button onclick=\"quitterSeance()\">Arrêter</button>"
     + "<button class=\"main\" onclick=\"suivant()\">Après ▶</button>"
     + "</div>";
  if(pl.adapt && (pl.adapt.ecartees.length||pl.adapt.changees.length) && pl.i===0){
    h += "<div class=\"note\" style=\"margin-bottom:0\">Adaptée à toi : "
       + pl.adapt.changees.length+" remplacé(s), "+pl.adapt.ecartees.length+" écarté(s).</div>";
  }
  h += "</div>";
  el.innerHTML=h;
  dessinerTempsRestant();
}

function anneau(frac, total, couleur){
  var r=110, c=2*Math.PI*r;
  var f = Math.max(0,Math.min(1, total>0 ? frac/total : 0));
  return "<svg viewBox=\"0 0 260 260\"><circle cx=\"130\" cy=\"130\" r=\""+r+"\" fill=\"none\" "
       + "stroke=\"rgba(255,255,255,.09)\" stroke-width=\"16\"></circle>"
       + "<circle cx=\"130\" cy=\"130\" r=\""+r+"\" fill=\"none\" stroke=\""+couleur+"\" "
       + "stroke-width=\"16\" stroke-linecap=\"round\" "
       + "stroke-dasharray=\""+c+"\" stroke-dashoffset=\""+(c*(1-f))+"\"></circle></svg>";
}
function dessinerTempsRestant(){
  var el=document.querySelector(".nextup");
  if(!el){ return; }
  var restant=0, i;
  for(i=pl.i;i<pl.pas.length;i++){ restant = restant + (i===pl.i?pl.reste:pl.pas[i].duree); }
  el.innerHTML = restant>0 ? ("Il reste ≈ "+mmss(restant)+" dans la séance") : "";
}
function demarrer(){
  if(pl.parti){ return; }
  pl.parti=true;
  if(pl.minuterie){ clearInterval(pl.minuterie); }
  pl.minuterie=setInterval(tictac, 1000);
  dessinerLecteur();
}
function pause(){
  if(pl.minuterie){ clearInterval(pl.minuterie); pl.minuterie=null; }
  pl.parti=false;
  dessinerLecteur();
}
function tictac(){
  var p=pl.pas[pl.i];
  if(!p){ return; }
  pl.reste=pl.reste-1;
  pl.ecoule=pl.ecoule+1;
  if(pl.reste<=0){
    bip();
    var suivantAuto = (p.type==="ex" && p.e.ms==="sec");
    if(suivantAuto){ suivant(); } else { pause(); }
    return;
  }
  var big=document.querySelector(".ring .inside .big");
  if(big){ big.innerHTML=pl.reste; }
  var svg=document.querySelector(".ring svg circle:nth-child(2)");
  if(svg){
    var r=110, c=2*Math.PI*r;
    var frac=Math.max(0,Math.min(1,pl.reste/(p.duree||1)));
    svg.setAttribute("stroke-dashoffset", c*(1-frac));
  }
  dessinerTempsRestant();
}
function suivant(){
  if(pl.i<pl.pas.length-1){ pl.i=pl.i+1; poserPas(); } else { terminer(); }
}
function precedent(){
  if(pl.i>0){ pl.i=pl.i-1; poserPas(); } else { poserPas(); }
}
function valider(){ suivant(); }
function bip(){
  try{
    var C=window.AudioContext||window.webkitAudioContext;
    if(!C){ return; }
    var ctx=new C(), o=ctx.createOscillator(), g=ctx.createGain();
    o.type="sine"; o.frequency.value=880;
    g.gain.value=0.07; o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime+0.18);
  }catch(e){}
  try{ if(navigator.vibrate){ navigator.vibrate(120); } }catch(e){}
}
function quitterSeance(){
  if(pl.minuterie){ clearInterval(pl.minuterie); pl.minuterie=null; }
  var el=document.getElementById("player");
  el.className="hidden"; el.innerHTML="";
  dessiner();
}
function terminer(){
  if(pl.minuterie){ clearInterval(pl.minuterie); pl.minuterie=null; }
  var total = pl.ecoule>0 ? pl.ecoule : pl.total;
  etat.faites.push({date:aujourdhui(), prog:pl.prog.id, seance:pl.seance.id,
                    duree:total, exercices:pl.adapt.liste.length});
  sauver();
  var el=document.getElementById("player");
  el.innerHTML="<div class=\"pl-mid fin\">"
    + "<div style=\"color:#93A4BF;font-size:13px;letter-spacing:1.6px\">SÉANCE TERMINÉE</div>"
    + "<div class=\"gros\" style=\"margin-top:14px\">"+mmss(total)+"</div>"
    + "<div style=\"color:#93A4BF;font-size:14px\">"+pl.adapt.liste.length
    + " exercices · "+pl.seance.nom+"</div>"
    + "<div class=\"dhikr\">"
    + "<div class=\"ar\">إنَّ لِجَسَدِكَ عَلَيْكَ حَقًّا</div>"
    + "<div class=\"fr\">« Ton corps a un droit sur toi. »</div>"
    + "<div class=\"src\">Hadith rapporté par al-Bukhârî (1968) et Muslim (1159)</div></div>"
    + "<div style=\"color:#93A4BF;font-size:13.5px\">Tu as fait ta part aujourd’hui. "
    + "Ne compare ta séance à personne : tu ne connais pas la fatigue des autres, "
    + "et personne ne connaît la tienne.</div>"
    + "<div style=\"margin-top:18px\">"
    + "<button class=\"btn g\" onclick=\"quitterSeance()\">Terminer</button></div>"
    + "</div>";
}

/* =======================================================================
   9. DÉMARRAGE
   ======================================================================= */
charger();
dessiner();
goTab("acc");

/* l’application fonctionne hors connexion */
if("serviceWorker" in navigator){
  try{
    navigator.serviceWorker.register("sw.js");
  }catch(e){}
}
